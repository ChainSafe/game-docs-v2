---
slug: /current/sample-scripts
sidebar_position: 9
sidebar_label: Sample Scripts & Chain Interactions
---

# Sample Scripts & Chain Interactions

:::info

In order to copy and paste the scripts below without hassle you will need to have the sample package imported via unity package manager. If you need to install the core SDK sample package you can follow the install guide in our getting started section [here](https://docs.gaming.chainsafe.io/current/getting-started).
:::

### The login scene
You'll notice when you import the samples into the project that some scenes are added to your build configuration. You'll want to keep the login scene as the first scene as it's needed to initialize web3 to create a wallet connection. You can remove the rest and add a blank scene as your 2nd scene in build settings. We'll use this 2nd scene to drop scripts in and out of for testing purposes. Make sure your 2nd scene has an event system present in the hierarchy or the scripts won't work. You can right click in the object hierarchy on the left and go to UI -> Event system to add one if it isn't there.

### Adding a script to a scene for testing
If you right click in the unity explorer you can create a c# script. For example we're going to test erc20NameOf to get the name of an ERC20 token from chain data. Right click in the editor file explorer and create a new script, attach this script to an empty object in the scene next to the editor system. Name the script erc20NameOf, place the code below into it and press save. Once saved you can go back to the editor, create a button and assign the scripts public function to a button press event on the right. You can do this by finding the objects properties on the right, scrolling down to button and adding an event. Just drag the object with the script into the button event area and choose the starting function of the script.

## ERC20 Sample Scripts

### Name Of
Fetches the name of an ERC20 contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the name of an ERC20 contract
/// </summary>
public class Erc20NameOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Name()
    {
        var name = await Web3Accessor.Web3.Erc20.GetName(contractAddress);
        SampleOutputUtil.PrintResult(name, "ERC-20", nameof(Erc20Service.GetName));
        // You can make additional changes after this line
    }
}
```

### Symbol
Fetches the symbol of an ERC20 contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the symbol of an ERC20 contract
/// </summary>
public class Erc20Symbol : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Symbol()
    {
        var symbol = await Web3Accessor.Web3.Erc20.GetSymbol(contractAddress);
        SampleOutputUtil.PrintResult(symbol, "ERC-20", nameof(Erc20Service.GetSymbol));
        // You can make additional changes after this line
    }
}
```

### Decimals
Fetches the decimals of an ERC20 contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the decimals of an ERC20 contract
/// </summary>
public class Erc20Decimals : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Decimals()
    {
        var decimals = await Web3Accessor.Web3.Erc20.GetDecimals(contractAddress);
        SampleOutputUtil.PrintResult(decimals.ToString(), "ERC-20", nameof(Erc20Service.GetDecimals));
        // You can make additional changes after this line
    }
}
```

### Total Supply
Fetches the total supply of an ERC20 token.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the total supply of an ERC20 contract
/// </summary>
public class Erc20TotalSupply : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void TotalSupply()
    {
        var totalSupply = await Web3Accessor.Web3.Erc20.GetTotalSupply(contractAddress);
        SampleOutputUtil.PrintResult(totalSupply.ToString(), "ERC-20", nameof(Erc20Service.GetTotalSupply));
        // You can make additional changes after this line
    }
}
```

### Balance Of
Fetches the balance of an ERC20 token from an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of an ERC20 token from an account
/// </summary>
public class Erc20BalanceOf : MonoBehaviour
{
    // Sets the account to be queried, you can change this to be any address
    string account = Web3Accessor.Web3.Signer.PublicAddress;
    //Set the contract address to be queried
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";

    // Function
    public async void BalanceOf()
    {
        var balance = await Web3Accessor.Web3.Erc20.GetBalanceOf(contractAddress, account);
        SampleOutputUtil.PrintResult(balance.ToString(), "ERC-20", nameof(Erc20Service.GetBalanceOf));
        // You can make additional changes after this line
    }
}
```

### Native Balance Of
Fetches the native balance of an ERC20 token from an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Providers;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the native balance of an ERC20 token from an account.
/// </summary>
public class Erc20NativeBalanceOf : MonoBehaviour
{
    public async void NativeBalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = Web3Accessor.Web3.Signer.PublicAddress;
        var balance = await Web3Accessor.Web3.RpcProvider.GetBalance(account);
        SampleOutputUtil.PrintResult(balance.ToString(), "Native Balance Of");
        // You can make additional changes after this line
    }
}
```

