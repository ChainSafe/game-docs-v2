---
slug: /current/erc721-interactions
sidebar_position: 5
sidebar_label: ERC-721 Interactions
---


# ERC-721 Interactions

:::info

A standard interface for non-fungible tokens, or NFTs.

:::

### Video Explanation Of ERC-721 Prefabs

Here's a video explanation to help you better understand our new ERC-721 prefabs:
<iframe width="800" height="450" src="https://www.youtube.com/embed/lfPCldSqaq4?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="Interacting With ERC-721 Prefabs On web3.unity v2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::info

In the following code snippet examples, we will use an ERC-721 NFT token contract, as found on the Goerli testnet, called "Chain721 (C721)" for demonstration purposes. We use "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2" as the example address to fetch from.

:::

### Balance Of {#balance-of}

Fetches and counts the balance of a specific ERC-721 NFT token for a specific Ethereum account.

```csharp
using System.Numerics;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC721BalanceOfExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
        string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";

        BigInteger balance = await ERC721.BalanceOf(contract, account);
        print(balance);
    }
}
```

### Owner Of {#owner-of}

Fetches the owner of a specific ERC-721 NFT token for a specific Ethereum account.

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC721OwnerOfExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
        string tokenId = "1";
        string ownerOf = await ERC721.OwnerOf(contract, tokenId);
        print(ownerOf);
    }
}
```

### Owner Of Batch {#owner-of-batch}

Returns a list of addresses representing the owners of the specified `tokenIds` passed in the `tokenIds` array.

```csharp
using System.Collections.Generic;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC721OwnerOfBatchExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x47381c5c948254e6e0E324F1AA54b7B24104D92D";
        string[] tokenIds = { "33", "29" };
        string multicall = "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e"; // optional: multicall contract https://github.com/makerdao/multicall

        List<string> batchOwners = await ERC721.OwnerOfBatch(contract, tokenIds, multicall);
        foreach (string owner in batchOwners)
        {
            print("OwnerOfBatch: " + owner);
        }
    }
}
```

### URI {#uri"}

Returns the Uniform Resource Identifier (URI) associated with the specified ERC-721 NFT token. The URI may contain metadata about the NFT, such as its name, description, and image.

```csharp
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;
using UnityEngine;

public class ERC721URIExample : MonoBehaviour
{
    async void Start()
    {
        string contract = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
        string tokenId = "1";

        string uri = await ERC721.URI(contract, tokenId);
        print(uri);
    }
}
```

### All 721's {#all-721s"}

Searches through a specified number of `tokenIds` for each contract in the `nftContracts` array, and logs the tokenIds and URIs of the tokens owned by the account.

```csharp
using UnityEngine;
using Web3Unity.Scripts.Library.ETHEREUEM.EIP;

public class AllErc721 : MonoBehaviour
{
    string account;
    int balanceSearched;
    public int tokenIdStart;
    public int amountOfTokenIdsToSearch;
    public string[] nftContracts;

    async void Start()
    {
        // This is the account taken from the user login scene
        account = PlayerPrefs.GetString("Account");
        // Searches through your listed contracts
        foreach (string contract in nftContracts)
        {
            int balance = await ERC721.BalanceOf(contract, account);
            Debug.Log("Balance of contract " + contract + ": " + balance);
            // if i is less than the selected amount of tokenIDs to search, keep searching
            for (int i = 1; i < amountOfTokenIdsToSearch; i++)
            {
                // if balanceSearched is less than the balance for each contract, keep searching
                if (balanceSearched < balance)
                {
                    string ownerOf = await ERC721.OwnerOf(contract, (tokenIdStart + i).ToString());
                    // if token id id matches the account from login, print the tokenID and get the URI
                    if (ownerOf == account)
                    {
                        string uri = await ERC721.URI(contract, (tokenIdStart + i).ToString());
                        Debug.Log("TokenID: " + (tokenIdStart + i));
                        Debug.Log("Token URI: " + uri);
                        balanceSearched++;
                    }
                }
            }
        }
    }
}
```

