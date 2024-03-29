﻿---
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

In simple words, wallet connection happens when you call `LaunchAsync()` on `Web3Builder` object.
So, to handle connection error as well as any other initialization error you should wrap `LaunchAsync`
call into a try/catch statement. Alternatively you can just use the login scene provided with the samples and it will do all of this for you.

```csharp
﻿using System;
using System.Collections;
using System.Threading.Tasks;
using ChainSafe.Gaming.Evm.Contracts;
using ChainSafe.Gaming.Evm.JsonRpc;
using ChainSafe.Gaming.MultiCall;
using ChainSafe.Gaming.UnityPackage;
using ChainSafe.Gaming.Web3;
using ChainSafe.Gaming.Web3.Build;
using ChainSafe.Gaming.Web3.Unity;
using ChainSafe.GamingSdk.Gelato;
using Scripts.EVM.Token;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Scenes
{
    public abstract class Login : MonoBehaviour
    {
        // Set this to your main scene
        public const string MainSceneName = "SampleMain";

        public static int LoginSceneIndex { get; private set; } = 0;

        [SerializeField] private string gelatoApiKey = "";

        [SerializeField] private ErrorPopup errorPopup;

        private IEnumerator Start()
        {
            yield return Initialize();
        }

        protected abstract IEnumerator Initialize();

        protected abstract Web3Builder ConfigureWeb3Services(Web3Builder web3Builder);

        protected async Task TryLogin()
        {
            Web3 web3;

            try
            {
                Web3Builder web3Builder = new Web3Builder(ProjectConfigUtilities.Load())
                    .Configure(ConfigureCommonServices);

                web3Builder = ConfigureWeb3Services(web3Builder);

                web3 = await web3Builder.LaunchAsync();
            }

            catch (Exception)
            {
                errorPopup.ShowError("Login failed, please try again\n(see console for more details)");
                throw;
            }

            Web3Accessor.Set(web3);

            LoginSceneIndex = SceneManager.GetActiveScene().buildIndex;

            SceneManager.LoadScene(MainSceneName);
        }

        private void ConfigureCommonServices(IWeb3ServiceCollection services)
        {
            services
                .UseUnityEnvironment()
                .UseGelato(gelatoApiKey)
                .UseMultiCall()
                .UseRpcProvider();

            /* As many contracts as needed may be registered here.
             * It is better to register all contracts the application
             * will be interacting with at configuration time if they
             * are known in advance. We're just registering shiba
             * here to show how it's done. You can look at the
             * `Scripts/Prefabs/Wallet/RegisteredContract` script
             * to see how it's used later on.
             */
            services.ConfigureRegisteredContracts(contracts =>
                contracts.RegisterContract("CsTestErc20", ABI.Erc20, Contracts.Erc20));

        }
    }
}
```

It also makes sense to retry building the Web3 object when the connection
fails. It's up to you if you wanna do it automatically or when a player presses the button.