### Mint
Mints ERC20 tokens to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints ERC20 tokens to an account
/// </summary>
public class Erc20Mint : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private BigInteger amount = 1;
    
    // Function
    public async void MintErc20()
    {
        // Sets the account to mint to, you can change this to be any address
        string toAccount = Web3Accessor.Web3.Signer.PublicAddress;
        var mintResponse = await Web3Accessor.Web3.Erc20.Mint(ChainSafeContracts.Erc20, amountMint, toAccount);
        var output = SampleOutputUtil.BuildOutputValue(mintResponse);
        SampleOutputUtil.PrintResult(output, "ERC-20", nameof(Erc20Service.Mint));
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfers ERC20 tokens to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfers ERC20 tokens to an account
/// </summary>
public class Erc20Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private BigInteger amount = 1000000000000000;
    
    // Function
    public async void TransferErc20()
    {
        var mintResponse = await Web3Accessor.Web3.Erc20.Transfer(contractAddress, toAccount, amountTransfer);
        var output = SampleOutputUtil.BuildOutputValue(mintResponse);
        SampleOutputUtil.PrintResult(output, "ERC-20", nameof(Erc20Service.Transfer));
        // You can make additional changes after this line
    }
}
```

## ERC721 Sample Scripts

### Balance Of
Fetches the balance of ERC721 NFTs from an account

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC721 NFTs from an account
/// </summary>
public class Erc721BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";

    // Function
    public async void BalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = Web3Accessor.Web3.Signer.PublicAddress;
        var balance = await Web3Accessor.Web3.Erc721.GetBalanceOf(contractAddress, account);
        SampleOutputUtil.PrintResult(balance.ToString(), "ERC-721", nameof(Erc721Service.GetBalanceOf));
        // You can make additional changes after this line
    }
}
```

### Owner Of
Fetches the owner of an ERC721 token id.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the owner of an ERC721 token id
/// </summary>
public class Erc721OwnerOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string tokenId = "1";
    
    // Function
    public async void OwnerOf()
    {
        var owner = await Web3Accessor.Web3.Erc721.GetOwnerOf(contractAddress, tokenIdOwnerOf);
        SampleOutputUtil.PrintResult(owner, "ERC-721", nameof(Erc721Service.GetOwnerOf));
        // You can make additional changes after this line
    }
}
```

### Owner Of Batch
Fetches the owners of ERC721 token ids.

``` csharp
using UnityEngine;
using System.Linq;
using System.Text;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the owners of ERC721 token ids
/// </summary>
public class Erc721OwnerOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string[] tokenIds = { "4", "6" };

    // Function
    public async void OwnerOfBatch()
    {
        var owners = await Web3Accessor.Web3.Erc721.GetOwnerOfBatch(contractAddress, tokenIds);
        var ownersString = new StringBuilder();
        var dict = owners.GroupBy(x => x.Owner).ToDictionary(x => x.Key, x => x.Select(x => x.TokenId).ToList());
        foreach (var owner in dict)
        {
            ownersString.AppendLine($"Owner: {owner.Key} owns the following token(s):");
            foreach (var tokenId in owner.Value)
            {
                ownersString.AppendLine("\t" + tokenId);
            }
        }
        SampleOutputUtil.PrintResult(ownersString.ToString(), "ERC-721", nameof(Erc721Service.GetOwnerOfBatch));
        // You can make additional changes after this line
    }
}
```

### Uri
Fetches the URI from an ERC721 NFT.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the URI from an ERC721 NFT
/// </summary>
public class Erc721Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "QmfUHuFj3YL2JMZkyXNtGRV8e9aLJgQ6gcSrqbfjWFvbqQ";
    private string tokenId = "1";
    
    // Function
    public async void Uri()
    {
        var uri = await Web3Accessor.Web3.Erc721.GetUri(contractAddress, tokenId);
        SampleOutputUtil.PrintResult(uri, "ERC-721", nameof(Erc721Service.GetUri));
        // You can make additional changes after this line
    }
}
```

### Mint 721
Mints a 721 NFT to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints a 721 NFT to an account
/// </summary>
public class Erc721Mint : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string uri = "QmfUHuFj3YL2JMZkyXNtGRV8e9aLJgQ6gcSrqbfjWFvbqQ";
    
    // Function
    public async void MintErc721()
    {
        var response = await Web3Accessor.Web3.Erc721.Mint(contractAddress, uri);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, "ERC-721", nameof(Erc721Service.GetUri));
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfers an ERC721 token to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfers an ERC721 token to an account
/// </summary>
public class Erc721Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private BigInteger tokenId = 1;

    // Function
    public async void TransferErc721()
    {
        var response = await Web3Accessor.Web3.Erc721.Transfer(contractAddress, toAccount, tokenId);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, "ERC-721", nameof(Erc721Service.Transfer));
        // You can make additional changes after this line
    }
}
```

## ERC1155 Sample Scripts

### Balance Of
Fetches the balance of ERC1155 NFTs from an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from an account
/// </summary>
public class Erc1155BalanceOf : MonoBehaviour
{
    // Variables
    // Sets the account to be queried, you can change this to be any address
    private string account = Web3Accessor.Web3.Signer.PublicAddress;
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";

    // Function
    public async void BalanceOf()
    {
        var balance = await Web3Accessor.Web3.Erc1155.GetBalanceOf(
                ChainSafeContracts.Erc1155, 
                tokenIdBalanceOf,
                account);
            SampleOutputUtil.PrintResult(balance.ToString(), "ERC-1155",nameof(Erc1155Service.GetBalanceOf));
        // You can make additional changes after this line
    }
}
```

