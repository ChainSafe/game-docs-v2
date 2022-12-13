---
description: A standard interface for tokens.
---

# ERC20



### Balance Of <a href="#balance-of_3" id="balance-of_3"></a>

Returns the balance of a standard ERC20 token. E.g. "xdai"

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";
string account = "0x000000ea89990a17Ec07a35Ac2BBb02214C50152";
// string rpc = "rpchere"; // optional parameter

// BigInteger balanceOf = await ERC20.BalanceOf(chain, network, contract, account, rpc); // use this if you need an rpc input
BigInteger balanceOf = await ERC20.BalanceOf(chain, network, contract, account);
print(balanceOf);
```

### Name <a href="#name" id="name"></a>

Returns the name of the token. E.g. "Wrapped Ether"

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";

string name = await ERC20.Name(chain, network, contract);
print(name);
```

### Symbol <a href="#symbol" id="symbol"></a>

Returns the symbol of the token. E.g. “WETH”.

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0xdac17f958d2ee523a2206206994597c13d831ec7";

string symbol = await ERC20.Symbol(chain, network, contract);
print(symbol);
```

### Decimals <a href="#decimals" id="decimals"></a>

Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation.

```csharp
string chain = "xdai";
string network = "mainnet";
string contract = "0xa106739de31fa7a9df4a93c9bea3e1bade0924e2";

BigInteger decimals = await ERC20.Decimals(chain, network, contract);
print(decimals);
```

### Total Supply <a href="#total-supply" id="total-supply"></a>

Returns the total token supply.

```csharp
string chain = "ethereum";
string network = "mainnet";
string contract = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";

BigInteger totalSupply = await ERC20.TotalSupply(chain, network, contract);
print(totalSupply);
```
