---
slug: /v1/getting-started-v1
sidebar_position: 1
sidebar_label: Getting Started V1
---

# Getting Started V1

SDK: [https://github.com/ChainSafe/web3.unity/releases](https://github.com/ChainSafe/web3.unity/releases)

Bridging Unity games to the blockchain. Create your in game NFTs.

## Discussion

Discord: [https://discord.gg/gG7dZrGJaa](https://discord.gg/gG7dZrGJaa)

## Tutorial

### Demo

In this video, we will go over the final project. This project will show you the end product of a game that connects to an open marketplace like OpenSea and connect this to a game object in Unity3D.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/j5YF6gqzREc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Installing SDK

Install [JSON.NET](https://assetstore.unity.com/packages/tools/input-management/json-net-for-unity-11347) to fix: `The type or namespace name 'Newtonsoft' could not be found`

&#x20;In this video, we will show the user how to install the ChainSafe gaming SDK and integrate it into the Unity3D game engine. We also show some common pitfalls that users may run into. Most notably the missing Newtonsoft error described above.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/DSjOJJ9oFIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SDK Overview

In this video, we will go over the SDK. We will discuss the various components that make up the SDK and show an example of how these Prefabs (Preconfigured Unity Components) and how you can use these to construct your blockchain enhanced games.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/CSSN4OGyXrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SDK Prefabs

This video, will go further into the discussion of Prefabs and their use in the ChainSafe gaming SDK and also the scripts that power them. We will also show how these base scripts can be extended with your own functionality.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/xfo-kue1uPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Create In-Game NFT

In this video, knowing how these prefabs work. We will create a base game object that we can texture based on a user having ownership of an NFT. We will base this logic on the BalanceOf function which determines if a users balance is greater than zero. In the blockchain world, this means if a user owns an asset. If the user does own the asset we will change the texture of the game object.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/axA65yq2dMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- ### Minting NFT

In this video, we will mint an NFT on the most popular NFT market place OpenSea. We will use a sample image and deploy this NFT to the Rinkeby testnet. Rinkeby is a testnet that works like the Ethereum mainnet. This is a good option for those wanting to test out their ideas before launching and paying real Ether. We will also get the needed values for this NFT that we can plug into our script. The contract address., token Id, and the blockchain we deployed too.&#x20; -->


### Connect NFT to Marketplace

In this video, after finishing minting our NFT on OpenSea. We can now modify our script with the values we got from the NFT we minted. Once you have completed this video. Your game object will be connected to the NFT that is on OpenSea and connected to the blockchain.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/5aba12uosio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Building Game

We have come a long way and now we are ready to build out our game to WebGL. We will take a look at the WebGLTemplates that allow our blockchain enhanced game to connect to our crypto wallets and also configure these to work with different blockchains.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/3zCSuTl0Ads" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Final Project

In this video, we will deploy our finished game and connect our MetaMask wallet with the account that owns the NFT. We will also switch our accounts to verify that our game object only changes behavior when we logged in with the account that owns the NFT.

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/yntqGedig0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Player Account

`PlayerPrefs.GetString("Account")` is the user's wallet account accessed after the LoginScene.

```csharp
string account = PlayerPrefs.GetString("Account");
print(account);
```

## Supported Blockchains

The SDK will require variables `chain` and `network`.  These values are needed by the SDK to determine whether you are connecting to a testnet or mainnet deployment of your chosen blockchain.

| chain     | network                                                                   |
| --------- | ------------------------------------------------------------------------- |
| ethereum  | <ul><li>mainnet</li><li>goerli</li></ul>                                  |
| avalanche | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| binance   | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| moonbeam  | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| polygon   | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| xdai      | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| harmony   | <ul><li>mainnet </li><li>testnet</li></ul>                                |
| cronos    | <ul><li>mainnet </li><li>testnet </li><li><strong>beta</strong></li></ul> |

Some of the SDK calls are not supported on all networks. The table below details the calls that are supported on each network.\


| Network                 | EVM Block Number                    | EVM Balance Of                      | EVM Verify                          | EVM Transaction Status              | EVM Nonce                           | EVM Convert                         | ERC1155 Balance Of                  | ERC1155 Owner Of                    | ERC1155 Owner Of Batch              | ERC1155 URI                         | ERC1155 All1155s | ERC721 Balance Of                   | ERC721 Owner Of                     | ERC721 Owner Of Batch               | ERC721 URI                          | ERC721 All721s | ERC20 Balance Of                    | ERC20 Name                          | ERC20 Symbol                        | ERC20 Decimals                      | ERC20 Total Supply                  | EVM Custom Contract Call            |
| ----------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ---------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | -------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| Ethereum Mainnet        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ethereum Goerli Testnet | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Avalanche Mainnet       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Avalanche Testnet       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Binance Mainnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Binance Testnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Moonbeam Mainnet        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Moonbeam Testnet        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Polygon Mainnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Polygon Testnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| XDai Mainnet            | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| XDai Testnet            | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Harmony Mainnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Harmony Testnet         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cronos Mainnet          | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cronos Testnet          | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌                | ✅ | ✅ | ✅ | ✅ | ❌              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## EVM Blockchain

### Block number

Get the current latest block number

```csharp
string chain = "ethereum";
string network = "mainnet"; // mainnet ropsten kovan rinkeby goerli

int blockNumber = await EVM.BlockNumber(chain, network);
print(blockNumber);
```

### Balance Of

Get the balance of the native blockchain

```csharp
string chain = "ethereum";
string network = "goerli"; // mainnet ropsten kovan rinkeby goerli
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";

string balance = await EVM.BalanceOf(chain, network, account);
print(balance);
```

### Verify

Verify a signed message.

```csharp
string message = "YOUR_MESSAGE";
string signature = "0x94bdbebbd0180195b89721a55c3a436a194358c9b3c4eafd22484085563ff55e49a4552904266a5b56662b280757f6aad3b2ab91509daceef4e5b3016afd34781b";

string address = await EVM.Verify(message, signature);
print(address);
```

### Transaction Status

Transactions can have three distinct states. You can use the EVM.TxStatus to capture these and perform additional logic in your games.

```csharp
string chain = "ethereum";
string network = "mainnet";
string transaction = "0x911d4ec9193e0dc14d9d034d88c311453112c5097f29c366ccc9c5e5bc7072e1";

string txConfirmed = await EVM.TxStatus(chain, network, transaction);
print(txConfirmed); // success, fail, pending
```

### Nonce

As described in the Ethereum Yellow Paper. A nonce is a scalar value equal to the number of transactions sent from this address or, in the case of accounts with associated code, the number of contract creations made by this account.

```csharp
string chain = "ethereum";
string network = "rinkeby";
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";

string nonce = await EVM.Nonce(chain, network, account);
print(nonce);
```

### Convert WEI to ETH and ETH to WEI

Ethereum values are described in `wei` although it's easier for us to describe this in `ether` . We have provided easy conversions for you that you can use to describe this in the order you wish.&#x20;

```csharp

float eth = float.Parse("0.1");
float decimals = 1000000000000000000; // 18 decimals
float wei = eth * decimals;
print(Convert.ToDecimal(wei).ToString());

float wei = float.Parse("10123755");
float decimals = 1000000000000000000; // 18 decimals
float eth = wei / decimals;
print(Convert.ToDecimal(eth).ToString());
```

## ERC1155

A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).

### Balance Of

Returns the account balance of another account with address \_owner

```csharp
string chain = "avalanche";
string network = "testnet";
string contract = "0xbDF2d708c6E4705824dC024187cd219da41C8c81";
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
string tokenId = "2";

BigInteger balanceOf = await ERC1155.BalanceOf(chain, network, contract, account, tokenId);
print(balanceOf);
```

### Balance Of Batch

Balance of batch will get the balance of a list of accounts and token ids. For example:

Get the balance of account `0xaCA9B6D9B1636D99156bB12825c75De1E5a58870` with token id `17` and

balance of account `0xaCA9B6D9B1636D99156bB12825c75De1E5a58870` with token id `22`

```csharp
string chain = "ethereum";
string network = "goerli";
string contract = "0x2ebecabbbe8a8c629b99ab23ed154d74cd5d4342";
string[] accounts = { "0xaCA9B6D9B1636D99156bB12825c75De1E5a58870", "0xaCA9B6D9B1636D99156bB12825c75De1E5a58870" };
string[] tokenIds = { "17", "22" };

List<BigInteger> batchBalances = await ERC1155.BalanceOfBatch(chain, network, contract, accounts, tokenIds);
foreach (var balance in batchBalances)
{
    print ("BalanceOfBatch: " + balance);
} 
```

### URI

Returns meta data about the token.

```csharp
string chain = "binance";
string network = "mainnet";
string contract = "0x3E31F70912c00AEa971A8b2045bd568D738C31Dc";
string tokenId = "770";

string uri = await ERC1155.URI(chain, network, contract, tokenId);
print(uri);
```

### All 1155s

Get all 1155 tokens from an account.

Please refer to Assets/Web3Unity/Scripts/Prefabs/EVM/AllErc1155Example.cs for it's example usage.

```csharp
string chain = "ethereum";
string network = "goerli"; // mainnet ropsten kovan rinkeby goerli
string account = "0xebc0e6232fb9d494060acf580105108444f7c696";
string contract = "";
int first = 500;
int skip = 0;
string response = await EVM.AllErc1155(chain, network, account, contract, first, skip);
print(response);
```

## ERC721

A standard interface for non-fungible tokens

### Balance Of

Counts all NFTs assigned to an owner based on the contract address and account supplied.

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0x60f80121c31a0d46b5279700f9df786054aa5ee5";
string account = "0x6b2be2106a7e883f282e2ea8e203f516ec5b77f7";

int balance = await ERC721.BalanceOf(chain, network, contract, account);
print(balance);
```

### Owner Of

Find the owner of a NFT based on the contract address and token Id of the NFT.

```csharp
string chain = "moonbeam";
string network = "testnet";
string contract = "0xcB0cbcE06860f6C30C62560f5eFBF918150e056E";
string tokenId = "1";

string ownerOf = await ERC721.OwnerOf(chain, network, contract, tokenId);
print(ownerOf);
```

### Owner Of Batch

Owner of batch will get the owners of a list of accounts and token ids.&#x20;

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0xA74E199990FF572A320508547Ab7f44EA51e6F28";
string[] tokenIds = {"700", "791"};

List<string> batchOwners = await ERC721.OwnerOfBatch(chain, network, contract, tokenIds);
foreach (string owner in batchOwners)
{
  print ("OwnerOfBatch: " + owner);
}
```

### URI

Returns meta data about the token.

```csharp
string chain = "polygon";
string network = "mainnet";
string contract = "0xbCCaa7ACb552A2c7eb27C7eb77c2CC99580735b9";
string tokenId = "965";

string uri = await ERC721.URI(chain, network, contract, tokenId);
print(uri)
```

### All 721s

Get all 721 tokens from an account

Please refer to Assets/Web3Unity/Scripts/Prefabs/EVM/AllErc721Example.cs for it's example usage.

```csharp
string chain = "ethereum";
string network = "goerli"; // mainnet ropsten kovan rinkeby goerli
string account = "0xebc0e6232fb9d494060acf580105108444f7c696";
string contract = "";
int first = 500;
int skip = 0;
string response = await EVM.AllErc721(chain, network, account, contract, first, skip);
print(response);
```

## ERC20

A standard interface for tokens.

### Balance Of

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";
string account = "0x000000ea89990a17Ec07a35Ac2BBb02214C50152";

BigInteger balanceOf = await ERC20.BalanceOf(chain, network, contract, account);
print(balanceOf);
```

### Name

Returns the name of the token. E.g. "Wrapped Ether"

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";

string name = await ERC20.Name(chain, network, contract);
print(name);
```

### Symbol

Returns the symbol of the token. E.g. “WETH”.

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0xdac17f958d2ee523a2206206994597c13d831ec7";

string symbol = await ERC20.Symbol(chain, network, contract);
print(symbol);
```

### Decimals

Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation.

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";

BigInteger decimals = await ERC20.Decimals(chain, network, contract);
print(decimals);
```

### Total Supply

Returns the total token supply.

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";

BigInteger totalSupply = await ERC20.TotalSupply(chain, network, contract);
print(totalSupply);
```

## Custom Interactions

### Call Custom Blockchains

Connect to any EVM compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL.

```csharp
string chain = "rootstock";
string network = "testnet"; 
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
string rpc = "https://public-node.testnet.rsk.co";

string balance = await EVM.BalanceOf(chain, network, account, rpc);
print(balance);
```

### Call Custom Contracts

Call will execute a smart contract method without altering the smart contract state.

Working example: [https://chainsafe.github.io/game-sendContract-example/](https://chainsafe.github.io/game-sendContract-example/)

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/8A9NmuCucqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```csharp
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddTotal {
    uint256 public myTotal = 0;

    function addTotal(uint8 _myArg) public {
        myTotal = myTotal + _myArg;
    }
}
```

```csharp
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "goerli";
// smart contract method to call
string method = "myTotal";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F";
// array of arguments for contract
string args = "[]";
// connects to user's browser wallet to call a transaction
string response = await EVM.Call(chain, network, contract, abi, method, args);
// display response in game
print(response);
```

## WebGL

### Get User's Network

```csharp
/*
1 Mainnet
5 Goerli
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
338 Cronos Testnet
25 Cronos Mainnet
*/
int networkId = Web3GL.Network();
```

### Send Transaction through WebGL

```csharp
// account to send to
string to = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// amount in wei to send
string value = "12300000000000000";
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// connects to user's browser wallet (metamask) to send a transaction
try {
    string response = await Web3GL.SendTransaction(to, value, gasLimit, gasPrice);
    Debug.Log(response);
} catch (Exception e) {
    Debug.LogException(e, this);
}
```

### Send Contract through WebGL

Send will execute a smart contract method, altering the smart contract state.

Working example: [https://chainsafe.github.io/game-sendContract-example/](https://chainsafe.github.io/game-sendContract-example/)

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/buxj5VXi_qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```csharp
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddTotal {
    uint256 public myTotal = 0;

    function addTotal(uint8 _myArg) public {
        myTotal = myTotal + _myArg;
    }
}
```

```csharp
// smart contract method to call
string method = "addTotal";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F";
// array of arguments for contract
string args = "[\"1\"]";
// value in wei
string value = "0";
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// connects to user's browser wallet (metamask) to update contract state
try {
  string response = await Web3GL.SendContract(method, abi, contract, args, value, gasLimit, gasPrice);
  Debug.Log(response);
} catch (Exception e) {
  Debug.LogException(e, this);
}
```

### Sign through WebGL

Working example: [https://chainsafe.github.io/game-sign-example/](https://chainsafe.github.io/game-sign-example/)

```csharp
try {
  string message = "hello";
  string response = await Web3GL.Sign(message);
  Debug.Log(response);
} catch (Exception e) {
  Debug.LogException(e, this);
}
```

## Mobile & Desktop

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/41w6G6Hp9ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Sign through Mobile and Desktop

```csharp
string response = await Web3Wallet.Sign("hello");
print(response);
```

### Sending Transaction through Mobile and Desktop

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
// account to send to
string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
// value in wei
string value = "12300000000000000";
// data OPTIONAL
string data = "";
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, to, value, data, gasLimit, gasPrice);
print(response);
```

### Transfer ERC-1155 NFT Token through Mobile and Desktop

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
// contract to interact with 
string contract = "0x6b0bc2e986b0e70db48296619a96e9ac02c5574b";
// value in wei
string value = "0";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"uri_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" } ], \"name\": \"TransferBatch\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"TransferSingle\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"string\", \"name\": \"value\", \"type\": \"string\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"URI\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address[]\", \"name\": \"accounts\", \"type\": \"address[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" } ], \"name\": \"balanceOfBatch\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_address\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"ownerMint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeBatchTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"uri\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// smart contract method to call
string method = "safeTransferFrom";
// account to send tokens to
string toAccount = PlayerPrefs.GetString("Account");
// token id to send
string tokenId = "2";
// amount of tokens to send
string amount = "1";
// array of arguments for contract
string[] obj = { PlayerPrefs.GetString("Account"), toAccount, tokenId, amount, "0x" };
string args = JsonConvert.SerializeObject(obj);
// create data to interact with smart contract
string data = await EVM.CreateContractData(abi, method, args);
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, value, data, gasLimit, gasPrice);
print(response);
```

### Transfer ERC-721 NFT Token through Mobile and Desktop

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
// contract to interact with 
string contract = "0xde458cd3deaa28ce67beefe3f45368c875b3ffd6";
// value in wei
string value = "0";
// abi in json format
string abi = "[{ \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }]"; 
// smart contract method to call
string method = "safeTransferFrom";
// account to send erc721 to
string toAccount = PlayerPrefs.GetString("Account");
// token id to send
string tokenId = "5";
// array of arguments for contract
string[] obj = { PlayerPrefs.GetString("Account"), toAccount, tokenId };
string args = JsonConvert.SerializeObject(obj);
// create data to interact with smart contract
string data = await EVM.CreateContractData(abi, method, args);
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, value, data, gasLimit, gasPrice);
print(response);
```

### Transfer ERC-20 Token through Mobile and Desktop

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
// contract to interact with 
string contract = "0xc778417e063141139fce010982780140aa0cd5ab";
// value in wei
string value = "0";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"name_\", \"type\": \"string\" }, { \"internalType\": \"string\", \"name\": \"symbol_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" } ], \"name\": \"allowance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"subtractedValue\", \"type\": \"uint256\" } ], \"name\": \"decreaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"addedValue\", \"type\": \"uint256\" } ], \"name\": \"increaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
// smart contract method to call
string method = "transfer";
// account to send erc20 to
string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
// amount of erc20 tokens to send
string amount = "1000000000000000";
// array of arguments for contract
string[] obj = {toAccount, amount};
string args = JsonConvert.SerializeObject(obj);
// create data to interact with smart contract
string data = await EVM.CreateContractData(abi, method, args);
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, value, data, gasLimit, gasPrice);
print(response);
```

## Importing NFTs

### NFT Textures

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/jG5joXzBuh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