### Balance Of Batch
Fetches the balance of ERC1155 NFTs from multiple accounts.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from multiple accounts
/// </summary>
public class Erc1155BalanceOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xdc4aff511e1b94677142a43df90f948f9ae181dd";
    private string[] accounts = { "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2", "0xE51995Cdb3b1c109E0e6E67ab5aB31CDdBB83E4a" };
    private string[] tokenIds = { "1", "2" };

    public async void BalanceOfBatch()
    {
        var balances = await Web3Accessor.Web3.Erc1155.GetBalanceOfBatch(
            contractAddress,
            accounts, 
            tokenIds);
        SampleOutputUtil.PrintResult(string.Join(", ", balances), "ERC-1155",nameof(Erc1155Service.GetBalanceOfBatch));
        // You can make additional changes after this line
    }
}
```

### Import Texture
Fetches the texture of an ERC1155 NFT and displays it to a raw image.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the texture of an ERC1155 NFT and displays it to a raw image
/// </summary>
public class Erc1155ImportTexture : MonoBehaviour
{
    // Variables
    // You need to assign this raw image object in the editor
    public RawImage rawImage;
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";

    // Function
    public async void ImportNftTexture1155()
    {
        var texture = await Web3Accessor.Web3.Erc1155.ImportTexture(ChainSafeContracts.Erc1155, tokenIdTexture);
        rawImage.texture = texture;
        // You can make additional changes after this line
    }
}
```

### Uri
Fetches the URI from an ERC1155 NFT.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the URI from an ERC1155 NFT
/// </summary>
public class Erc1155Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";
    
    // Function
    public async void Uri()
    {
        var uri = await Web3Accessor.Web3.Erc1155.GetUri(
            ChainSafeContracts.Erc1155,
            tokenIdUri);
        SampleOutputUtil.PrintResult(uri, "ERC-1155",nameof(Erc1155Service.GetUri));
        // You can make additional changes after this line
    }
}
```

### Mint 1155
Mints a 1155 NFT to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using System.Numerics;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints a 1155 NFT to an account
/// </summary>
public class Erc1155Mint : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private BigInteger id = 1;
    private BigInteger amount = 1;

    // Function
    public async void MintErc1155()
    {
        var response = await Web3Accessor.Web3.Erc1155.Mint(
            contractAddress,
            id,
            amount);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, "ERC-1155",nameof(Erc1155Service.Mint));
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfer ERC1155 tokens to an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfer ERC1155 tokens to an account
/// </summary>
public class Erc1155Transfer : MonoBehaviour
{
    // Variables
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private string contract = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private BigInteger tokenId = 1;
    private BigInteger amount = 1;

    // Function
    public async void TransferErc1155()
    {
        var response = await Web3Accessor.Web3.Erc1155.Transfer(
            contract,
            tokenId,
            amount,
            toAccount);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, "ERC-1155",nameof(Erc1155Service.Transfer));
        // You can make additional changes after this line
    }
}
```

## EVM Sample Scripts

### IPFS Upload
Uploads to IPFS, you will need to obtain your storage API secret and bucket id from ChainSafe's storage [here](https://app.storage.chainsafe.io/).

``` csharp
using UnityEngine;
using System.Collections.Generic;
using ChainSafe.Gaming.UnityPackage.Model;
using ChainSafe.Gaming.Marketplace;

public class IPFSCalls : MonoBehaviour
{
    #region Fields

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
    public async void IPFSUploadImage()
    {
        var uploadRequest = new IPFSUploadRequestModel
        {
            ApiKey = apiSecretKey,
            BucketId = bucketId,
            FileNameImage = fileNameImage
        };
        var cid = await IPFS.UploadImage(uploadRequest);
        Debug.Log($"Image uploaded to https://ipfs.chainsafe.io/ipfs/{cid}"); 
    }
    
    /// <summary>
    /// Uploads metadata to IPFS
    /// </summary>
    public async void IPFSUploadMetadata()
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
        Debug.Log($"Metadata uploaded to https://ipfs.chainsafe.io/ipfs/{cid}"); 
    }
    
    /// <summary>
    /// Uploads an image selected by the user including metadata to IPFS
    /// </summary>
    public async void IPFSUploadImageAndMetadata()
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
        Debug.Log($"Image & metadata uploaded to https://ipfs.chainsafe.io/ipfs/{cid}"); 
    }

    #endregion
}

```

