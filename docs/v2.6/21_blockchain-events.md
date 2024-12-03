---
slug: /current/blockchain-events
sidebar_position: 21
sidebar_label: Listening to Blockchain Events
---
Here’s the corrected version of your content with improved grammar:

---

# Listening to Blockchain Events
Often, you will want to react to certain events happening on the blockchain. For example, you might want to know when a transfer of funds occurs on a specific smart contract.

## Prerequisite
Fill in the WebSocket URL for the chains in the ChainSafe SDK > Project Settings.

To subscribe to the events happening on the blockchain, you need to add the Events Service Adapter to your Web3Unity Prefab.  
There, you will find a serialized field called the polling interval. For platforms other than WebGL, any changes made to that number won't take effect, as for WebGL, we use event polling (essentially pinging the RPC every `pollingInterval` seconds to check for new events from a specific address), due to the limitations of the WebGL platform. If you are not building for WebGL (this includes the Editor), you'll use the WebSocket URL provided in your chain configuration.

:::info
For public WebSockets (like Sepolia's public WebSockets, for example), it can take up to a minute to establish a proper WebSocket connection. If you exit play mode before a minute has passed, you might encounter exceptions indicating that subscription/unsubscription has failed.
:::

## Subscribing to Events
There are two ways to subscribe to events: either subscribe via generated contracts or do it manually.

If you are using the generated contracts from our Contract ABI <-> C# Generator, you can subscribe to the events of that smart contract, just like you're used to in C#.

```csharp
public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;

    Erc20Contract _erc20Contract;

    public async void Start()
    {
        if(Web3Unity.Web3 == null)
            await Web3Unity.Instance.Initialize(false);

        _erc20Contract =  await Web3Unity.Instance.BuildContract<Erc20Contract>(contractAddress);
        
        _erc20.OnTransfer += Erc20Transfer;       
    }

    public async void OnDestroy()
    {
        _erc20.OnTransfer -= Erc20Transfer;

        //This unsubscribes you from the websockets internally, don't forget to add it.
        await _erc20Contract.DisposeAsync();
    }
    
    private void Erc20Transfer(Erc20Contract.TransferEventDTO obj)
    {
        Debug.Log("Transfer happened");
    }
}
```

However, if you prefer, you can also handle events manually:

```csharp
// The Approval event in the standard ERC20 contract (and in the ABI) has the following signature:
// event Approval(address indexed owner, address indexed spender, uint256 value)

// Encapsulate the event name as it's written in the ABI or smart contract in the Event attribute.
[Event("Approval")]
// The class you're creating for the event must implement the IEventDTO interface.
public class ApprovalEventDTO : IEventDTO
{
    /*
    All properties should have the Parameter attribute applied to them.
    The first argument is the actual type on the smart contract side.
    The second argument is the name of the parameter in the smart contract.
    The third argument is the order of that parameter in the invocation. 
    The last argument indicates if the parameter is indexed or not.   
    */

    [Parameter("address", "owner", 0, true)]
    public virtual string Owner { get; set; }

    [Parameter("address", "spender", 1, true)]
    public virtual string Spender { get; set; }

    [Parameter("uint256", "value", 2, false)]
    public virtual BigInteger Value { get; set; }
}


public class CustomContractSample : MonoBehaviour
{
    [SerializeField] private string contractAddress;

    public async void Start()
    {
        if(Web3Unity.Web3 == null)
            await Web3Unity.Instance.Initialize(false);

        Web3Unity.Web3.Events.Subscribe<ApprovalEventDTO>(Erc20Approval, contractAddress);
    }

    public void OnDestroy()
    {
        Web3Unity.Web3.Events.Unsubscribe<ApprovalEventDTO>(Erc20Approval, contractAddress);
    }
    
    private void Erc20Approval(ApprovalEventDTO obj)
    {
        Debug.Log("Approval happened");
    }
}
```