---
description: Allows for interaction with the ChainSafe Gaming SDK marketplace endpoints.
---

# In Game Marketplace

## Create Approval Transaction

In order to interact with the marketplace an account must be given approval by the minting interface. This is easily achieved using the ChainSafe Gaming SDK's **EVM.CreateApproveTransaction** class method. A sample code snippet is provided below and please refer to **CreateApproval.cs** and **CreateApproval** prefabs provided in the SDK.

{% code lineNumbers="true" %}
```csharp
public async void ApproveTransaction()
    {
        var response = await EVM.CreateApproveTransaction(chain, network, account, tokenType);
        Debug.Log("Response: " + response.connection.chain);
        
        try
        {
            
            string responseNft = await Web3Wallet.SendTransaction(chainID, response.tx.to, "0",
                response.tx.data, response.tx.gasLimit, response.tx.gasPrice);
            if (responseNft == null)
            {
                Debug.Log("Empty Response Object:");
            }
            print(responseNft);
            Debug.Log(responseNft);
        }
        catch (Exception e)
        {
            Debug.LogException(e, this);
        }
    }
```
{% endcode %}

{% embed url="https://youtu.be/Twm3crRgHVg" %}

## Get Listed NFT's

To get a list of minted market place items. The SDK provides **EVM.GetNftMarket** function. This will return all NFT's that have been minted and have been listed for sale. A sample code snippet is provided please refer to **GetListNFTWebGL.cs** and **GetListedNFTWebWallet.cs** for the full implementation. The source files provided also allow the user to purchase the listed NFT in game.

* chain = ethereum / goerli / avalanche
* network = testnet / mainnet

```csharp
      List<GetNftListModel.Response> response = await EVM.GetNftMarket(chain, network);
        price.text = response[0].price;
        seller.text = response[0].seller;
        if (response[0].uri.StartsWith("ipfs://"))
        {
            response[0].uri = response[0].uri.Replace("ipfs://", "https://ipfs.io/ipfs/");
            Debug.Log("Response URI" + response[0].uri);
        }

        UnityWebRequest webRequest = UnityWebRequest.Get(response[0].uri);
        await webRequest.SendWebRequest();
        RootGetNFT data =
            JsonConvert.DeserializeObject<RootGetNFT>(
                System.Text.Encoding.UTF8.GetString(webRequest.downloadHandler.data)); 
        description.text = data.description;
        // parse json to get image uri
        string imageUri = data.image;
        if (imageUri.StartsWith("ipfs://"))
        {
            imageUri = imageUri.Replace("ipfs://", "https://ipfs.io/ipfs/");
            StartCoroutine(DownloadImage(imageUri));
        }

        if (data.properties != null)
        {
            foreach (var prop in data.properties.additionalFiles)
            {
                if (prop.StartsWith("ipfs://"))
                {
                    var additionalURi = prop.Replace("ipfs://", "https://ipfs.io/ipfs/");
                }
            }
        }
        listPercentage.text = response[0].listedPercentage;
        contractAddr.text = response[0].nftContract;
        itemId.text = response[0].itemId;
        _itemID = response[0].itemId;
        _itemPrice = response[0].price;
        _tokenType = response[0].tokenType;
        tokenId.text = response[0].tokenId;
    }
```

{% embed url="https://youtu.be/ukr3Ozeahr8" %}

## Purchase NFT

Now that you received an object of NFT's that have been listed for sale. You can easily purchase these items in game using the **EVM.CreatePurchaseNftTransaction** function provided in **EVM.cs**. We have provided a fully functioning prefab **BuyItemWebGL** and **BuyItemWebWallet** that has this implemented for you in the **GetListedNFTWebGL.cs** and **GetListedNFTWebWallet.cs** files. We have provided a sample code snippet that shows it's implementation.

* chain = ethereum / goerli / avalanche
* network = testnet / mainnet
* account = connected account
* item id = the token id of the minted item
* item price = the price set by the issuer
* token type = either erc721 or erc1155

```csharp
 public async void PurchaseItem()
    {
        BuyNFT.Response response = await EVM.CreatePurchaseNftTransaction(chain, network,
            PlayerPrefs.GetString("Account"), _itemID, _itemPrice, _tokenType);
        Debug.Log("Account: " + response.tx.account);
        Debug.Log("To : " + response.tx.to);
        Debug.Log("Value : " + response.tx.value);
        Debug.Log("Data : " + response.tx.data);
        Debug.Log("Gas Price : " + response.tx.gasPrice);
        Debug.Log("Gas Limit : " + response.tx.gasLimit);

        try
        { 
            string responseNft = await Web3GL.SendTransaction( response.tx.to, response.tx.value, response.tx.gasLimit, response.tx.gasLimit);
            if (responseNft == null)
            {
                Debug.Log("Empty Response Object:");
            }
            print(responseNft);
            Debug.Log(responseNft);
        }
        catch (Exception e)
        {
            Debug.LogError(e, this);
        }
    }
```

{% embed url="https://youtu.be/ukr3Ozeahr8" %}

## &#x20;Listing Minted Asset

The SDK also provides a way to list minted for sale by accessing the **EVM.CreateListNftTransaction** function. The fully functioning prefabs with it's implementation can be found within the SDK and are named **ListItemWebGL** and **ListItemWebWallet.** Here is a code snippet showing it's functionality provided within the SDK.

* chain = ethereum / goerli / avalanche
* network = testnet / mainnet
* account = connected account
* item id = the token id of the minted item
* item price = the price set by the seller
* token type = either erc721 or erc1155

```csharp
 public async void ListItem()
{
      float eth = float.Parse(_itemPrice);
      float decimals = 1000000000000000000; // 18 decimals
      float wei = eth * decimals;
      ListNFT.Response response =
      await EVM.CreateListNftTransaction(chain, network, account, _itemID, Convert.ToDecimal(wei).ToString(), _tokenType);
      int value = Convert.ToInt32(response.tx.value.hex, 16);
      try
      {
          string responseNft = await Web3Wallet.SendTransaction(chainID, response.tx.to,  value.ToString(),
              response.tx.data, response.tx.gasLimit, response.tx.gasPrice);
          if (responseNft == null)
          {
              Debug.Log("Empty Response Object:");
          }
      }
      catch (Exception e)
      {
          Debug.Log("Error: " + e);
      }
}
```

{% embed url="https://youtu.be/Twm3crRgHVg" %}
