---
slug: /current/getting-started
sidebar_position: 1
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

### Install via Open UPM

1. Open up your project in editor
2. Follow the OpenUPM guide [here](https://openupm.com/docs/getting-started.html) to install openupm-cli
3. Navigate to your Unity Project folder and run the commands ```openupm add io.chainsafe.web3-unity``` & ```openupm add io.chainsafe.web3-unity.web3auth```
4. Import Samples from Package Manager web3.unity Package Page
![](v2Assets/openupmInstall.png)
5. Packages will be installed and the SDK will be available to you.

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

### Wallet Connect

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

### Example Scene

If you navigate to Window -> Package Manager -> Web3Unity SDK -> Samples, you can import an example package to help you understand the SDK. Press import and let it load into the project. You'll see some new files in your project under samples, these files contain everything we need to get started with the SDK. Have a look around, check out the script and the scene locations.

![](v2Assets/ImportingSamples.png)

You'll notice when you import the samples into the project that some scenes are added to your build configuration. This is to show you a demo of how all the functions in the SDK work. Simply go to the sample log in scene and press play to connect a wallet to get started with some examples.

![](v2Assets/ImportedScenes.png)

Once you've logged in it will take you to the main scene. You can play around in the menus and check out each scripts functionality by pressing the show script button, this will highlight the script in the editor and allow you to inspect it further. If you're an advanced developer you should have enough to work with from the sample scripts in front of you. If you're just beginning we suggest you take a look at our easy to use prefabs below.

![](v2Assets/MainScene.png)

### Prefab Scripts

We've created some easy to use prefab scripts, think of it as a beginner friendly layer. Feel free to check out the prefab scripts area of the docs [here](https://docs.gaming.chainsafe.io/current/prefab-scripts), you'll find helpful snippets of code that you can drop in and out of your scenes. Please note that you must have the samples package above installed to use the prefab scripts or they'll be missing some dependencies.