### Marketplace Calls
Makes reads and writes to and from ChainSafe's marketplace.

``` csharp
using UnityEngine;
#if MARKETPLACE_AVAILABLE
using Scripts.EVM.Marketplace;
using UnityEngine;

/// <summary>
/// Marketplace sample calls for use with the api documentation.
/// Marketplace Api: https://docs.gaming.chainsafe.io/marketplace-api/docs/marketplaceapi
/// Token Api: https://docs.gaming.chainsafe.io/token-api/docs/tokenapi
/// </summary>
public class MarketplaceCalls : MonoBehaviour
{
    #region fields
    [Header("Change the fields below for testing purposes")]
    
    [Header("Bearer token")]
    [SerializeField] private string bearerToken = "Please set your bearer token from the ChainSafe dashboard";
    
    [Header("721 Collection Call")]
    [SerializeField] private string collectionId721 = "Set 721 collection ID";
    
    [Header("1155 Collection Call")]
    [SerializeField] private string collectionId1155 = "Set 1155 collection ID";
    
    [Header("Marketplace Calls")]
    [SerializeField] private string marketplaceId = "Set marketplace ID";
    
    [Header("Token Calls")]
    [SerializeField] private string tokenId = "Set token ID i.e 1";
    
    [Header("Create 721 Collection Call")]
    [SerializeField] private string collectionName721 = "Set 721 collection name";
    [SerializeField] private string collectionDescription721 = "Set 721 collection description";
    [SerializeField] private bool collectionMintingPublic721 = false;
    
    [Header("Create 1155 Collection Call")]
    [SerializeField] private string collectionName1155 = "Set 1155 collection name";
    [SerializeField] private string collectionDescription1155 = "Set 1155 collection description";
    [SerializeField] private bool collectionMintingPublic1155 = false;
    
    [Header("Delete calls (Can only be used before the item is on chain)")]
    [SerializeField] private string collectionToDelete = "Set collection to delete";
    [SerializeField] private string marketplaceToDelete = "Set marketplace to delete";
    
    [Header("Mint 721 to collection calls")]
    [SerializeField] private string collectionContract721 = "Set 721 collection to mint to";
    [SerializeField] private string uri721 = "Set metadata uri with full path i.e. https://ipfs.chainsafe.io/ipfs/bafyjvzacdj4apx52hvbyjkwyf7i6a7t3pcqd4kw4xxfc67hgvn3a";
    
    [Header("Mint 1155 to collection calls")]
    [SerializeField] private string collectionContract1155 = "Set 1155 collection to mint to";
    [SerializeField] private string uri1155 = "Set metadata uri with full path i.e. https://ipfs.chainsafe.io/ipfs/bafyjvzacdj4apx52hvbyjkwyf7i6a7t3pcqd4kw4xxfc67hgvn3a";
    [SerializeField] private string amount1155 = "Set amount of Nfts to mint i.e 1";
    
    [Header("Create marketplace call")]
    [SerializeField] private string marketplaceName = "Set marketplace name";
    [SerializeField] private string marketplaceDescription = "Set marketplace description";
    [SerializeField] private bool marketplaceWhitelisting = false;
    
    [Header("List to marketplace calls")]
    [SerializeField] private string tokenIdToList = "Set token ID to list";
    [SerializeField] private string weiPriceToList = "Set price in wei to list for i.e 100000000000000";
    [SerializeField] private string marketplaceContractToListTo = "Set marketplace contract to list to";
    [SerializeField] private string collectionContractToList = "Set collection contract to list from";
    
    [Header("List to marketplace calls")]
    [SerializeField] private string marketplaceContractToBuyFrom = "Set marketplace contract to buy from";
    [SerializeField] private string tokenIdToBuy = "Set token ID to buy";
    [SerializeField] private string weiPriceToBuy = "Set price in wei to buy with i.e 100000000000000";
    
    #endregion

    #region Methods
    
    /// <summary>
    /// Gets all items in a project.
    /// </summary>
    public async void GetProjectItems()
    {
        var response = await Marketplace.GetProjectItems();
        Debug.Log($"Total: {response.total}");
        foreach (var item in response.items)
        {
            Marketplace.PrintObject(item);
        }
    }
    
    /// <summary>
    /// Gets all items in a marketplace.
    /// </summary>
    public async void GetMarketplaceItems()
    {
        var response = await Marketplace.GetMarketplaceItems(marketplaceId);
        Debug.Log($"Total: {response.total}");
        foreach (var item in response.items)
        {
            Marketplace.PrintObject(item);
        }
    }
    
    /// <summary>
    /// Gets items listed by token id.
    /// </summary>
    public async void GetItem()
    {
        var response = await Marketplace.GetItem(marketplaceId, tokenId);
        Marketplace.PrintObject(response.token);
    }
    
    /// <summary>
    /// Gets all tokens in a project.
    /// </summary>
    public async void GetProjectTokens()
    {
        var response = await Marketplace.GetProjectTokens();
        foreach (var token in response.tokens)
        {
            Marketplace.PrintObject(token);
        }
    }
    
    /// <summary>
    /// Gets all tokens in a 721 collection.
    /// </summary>
    public async void GetCollectionTokens721()
    {
        var response = await Marketplace.GetCollectionTokens721(collectionId721);
        foreach (var token in response.tokens)
        {
            Marketplace.PrintObject(token);
        }
    }
    
    /// <summary>
    /// Gets all tokens in a 1155 collection.
    /// </summary>
    public async void GetCollectionTokens1155()
    {
        var response = await Marketplace.GetCollectionTokens1155(collectionId1155);
        foreach (var token in response.tokens)
        {
            Marketplace.PrintObject(token);
        }
    }
    
    /// <summary>
    /// Gets the information of a token in a collection via id. Token id is optional.
    /// </summary>
    public async void GetCollectionToken()
    {
        var response = await Marketplace.GetCollectionToken(collectionId721, tokenId);
        Marketplace.PrintObject(response);
    }
    
    /// <summary>
    /// Gets the owners of a token id in a collection.
    /// </summary>
    public async void GetTokenOwners()
    {
        var response = await Marketplace.GetTokenOwners(collectionId1155, tokenId);
        foreach (var owner in response.owners)
        {
            Marketplace.PrintObject(owner);
        }
    }
    
    /// <summary>
    /// Creates a 721 collection
    /// </summary>
    public async void Create721Collection()
    {
        var data = await Marketplace.Create721Collection(bearerToken, collectionName721, collectionDescription721, collectionMintingPublic721);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Creates a 1155 collection
    /// </summary>
    public async void Create1155Collection()
    {
        var data = await Marketplace.Create1155Collection(bearerToken, collectionName1155, collectionDescription1155, collectionMintingPublic1155);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Mints an NFT to a 721 collection
    /// </summary>
    public async void Mint721CollectionNft()
    {
        var data = await Marketplace.Mint721CollectionNft(collectionContract721, uri721);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Mints an NFT to a 1155 collection
    /// </summary>
    public async void Mint1155CollectionNft()
    {
        var data = await Marketplace.Mint1155CollectionNft(collectionContract1155, uri1155, amount1155);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Deletes a collection that isn't on chain yet
    /// </summary>
    public async void DeleteCollection()
    {
        var response = await Marketplace.DeleteCollection(bearerToken, collectionToDelete);
        Debug.Log(response);
    }
    
    /// <summary>
    /// Creates a marketplace
    /// </summary>
    public async void CreateMarketplace()
    {
        var data = await Marketplace.CreateMarketplace(bearerToken, marketplaceName, marketplaceDescription, marketplaceWhitelisting);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Deletes a marketplace that isn't on chain yet
    /// </summary>
    public async void DeleteMarketplace()
    {
        var response = await Marketplace.DeleteMarketplace(bearerToken,marketplaceToDelete);
        Debug.Log(response);
    }
    
    /// <summary>
    /// Approves marketplace to list tokens
    /// </summary>
    public async void ApproveListNftsToMarketplace()
    {
        var data = await Marketplace.SetApprovalMarketplace(collectionContractToList, marketplaceContractToListTo, "1155",true);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Revokes approval from marketplace to list tokens
    /// </summary>
    public async void RevokeApprovalListNftsToMarketplace()
    {
        var data = await Marketplace.SetApprovalMarketplace(collectionContractToList, marketplaceContractToListTo, "1155",false);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Lists NFTs to the marketplace
    /// </summary>
    public async void ListNftsToMarketplace()
    {
        var data = await Marketplace.ListNftsToMarketplace(marketplaceContractToListTo,collectionContractToList, tokenIdToList, weiPriceToList);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    /// <summary>
    /// Purchases an Nft from the marketplace
    /// </summary>
    public async void PurchaseNftFromMarketplace()
    {
        var data = await Marketplace.PurchaseNft(marketplaceContractToBuyFrom, tokenIdToBuy, weiPriceToBuy);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
    }
    
    #endregion
}
#endif
```

