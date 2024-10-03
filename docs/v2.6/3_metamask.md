---
slug: /current/metamask
sidebar_position: 3
sidebar_label: Metamask
---

# MetaMask

:::info

Please note that MetaMask will only work with WebGL builds that are built out locally or published in the browser. You can use Reown to login and scan the QR code on your device to connect with MetaMask if needed for desktop builds.

:::

Here’s how you can include MetaMask in your video games.
1. You can find the scene by navigating to Samples → web3.unity SDK → 2.6 → Web3.Unity Samples → Scenes → SampleLogin - MetaMask.
2. Click on the Login Logic - MetaMask object and in the inspector, modify the Scene To Load to your preferred scene.

![](assets/wallets/metamask/metamask-login-logic.png)

3. Add the MetaMask scene and your scene to the build settings, and you’re done.

![](assets/wallets/metamask/metamask-login-scene.png)

Simply login with a local or published WebGL build and connect your MetaMask.

## WebGL Builds

MetaMask uses a custom WebGL template to display your game in your browser. Navigate to File → Build Settings → Player Settings. In player settings, set your resolution to the MetaMask WebGL template.

![](assets/wallets/metamask/metamask-project-settings.png)

Now you are ready to build your WebGL game.