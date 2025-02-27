---
slug: /launchpad/details
sidebar_position: 2
sidebar_label: Knowledge Base
---

#  Knowledge Base

This section contains detailed information about the NFT Launchpad terminologies and its features. At the end
of the section, you will have a clear understanding of the NFT Launchpad hierarchy and its features.

### Project

A project can be considered as a game. When you create a new game, you create a project for that game on chainsafe [Gaming Dashboard](https://dashboard.gaming.chainsafe.io/dashboard?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs). 
A project is the first level of hierarchy in the chainsafe gaming ecosystem. Anything you will create in the gaming ecosystem will be under a project.
You can create multiple collections and mint NFTs under a project.

### Collection

A collection is an NFT minter contract that’s deployed to a blockchain. You can create a collection for a project and mint NFTs for that collection. 
A collection is a second level of hierarchy in the NFT Launchpad. A project can have multiple collections under the project. 
You can think of a collection as a group of assets that are related to each other. For example, a collection can be a set of
characters, weapons, or skins for a game.

### NFTs

NFTs are the assets that are minted for a collection. 
You can mint NFTs for a collection and link them to your game. An NFT is a third level of hierarchy in the NFT Launchpad.
A collection can have multiple NFTs under the collection. An NFT can be a character, weapon, skin, or any other asset you want to link to your game.
Gamers can trade, sell, or buy NFTs in the game.

Currently, we are supporting ERC721 and ERC1155 token standards. NFT metadata is uploaded to [ChainSafe Storage](https://storage.chainsafe.io/?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) powered by IPFS.
You can add custom attributes to your NFTs, which can be utilized in your game. For example, you can add attributes like `power`, `speed` and `health` to a character NFT.
You can also add custom images to your NFTs. 

You can utilize NFT data seamlessly through standardized APIs. You can list your NFTs in your game and let users buy, sell, and trade them in the game itself.

#### NFT Metadata

Adding Metadata to a token enables games to import detailed information and showcase your token's data.
Usually, digital assets are identified just by their Token ID. Metadata adds extra details to these assets, giving them properties such as a title, a narrative, and visuals.

You can add custom attributes to your NFTs, which can be utilized in the game. For example, you can add attributes like `power`, `speed` and `health` to a character NFT as metadata fields.

We store the metadata of the NFTs on [ChainSafe Storage](https://storage.chainsafe.io/?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) which is powered by IPFS. We store the IPFS CID 
of the metadata on-chain. The metadata is stored in a JSON format and can be accessed using the IPFS CID via any public IPFS gateway.

### Supported Chains&#x20;

You can currently create collections and mint NFTs for the following chains:

| Network Name   | Type of Chain | Chain ID |
|----------------|---------------|----------|
| ETH Sepolia    | Testnet       | 11155111 |
| Polygon Mumbai | Testnet       | 80001    |
| BSC            | Testnet       | 97       |
| Avalanche      | Testnet       | 43113    |
| B3 Sepolia     | Testnet       | 1993     |