### Contract Call
Makes a read call to a contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a read call to a contract
/// </summary>
public class CallContract : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contract = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "myTotal";

    // Function
    public async void ContractCall()
    {
        object[] args =
        {
            Web3Accessor.Web3.Signer.PublicAddress
        };
        var response = await Evm.ContractCall(Web3Accessor.Web3, method, abi, contract, args);
        Debug.Log(response);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.ContractCall));
        // You can make additional changes after this line
    }
}
```

### Contract Send
Makes a write call to a contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a write call to a contract
/// </summary>
public class SendContract : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contract = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "addTotal";
    private int increaseAmount = 1;
    // Value for sending native tokens with a transaction for payable functions
    // To use just add "value" as the last parameter of evm.ContractSend
    // private HexBigInteger value = new HexBigInteger(1000000000000000);

    // Function
    public async void ContractSend()
    {
        object[] args =
        {
            increaseAmount
        };
        var response = await Evm.ContractSend(Web3Accessor.Web3, method, abi, contract, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.ContractSend));
        // You can make additional changes after this line
    }
}
```

### Get Array
Gets an array response from a contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets an array response from a contract
/// </summary>
public class GetArray : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contract = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "getStore";
    
    // Function
    public async void GetArrayCall()
    {
        var response = await Evm.GetArray<string>(Web3Accessor.Web3, contract, abi, method);
        var responseString = string.Join(",\n", response.Select((list, i) => $"#{i} {string.Join((string)", ", (IEnumerable<string>)list)}"));
        SampleOutputUtil.PrintResult(responseString, nameof(Evm), nameof(Evm.GetArray));
        // You can make additional changes after this line
    }
}
```

### Send Array
Sends an array to a contract.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Sends an array to a contract
/// </summary>
public class SendArray : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contract = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "setStore";
    private string[] stringArray =
    {
        "0xFb3aECf08940785D4fB3Ad87cDC6e1Ceb20e9aac",
        "0x92d4040e4f3591e60644aaa483821d1bd87001e3"
    };

    // Function
    public async void SendArrayCall()
    {
        var response = await Evm.SendArray(Web3Accessor.Web3, method, abi, contract, stringArray);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.SendArray));
        // You can make additional changes after this line
    }
}
```

