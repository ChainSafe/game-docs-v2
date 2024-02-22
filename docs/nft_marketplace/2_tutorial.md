---
slug: /marketplace/tutorial
sidebar_position: 2
sidebar_label: Tutorial
---

# Marketplace Tutorial

This guide will help you to create an on-chain marketplace for your game and list NFTs for sale in marketplace.

## Prerequisites

Before you begin, ensure you have the following:

- A project created for your game. If you don't have one, you can create one [here](https://dashboard.gaming.chainsafe.io/dashboard).

- You should have already created some nfts for your game inside of the project. If you haven't, you can create some [here](https://dashboard.gaming.chainsafe.io/nfts/entry).

- Connect your wallet to the ChainSafe Gaming Dashboard. You can connect your wallet by clicking on the `Connect Wallet` button on the top right corner of the dashboard.

## 1. Select Project

- Select the project for which you want to create a marketplace.

![](./assets/select_project.gif)

## 2. Deploy Marketplace

- Click on the `Deploy Marketplace` tab on the right top corner.


- Fill in the details for your marketplace and click on `Create Marketplace` button.

:::info
Please wait for few seconds, it will take some time to deploy the marketplace on the blockchain.
:::

![](./assets/deploy_marketplace.gif)


### Marketplace Details

- **Name**: The name of your marketplace.
- **Description**: A brief description of your marketplace.
- **Network**: The chain for which you want to create the marketplace.

:::info
Make sure you have minted the NFTs for the same network inside of NFT Launchpad.
:::
- **Logo Image**: The logo for your marketplace.

### Marketplace ABI

Remeber marketplace is an on chain contract, so you will need the ABI to interact with the marketplace contract. Below you can find the ABI of
marketplace contract.

[Marketplace ABI](./assets/marketplace_abi.json)

## 3. List NFT For Sale

Once you have created a marketplace, its time to list some NFTs for sale in the marketplace.

- Select the marketplace where you want to list the NFTs for sale.


- Click on the `List New NFT` tab on the right top corner.


- Select the NFTs that you want to list for sale in the marketplace and input the price at which you want to list the NFT.

![](./assets/list_nft.gif)



## 4. Launch Your Marketplace

Once you have list NFTs for your marketplace, you can access your marketplace items via RESTful set of APIs provided by the ChainSafe.
Head over to the [Marketplace API Specification](./../marketplace-api/docs/marketplaceapi.mdx) to know more about how to interact with the marketplace items. 

