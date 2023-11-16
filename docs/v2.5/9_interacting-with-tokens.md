---
slug: /current/interacting-with-tokens
sidebar_position: 9
sidebar_label: Interacting With Tokens
---


# Interacting with Tokens

:::info

This area will explain basic interactions for native and custom tokens with the SDK.

:::

You can interact with any EVM coins using our SDK. No matter if it's ETH,
USDT or your custom ERC-20 smart contract for fungible tokens.

### Native Tokens

To read balance of ETH for the specified user use:

```csharp
using ChainSafe.Gaming;

var address = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
var hexBalance = await web3.RpcProvider.GetBalance(address);
var balance = hexBalance.Value;
```

To send ETH over the network use the SendTransaction method of TransactionExecutor:

```csharp
using ChainSafe.Gaming;
using ChainSafe.Gaming.Evm;
using Nethereum.Hex.HexTypes;

var destinationAddress = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
var weiToSend = 1000000000000000000; // 10^18 wei = 1 eth
var request = new TransactionRequest
{
    To = destinationAddress,
    Value = new HexBigInteger(weiToSend)
};

var response = await web3.TransactionExecutor.SendTransaction(request);
```

### Custom ERC-20 Tokens

If your token implements ERC-20 standard you can request balance, name, symbol,
number of decimals and total supply using the ERC20 utility class:

```csharp
using ChainSafe.Gaming;
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var contractAddress = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";

var rawBalance = await ERC20.BalanceOf(contractAddress, "0xdD4c825203f97984e7867F11eeCc813A036089D1");
var tokenName = await ERC20.Name(contractAddress);
var tokenSymbol = await ERC20.Symbol(contractAddress);
var decimals = await ERC20.Decimals(contractAddress);
var totalSupply = await ERC20.TotalSupply(contractAddress);

var balance = rawBalance / decimals;
```

To send ERC-20 tokens over the network you'd have to use the Smart Contract API:

```csharp
var contractAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
var abi = ABI.ERC_20;
var contract = web3.ContractBuilder.Build(abi, contractAddress);

var method = EthMethod.Transfer;
var toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
var amount = "1000000000000000";
var response = await contract.Send(method, new object[]
{
    toAccount,
    amount
});
```

To learn more about Smart Contract API visit "Interacting with Smart-Contracts" section [Here](https://docs.gaming.chainsafe.io/interacting-with-smart-contracts/).

### Decimals and Conversion

All operations with eth or any ERC-20 token expect amounts in smallest unit know as wei and you might want to convert this
number before showing it to a user. Converting units is as simple as dividing or multiplying it by a _10^n_,
where _n_ - is the number of decimals for the largest unit.

- If you're working with eth, _n_ is equal to 18.
- For smart contracts use `ERC20.Decimals()` method to obtain
the number of decimals and cache it somewhere for later use.

Example of converting custom token value from wei to eth:

```csharp
using ChainSafe.Gaming;
using ChainSafe.Gaming.UnityPackage.Ethereum.Eip;

var erc20ContractAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
long decimals = (long) await ERC20.Decimals(erc20ContractAddress); // 10^10
decimal wei = 1000000000000; // 10^12
decimal eth = wei / decimals; // 10^2 or 100
```

From eth to wei:

```csharp
var erc20ContractAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
long decimals = (long) await ERC20.Decimals(erc20ContractAddress); // 10^10
decimal eth = 100; // 10^2 or 100
decimal wei = eth * decimals; // 10^12
```