### Get Block Number
Gets the current block number.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current block number
/// </summary>
public class GetBlockNumber : MonoBehaviour
{
    // Function
    public async void GetBlockNumberCall()
    {
        var blockNumber = await Evm.GetBlockNumber(Web3Accessor.Web3);
        SampleOutputUtil.PrintResult(blockNumber.ToString(), nameof(Evm), nameof(Evm.GetBlockNumber));
        // You can make additional changes after this line
    }
}
```

### Get Gas Limit
Gets the current gas limit.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas limit
/// </summary>
public class GetGasLimit : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contract = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "addTotal";
    private int increaseAmount = 1;
    
    public async void GetGasLimitCall()
    {
        object[] args =
        {
            increaseAmount
        };
        var gasLimit = await Evm.GetGasLimit(Web3Accessor.Web3, abi, contract, method, args);
        SampleOutputUtil.PrintResult(gasLimit.ToString(), nameof(Evm), nameof(Evm.GetGasLimit));
    }
}
```

### Get Gas Price
Gets the current gas price.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas price
/// </summary>
public class GetGasPrice : MonoBehaviour
{
    // Function
    public async void GetGasPriceCall()
    {
        var gasPrice = await Evm.GetGasPrice(Web3Accessor.Web3);
        SampleOutputUtil.PrintResult(gasPrice.ToString(), nameof(Evm), nameof(Evm.GetGasPrice));
        // You can make additional changes after this line
    }
}
```

### Get Nonce
Gets the current nonce for an account.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current nonce for an account
/// </summary>
public class GetNonce : MonoBehaviour
{
    // Function
    public async void GetNonceCall()
    {
        var nonce = await Evm.GetNonce(Web3Accessor.Web3);
        SampleOutputUtil.PrintResult(nonce.ToString(), nameof(Evm), nameof(Evm.GetNonce));
        // You can make additional changes after this line
    }
}
```

### SHA3
Encrypts a message with SHA3.

``` csharp
using UnityEngine;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Encrypts a message with SHA3
/// </summary>
public class Sha3 : MonoBehaviour
{
    // Variables
    private string message = "It’s dangerous to go alone, take this!";
    
    // Function
    public void Sha3Call()
    {
        var hash = Evm.Sha3(message);
        SampleOutputUtil.PrintResult(hash, nameof(Evm), nameof(Evm.Sha3));
        // You can make additional changes after this line
    }
}
```

### Sign Message
Signs a message, the response is unique for each user.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a message, the response is unique for each user
/// </summary>
public class SignMessage : MonoBehaviour
{
    // Variables
    private string message = "The right man in the wrong place can make all the difference in the world.";
    
