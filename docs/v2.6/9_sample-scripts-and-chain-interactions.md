---
slug: /current/sample-scripts
sidebar_position: 9
sidebar_label: Sample Scripts & Chain Interactions
---

# Sample Scripts & Chain Interactions

## Reading and writing to the blockchain
The fastest and most convenient way to do any blockchain interaction would be to first generate the [C# class from the contracts ABI](/current/abi-to-csharp-converter). 

```csharp
public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;

    Erc20Contract _erc20Contract;

    void Awake()
    {
        //Make sure to subscribe to the Web3Initialized event in awake so that you don't miss out the event invocation.
        Web3Unity.Web3Initialized += Web3Initialized;
    }

    public async void Start()
    {
        //You should call the Initialize only from a single place.
        //That way there is no potential race condition and the behaviour of the app can become unpredictable.
        if(Web3Unity.Web3 == null)
            await Web3Unity.Instance.Initialize(false);

    }

    //Always create your custom contract inside of the event handler. That way you always have the up-to-date data inside of it. 
    private async void Web3Initialized((Web3 web3, bool isLightweight) obj)
    {
        //Since Web3Initialized event can be invoked multiple times during the app lifecycle (once you open the app and don't have a wallet, then when there is a wallet etc.)
        //You need to properly dispose the previously created contract to remove any potential memory leaks. 
        if (_erc20Contract != null)
        {
            _erc20Contract.OnTransfer -= Erc20Transfer;
            await _erc20Contract.DisposeAsync();
        }

        _erc20Contract = await web3.ContractBuilder.Build<Erc20Contract>(contractAddress);
        _erc20Contract.OnTransfer += Erc20Transfer;
    }

    public async string BalanceOf(string address)
    {
        return await _erc20Contract.BalanceOf(address);
    }

    public async void Transfer(string destinationAddress, BigInteger amount)
    {
        await _erc20.Transfer(destinationAddress, amount);
    }

    public async void OnDestroy()
    {
        Web3Unity.Web3Initialized -= Web3Initialized;
        await _erc20Contract.DisposeAsync();
    }
    

}
```
If for example you try to call the Transfer method and you don't have the wallet connected to your current session, you will get an exception that the signer is not bound. And if you're in the SampleMain scene, you'd be greeted with the Wallet Connection popup. 

If, for whatever reason, you still want to use the old way of communicating with the Blockchain, we still recommend you to generate the C# class first and then you can do the following:

```csharp
public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;

    Erc20Contract _erc20Contract;

    void Awake()
    {
        //Make sure to subscribe to the Web3Initialized event in awake so that you don't miss out the event invocation.
        Web3Unity.Web3Initialized += Web3Initialized;
    }

    public async void Start()
    {
        if(Web3Unity.Web3 == null)
            await Web3Unity.Instance.Initialize(false);

    }

    //Always create your custom contract inside of the event handler. That way you always have the up-to-date data inside of it. 
    private async void Web3Initialized((Web3 web3, bool isLightweight) obj)
    {
        //Since Web3Initialized event can be invoked multiple times during the app lifecycle (once you open the app and don't have a wallet, then when there is a wallet etc.)
        //You need to properly dispose the previously created contract to remove any potential memory leaks. 
        if (_erc20Contract != null)
        {
            _erc20Contract.OnTransfer -= Erc20Transfer;
            await _erc20Contract.DisposeAsync();
        }

        _erc20Contract = await web3.ContractBuilder.Build<Erc20Contract>(contractAddress);
        _erc20Contract.OnTransfer += Erc20Transfer;
    }

    public async Task<BigInteger> BalanceOf(string account)
    {
        //Using the non-generic one since that way you can process the data a bit more granually 
        var response = await _erc20.OriginalContract.Call("balanceOf", new object[]
        {
            account
        });

        return (BigInteger)response[0];
    }

    public async void OnDestroy()
    {
        await _erc20Contract.DisposeAsync();
    }
    

}
```

But if you still prefer something similar to the old EVM.ContractCall/EVM.ContractSend, those methods are now part of the Web3Unity class. 

```csharp
public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;
    [SerializeField] private string contractAbi;
    [SerializeField] private string contractMethod;

    public async void Start()
    {
        if(Web3Unity.Web3 == null)
            await Web3Unity.Instance.Initialize(false);

        //Used for writing to the chain
        await Web3Unity.Instance.ContractSend(contractMethod, contractAbi, contractAddress);

        
        //Used for reading from the chain
        await Web3Unity.Instance.ContractRead(contractMethod, contractAbi, contractAddress);
    }

}
```

## Creating Web3 instance just from the private key
If you want to start communicating with the blockchain by providing your private key, without using any wallet provider, you can do it the following:

```csharp
var web3Builder = new Web3Builder(Web3Unity.Web3.ProjectConfig, Web3Unity.Web3.ChainConfig).Configure(s =>
            {
                s.UseUnityEnvironment();
                s.UseRpcProvider();
                TempAccountProvider tempAccountProvider = new TempAccountProvider()
                {
                    //Private key should be in the string format
                    Account = new Account("PRIV_KEY")
                };

                s.AddSingleton<IAccountProvider>(tempAccountProvider);
                s.UseInProcessSigner();
                s.UseInProcessTransactionExecutor();
            });
var web3 = await web3Builder.LaunchAsync();

var account = web3.ServiceProvider.GetService<IAccountProvider>();
//We need to set the  client of the transaction manager in order to send transactions properly.
account.Account.TransactionManager.Client = web3.ServiceProvider.GetService<IClient>();

public class TempAccountProvider : IAccountProvider
{
    IAccount Account {get; set;}
}
```

## IPFS Upload
In order to upload your files to IPFS, you will need to obtain your storage API secret and bucket id from ChainSafe's storage [here](https://app.storage.chainsafe.io/?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs).

``` csharp
public class IpfsSample : MonoBehaviour, ISample
{
    #region Fields

    [field: SerializeField] public string Title { get; private set; }

    [field: SerializeField, TextArea] public string Description { get; private set; }

    public Type[] DependentServiceTypes => Array.Empty<Type>();

    [Header("IPFS VALUES")]
    [SerializeField] private string apiSecretKey = "Fill In Your API Secret Key From Storage";
    [SerializeField] private string bucketId = "Fill In Your Bucket ID From Storage";
    [SerializeField] private string fileNameImage = "Logo.png";
    [SerializeField] private string fileNameMetaData = "MetaData.json";
    [SerializeField] private string nftName = "Name of the NFT";
    [SerializeField] private string description = "An NFT description";
    [SerializeField] private string externalUrl = "The URL that appears below your assets image";
    [SerializeField] private List<string> display_types = new List<string> { "Stamina", "Boost Number" };
    [SerializeField] private List<string> trait_types = new List<string> { "Health", "Thunder Power" };
    [SerializeField] private List<string> values = new List<string> { "5", "20" };
    [Header("Required for image only upload")]
    [SerializeField] private string imageCID = "Enter your image CID from storage or upload call";

    #endregion

    #region Methods

    /// <summary>
    /// Uploads an image selected by the user to IPFS
    /// </summary>
    public async Task<string> IPFSUploadImage()
    {
        var uploadRequest = new IPFSUploadRequestModel
        {
            ApiKey = apiSecretKey,
            BucketId = bucketId,
            FileNameImage = fileNameImage
        };
        var cid = await IPFS.UploadImage(uploadRequest);
        return $"Image uploaded to https://ipfs.chainsafe.io/ipfs/{cid}";
    }

    /// <summary>
    /// Uploads metadata to IPFS
    /// </summary>
    public async Task<string> IPFSUploadMetadata()
    {
        var uploadRequest = new IPFSUploadRequestModel
        {
            ApiKey = apiSecretKey,
            BucketId = bucketId,
            Image = imageCID,
            FileNameMetaData = fileNameMetaData,
            Name = nftName,
            Description = description,
            External_url = externalUrl,
            attributes = IPFS.CreateAttributesList(display_types, trait_types, values)
        };
        var cid = await IPFS.UploadMetaData(uploadRequest);
        return $"Metadata uploaded to https://ipfs.chainsafe.io/ipfs/{cid}";
    }

    /// <summary>
    /// Uploads an image selected by the user including metadata to IPFS
    /// </summary>
    public async Task<string> IPFSUploadImageAndMetadata()
    {
        var uploadRequest = new IPFSUploadRequestModel
        {
            ApiKey = apiSecretKey,
            BucketId = bucketId,
            FileNameImage = fileNameImage,
            FileNameMetaData = fileNameMetaData,
            Name = name,
            Description = description,
            External_url = externalUrl,
            attributes = IPFS.CreateAttributesList(display_types, trait_types, values)
        };
        var cid = await IPFS.UploadImageAndMetadata(uploadRequest);
        return $"Image & metadata uploaded to https://ipfs.chainsafe.io/ipfs/{cid}";
    }

    #endregion
}

```

## Gelato Sample Scripts

### Gelato Call With Sync Fee
Allows sponsor calling to Gelato with sync fee.

``` csharp
using UnityEngine;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato with sync fee
/// </summary>
public class GelatoCallWithSyncFee : MonoBehaviour
{
    public async Task<string> CallWithSyncFee()
    {
        const string vitalik = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
        const string target = "0xA045eb75e78f4988d42c3cd201365bDD5D76D406";
        const string feeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        const string abi = "[{\"inputs\": [" +
                           "{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}," +
                           "{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}," +
                           "{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}" +
                           "]," +
                           "\"name\":\"sendToFriend\"," +
                           "\"outputs\":[]," +
                           "\"stateMutability\":\"nonpayable\"," +
                           "\"type\":\"function\"" +
                           "}]";
        var contract = _web3.ContractBuilder.Build(abi, target);
        var data = contract.Calldata("sendToFriend", new object[]
        {
            feeToken,
            vitalik,
            new BigInteger(5 * 10E12),
        });

        var relayResponse = await _web3.Gelato().CallWithSyncFee(new CallWithSyncFeeRequest()
        {
            Data = data,
            FeeToken = feeToken,
            IsRelayContext = true,
            Target = target,
        });

        while (true)
        {
            var status = await _web3.Gelato().GetTaskStatus(relayResponse.TaskId);

            switch (status.TaskState)
            {
                case TaskState.ExecSuccess:
                case TaskState.ExecReverted:
                case TaskState.Cancelled:
                    return $"Task complete. Final status of {relayResponse.TaskId}: {status.TaskState}. " +
                           $"Transaction hash: {status.TransactionHash}";
                default:
                    await WaitForSeconds(2);
                    continue;
            }
        }
    }
}
```

### Gelato Call With Sync Fee ERC2771
Allows sponsor calling to Gelato with sync fee for ERC2771.

``` csharp
/// <summary>
/// Gelato2771 with sync fee
/// </summary>
public async Task<string> CallWithSyncFeeErc2771()
{
    const string target = "0x5dD1100f23278e0e27972eacb4F1B81D97D071B7";
    const string feeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    const string abi = "[{\"inputs\": []," +
                        "\"name\":\"increment\"," +
                        "\"outputs\":[]," +
                        "\"stateMutability\":\"nonpayable\"," +
                        "\"type\":\"function\"" +
                        "}]";
    var contract = _web3.ContractBuilder.Build(abi, target);

    var data = contract.Calldata("increment", new object[]
    {
    });

    var relayResponse = await _web3.Gelato().CallWithSyncFeeErc2771(new CallWithSyncFeeErc2771Request()
    {
        Target = target,
        Data = data,
        FeeToken = feeToken,
        IsRelayContext = true,
    });

    while (true)
    {
        var status = await _web3.Gelato().GetTaskStatus(relayResponse.TaskId);

        switch (status.TaskState)
        {
            case TaskState.ExecSuccess:
            case TaskState.ExecReverted:
            case TaskState.Cancelled:
                return
                    $"Task complete. Final status of {status.TaskId}: {status.TaskState}. " +
                    $"Transaction hash: {status.TransactionHash}";
            default:
                await WaitForSeconds(2);
                continue;
        }
    }
}
```

### Gelato Sponsor Call
Allows sponsor calling to Gelato.

``` csharp
/// <summary>
/// Gelato sponsor call
/// </summary>
public async Task<string> SponsorCall()
{
    const string counterContract = "0x763D37aB388C5cdd2Fb0849d6275802F959fbF30";

    const string abi = "[{\"inputs\": []," +
                        "\"name\":\"increment\"," +
                        "\"outputs\":[]," +
                        "\"stateMutability\":\"nonpayable\"," +
                        "\"type\":\"function\"" +
                        "}]";
    var contract = _web3.ContractBuilder.Build(abi, counterContract);

    var data = contract.Calldata("increment");

    var relayResponse = await _web3.Gelato().SponsoredCall(new SponsoredCallRequest()
    {
        Target = counterContract,
        Data = data,
    });

    while (true)
    {
        var status = await _web3.Gelato().GetTaskStatus(relayResponse.TaskId);

        switch (status.TaskState)
        {
            case TaskState.ExecSuccess:
            case TaskState.ExecReverted:
            case TaskState.Cancelled:
                return
                    $"Task complete. Final status of {relayResponse.TaskId}: {status.TaskState}. " +
                    $"Transaction hash: {status.TransactionHash}";
            default:
                await WaitForSeconds(2);
                continue;
        }
    }
}
```

### Gelato Sponsor Call ERC2771
Allows sponsor calling to Gelato for ERC2771.

``` csharp
public async Task<string> SponsorCallErc2771()
{
    const string target = "0x00172f67db60E5fA346e599cdE675f0ca213b47b";

    const string abi = "[{\"inputs\": []," +
                "\"name\":\"increment\"," +
                "\"outputs\":[]," +
                "\"stateMutability\":\"nonpayable\"," +
                "\"type\":\"function\"" +
                "}]";

    var contract = _web3.ContractBuilder.Build(abi, target);

    var data = contract.Calldata("increment");

    var relayResponse = await _web3.Gelato().SponsoredCallErc2771(new SponsoredCallErc2771Request()
    {
        Target = target,
        Data = data,
        User = _web3.Signer.PublicAddress,
    });

    while (true)
    {
        var status = await _web3.Gelato().GetTaskStatus(relayResponse.TaskId);

        switch (status.TaskState)
        {
            case TaskState.ExecSuccess:
            case TaskState.ExecReverted:
            case TaskState.Cancelled:
                return
                    $"Task complete. Final status of {status.TaskId}: {status.TaskState}. " +
                    $"Transaction hash: {status.TransactionHash}";
            default:
                await WaitForSeconds(2);
                continue;
        }
    }
}
```