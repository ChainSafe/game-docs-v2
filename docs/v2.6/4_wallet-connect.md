---
slug: /current/wallet-connect
sidebar_position: 4
sidebar_label: Wallet Connect
---

# Wallet Connect

Here’s how you can include Wallet Connect in your video games.

1. Once imported, you can find the scene by navigating to Samples → web3.unity SDK → 2.6 → Web3.Unity Samples → Scenes → SampleLogin - WalletConnect.
2. Click on the Login Logic - WalletConnect object and in the inspector, modify the Scene To Load to your preferred scene.

![](assets/wallets/wallet-connect/wallet-connect-login-logic.png)

3. Add the Wallet Connect scene and your scene to the build settings, and you’re done.

## Custom Wallet Connect Endpoint

We've already given you some default values for the wallet connect configuration so if you're fine with using the same endpoint as everyone else just leave it as is. Otherwise head on over to the dashboard at [Wallet Connect](https://cloud.walletconnect.com/sign-in) to sign up and get your own details.

![](assets/wallets/wallet-connect/wallet-connect-dash.png)

Once you're in the Wallet Connect dashboard area, you can press the button on the top right to create a new project, it will ask you to give the project a name.

![](assets/wallets/wallet-connect/wallet-connect-new-project.png)

Once you've created the project you'll be taken to the settings area. Here you'll find the input details you need, the project name and the project id.

![](assets/wallets/wallet-connect/wallet-connect-project-id.png)

Just place these into the editor values, press save and you're good to go.

![](assets/wallets/wallet-connect/wallet-connect-info.png)