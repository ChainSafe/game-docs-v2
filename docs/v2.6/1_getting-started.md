---
slug: /current/getting-started
sidebar_position: 1
sidebar_label: Getting Started
---


# Getting Started

:::info

This page will walk you through the process of installing the Web3 Unity SDK, setting up a project ID, and installing the ChainSafe Gaming sample scenes.

:::


## Install the Web3.Unity SDK via Github Paths

On the top bar in unity, navigate to Window → Package Manager → Press the plus button on the top left → Add via Git Url.
   
![](Assets/install-package.png)

Core SDK
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity

Marketplace Package
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.marketplace

Lootboxes Package
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.lootboxes

Ramp Package
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.ramp

Web3Auth Package
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.web3auth

HyperPlay Package
https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.hyperplay

![](Assets/import-samples.png)

Please note that each package has samples that can be installed, these samples are built to give you a working example on the packages calls. You will also need the CORESDK samples package if you want to work with the prefab scripts seen [here](https://docs.gaming.chainsafe.io/current/prefab-scripts)

### Updating via The Package Manager

Go to window → package manager → select the web3.unity SDK package and press update. The same can be done for any additional packages you have installed, web3auth, lootboxes etc.

## ChainSafe Server Settings

### Set Project ID

As the package is installed, you'll be prompted with the ChainSafe server settings. First you have to setup your Project ID. You can create one [here](https://dashboard.gaming.chainsafe.io/) or you can click on the need to register button in the server settings.

![](Assets/project-settings.png)

After you've completed the registration process, copy your Project ID into the project settings
window. Save settings. You should see a message in the console saying your project id is valid.

### Other Server Settings

Select the chain you would like to use and the rest of the fields will auto populate. If you would like to set up your own RPC node, visit [this page](https://docs.gaming.chainsafe.io/current/setting-up-an-rpc-node).

Once your project is set up you can choose the wallet you want your players to use.