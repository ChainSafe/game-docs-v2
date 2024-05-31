---
slug: /current/login-process
sidebar_position: 8
sidebar_label: Login Process
---


# Login Process

:::info

This page teaches you how the login process is performed & the how the web3 object is being initialized.

:::

Wallet connections are made as apart of the Web3 object's build process when you log in. Once this build process is complete you'll have an instance and all of it's components with their states fully initialized. This makes using the SDK quite simple as most calls will come from this object.

```csharp
﻿using ChainSafe.Gaming.UnityPackage.Common;
using ChainSafe.Gaming.WalletConnect;
using ChainSafe.Gaming.Web3.Build;
using Scenes;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Login using an existing wallet with WalletConnect.
/// </summary>
public class WalletConnectLoginProvider : LoginProvider, IWeb3BuilderServiceAdapter
{
    [SerializeField] private WalletConnectConfigSO walletConnectConfig;
    [SerializeField] private Button loginButton;

    protected override void Initialize()
    {
        base.Initialize();
        loginButton.onClick.AddListener(OnLoginClicked);
    }

    public Web3Builder ConfigureServices(Web3Builder web3Builder)
    {
        return web3Builder.Configure(services =>
        {
            services.UseWalletConnect(walletConnectConfig)
                .UseWalletConnectSigner()
                .UseWalletConnectTransactionExecutor();
        });
    }

    private async void OnLoginClicked()
    {
        await TryLogin();
    }
}
```

Wallet connection happens when `LaunchAsync()` is called on the `Web3Builder` object as seen below. You can then use this web3 instance as needed through the SDK which you can see examples of in our sample scripts area [here](https://docs.gaming.chainsafe.io/current/sample-scripts-and-chain-interactions).


``` csharp
    /// <summary>
    /// Try to Login and displays error and throws exception on a failed attempt.
    /// </summary>
    public async Task TryLogin()
    {
        try
        {
            await (this as ILoginProvider).Login();
        }
        catch (Exception e)
        {
            errorPopup.ShowError($"Login failed, please try again\n{e.Message} (see console for more details)");

            throw;
        }
    }

    public async Task Login()
    {
        Web3.Web3 web3;

        Web3Builder web3Builder = new Web3Builder(ProjectConfigUtilities.Load()).Configure(ConfigureCommonServices);

        web3Builder = ConfigureWeb3Services(web3Builder);

        web3 = await web3Builder.LaunchAsync();

        Web3Accessor.Set(web3);

        OnWeb3Initialized();
    }
```
Whilst we go into the core functionality of the build process here, if you simply want to use use the login scene provided with the samples, it will do everything here in the login process so you don't need to worry.

![](assets/login-process/login-scene.png)