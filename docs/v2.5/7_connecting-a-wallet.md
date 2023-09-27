---
slug: /current/connecting-a-wallet
sidebar_position: 7
sidebar_label: Connecting A Wallet
---


# Connecting a Wallet

:::info

This page teaches you how to connect a wallet and our how our system is initialized.

:::

There is no separate state to connect player wallet. Connection procedure is triggered as part
of Web3 build process. This is due to the fact that after Web3 build process is completed, your Web3 instance
and all of it's components have to have their states fully initialized. Starting from this point you can safely
use each and every component and not worry you missed an initialization step.

In simple words, wallet connection happens when you call `BuildAsync()` on `Web3Builder` object.
So, to handle connection error as well as any other initialization error you should wrap `BuildAsync`
call into a try/catch statement.

```csharp
using System.Threading.Tasks;
using ChainSafe.Gaming;
using ChainSafe.Gaming.Build;
using ChainSafe.Gaming.Evm.JsonRpcProvider;
using ChainSafe.Gaming.Unity.Environment;
using ChainSafe.Gaming.Wallets.WebGLWallet;

public class ConnectionExample : MonoBehaviour
{
    private Web3Builder builder;
    
    private void Start()
    {
        builder = new Web3Builder()
            .Configure(services =>
            {
                services.UseUnityEnvironment();
                services.UseJsonRpcProvider();
                services.UseWebGLWallet();
            });
    }

    public async Task Connect()
    {
        try
        {
            GlobalWeb3.Instance = await builder.BuildAsync();
        }
        catch (Web3Exception e)
        {
            Debug.Log("Connection failed. Try again.");
            throw;
        }
    }
}
```

It also makes sense to retry building the Web3 object when the connection
fails. It's up to you if you wanna do it automatically or when a player presses the button.