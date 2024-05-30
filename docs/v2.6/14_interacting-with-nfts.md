---
slug: /current/interacting-with-nfts
sidebar_position: 14
sidebar_label: Interacting With NFTs
---


# Interacting with NFTs

:::info

This area will explain basic interactions for ERC721 and ERC1155 tokens with the SDK.

:::

There are 2 standards available for NFTs. ERC-721 and ERC-1155. Both are supported in the SDK.

### ERC-721 NFTs

ERC-721 is a standard for non-fungible tokens (NFTs) on the Ethereum blockchain. 
Unlike cryptocurrencies such as Ether (ETH) that are interchangeable and have the
same value, each ERC-721 token is unique and represents a distinct digital asset or item.
These tokens are indivisible and cannot be exchanged on a one-to-one basis.

To get a count of NFTs that player owns use `ERC721.BalanceOf()` method:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
var account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
var balance = await ERC721.BalanceOf(contract, account);
```

Use `ERC721.OwnerOf()` to get the owner of an NFT:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x06dc21f89f01409e7ed0e4c80eae1430962ae52c";
var tokenId = "0x01559ae4021a565d5cc4740f1cefa95de8c1fb193949ecd32c337b03047da501";
var ownerOf = await ERC721.OwnerOf(contract, tokenId);
```

There is also a batch version `ERC721.OwnerOfBatch`:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x47381c5c948254e6e0E324F1AA54b7B24104D92D";
string[] tokenIds = { "33", "29" };
List<string> batchOwners = await ERC721.OwnerOfBatch(contract, tokenIds);
```

To get a Uniform Resource Identifier (URI) associated with an NFT use `ERC721.URI`:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
var tokenId = "1";
var uri = await ERC721.URI(contract, tokenId);
```

### ERC-1155

ERC-1155 is a versatile token standard that allows for the creation of both fungible 
(identical and interchangeable) and 
non-fungible tokens (NFTs) within the same smart contract. Developed as an improvement over 
ERC-20 and ERC-721, ERC-1155 offers significant advantages in terms of efficiency and flexibility.

Using ERC-1155, you can manage multiple token types within a single contract, reducing gas 
costs and minimizing blockchain bloat. This means that a single smart contract can handle various
digital assets, including NFTs representing unique items and fungible tokens like currencies or
in-game resources.

The standard supports batch transfers, making it easier to manage multiple tokens in one transaction.
This is particularly useful for gaming and virtual asset ecosystems where players can buy, sell, 
and trade different items efficiently.

Utility class `ERC1155` contains methods `BalanceOf`, `BalanceOfBatch` and `URI`.

BalanceOf:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x2c1867bc3026178a47a677513746dcc6822a137a";
var account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
var tokenId = "5";

var balanceOf = await ERC1155.BalanceOf(contract, account, tokenId);
```

BalanceOfBatch:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;
var contract = "0xdc4aff511e1b94677142a43df90f948f9ae181dd";
string[] accounts = { "0x990aef1085b2f6480a94bba53cbc03215d321e25", "0x9cd14e32E3B1AAf35D61EBD9066Ef8e3B06b23ad" };
string[] tokenIds = { "1", "2" };

List<BigInteger> batchBalances = await ERC1155.BalanceOfBatch(contract, accounts, tokenIds);
```

URI:

```csharp
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contract = "0x2c1867BC3026178A47a677513746DCc6822A137A";
var tokenId = "5";
var uri = await ERC1155.URI(contract, tokenId);
```