    // Function
    public async void SignMessageCall()
    {
        var signedMessage = await Evm.SignMessage(Web3Accessor.Web3, message);
        SampleOutputUtil.PrintResult(signedMessage, nameof(Evm), nameof(Evm.SignMessage));
        // You can make additional changes after this line
    }
}
```

### Sign Verify
Verifies a users account via message sign.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Verifies a users account via message sign
/// </summary>
public class SignVerify : MonoBehaviour
{
    // Variables
    private string message = "A man chooses, a slave obeys.";
    
    // Function
    public async void SignVerifyCall()
    {
        var signatureVerified = await Evm.SignVerify(Web3Accessor.Web3, message);
        var output = signatureVerified ? "Verified" : "Failed to verify";
        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.SignVerify));
        // You can make additional changes after this line
    }
}
```

### Send Transaction
Sends a transaction.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Sends a transaction
/// </summary>
public class SendTransaction : MonoBehaviour
{
    // Variables
    private string toAddress = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    
    //Function
    public async void SendTransactionCall()
    {
        var transactionHash = await Evm.SendTransaction(Web3Accessor.Web3, toAddress);
        SampleOutputUtil.PrintResult(transactionHash, nameof(Evm), nameof(Evm.SendTransaction));
        // You can make additional changes after this line
    }
}
```

### Get Transaction Status
Gets the status of a transaction.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the status of a transaction
/// </summary>
public class GetTransactionStatus : MonoBehaviour
{
    // Function
    public async void GetTransactionStatusCall()
    {
        var receipt = await Evm.GetTransactionStatus(Web3Accessor.Web3);
        var output = $"Confirmations: {receipt.Confirmations}," +
                     $" Block Number: {receipt.BlockNumber}," +
                     $" Status {receipt.Status}";

        SampleOutputUtil.PrintResult(output, nameof(Evm), nameof(Evm.GetTransactionStatus));
        // You can make additional changes after this line
    }
}
```

### Get Event Data Via Transaction Receipt

```csharp
using UnityEngine;
using System.Linq;
using System.Numerics;
using ChainSafe.Gaming.Evm.Contracts.Extensions;
using ChainSafe.Gaming.UnityPackage;
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.RPC.Eth.DTOs;
using Newtonsoft.Json;
using Scripts.EVM.Token;

/// <summary>
/// Class for the event data that we're calling, this must match the solidity event i.e. event AmountIncreased(address indexed wallet, uint256 amount);
/// </summary>
[Event("AmountIncreased")]
public class AmountIncreasedEvent : IEventDTO
{
    [Parameter("address", "wallet", 1, true)]
    public string wallet { get; set; }

    [Parameter("uint256", "amount", 2, false)]
    public BigInteger amount { get; set; }
}

public class GetTxDataFromReceipt : MonoBehaviour
{
    
    /// <summary>
    /// Gets events data from a transaction, in this case the wallet and the amount in the event
    /// </summary>
    public async void EventTxData()
    {
        string eventContract = "0x9832B82746a4316E9E3A5e6c7ea02451bdAC4546";
        var amount = 1;
        object[] args =
        {
            amount
        };
        var contract = Web3Accessor.Web3.ContractBuilder.Build(ABI.ArrayTotal, eventContract);
        var data = await contract.SendWithReceipt("addTotal", args);
        // Quick pause to deal with chain congestion
        await new WaitForSeconds(2);
        // Event data from receipt
        var logs = data.receipt.Logs.Select(jToken => JsonConvert.DeserializeObject<FilterLog>(jToken.ToString()));
        var eventAbi = EventExtensions.GetEventABI<AmountIncreasedEvent>();
        var eventLogs = logs
            .Select(log => eventAbi.DecodeEvent<AmountIncreasedEvent>(log))
            .Where(l => l != null);

        if (!eventLogs.Any())
        {
            Debug.Log("No event data");
        }
        else
        {
            Debug.Log("Event data found");
            foreach (var eventLog in eventLogs)
            {
                var eventData = eventLog.Event;
                Debug.Log($"Wallet from event data: {eventData.wallet}");
                Debug.Log($"Amount from event data: {eventData.amount}");
            }
        }
    }
}
```

### Registered Contract
Allows a contract to be registered for easy calling.

``` csharp
using UnityEngine;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows a contract to be registered for easy calling
/// </summary>
public class RegisteredContract : MonoBehaviour
{
    // Variables
    private string registeredContractName = "CsTestErc20";
    // Function
    public async void RegisteredContractCall()
    {
        var balance = await Evm.UseRegisteredContract(Web3Accessor.Web3, registeredContractName, EthMethods.BalanceOf);
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(Evm), nameof(Evm.UseRegisteredContract));
        // You can make additional changes after this line
    }
}
```

### ECDSA Sign Transaction
Signs a transaction with an ECDSA key

``` csharp
using UnityEngine;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a transaction with an ECDSA key.
/// </summary>
public class EcdsaSignTransaction : MonoBehaviour
{
    // Variables
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string chainId = "11155111";
    private string transactionHash = "0x123456789";
    
    // Function
    public void EcdsaSignTransactionCall()
    {
        var result = Evm.EcdsaSignTransaction(ecdsaKey, transactionHash, chainId);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaSignTransaction));
        // You can make additional changes after this line
    }
}
```

