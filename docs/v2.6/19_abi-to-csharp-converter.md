---
slug: /current/abi-to-csharp-converter
sidebar_position: 19
sidebar_label: Contract ABI To C# Generator
---

# Contract ABI To C# Generator
In version 3.0, we've made it super easy for you to communicate with the blockchain by introducing the ABI to C# converter. Besides encapsulating all of your contract ABI into more user-friendly, statically typed methods, this utility also allows you to easily subscribe and unsubscribe to events happening on the blockchain.

You can access it by clicking on the top menu: Chainsafe SDK → Contract ABI To C# Generator.

![Contract ABI TO C# converter](assets/abi-csharp-contract/abi-csharp-overview.png)

Once there, you need to fill out the name of your contract and the folder where you want the C# contract to be generated.


![Contract ABI TO C# converter](assets/abi-csharp-contract/abi-csharp-filled.png)

If the data you provided is correct, you can click on Convert. After a few seconds, and once Unity reloads the domain, you should see a newly created C# class inside of your project.

Now, to actually interact with both the events and methods from the contract, the only remaining information needed is the contract address.

Here is a sample script for the Erc20Contract that we've generated in the previous images:

```csharp
public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;
    [SerializeField] private string balanceOfAddress;

    Erc20Contract _erc20Contract;

    public async void Start()
    {
        Web3Unity.Web3Initialized += Web3Initialized;
    }

    //Always create your custom contract inside of the event handler. That way you always have the up-to-date data. 
    private async void Web3Initialized((Web3 web3, bool isLightweight) obj)
    {
        //Since Web3Initialized event can be invoked multiple times during the app lifecycle (once you open the app and don't have a wallet, then when there is a wallet etc.)
        //You need to properly dispose the previously created contract to remove any potential memory leaks. 
        if (_erc20Contract != null)
        {
            _erc20Contract.OnTransfer -= Erc20Transfer;
            await _erc20Contract.DisposeAsync();
        }

        _erc20Contract = await web3.ContractBuilder.Build<Erc20Contract>("ContractAddress");
        _erc20Contract.OnTransfer += Erc20Transfer;
    }

    public async void OnDestroy()
    {
        _erc20.OnTransfer -= Erc20Transfer;
        Web3Unity.Web3Initialized -= Web3Initialized;
        await _erc20Contract.DisposeAsync();
        
    }

}
```

Since we subscribe to blockchain events from the ABI during the contract building process, we need to manually dispose of the contract in a method like OnDestroy, which will handle unsubscribing from events.
