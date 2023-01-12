---
slug: /v2/erc1155-interactions
sidebar_position: 4
sidebar_label: ERC1155 Interactions
---


# ERC1155 Interactions

:::info

  A standard interface for contracts that manage multiple token types. A single
  deployed contract may include any combination of fungible tokens, non-fungible
  tokens or other configurations

:::

### Balance Of {#balance-of_1}

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

Balance of batch will get the balance of a list of accounts and token ids. For example:

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

Returns meta data about the token.

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

