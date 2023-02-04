---
slug: /current/erc20-interactions
sidebar_position: 6
sidebar_label: ERC20 Interactions
---


# ERC20 Interactions

:::info

A standard interface for native & custom tokens.

:::

### Video Explanation Of ERC20 Prefabs

Here's a video explanation to help you better understand our new prefabs with Sneakz
<iframe width="960" height="500" src="https://www.youtube.com/embed/2ysoDRCru4c?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="Interacting With ERC-20 Prefabs On web3.unity v2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Call Custom Blockchain Tokens {#call-custom-blockchain-tokens}

Connect to any EVM compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL. This returns the native token's balance for the chain, if you'd like to get the balance a custom erc20 token you can see the balance of example here: [https://docs.gaming.chainsafe.io/v2/erc20/](https://docs.gaming.chainsafe.io/v2/erc20/)

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

Returns the balance of a standard or custom ERC20 token. E.g. "xdai"

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

### Name {#name}

Returns the name of the token. E.g. "USD Coin"

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

Returns the symbol of the token. E.g. USDC.

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

Returns the number of decimals the token uses - e.g. 6, means to divide the token amount by 1000000 to get its user representation.

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

### Convert WEI to ETH and ETH to WEI {#convert-wei-to-eth-and-eth-to-wei}

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
