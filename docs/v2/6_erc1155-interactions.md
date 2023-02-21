---
slug: /current/erc1155-interactions
sidebar_position: 6
sidebar_label: ERC-1155 Interactions
---


# ERC-1155 Interactions

:::info

  ERC-1155 is a standard interface for contracts that manage multiple token types. A single
  deployed contract may include any combination of fungible tokens, non-fungible
  tokens, or other configurations.

:::

### Video Explanation Of ERC-1155 Prefabs

Here's a video explanation to help you better understand the new prefabs in web3.unity's latest release:
<iframe width="800" height="450" src="https://www.youtube.com/embed/35GdxYaEjlM?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="Interacting With ERC-1155 Prefabs On web3.unity v2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Balance Of {#balance-of}

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC1155BalanceOfExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x2c1867bc3026178a47a677513746dcc6822a137a";
        string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
        string tokenId = "0x01559ae4021aee70424836ca173b6a4e647287d15cee8ac42d8c2d8d128927e5";

        BigInteger balanceOf = await ERC1155.BalanceOf(contract, account, tokenId);
        print(balanceOf);
    }
}
```

### Balance Of Batch {#balance-of-batch}

Balance of batch will get the balance of a list of accounts and token ID's. For example:

Get the balance of account `0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2` with token id `1` and

balance of account `0xE51995Cdb3b1c109E0e6E67ab5aB31CDdBB83E4a` with token id `2`

```csharp
using System.Numerics;
using System.Collections.Generic;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC1155BalanceOfBatchExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0xdc4aff511e1b94677142a43df90f948f9ae181dd";
        string[] accounts = { "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2", "0xE51995Cdb3b1c109E0e6E67ab5aB31CDdBB83E4a" };
        string[] tokenIds = { "1", "2" };

        List<BigInteger> batchBalances = await ERC1155.BalanceOfBatch(contract, accounts, tokenIds);
        foreach (var balance in batchBalances)
        {
            print("BalanceOfBatch: " + balance);
        }
    }
}
```

### URI {#uri}

Returns metadata about the token.

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC1155URIExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x2c1867BC3026178A47a677513746DCc6822A137A";
        string tokenId = "0x01559ae4021aee70424836ca173b6a4e647287d15cee8ac42d8c2d8d128927e5";
        string uri = await ERC1155.URI(contract, tokenId);
        print(uri);
    }
}
```

### All 1155's {#all-1155s"}

```csharp
using System.Numerics;
using UnityEngine;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;

public class AllErc1155 : MonoBehaviour
{
    string account;
    public string tokenIdHex;
    public string[] nftContracts;

    async void Start()
    {
        // This is the account taken from the user login scene
        account = PlayerPrefs.GetString("Account");
        // Searches through your listed contracts for balance and uri of the chosen tokenId
        foreach (string contract in nftContracts)
        {
            BigInteger balance = await ERC1155.BalanceOf(contract, account, tokenIdHex);
            Debug.Log("Balance of contract " + contract + ": " + balance);
            string uri = await ERC1155.URI(contract, tokenIdHex);
            Debug.Log("Token URI: " + uri);
        }
    }
}
```

