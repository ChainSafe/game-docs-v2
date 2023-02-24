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

:::info

 In the following code snippet examples, we will use two separate ERC-1155 NFT token contracts for demonstration purposes. Both can be found on the Goerli testnet, with one collection titled "ERC1155", and the other titled "beautiful collection - 1155".
:::

### Balance Of {#balance-of}

Returns the balance of an ERC-1155 token for a specific Ethereum account.

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
        string tokenId = "603563865116164662793910721003851746789058690951049436470293668557855349050";

        BigInteger balanceOf = await ERC1155.BalanceOf(contract, account, tokenId);
        print(balanceOf);
    }
}
```

### Balance Of Batch {#balance-of-batch}

Get the balances of multiple `tokenIDs` owned by multiple accounts for a specific ERC-1155 contract on the Ethereum blockchain. For example:

Get the balance of account `0x990aef1085b2f6480a94bba53cbc03215d321e25` with token id `1` and

balance of account `0x9cd14e32E3B1AAf35D61EBD9066Ef8e3B06b23ad` with token id `2`

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
        string[] accounts = { "0x990aef1085b2f6480a94bba53cbc03215d321e25", "0x9cd14e32E3B1AAf35D61EBD9066Ef8e3B06b23ad" };
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

Returns the Uniform Resource Identifier (URI) associated with the specified ERC-1155 NFT token. The URI may contain metadata about the NFT, such as its name, description, and image.

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC1155URIExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x2c1867BC3026178A47a677513746DCc6822A137A";
        string tokenId = "603563865116164662793910721003851746789058690951049436470293668557855349050";
        string uri = await ERC1155.URI(contract, tokenId);
        print(uri);
    }
}
```

### All 1155's {#all-1155s"}

Retrieves the balance and URI of the specified token for each contract in the `nftContracts` array.

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

