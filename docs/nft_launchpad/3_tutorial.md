---
slug: /launchpad/tutorial
sidebar_position: 3
sidebar_label: Tutorial
---

# NFT Launchpad Tutorial

This tutorial will guide you through the process of creating a collection, minting NFTs, and launching your NFT project using the ChainSafe NFT Launchpad.

## Prerequisites

Before you begin, ensure you have the following:

- A project created for your game. If you don't have one, you can create one [here](https://dashboard.gaming.chainsafe.io/dashboard?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs).

- Connect your wallet to the ChainSafe Gaming Dashboard. You can connect your wallet by clicking on the `Connect Wallet` button on the top right corner of the dashboard.

## 1. Create Project

:::info
You can skip this step if you already have a project created for your game.
:::

- Go to the [ChainSafe Gaming Dashboard](https://dashboard.gaming.chainsafe.io/dashboard?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) and click on the `+` button on the top right.

- Fill in the details for your project and click on `Create Project` button.

![](./assets/create_project.gif)

## 2. Create a Collection

- Head over to `NFT Launchpad` tab in the [ChainSafe Gaming Dashboard](https://dashboard.gaming.chainsafe.io/nfts/entry?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs).


- Select the project you want to create a collection for.


- Click on the `New Collection` button on top right


- Fill in the details for your collection and click on `Create Collection` button.

![](./assets/create_collection.gif)


### Collection Details

- **Name**: The name of your collection.
- **Description**: A brief description of your collection.
- **Network**: The chain for which you want to create the collection.
- **Collection Type**: The type of collection you want to create. You can choose from `ERC721`, `ERC1155`
- **Logo Image**: The logo for your collection. This is an optional field.
- **Banner Image**: The banner for your collection. This is an optional field.


## 3. Mint NFT

Once you have created a collection, you can mint NFTs for that collection.

- Click on the collection you want to mint NFTs for.


- Click on the `Mint New NFT` button on top right in the collection you want to mint NFTs for.


- Fill in the details for your NFT and click on `Mint NFT` button.

![](./assets/mint_nft.gif)


### Mint NFT Details

- **Name**: The name of your NFT.
- **Description**: A brief description of your NFT.
- **Token Type**: The type of token you want to mint. You can choose from `ERC721`, `ERC1155`
- **Supply**: The supply of your NFT. This option is only available for `ERC1155` tokens.
- **Additional Media**: 
  - **Additional Files**: You can also add custom images to your NFTs. You can instead specify the CID of the image on IPFS as well. This is an optional field. 
  - **Custom Attributes**: You can add custom attributes to your NFTs which can be utilized in the game. For example, you can add attributes like `power`, `speed`, `health` to a character NFT.
                          
- **Upload File**: You need to upload the image for your NFT. This is a mandatory field.

### Contract ABIs

You can download minter contract ABIs:

- [721 minter contract ABI](./assets/721_minter_contract_abi.json)
- [1155 minter contract ABI](./assets/1155_minter_contract_abi.json)

## 4. Launch Your NFT Project

Once you have minted NFTs for your collection, you can access your collection and NFTs directly into your game using the
set of APIs provided by the ChainSafe. Head over to the [Tokens API Specification](./../token-api/docs/tokenapi.mdx) to know more about how to interact with the NFTs and collections via APIs. 

