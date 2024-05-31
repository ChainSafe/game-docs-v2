---
slug: /current/marketplace
sidebar_position: 18
sidebar_label: Marketplace
---


# Marketplace

:::info

This page will walk you through our marketplace feature.

:::

## What is the Chainsafe marketplace?
ChainSafe's marketplace is an NFT trading hub where you can create collections of NFTs and list them into different marketplaces. You can then dispaly these marketplaces and interact with them in game. The marketplace dashboard can be accessed [here](https://dashboard.gaming.chainsafe.io) You can find a variety of services here to compliment your marketplace, from collections to minting NFTs.

1. You can import our Marketplace sample scene by navigating to Window → Package Manager.
2. Add a new package by name by pressing + and adding via git url and entering `https://github.com/ChainSafe/web3.unity.git?path=/Packages/io.chainsafe.web3-unity.marketplace`
3. Once the package is installed, click on the Samples tab. Import the samples.
4. Once imported, you can find the scene by navigating to Samples → web3.unity SDK → 2.6 → Web3.Unity Samples → Scenes → SampleLogin - Marketplace.
5. Click on the Login Logic - Ramp object and in the inspector, modify the Scene To Load to your preferred scene.
6. Add the Marketplace scene and your scene to the build settings, and you’re done.

## How do i access the marketplace?
The marketplace dashboard can be accessed [here](https://dashboard.gaming.chainsafe.io/marketplaces)
The NFT dashboard can be accessed [here](https://dashboard.gaming.chainsafe.io/marketplaces)

## Can i use this within my unity project?
You certainly can! With our new marketplace package you can even call marketplace data, list and even purchase NFTs from other marketplaces.

## What about metadata?
We've included a function to upload files automatically to ChainSafe's storage which will also pin to IPFS. This is automatically done in the creation calls included found in the marketplace package. We've also included this in a more granular fashion in the IPFS calls section of the sample main scene should you want to have alternate metadata for your NFTs.