### ECDSA Get Address
Gets the public address the private key belongs to.

``` csharp
using UnityEngine;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the public address the private key belongs to.
/// </summary>
public class EcdsaGetAddress : MonoBehaviour
{
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    
    // Function
    public void EcdsaGetAddressCall()
    {
        var result = Evm.EcdsaGetAddress(ecdsaKey);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaGetAddress));
        // You can make additional changes after this line
    }
}
```

### ECDSA Sign Message
Signs a message using a private key.

``` csharp
using UnityEngine;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a message using a private key
/// </summary>
public class EcdsaSignMessage : MonoBehaviour
{
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string message = "secretmessage";
    
    // Function
    public void EcdsaSignMessageCall()
    {
        var result = Evm.EcdsaSignMessage(ecdsaKey, message);
        SampleOutputUtil.PrintResult(result, nameof(Evm), nameof(Evm.EcdsaSignMessage));
        // You can make additional changes after this line
    }
}
```

### Multicall
Makes a multicall.

``` csharp
using UnityEngine;
using System.Numerics;
using ChainSafe.Gaming.Evm.Contracts.BuiltIn;
using ChainSafe.Gaming.MultiCall;
using ChainSafe.Gaming.UnityPackage;
using Nethereum.Contracts.QueryHandlers.MultiCall;
using Scripts.EVM.Token;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a multicall
/// </summary>
public class MulticallSample : MonoBehaviour
{
    // Function
    public void MultiSampleCall()
    {
        var erc20Contract = Web3Accessor.Web3.ContractBuilder.Build(ABI.Erc20, ChainSafeContracts.Erc20);
        var erc20BalanceOfCalldata = erc20Contract.Calldata(EthMethods.BalanceOf, new object[]
        {
            Erc20Account
        });

        var erc20TotalSupplyCalldata = erc20Contract.Calldata(EthMethods.TotalSupply, new object[]
        {
        });

        var calls = new[]
        {
            new Call3Value()
            {
                Target = ChainSafeContracts.Erc20,
                AllowFailure = true,
                CallData = erc20BalanceOfCalldata.HexToByteArray(),
            },
            new Call3Value()
            {
                Target = ChainSafeContracts.Erc20,
                AllowFailure = true,
                CallData = erc20TotalSupplyCalldata.HexToByteArray(),
            }
        };

        var multicallResultResponse = await Web3Accessor.Web3.MultiCall().MultiCallAsync(calls);

        Debug.Log(multicallResultResponse);

        if (multicallResultResponse[0] != null && multicallResultResponse[0].Success)
        {
            var decodedBalanceOf = erc20Contract.Decode(EthMethods.BalanceOf, multicallResultResponse[0].ReturnData.ToHex());
            Debug.Log($"decodedBalanceOf {((BigInteger)decodedBalanceOf[0]).ToString()}");
        }

        if (multicallResultResponse[1] != null && multicallResultResponse[1].Success)
        {
            var decodedTotalSupply = erc20Contract.Decode(EthMethods.TotalSupply, multicallResultResponse[1].ReturnData.ToHex());
            Debug.Log($"decodedTotalSupply {((BigInteger)decodedTotalSupply[0]).ToString()}");
        }
        // You can make additional changes after this line
    }
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
    public async void CallWithSyncFee()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.CallWithSyncFee();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.CallWithSyncFee));
            // You can make additional changes after this line
    }
}
```

### Gelato Call With Sync Fee ERC2771
Allows sponsor calling to Gelato with sync fee for ERC2771.

``` csharp
using UnityEngine;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato with sync fee for ERC2771
/// </summary>
public class GelatoCallWithSyncFeeErc2771 : MonoBehaviour
{
    public async void CallWithSyncFeeErc2771()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.CallWithSyncFeeErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.CallWithSyncFeeErc2771));
            // You can make additional changes after this line
    }
}
```

### Gelato Sponsor Call
Allows sponsor calling to Gelato.

``` csharp
using UnityEngine;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato
/// </summary>
public class GelatoSponsorCall : MonoBehaviour
{
    public async void SponsorCall()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.SponsorCall();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCall));
            // You can make additional changes after this line
    }
}
```

### Gelato Sponsor Call ERC2771
Allows sponsor calling to Gelato for ERC2771.

``` csharp
using UnityEngine;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;

/* This sample script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato for ERC2771
/// </summary>
public class GelatoSponsorCallErc2771 : MonoBehaviour
{
    public async void SponsorCallErc2771()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.SponsorCallErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCallErc2771));
            // You can make additional changes after this line
    }
}
```