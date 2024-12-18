---
slug: /current/getting-started
sidebar_position: 1
sidebar_label: Getting Started
---


# Getting Started

:::info

This page will walk you through the process of installing the Web3 Unity SDK, setting up a project ID, and installing the ChainSafe Gaming sample scenes.

:::


## Install the Web3.Unity SDK via Unity Package Manager

On the top bar in unity, navigate to Window → Package Manager → Press the plus button on the top left → Add via Git URL.
   
![](assets/getting-started/package-manager-add-package.png)

Our packages are modular so your project wont bloat out with SDK files and you can have a lean development environment. The first piece you will need to begin your development journey is the core SDK package. This package contains everything you need for standard chain interactions. Simply enter this url into the add path field of the package manager.

### Packages

**Core SDK**
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity 
```

If you prefer to download packages trough openUPM you can do it trough the following link:
```js
https://openupm.com/packages/io.chainsafe.web3-unity/?subPage=readme
```

### Extensions
Other modules that depend on the core SDK and can be downloaded through git or openUPM:

#### Web3Auth Login Provider ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.web3auth
```

#### Hyperplay Login Provider ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.hyperplay
```

#### Lootboxes ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.lootboxes
```

#### Marketplace ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.marketplace
```

#### MUD ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.mud
```

#### Fiat On/Off Ramp support ####
```js
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.ramp
```



:::note
Each package has samples that can be installed, these samples are built to give you a working example on the packages calls. You will also need the CORE SDK samples package if you want to work with the sample scripts seen [here](/current/sample-scripts)

![](assets/getting-started/import-samples.png)
:::

### Updating via The Package Manager

Go to window → package manager → select the web3.unity SDK package and press update. The same can be done for any additional packages you have installed, web3auth, lootboxes etc.

## ChainSafe Server Settings

### Set Project ID

As the package is installed, you'll be prompted with the ChainSafe server settings. First you have to setup your Project ID. You can create one [here](https://dashboard.gaming.chainsafe.io/) or you can click on the "Get a Project ID" button in the server settings.

![](assets/getting-started/project-settings.png)

### Set Chain

After you've completed the registration process, copy your Project ID into the project settings window. You should see a message in the console saying your project id is valid. 
Next up, you need to set up the list of chains you want to interact with inside of your project:

![](assets/getting-started/chain-settings.png)

You need a minimum of 1 chain for the SDK to work normally.

:::info
All of our samples are made on the Ethereum Sepolia network. If you run the samples whilst you are on another chain, you will get an exception.
:::

### Accessing Server Settings

If you need to refer to the ChainSafe server settings area again, you can find it on the top navigation bar. Simply select it and press server settings to view the menu.

![](assets/getting-started/project-settings-menu.png)

### Add a Web3 Client object to your scene
Right-click inside the Hierarchy view and select **Web3/Web3 Client**. This will add a new Web3 Client object for you.

![](assets/getting-started/create-web3-client-menu.png)

Now after you've done this, you need to choose your wallet provider.