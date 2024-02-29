---
slug: /current/getting-started
sidebar_position: 2
sidebar_label: Getting Started
---


# Getting Started

:::info

This page will walk you through the process of setting up a project ID and using the new API.

:::

<!-- ### Install via UPM

![](v2Assets/upm-git.png)

1. Open up your project in editor
2. Go to Windows/Package Manager
3. Click on "+", "Add package from git url"
4. Paste "%GIT_URL_HERE%"
5. Package will be installed -->

### Install via Package Manager With Open UPM

1. On the top bar in unity, navigate to Window -> Package Manager -> Gear icon -> Advanced Project Settings.
![](v2Assets/AddPackageGearIcon.png)
2. Add a new scoped registry or edit the existing OpenUPM entry if it's already there.
3. Save the following details to the scope:
- Name: package.openupm.com
- URL: https://package.openupm.com
- Scope: io.chainsafe.web3-unity

4. Add a new package by name by pressing + -> Add package by name ```io.chainsafe.web3-unity``` & ```io.chainsafe.web3-unity.web3auth```.
5. Next go to the web3.unity SDK package and install the examples by going the samples tab and pressing import.

![](v2Assets/openupmInstall.png)

Please note that unity versions 2021 and below may require a restart if you experience assembly errors.

### Install via Open UPM CLI

1. Open up your project in editor
2. Follow the OpenUPM guide here to install openupm-cli
3. Navigate to your Unity Project folder and run the commands ```openupm add io.chainsafe.web3-unity``` & ```openupm add io.chainsafe.web3-unity.web3auth```
4. Follow step 5 above to install the sample packages and explore the SDK.

### Updating via The Package Manager

Updating the SDK is easy. Simply go to window -> package manager -> select the ChainSafe SDK package & press update. The same can be done for any additional packages you have installed, web3auth, lootboxes etc.

### Set Project ID

As the package is installed, you'll be prompted with settings window.
First of all you have to setup your Project ID. You can get one [here](https://dashboard.gaming.chainsafe.io/).

For more information on Project ID, see [Project ID Registration](https://docs.gaming.chainsafe.io/current/project-id-registration).

After you've completed the registration process, copy your Project ID into the project settings
window. Save settings. You should see a message in the console saying your project id is valid.

### Other Settings

![](v2Assets/project-settings.png)

You should also setup default settings for the RPC node you're going to use.

- Chain ID - search using you chain name here https://chainlist.org, 11155111 for sepolia.
- Chain name - i.e Sepolia
- Network - i.e Ethereum
- Symbol - i.e SETH
- Rpc - enter URL to your RPC node here. For information on setting up an RPC Node visit [this page](https://docs.gaming.chainsafe.io/current/setting-up-an-rpc-node).

### Example Scene

If you navigate to Window -> Package Manager -> Web3Unity SDK -> Samples, you can import an example package to help you understand the SDK. Press import and let it load into the project. You'll see some new files in your project under samples, these files contain everything we need to get started with the SDK. Have a look around, check out the script and the scene locations.

![](v2Assets/ImportingSamples.png)

You'll notice when you import the samples into the project that some scenes are added to your build configuration. This is to show you a demo of how all the functions in the SDK work. Simply go to the sample log in scene and press play to connect a wallet to get started with some examples.

![](v2Assets/ImportedScenes.png)

Once you've logged in it will take you to the main scene. You can play around in the menus and check out each scripts functionality by pressing the show script button, this will highlight the script in the editor and allow you to inspect it further. If you're an advanced developer you should have enough to work with from the sample scripts in front of you. If you're just beginning we suggest you take a look at our easy to use prefabs below.

![](v2Assets/MainScene.png)

### Altering Login Scene Transition
If you would like to have the login screen go to a custom scene after authorization, you can alter the inspector value on the login object in the scenes hierarchy to your scene name as show below. By default it will be set the sample scene for examples sake.

![](v2Assets/login-scene.png)

### Logging In With Wallet Connect

When you open the login scene you'll see a login object in the hierarchy on the left under the canvas. Select it and you'll see wallet connect configuration inputs in the inspector on the right. Please note that wallet connect webgl is currently not 100% functional for most chains. A fix is coming early next year for this. 

![](v2Assets/LoginObject.png)

We've already given you some default values for the wallet connect configuration so if you're fine with using the same endpoint as everyone else just leave it as is. Otherwise head on over to the dashboard at [Wallet Connect](https://cloud.walletconnect.com/sign-in) to sign up and get your own details.

![](v2Assets/WalletConnectDash.png)

Once you're in the Wallet Connect dashboard area, you can press the button on the top right to create a new project, it will ask you to give the project a name.

![](v2Assets/WalletConnectNewProject.png)

Once you've created the project you'll be taken to the settings area. Here you'll find the input details you need, the project name and the project id.

![](v2Assets/WalletConnectProjectId.png)

Just place these into the editor values, press save and you're good to go.

![](v2Assets/WalletConnectInfo.png)

### Logging In With MetaMask

Once you've installed the sample package, navigate to Assets -> Samples -> Web3.UnitySDk -> 2.5.0 -> Web3.UnitySamples -> Scenes, here you'll find a scene called SampleLoginMetamask. When you open this scene you'll be able to configure the transition scene to load next by selecting the login object in the hierarchy and viewing the details in the inspector. You can also configure addition settings such as the Web3Auth client id and redirect url.

Please remember that this will only work with webgl builds that are either built locally with control + b or hosted on a server. The game needs a browser to interact with the metamask extension so unfortunately running this is the editor wont work the same way the wallet connect login does.
![](v2Assets/MetaMaskLogin.png)

### Logging In With Web3Auth

We've also provided the option to log in via Web3Auth, you may need to download the web3auth samples from the package manager if you don't have them installed. Navigate to Assets -> Samples -> Web3.unitySDKWeb3Auth -> 2.5.1 -> Web3.UnityWeb3AuthSamples -> Scenes and select Sample Login. When you open this scene you'll be able to configure the transition scene to load next by selecting the login object in the hierarchy and viewing the details in the inspector. You can also configure additional settings such as the web3auth client id and redirect url. You may also test this within the editor, press play on the login scene and press the login button to get started.
![](v2Assets/Web3AuthLogin.png)


### Web3Builder, Signers & Executors

To dive a little deeper into the SDK functionality in terms of signers, executors, binding services and using a web3 provider. Please refer to the configuration part of our SDK [here](https://docs.gaming.chainsafe.io/current/configuration)

### Prefab Scripts

We've created some easy to use prefab scripts, think of it as a beginner friendly layer. Feel free to check out the prefab scripts area of the docs [here](https://docs.gaming.chainsafe.io/current/prefab-scripts), you'll find helpful snippets of code that you can drop in and out of your scenes. Please note that you must have the samples package above installed to use the prefab scripts or they'll be missing some dependencies.