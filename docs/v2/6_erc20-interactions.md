---
slug: /current/erc20-interactions
sidebar_position: 6
sidebar_label: ERC-20 Interactions
---


# ERC-20 Interactions

:::info

A standard interface for native & custom fungible tokens.

:::

### Video Explanation Of ERC-20 Prefabs

Here's a video explanation to help you better understand our new ERC-20 prefabs, with Sneakz:
<iframe width="800" height="450" src="https://www.youtube.com/embed/2ysoDRCru4c?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="Interacting With ERC-20 Prefabs On web3.unity v2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Call Custom Blockchain Tokens {#call-custom-blockchain-tokens}

Connect to any EVM-compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL. This returns a custom ERC-20 token's balance. If you'd like to get the balance a native ERC-20 token you can use the second code snippet below.

```csharp
using Web3Unity.Scripts.Library.Ethers.Providers;
using Web3Unity.Scripts.Library.Ethers.Contracts;
using UnityEngine;

public class ERC20CustomTokenBalance : MonoBehaviour
{
    async void Start()
    {
        // abi in json format
        string contractAbi = "YOUR_TOKEN_ABI";
        // address of contract
        string contractAddress = "YOUR_TOKEN_ADDRESS";
        var provider = new JsonRpcProvider("YOUR_NODE");
        var contract = new Contract(contractAbi, contractAddress, provider);
        var calldata = await contract.Call("balanceOf", new object[]
        {
            PlayerPrefs.GetString("Account")
        });
        Debug.Log(calldata[0].ToString());
    }
}
```

### Balance Of {#balance-of}

Returns the balance of a standard or custom ERC-20 token, e.g. "xdai"

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20BalanceOfExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
        string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";

        BigInteger balanceOf = await ERC20.BalanceOf(contract, account);
        Debug.Log("Balance Of: " + balanceOf);
    }
}
```

If you need the chain's native token balance you can fetch it using the native balance of prefab:

```csharp
using UnityEngine;
using Web3Unity.Scripts.Library.Ethers.Providers;

public class ERC20NativeBalanceOfExample : MonoBehaviour
{
    async void Start()
    {
        string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
        var provider = new JsonRpcProvider("YOUR_NODE_HERE");
        var getBalance = await provider.GetBalance(account);
        Debug.Log("Account Balance: " + getBalance); // balance is returned in wei
    }
}
```

### Name {#name}

Returns the name of the token, e.g. "USD Coin"

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20NameExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
        string name = await ERC20.Name(contract);
        print(name);
    }
}
```

### Symbol {#symbol}

Returns the symbol of the token, e.g. "USDC".

```csharp
using UnityEngine;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;

public class ERC20SymbolExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";

        string symbol = await ERC20.Symbol(contract);
        print(symbol);
    }
}
```

### Decimals {#decimals}

Returns the number of decimals the token uses, e.g. 6, which means to divide the token amount by 1000000 to get its human readable representation.

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20DecimalsExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";

        BigInteger decimals = await ERC20.Decimals(contract);
        print(decimals);
    }
}
```

### Total Supply {#total-supply}

Returns the total token supply.

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20TotalSupplyExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
        BigInteger totalSupply = await ERC20.TotalSupply(contract);
        print(totalSupply);
    }
}
```

### Convert WEI To ETH And ETH To WEI {#convert-wei-to-eth-and-eth-to-wei}

```csharp
using System;
using UnityEngine;

public class ConversionExamples : MonoBehaviour
{

    public void ConvertToDecimals()
    {
        float wei = float.Parse("10123755");
        float decimals = 1000000000000000000; // 18 decimals
        float eth = wei / decimals;
        print(Convert.ToDecimal(eth).ToString());
    }
    
    public void ConvertToWei()
    {
        float eth = float.Parse("0.1");
        float decimals = 1000000000000000000; // 18 decimals
        float wei = eth * decimals;
        print(Convert.ToDecimal(wei).ToString());
    }
}
```
