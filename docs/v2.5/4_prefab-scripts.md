---
slug: /current/prefab-scripts
sidebar_position: 4
sidebar_label: Prefab Scripts
---

# Prefab Scripts

:::info

In order to copy and paste the scripts below without hassle you will need to have the sample package imported via unity package manager. If you need to install the sample package you can follow the install guide in our getting started section [here](https://docs.gaming.chainsafe.io/current/getting-started).
:::

### The login scene
You'll notice when you import the samples into the project that some scenes are added to your build configuration. You'll want to keep the login scene as the first scene as it's needed to initialize web3 to create a wallet connection. You can remove the rest and add a blank scene as your 2nd scene in build settings. We'll use this 2nd scene to drop scripts in and out of for testing purposes. Make sure your 2nd scene has an event system present in the hierarchy or the scripts won't work. You can right click in the object hierarchy on the left and go to UI -> Event system to add one if it isn't there.

### Adding a script to a scene for testing
If you right click in the unity explorer you can create a c# script. For example we're going to test erc20NameOf to get the name of an ERC20 token from chain data. Right click in the editor file explorer and create a new script, attach this script to an empty object in the scene next to the editor system. Name the script erc20NameOf, place the code below into it and press save. Once saved you can go back to the editor, create a button and assign the scripts public function to a button press event on the right. You can do this by finding the objects properties on the right, scrolling down to button and adding an event. Just drag the object with the script into the button event area and choose the starting function of the script.

## ERC20 Prefab Scripts

### Name Of
Fetches the name of an ERC20 contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the name of an ERC20 contract
/// </summary>
public class Erc20NameOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Name()
    {
        var response = await Erc20.Name(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Balace: {response}");
        // You can make additional changes after this line
    }
}
```

### Symbol
Fetches the symbol of an ERC20 contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the symbol of an ERC20 contract
/// </summary>
public class Erc20Symbol : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Symbol()
    {
        var response = await Erc20.Symbol(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Symbol: {response}");
        // You can make additional changes after this line
    }
}
```

### Decimals
Fetches the decimals of an ERC20 contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the decimals of an ERC20 contract
/// </summary>
public class Erc20Decimals : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void Decimals()
    {
        var response = await Erc20.Decimals(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Decimals: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Total Supply
Fetches the total supply of an ERC20 token.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the total supply of an ERC20 contract
/// </summary>
public class Erc20TotalSupply : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
    // Function
    public async void TotalSupply()
    {
        var response = await Erc20.TotalSupply(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Total Supply: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Balance Of
Fetches the balance of an ERC20 token from an account.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of an ERC20 token from an account
/// </summary>
public class Erc20BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";

    // Function
    public async void BalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = PlayerPrefs.GetString("PlayerAccount");
        var response = await Erc20.BalanceOf(Web3Accessor.Web3, contractAddress, account);
        Debug.Log($"Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Balance Of Custom Token
Fetches the balance of a custom ERC20 token from an account.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of a custom ERC20 token from an account
/// </summary>
public class Erc20CustomTokenBalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private string contractAbi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"allowance\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"needed\", \"type\": \"uint256\" } ], \"name\": \"ERC20InsufficientAllowance\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"balance\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"needed\", \"type\": \"uint256\" } ], \"name\": \"ERC20InsufficientBalance\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"approver\", \"type\": \"address\" } ], \"name\": \"ERC20InvalidApprover\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"receiver\", \"type\": \"address\" } ], \"name\": \"ERC20InvalidReceiver\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" } ], \"name\": \"ERC20InvalidSender\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" } ], \"name\": \"ERC20InvalidSpender\", \"type\": \"error\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" } ], \"name\": \"allowance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"mint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";

    public async void CustomTokenBalanceOf()
    {
        var response = await Erc20.CustomTokenBalance(Web3Accessor.Web3, contractAbi, contractAddress);
        Debug.Log($"Custom Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Native Balance Of
Fetches the native balance of an ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the native balance of an ERC20 token from an account.
/// </summary>
public class Erc20NativeBalanceOf : MonoBehaviour
{
    public async void NativeBalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = PlayerPrefs.GetString("PlayerAccount");
        var response = await Erc20.NativeBalanceOf(Web3Accessor.Web3, account);
        Debug.Log($"Native Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Mint
Mints ERC20 tokens to an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints ERC20 tokens to an account
/// </summary>
public class Erc20Mint : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private BigInteger amount = 1;
    
    // Function
    public async void MintErc20()
    {
        // Sets the account to mint to, you can change this to be any address
        string toAccount = await Web3Accessor.Web3.Signer.GetAddress();
        var data = await Erc20.MintErc20(Web3Accessor.Web3, contractAddress, toAccount, amount);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfers ERC20 tokens to an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfers ERC20 tokens to an account
/// </summary>
public class Erc20Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private BigInteger amount = 1000000000000000;
    
    // Function
    public async void TransferErc20()
    {
        var data = await Erc20.TransferErc20(Web3Accessor.Web3, contractAddress, toAccount, amount);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

## ERC721 Prefab Scripts

### Balance Of
Fetches the balance of ERC721 NFTs from an account

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC721 NFTs from an account
/// </summary>
public class Erc721BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";

    // Function
    public async void BalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = PlayerPrefs.GetString("PlayerAccount");
        var response = await Erc721.BalanceOf(Web3Accessor.Web3, contractAddress, account);
        Debug.Log($"Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Owner Of
Fetches the owner of an ERC721 token id.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the owner of an ERC721 token id
/// </summary>
public class Erc721OwnerOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string tokenId = "1";
    
    // Function
    public async void OwnerOf()
    {
        var response = tokenId.StartsWith("0x") ? 
            await Erc721.OwnerOf(Web3Accessor.Web3, contractAddress, tokenId) 
            : await Erc721.OwnerOf(Web3Accessor.Web3, contractAddress, BigInteger.Parse(tokenId));
        Debug.Log($"Owner: {response}");
        // You can make additional changes after this line
    }
}
```

### Owner Of Batch
Fetches the owners of ERC721 token ids.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the owners of ERC721 token ids
/// </summary>
public class Erc721OwnerOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string[] tokenIds = { "4", "6" };

    // Function
    public async void OwnerOfBatch()
    {
        var data = await Erc721.OwnerOfBatch(Web3Accessor.Web3, contractAddress, tokenIds);
        var response = $"{data.Count} owner(s):\n" + string.Join(",\n", data);
        Debug.Log($"Owners: {response}");
        // You can make additional changes after this line
    }
}
```

### Uri
Fetches the URI from an ERC721 NFT.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the URI from an ERC721 NFT
/// </summary>
public class Erc721Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "QmfUHuFj3YL2JMZkyXNtGRV8e9aLJgQ6gcSrqbfjWFvbqQ";
    private string tokenId = "1";
    
    // Function
    public async void Uri()
    {
        var response = await Erc721.Uri(Web3Accessor.Web3, Contracts.Erc721, tokenId);
        Debug.Log($"Uri: {response}");
        // You can make additional changes after this line
    }
}
```

### Mint 721
Mints a 721 NFT to an account.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints a 721 NFT to an account
/// </summary>
public class Erc721Mint : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" }, { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" } ], \"name\": \"ERC721IncorrectOwner\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"ERC721InsufficientApproval\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"approver\", \"type\": \"address\" } ], \"name\": \"ERC721InvalidApprover\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"ERC721InvalidOperator\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" } ], \"name\": \"ERC721InvalidOwner\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"receiver\", \"type\": \"address\" } ], \"name\": \"ERC721InvalidReceiver\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" } ], \"name\": \"ERC721InvalidSender\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"ERC721NonexistentToken\", \"type\": \"error\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"approved\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_fromTokenId\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_toTokenId\", \"type\": \"uint256\" } ], \"name\": \"BatchMetadataUpdate\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_tokenId\", \"type\": \"uint256\" } ], \"name\": \"MetadataUpdate\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"getApproved\", \"outputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"ownerOf\", \"outputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"string\", \"name\": \"_uri\", \"type\": \"string\" } ], \"name\": \"safeMint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"tokenURI\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string uri = "QmfUHuFj3YL2JMZkyXNtGRV8e9aLJgQ6gcSrqbfjWFvbqQ";
    
    // Function
    public async void MintErc721()
    {
        var data = await Erc721.MintErc721(Web3Accessor.Web3, abi, contractAddress, uri);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfers an ERC721 token to an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfers an ERC721 token to an account
/// </summary>
public class Erc721Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x4f75BB7bdd6f7A0fD32f1b3A94dfF409F5a3F1CC";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private BigInteger tokenId = 1;

    // Function
    public async void TransferErc721()
    {
        var data = await Erc721.TransferErc721(Web3Accessor.Web3, contractAddress, toAccount, tokenId);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

## ERC1155 Prefab Scripts

### Balance Of
Fetches the balance of ERC1155 NFTs from an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from an account
/// </summary>
public class Erc1155BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";

    // Function
    public async void BalanceOf()
    {
        // Sets the account to be queried, you can change this to be any address
        string account = PlayerPrefs.GetString("PlayerAccount");
        var response = tokenId.StartsWith("0x") ? 
            await Erc1155.BalanceOf(Web3Accessor.Web3, Contracts.Erc1155, account, tokenId)
            : await Erc1155.BalanceOf(Web3Accessor.Web3, Contracts.Erc1155, account, BigInteger.Parse(tokenId));
        Debug.Log($"Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Balance Of Batch
Fetches the balance of ERC1155 NFTs from multiple accounts.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from multiple accounts
/// </summary>
public class Erc1155BalanceOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xdc4aff511e1b94677142a43df90f948f9ae181dd";
    private string[] accounts = { "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2", "0xE51995Cdb3b1c109E0e6E67ab5aB31CDdBB83E4a" };
    private string[] tokenIds = { "1", "2" };

    public async void BalanceOfBatch()
    {
        var data = await Erc1155.BalanceOfBatch(Web3Accessor.Web3, Contracts.Erc1155, accounts, tokenIds);
        var response = string.Join(", ", data);
        Debug.Log($"Balance Of Batch: {response}");
        // You can make additional changes after this line
    }
}
```

### Import Texture
Fetches the texture of an ERC1155 NFT and displays it to a raw image.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine.UI;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the texture of an ERC1155 NFT and displays it to a raw image
/// </summary>
public class Erc1155ImportTexture : MonoBehaviour
{
    // Variables
    // You need to assign this raw image object in the editor
    public RawImage rawImage;
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";

    // Function
    public async void ImportNftTexture1155()
    {
        var response = await Erc1155.ImportNftTexture1155(Web3Accessor.Web3, contractAddress, tokenId);
        rawImage.texture = response;
        // You can make additional changes after this line
    }
}
```

### Uri
Fetches the URI from an ERC1155 NFT.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the URI from an ERC1155 NFT
/// </summary>
public class Erc1155Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private string tokenId = "1";
    
    // Function
    public async void Uri()
    {
        var response = await Erc1155.Uri(Web3Accessor.Web3, contractAddress, tokenId);
        Debug.Log($"Uri: {response}");
        // You can make additional changes after this line
    }
}
```

### Mint 1155
Mints a 1155 NFT to an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Mints a 1155 NFT to an account
/// </summary>
public class Erc1155Mint : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"balance\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"needed\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"ERC1155InsufficientBalance\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"approver\", \"type\": \"address\" } ], \"name\": \"ERC1155InvalidApprover\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"idsLength\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"valuesLength\", \"type\": \"uint256\" } ], \"name\": \"ERC1155InvalidArrayLength\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"ERC1155InvalidOperator\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"receiver\", \"type\": \"address\" } ], \"name\": \"ERC1155InvalidReceiver\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" } ], \"name\": \"ERC1155InvalidSender\", \"type\": \"error\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" } ], \"name\": \"ERC1155MissingApprovalForAll\", \"type\": \"error\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" } ], \"name\": \"TransferBatch\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"TransferSingle\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"string\", \"name\": \"value\", \"type\": \"string\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"URI\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address[]\", \"name\": \"accounts\", \"type\": \"address[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" } ], \"name\": \"balanceOfBatch\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"_data\", \"type\": \"bytes\" } ], \"name\": \"mint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"_ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"_amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"_data\", \"type\": \"bytes\" } ], \"name\": \"mintBatch\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeBatchTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"uri\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private BigInteger id = 1;
    private BigInteger amount = 1;

    // Function
    public async void MintErc1155()
    {
        var data = await Erc1155.MintErc1155(Web3Accessor.Web3, abi, contractAddress, id, amount);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### Transfer
Transfer ERC1155 tokens to an account.

``` csharp
using System.Numerics;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfer ERC1155 tokens to an account
/// </summary>
public class Erc1155Transfer : MonoBehaviour
{
    // Variables
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private string contractAddress = "0xAA2EbE78aa788d13AfFaaefD38C93333bbC4d51e";
    private BigInteger tokenId = 1;
    private BigInteger amount = 1;

    // Function
    public async void TransferErc1155()
    {
        var data = await Erc1155.TransferErc1155(Web3Accessor.Web3, Contracts.Erc1155, tokenId, amount, toAccount);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

## EVM Prefabs

### IPFS Upload
Uploads to IPFS.

``` csharp
using Web3Unity.Scripts.Prefabs;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Uploads to IPFS
/// </summary>
public class IpfsUpload : MonoBehaviour
{
    // Variables
    private string apiKey = "YOUR_CHAINSAFE_STORE_API_KEY";
    private string data = "YOUR_DATA";
    private string bucketId = "BUCKET_ID";
    private string path = "/PATH";
    private string filename = "FILENAME.EXT";

    // Function
    public async void IPFSUpload()
    {
        var cid = await Evm.Upload(new IpfsUploadRequest
        {
            ApiKey = apiKey,
            Data = data,
            BucketId = bucketId,
            Path = path,
            Filename = filename
        });
        Debug.Log($"Cid: {cid}");
        // You can make additional changes after this line
    }
}
```

### Contract Call
Makes a read call to a contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a read call to a contract
/// </summary>
public class CallContract : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "myTotal";

    // Function
    public async void ContractCall()
    {
        object[] args =
        {
            await Web3Accessor.Web3.Signer.GetAddress()
        };
        var data = await Evm.ContractCall(Web3Accessor.Web3, method, abi, contractAddress, args);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"Output: {response}");
        // You can make additional changes after this line
    }
}
```

### Contract Send
Makes a write call to a contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a write call to a contract
/// </summary>
public class SendContract : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "addTotal";
    private int increaseAmount = 1;

    // Function
    public async void ContractSend()
    {
        object[] args =
        {
            increaseAmount
        };
        var data = await Evm.ContractSend(Web3Accessor.Web3, method, abi, contractAddress, args);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### Get Array
Gets an array response from a contract.

``` csharp
using System.Collections.Generic;
using System.Linq;
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets an array response from a contract
/// </summary>
public class GetArray : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "getStore";
    
    // Function
    public async void GetArrayCall()
    {
        var data = await Evm.GetArray(Web3Accessor.Web3, Contracts.ArrayTotal, ABI.ArrayTotal, method);
        var response = string.Join(",\n", data.Select((list, i) => $"#{i} {string.Join((string)", ", (IEnumerable<string>)list)}"));
        Debug.Log($"Result: {response}");
        // You can make additional changes after this line
    }
}
```

### Send Array
Sends an array to a contract.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Sends an array to a contract
/// </summary>
public class SendArray : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "setStore";
    private string[] stringArray =
    {
        "0xFb3aECf08940785D4fB3Ad87cDC6e1Ceb20e9aac",
        "0x92d4040e4f3591e60644aaa483821d1bd87001e3"
    };

    // Function
    public async void SendArrayCall()
    {
        var data = await Evm.SendArray(Web3Accessor.Web3, method, ABI.ArrayTotal, Contracts.ArrayTotal, stringArray);
        var response = SampleOutputUtil.BuildOutputValue(data);
        Debug.Log($"Result: {response}");
        // You can make additional changes after this line
    }
}
```

### Get Block Number
Gets the current block number.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current block number
/// </summary>
public class GetBlockNumber : MonoBehaviour
{
    // Function
    public async void GetBlockNumberCall()
    {
        var response = await Evm.GetBlockNumber(Web3Accessor.Web3);
        Debug.Log($"Block Number: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Get Gas Limit
Gets the current gas limit.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas limit
/// </summary>
public class GetGasLimit : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"_myArg\", \"type\": \"uint256\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"getStore\", \"outputs\": [ { \"internalType\": \"string[]\", \"name\": \"\", \"type\": \"string[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"string[]\", \"name\": \"_addresses\", \"type\": \"string[]\" } ], \"name\": \"setStore\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
    private string contractAddress = "0x9839293240C535d8009920390b4D3DA256d31177";
    private string method = "addTotal";
    private int increaseAmount = 1;
    
    public async void GetGasLimitCall()
    {
        object[] args =
        {
            increaseAmount
        };
        var response = await Evm.GetGasLimit(Web3Accessor.Web3, abi, contractAddress, method, args);
        Debug.Log($"Gas Limit: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Get Gas Price
Gets the current gas price.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas price
/// </summary>
public class GetGasPrice : MonoBehaviour
{
    // Function
    public async void GetGasPriceCall()
    {
        var response = await Evm.GetGasPrice(Web3Accessor.Web3);
        Debug.Log($"Gas Price: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Get Nonce
Gets the current nonce for an account.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current nonce for an account
/// </summary>
public class GetNonce : MonoBehaviour
{
    // Function
    public async void GetNonceCall()
    {
        var response = await Evm.GetNonce(Web3Accessor.Web3);
        Debug.Log($"Nonce: {response}");
        // You can make additional changes after this line
    }
}
```

### SHA3
Encrypts a message with SHA3.

``` csharp
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Encrypts a message with SHA3
/// </summary>
public class Sha3 : MonoBehaviour
{
    // Variables
    private string message = "It’s dangerous to go alone, take this!";
    
    // Function
    public void Sha3Call()
    {
        var response = Evm.Sha3(message);
        Debug.Log($"Sha3 Hash: {response}");
        // You can make additional changes after this line
    }
}
```

### Sign Message
Signs a message, the response is unique for each user.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a message, the response is unique for each user
/// </summary>
public class SignMessage : MonoBehaviour
{
    // Variables
    private string message = "The right man in the wrong place can make all the difference in the world.";
    
    // Function
    public async void SignMessageCall()
    {
        var response = await Evm.SignMessage(Web3Accessor.Web3, message);
        Debug.Log($"Signed Message: {response}");
        // You can make additional changes after this line
    }
}
```

### Sign Verify
Verifies a users account via message sign.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Verifies a users account via message sign
/// </summary>
public class SignVerify : MonoBehaviour
{
    // Variables
    private string message = "A man chooses, a slave obeys.";
    
    // Function
    public async void SignVerifyCall()
    {
        var data = await Evm.SignVerify(Web3Accessor.Web3, message);
        var response = data ? "Verified" : "Failed to verify";
        Debug.Log($"Verified: {response}");
        // You can make additional changes after this line
    }
}
```

### Send Transaction
Sends a transaction.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Sends a transaction
/// </summary>
public class SendTransaction : MonoBehaviour
{
    // Variables
    private string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    
    //Function
    public async void SendTransactionCall()
    {
        var response = await Evm.SendTransaction(Web3Accessor.Web3, to);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### Get Transaction Status
Gets the status of a transaction.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the status of a transaction
/// </summary>
public class GetTransactionStatus : MonoBehaviour
{
    // Function
    public async void GetTransactionStatusCall()
    {
        var receipt = await Evm.GetTransactionStatus(Web3Accessor.Web3);
        var response = $"Confirmations: {receipt.Confirmations}," +
                       $" Block Number: {receipt.BlockNumber}," +
                       $" Status {receipt.Status}";
        Debug.Log($"Transation Status: {response}");
        // You can make additional changes after this line
    }
}
```

### Registered Contract
Allows a contract to be registered for easy calling.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows a contract to be registered for easy calling
/// </summary>
public class RegisteredContract : MonoBehaviour
{
    // Variables
    private string registeredContractName = "CsTestErc20";
    // Function
    public async void RegisteredContractCall()
    {
        var response = await Evm.UseRegisteredContract(Web3Accessor.Web3, registeredContractName, EthMethod.BalanceOf);
        Debug.Log($"Balance Of: {response.ToString()}");
        // You can make additional changes after this line
    }
}
```

### ECDSA Sign Transaction
Signs a transaction with an ECDSA key

``` csharp
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a transaction with an ECDSA key.
/// </summary>
public class EcdsaSignTransaction : MonoBehaviour
{
    // Variables
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string chainId ="11155111";
    private string transactionHash = "0x123456789";
    
    // Function
    public void EcdsaSignTransactionCall()
    {
        var response = Evm.EcdsaSignTransaction(ecdsaKey, transactionHash, chainId);
        Debug.Log($"TX: {response}");
        // You can make additional changes after this line
    }
}
```

### ECDSA Get Address
Gets the public address the private key belongs to.

``` csharp
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the public address the private key belongs to.
/// </summary>
public class EcdsaGetAddress : MonoBehaviour
{
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    
    // Function
    public void EcdsaGetAddressCall()
    {
        var response = Evm.EcdsaGetAddress(ecdsaKey);
        Debug.Log($"Address: {response}");
        // You can make additional changes after this line
    }
}
```

### ECDSA Sign Message
Signs a message using a private key.

``` csharp
using Scripts.EVM.Token;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a message using a private key
/// </summary>
public class EcdsaSignMessage : MonoBehaviour
{
    // Variables
    private string ecdsaKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string message = "secretmessage";
    
    // Function
    public void EcdsaSignMessageCall()
    {
        var response = Evm.EcdsaSignMessage(ecdsaKey, message);
        Debug.Log($"Signed Message: {response}");
        // You can make additional changes after this line
    }
}
```

## Gelato Prefabs

### Gelato Call With Sync Fee
Allows sponsor calling to Gelato with sync fee.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato with sync fee
/// </summary>
public class GelatoCallWithSyncFee : MonoBehaviour
{
    public async void CallWithSyncFee()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.CallWithSyncFee();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.CallWithSyncFee));
            // You can make additional changes after this line
    }
}
```

### Gelato Call With Sync Fee ERC2771
Allows sponsor calling to Gelato with sync fee for ERC2771.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato with sync fee for ERC2771
/// </summary>
public class GelatoCallWithSyncFeeErc2771 : MonoBehaviour
{
    public async void CallWithSyncFeeErc2771()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.CallWithSyncFeeErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.CallWithSyncFeeErc2771));
            // You can make additional changes after this line
    }
}
```

### Gelato Sponsor Call
Allows sponsor calling to Gelato.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato
/// </summary>
public class GelatoSponsorCall : MonoBehaviour
{
    public async void SponsorCall()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.SponsorCall();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCall));
            // You can make additional changes after this line
    }
}
```

### Gelato Sponsor Call ERC2771
Allows sponsor calling to Gelato for ERC2771.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows sponsor calling to Gelato for ERC2771
/// </summary>
public class GelatoSponsorCallErc2771 : MonoBehaviour
{
    public async void SponsorCallErc2771()
    {
        gelato = new GelatoSample(Web3Accessor.Web3);
        var result = await gelato.SponsorCallErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCallErc2771));
            // You can make additional changes after this line
    }
}
```