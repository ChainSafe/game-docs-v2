---
slug: /current/erc20-interactions
sidebar_position: 4
sidebar_label: ERC-20 Interactions
---


# ERC-20 Interactions

:::info

A standard interface for native & custom fungible tokens.

:::

### Video Explanation Of ERC-20 Prefabs

Here's a video explanation to help you better understand our new ERC-20 prefabs:
<iframe width="800" height="450" src="https://www.youtube.com/embed/2ysoDRCru4c?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="Interacting With ERC-20 Prefabs On web3.unity v2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Call Custom Blockchain Tokens {#call-custom-blockchain-tokens}

Connect to any EVM-compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL. This returns a custom ERC-20 token's balance. If you'd like to get the balance of a native ERC-20 token you can use the second code snippet below.

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

:::info

In the following code snippet examples, we will use [Circle's USDC](https://developers.circle.com/developer/docs/usdc-on-testnet) ERC-20 token contract as found on the Goerli testnet for demonstration purposes.

:::

### Balance Of {#balance-of}

Returns the balance of an ERC-20 token for a specific Ethereum account (e.g. "USDC").

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20BalanceOfExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
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

Returns the name of an ERC-20 token associated with a specified contract address (e.g. "USD Coin").

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20NameExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
        string name = await ERC20.Name(contract);
        print(name);
    }
}
```

### Symbol {#symbol}

Returns the symbol of an ERC-20 token associated with a specified contract address (e.g. "USDC").

```csharp
using UnityEngine;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;

public class ERC20SymbolExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";

        string symbol = await ERC20.Symbol(contract);
        print(symbol);
    }
}
```

### Decimals {#decimals}

Returns the number of decimal places a specified ERC-20 token uses (e.g. 6 for USDC), which means to divide the token amount by 1000000 to get its human readable representation.

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC20DecimalsExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";

        BigInteger decimals = await ERC20.Decimals(contract);
        print(decimals);
    }
}
```

### Total Supply {#total-supply}

Returns the total token supply of an ERC-20 token associated with a specified contract address.

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

The `ConversionExamples` class provides two methods to convert values between Ethereum's smallest unit (wei) and its largest unit (ether). The first method, `ConvertToDecimals()`, takes a string value representing an amount of wei and converts it to ether by dividing the wei value by 10^18. The result is then printed as a decimal string using the `Convert.ToDecimal()` method.

The second method, `ConvertToWei()`, takes a string value representing an amount of ether and converts it to wei by multiplying the ether value by 10^18. The result is then printed as a decimal string using the `Convert.ToDecimal()` method.

These conversion methods are useful for working with Ethereum amounts in code. By converting values between wei and ether, developers can manage Ethereum amounts with greater precision and accuracy.

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
