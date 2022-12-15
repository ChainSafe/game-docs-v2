---
slug: /evm-blockchain
sidebar_position: 5
sidebar_label: EVM Blockchain
---


# EVM Blockchain

### Block number {#block-number}

Get the current latest block number

```csharp
string chain = "ethereum";
string network = "mainnet"; // mainnet ropsten kovan rinkeby goerli

int blockNumber = await EVM.BlockNumber(chain, network);
print(blockNumber); Some code
```

### Gas Price {#block-number}

Get the current gas price for a transaction based on chain / network and rpc.

```csharp
string chain = "ethereum"; // ethereum bsc cronos
string network = "goerli"; // mainnet kovan goerli
string rpc = "https://goerli.infura.io/v3/"; // network rpc

string gasPrice = await EVM.GasPrice(chain, network, rpc);
print(gasPrice); 
```

### Gas Limit {#block-number}

Get the current gas limit for a transaction based on chain / network and rpc.

```csharp
string chain = "ethereum"; // ethereum bsc cronos
string network = "goerli"; // mainnet kovan goerli
string rpc = "https://goerli.infura.io/v3/"; // network rpc
string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1"; // acount to send to 
string Value = "0"; // value to send in wei
string data = await EVM.CreateContractData(abi, method, args);
//string from = PlayerPrefs.GetString("Account"); // optional parameter

string gaslimit = await EVM.GasLimit(chain, network, rpc, to, Value, data);
print(gaslimit); 
```

### Balance Of {#balance-of}

Get the balance of the native blockchain

```csharp
string chain = "ethereum";
string network = "goerli"; // mainnet ropsten kovan rinkeby goerli
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";

string balance = await EVM.BalanceOf(chain, network, account);
print(balance);
```

### Verify {#verify}

Verify a signed message.

```csharp
string message = "YOUR_MESSAGE";
string signature = "0x94bdbebbd0180195b89721a55c3a436a194358c9b3c4eafd22484085563ff55e49a4552904266a5b56662b280757f6aad3b2ab91509daceef4e5b3016afd34781b";

string address = await EVM.Verify(message, signature);
print(address);
```

### Transaction Status[¶](https://chainsafe.github.io/game-docs/#transaction-status) {#transaction-status}

```csharp
string chain = "ethereum";
string network = "mainnet";
string transaction = "0x911d4ec9193e0dc14d9d034d88c311453112c5097f29c366ccc9c5e5bc7072e1";
// string rpc = "rpchere"; // optional parameter
// string txConfirmed = await EVM.TxStatus(chain, network, transaction, rpc); // use this if you need an rpc parameter
string txConfirmed = await EVM.TxStatus(chain, network, transaction);
print(txConfirmed); // success, fail, pending
```

### Nonce {#nonce}

```csharp
string chain = "ethereum";
string network = "goerli";
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";

string nonce = await EVM.Nonce(chain, network, account);
print(nonce);
```

### Convert WEI to ETH and ETH to WEI {#convert-wei-to-eth-and-eth-to-wei}

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
