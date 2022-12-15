---
slug: /minting-with-voucher
sidebar_position: 12
sidebar_label: Minting With Voucher
---


# Minting With Voucher

:::info

This functionality is currently in beta and has only been tested and deployed
on the Goerli testnet

:::

Voucher minting (also known as lazy minting or "just-in-time minting") allows a number of use-cases that enable developers to implement mechanics such as play-to-earn (P2E). The basic idea is that a developer can cryptographically sign a voucher (containing the data of the NFT to be minted) allowing a player to present this signature together with the NFT data to the contract to mint the NFT. Vouchers that are issued to the player are single-use vouchers to prevent replay attacks where the same voucher is used to mint multiple items. The minting is paid for by the user minting the asset so that the \
\
When a player calls the `redeem` function on the ERC721 or ERC1155 contract, the signature is validated and if this signature is valid, then the NFT is minted.\
\
One of the major advantages of voucher minting is that the Gas cost of minting the NFT is paid by the user calling the `redeem` function and generating the vouchers off-chain costs the developer nothing other than time.\
\
The Voucher Signer server component can be a standalone service or it could be integrated into existing backend services of the game. This service must be run by the developer themselves, as game \
\
For more information on how voucher minting works, you can refer to [this NFT School article](https://nftschool.dev/tutorial/lazy-minting/#how-it-works).

![](<assets/Lazy Minting.png>)

The general flow for voucher minting is as follows:\


1. A player completes an in-game action (eg. wins a battle in the game) earning themselves the right to mint an NFT.
2. The game makes a request to the Voucher Signer Server for a voucher (providing any information required for the Signer to validate that the user did complete the task required).
3. The Voucher Signer Server will validate that the conditions for issuing of this NFT were indeed met (eg. check against the game's internal database that the player with a specific address won a battle)
4. Once the above check has passed, the voucher signer should prepare the metadata of the NFT to be minted, and upload this to IPFS. This step will result in a unique CID linking the token (to be minted) and the CID together.
5. The Voucher Signer Server generates a message which includes the CID of the NFT to be minted and signs this using the Voucher Signer Server private key. This signature and the data about the NFT to be minted are sent back to the game, and stored in the `PlayerPrefs`
6. A player would redeem the voucher that is now in their possession, by calling the ERC721 or ERC1155 contract `Redeem(...)` function (using the Unity SDK) passing in the voucher received in step 5. The signature and all NFT data is validated by the respective token contract, the NFT is minted and transferred to the player.

### Lazy Minting Signer

The sample code provided [here](https://github.com/ChainSafe/lazy-minting-server/blob/main/src/index.ts) shows a NodeJS (Express server) implementation of a voucher signer, with no validation of whether the conditions for issuing a voucher have been met.\
\
This example implements methods for both ERC721 and ERC1155 vouchers, though you will likely only use one of these in your application. These are both included for demo purposes.

Prerequisites:

* An API key for ChainSafe Storage ([https://app.storage.chainsafe.io/api-keys](https://app.storage.chainsafe.io/api-keys)) - This is required for the Voucher Signer to upload the metadata to IPFS using ChainSafe Storage.
* A signer private key/mnemonic. This can be generated [here](https://iancoleman.io/bip39/) or extracted from a wallet such as MetaMask. This account does not need to have any funds on any network, as the key is just used to cryptographically sign the voucher (no gas is required for this).
* NodeJS 16+

### Generate an ERC721 Voucher

\
1\. Validate whether user is entitled to mint the NFT (This has been hard-coded to true in the example server). In real-world cases the game state would be queried to ensure that the user requesting the voucher is indeed entitled to receive it.\


```typescript
// Query game state to determine whether the user making the request is authorized to mint const const voucherEarned = true
if (!voucherEarned) { throw new Error("Voucher is not yet earned"); }
```

2\. Generate metadata for the NFT and upload to ChainSafe Storage or another IPFS host of your choice. You will now have the CID of the metadata.

```typescript
const metadata = { 
    name: "test lazy mint ERC721 nft", 
    description: "ipsum lorem", 
    image
}
const axiosClient = axios.create({ transformResponse: [] }) 
const apiClient = new FilesApiClient({}, storageApiUrl, axiosClient) 
apiClient.setToken(storageApiKey) 

try { 
  const uploadResult = await apiClient.uploadNFT(metadata, "blake2b-208")
} catch e {
  console.error(e)
}
```

`uploadResult` is the CID of the metadata for which the voucher will now be signed.

3\. Generate an EIP712 TypedData signed message using the LazyMinter utility. Please note that the `tokenId` that is passed needs to be formatted correctly using the `cidToTokenId()` helper provided.

```csharp
const provider = getDefaultProvider(5) // Goerli
const wallet = (recoverWalletFromMnemonic(signerMnemonic)).connect(provider)
const minterContract = GeneralERC721__factory.connect(minter721Address, wallet)
const minter = new LazyMinter({ contract: minterContract, signer: wallet })
const voucher = await minter.createVoucher721({
      minPrice: 0,
      tokenId: cidToTokenId(uploadResult.cid),
      signer: wallet.address,
      receiver
})
```

4\. Return the voucher and signature to the user

```csharp
res.send(voucher)
```

### Generate an ERC1155 Voucher

1\. Validate whether user is entitled to mint the NFT (This has been hard-coded to true in the example server). In real-world cases the game state would be queried to ensure that the user requesting the voucher is indeed entitled to receive it.

```typescript
// Query game state to determine whether the user making the request is authorized to mint const const voucherEarned = true
if (!voucherEarned) { throw new Error("Voucher is not yet earned"); }
```

2\. Generate metadata for the NFT and upload to ChainSafe storage (IPFS). You will now have the CID of the metadata which is necessary for minting the token. When uploading metadata to be used for an ERC1155 the hashing algorithm used should be set to `blake2b-208` to ensure that the resulting CID can be used as a token Id.

```typescript
const metadata = {
  name: `test lazy mint ERC1155 nft`,
  description: `ipsum lorem`,
  image,
}

const axiosClient = axios.create({ transformResponse: [] }) 
const apiClient = new FilesApiClient({}, storageApiUrl, axiosClient) 
apiClient.setToken(storageApiKey) 

try { 
  const uploadResult = await apiClient.uploadNFT(metadata, "blake2b-208")
} catch e {
  console.error(e)
}
```

`uploadResult` is the CID of the metadata for which the voucher will now be signed.\
\
3\. Generate an EIP712 TypedData signed message using the LazyMinter utility.&#x20;

```typescript
const provider = getDefaultProvider(5)
const wallet = (recoverWalletFromMnemonic(signerMnemonic)).connect(provider)
const minterContract = GeneralERC1155__factory.connect(minter1155Address, wallet)
const minter = new LazyMinter({ contract: minterContract, signer: wallet })

const voucher = await minter.createVoucher1155({
      minPrice: 0,
      tokenId: cidToTokenId(uploadResult.cid),
      amount: 1,
      nonce: dayjs().valueOf(),
      signer: wallet.address,
      receiver
})
```

The nonce can be set to any random value. In this case the timestamp of the request is used.\
\
Please note that the `tokenId` that is passed needs to be formatted correctly using the `cidToTokenId()` helper provided.

```typescript
const provider = getDefaultProvider(5)
const wallet = (recoverWalletFromMnemonic(signerMnemonic)).connect(provider)
const minterContract = GeneralERC1155__factory.connect(minter1155Address, wallet)
const minter = new LazyMinter({ contract: minterContract, signer: wallet })

const voucher = await minter.createGamingVoucher1155({
  minPrice: 0,
  tokenId: cidToTokenId(uploadResult.cid),
  amount: 1,
  nonce: dayjs().valueOf(),
  signer: wallet.address
})
```

4\. Return the voucher and signature to the user

```typescript
res.send(voucher)
```

### Using a Voucher to Mint in Unity

Once the voucher has been issued to the user, this can be presented to the `redeem` function on the ERC721/ERC1155 contract as shown below in unity and used to mint. These prefab examples are located in Web3Unity -> Prefabs/Scripts -> Minter -> WebGL/WebWallet -> VoucherMint.

```csharp
public class MintWebGL1155 : MonoBehaviour
{
    // set chain: ethereum, moonbeam, polygon etc
    string chain = "ethereum";
    // set network mainnet, testnet
    string network = "goerli";
    // address of nft you want to mint
    string nftAddress = "0x2c1867bc3026178a47a677513746dcc6822a137a";
    // type
    string type = "1155";

    public async void VoucherMintNft1155()
    {
        try
        {
        var voucherResponse1155 = await EVM.Get1155Voucher();
        CreateRedeemVoucherModel.CreateVoucher1155 voucher1155 = new CreateRedeemVoucherModel.CreateVoucher1155();
        voucher1155.tokenId = voucherResponse1155.tokenId;
        voucher1155.minPrice = voucherResponse1155.minPrice;
        voucher1155.signer = voucherResponse1155.signer;
        voucher1155.receiver = voucherResponse1155.receiver;
        voucher1155.amount = voucherResponse1155.amount;
        voucher1155.nonce = voucherResponse1155.nonce;
        voucher1155.signature = voucherResponse1155.signature;
        string voucherArgs = JsonUtility.ToJson(voucher1155);

        // connects to user's browser wallet to call a transaction
        RedeemVoucherTxModel.Response voucherResponse = await EVM.CreateRedeemTransaction(chain, network, voucherArgs, type, nftAddress, voucherResponse1155.receiver);
        string response = await Web3GL.SendTransactionData(voucherResponse.tx.to, voucherResponse.tx.value.ToString(), voucherResponse.tx.gasPrice, voucherResponse.tx.gasLimit, voucherResponse.tx.data);
        print("Response: " + response);
        }
        catch (Exception e)
        {
            Debug.LogException(e, this);
        }
    }
}
```

### Disclaimer

The contracts have been internally audited by ChainSafe and usage is subject to the ToS
