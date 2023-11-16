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
using ChainSafe.Gaming.Web3.Build;
using ChainSafe.Gaming.Evm.JsonRpc;
using ChainSafe.Gaming.UnityPackage;
using ChainSafe.Gaming.Wallets;
using ChainSafe.Gaming.Web3;
using ChainSafe.Gaming.Web3.Unity;
using UnityEngine.SceneManagement;
using UnityEngine;

/// <summary>
/// A login script that allows you to connect to metamask
/// </summary>
public class Login : MonoBehaviour
{
    // Variables
    private Web3 web3;
    private Web3Builder builder;
    private bool useWebPageWallet;
    
    /// <summary>
    /// Used to initialize connection to a wallet, put this call in the start function or on a button event
    /// </summary>
    public async void Connect()
    {
            useWebPageWallet = Application.platform != RuntimePlatform.WebGLPlayer;
            builder = new Web3Builder(ProjectConfigUtilities.Load())
            .Configure(ConfigureCommonServices)
            .Configure(services =>
            {
                if (useWebPageWallet)
                {
                    services.UseWebPageWallet();
                }
                else
                {
                    services.UseWebGLWallet();
                }
            });
            await ProcessConnection();
    }
    
    /// <summary>
    /// Processes the connection and sets the users wallet for later calls
    /// </summary>
    private async Task ProcessConnection()
    {
        Debug.Log("Connecting");
        try
        {
            web3 = await builder.BuildAsync();
            Web3Accessor.Set(web3);
            PlayerPrefs.SetString("PlayerAccount", await Web3Accessor.Web3.Signer.GetAddress());
            Debug.Log("Connected!");
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
        }
        catch (Web3Exception e)
        {
            Debug.Log(e + "Connection failed. Try again.");
            throw;
        }
    }
    
    /// <summary>
    /// Standard configuration needed
    /// </summary>
    /// <param name="services"></param>
    private void ConfigureCommonServices(IWeb3ServiceCollection services)
    {
        services
            .UseUnityEnvironment()
            .UseRpcProvider();
    }
}
```

It also makes sense to retry building the Web3 object when the connection
fails. It's up to you if you wanna do it automatically or when a player presses the button.