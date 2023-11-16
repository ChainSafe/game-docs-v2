---
slug: /current/prefab-scripts
sidebar_position: 17
sidebar_label: Prefab Scripts
---

# Prefab Scripts

:::info

In order to copy and paste the scripts below without hassle you will need to have the sample package imported via unity package manager. If you need to install the sample package you can follow the install guide in our getting started section [here](https://docs.gaming.chainsafe.io/current/getting-started). 

The sample package lets you use the Web3Accessor instance, this provides a convenient way to access your web3 data which is set when you login. If for some reason you don't want to use the sample package, you're' free to build your web3 object before each call and pass that into the function instead.

:::

### The login scene
You'll notice when you import the samples into the project that some scenes are added to your build configuration. You'll want to keep the login scene as the first scene as it's needed to initialize web3 to create a wallet connection. You can remove the rest and add a blank scene as your 2nd scene in build settings. We'll use this 2nd scene to drop scripts in and out of for testing purposes. Make sure your 2nd scene has an event system present in the hierarchy or the scripts won't work. You can right click in the object hierarchy on the left and go to UI -> Event system to add one if it isn't there.

### Adding a script to a scene for testing
If you right click in unitys explorer you can create a c# script. For example we're going to test erc20NameOf to get the name of an ERC20 token from chain data. Right click in the editor file explorer and create a new script, attach this script to an empty object in the scene next to the editor system. Name the script erc20NameOf, place the code below into it and press save. Once saved you can go back to the editor, create a button and assign the scipts public function to a button press event on the right. You can do this by finding the objects properties on the right, scrolling down to button and adding an event. Just drag the object with the script into the button event area and choose the starting fucntion of the script.

## ERC20 Prefab Scripts

### Name Of
Fetches the name of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
        var result = await Erc20.Name(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Balace: {result}");
        // You can make additional changes after this line
    }
}
```

### Symbol
Fetches the symbol of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
        var result = await Erc20.Symbol(Web3Accessor.Web3, contractAddress);
        Debug.Log($"Symbol: {result}");
        // You can make additional changes after this line
    }
}
```

### Decimals
Fetches the decimals of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
    private string contract = "0x358969310231363CBEcFEFe47323139569D8a88b";
    
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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
        var response = await Erc20.BalanceOf(Web3Accessor.Web3, contractAddress, accountBalanceOf);
        Debug.Log($"Balance Of: {response.ToString()}")
        // You can make additional changes after this line
    }
}
```

### Balance Of Custom Token
Fetches the balance of a custom ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
        Debug.Log($"Custom Balance Of: {response.ToString()}")
        // You can make additional changes after this line
    }
}
```

### Native Balance Of
Fetches the native balance of an ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
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
        Debug.Log($"Native Balance Of: {response.ToString()}")
        // You can make additional changes after this line
    }
}
```

### Mint
Mints ERC20 tokens to an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Transfers ERC20 tokens to an account
/// </summary>
public class Erc20Mint : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358969310231363CBEcFEFe47323139569D8a88b";
    private string amount = "1";
    
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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private string amount = "1000000000000000";
    
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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
        var response = tokenIdOwnerOf.StartsWith("0x") ? 
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
using System.Collections.Generic;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Fetches the URI from an ERC721 NFT
/// </summary>
public class Erc721Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x06dc21f89f01409e7ed0e4c80eae1430962ae52c";
    private string tokenId = "0x01559ae4021a565d5cc4740f1cefa95de8c1fb193949ecd32c337b03047da501";
    
    // Function
    public async void Uri()
    {
        var response = await Erc721.Uri(Web3Accessor.Web3, Contracts.Erc721, tokenIdUri);
        Debug.Log($"Uri: {response}");
        // You can make additional changes after this line
    }
}
```

### Mint 721
Mints a 721 NFT to an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private int tokenId = 1;

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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
        var result = tokenIdBalanceOf.StartsWith("0x") ? 
            await Erc1155.BalanceOf(Web3Accessor.Web3, Contracts.Erc1155, accountBalanceOf, tokenIdBalanceOf)
            : await Erc1155.BalanceOf(Web3Accessor.Web3, Contracts.Erc1155, accountBalanceOf, BigInteger.Parse(tokenIdBalanceOf));
        Debug.Log($"Balance Of: {result.ToString()}");
        // You can make additional changes after this line
    }
}
```

### Balance Of Batch
Fetches the balance of ERC1155 NFTs from multiple accounts.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
        var data = await Erc1155.BalanceOfBatch(Web3Accessor.Web3, Contracts.Erc1155, accountsBalanceOfBatch, tokenIdsBalanceOfBatch);
        var response = string.Join(", ", data);
        Debug.Log($"Balance Of Batch: {response}");
        // You can make additional changes after this line
    }
}
```

### Import Texture
Fetches the texture of an ERC1155 NFT and displays it to a raw image.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using UnityEngine.UI;
using Web3Unity.Scripts.Prefabs;

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
        var textureRequest = await Erc1155.ImportNftTexture1155(Web3Accessor.Web3, contractAddress, tokenId);
        rawImage.texture = textureRequest;
        // You can make additional changes after this line
    }
}
```

### Uri
Fetches the URI from an ERC1155 NFT.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    }
}
```

### Mint 1155
Mints a 1155 NFT to an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
        var data = await Erc1155.TransferErc1155(Web3Accessor.Web3, Contracts.Erc1155, tokenIdTransfer, amountTransfer, toAccountTransfer);
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
using System.Threading.Tasks;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private IpfsSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new IpfsSample();
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var cid = await logic.Upload(new IpfsUploadRequest
        {
            ApiKey = apiKey,
            Data = data,
            BucketId = bucketId,
            Path = path,
            Filename = filename
        });
        SampleOutputUtil.PrintResult(cid, nameof(IpfsSample), nameof(IpfsSample.Upload));
    }
}
```

### Contract Call
Makes a read call to a contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a read call to a contract
/// </summary>
public class ContractCall : MonoBehaviour
{
    // Variables
    private string method = "myTotal";
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private string contractAddress = "0xC71d13c40B4fE7e2c557eBAa12A0400dd4Df76C9";

    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        object[] args = {};
        var response = await logic.ContractCall(method, abi, contractAddress, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.ContractCall));
    }
}
```

### Contract Send
Makes a write call to a contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Makes a write call to a contract
/// </summary>
public class ContractSend : MonoBehaviour
{
    // Variables
    private string method = "addTotal";
    private string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private string contractAddress = "0xC71d13c40B4fE7e2c557eBAa12A0400dd4Df76C9";
    private int increaseAmount = 1;

    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        object[] args =
        {
            increaseAmount
        };
        var response = await logic.ContractSend(method, abi, contractAddress, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.ContractSend));
    }
}
```

### Get Array
Gets an array response from a contract.

``` csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets an array response from a contract
/// </summary>
public class GetArray : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x5244d0453A727EDa96299384370359f4A2B5b20a";
    private string abi = "[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"}],\"name\":\"setStore\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bought\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStore\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]";
    private string method = "getStore";
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var response = await logic.GetArray(method, abi, contractAddress);
        var responseString = string.Join(",\n", response.Select((list, i) => $"#{i} {string.Join((string)", ", (IEnumerable<string>)list)}"));
        SampleOutputUtil.PrintResult(responseString, nameof(UnsortedSample), nameof(UnsortedSample.GetArray));
    }
}
```

### Send Array
Sends an array to a contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Sends an array to a contract
/// </summary>
public class SendArray : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x5244d0453A727EDa96299384370359f4A2B5b20a";
    private string abi = "[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"}],\"name\":\"setStore\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bought\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStore\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]";
    private string method = "setStore";
    private string[] stringArray =
    {
        "0xFb3aECf08940785D4fB3Ad87cDC6e1Ceb20e9aac",
        "0x92d4040e4f3591e60644aaa483821d1bd87001e3"
    };
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var response = await logic.SendArray(method, abi, contractAddress, stringArray);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.SendArray));
    }
}
```

### Get Block Number
Gets the current block number.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current block number
/// </summary>
public class GetBlockNumber : MonoBehaviour
{
    // Variables
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var blockNumber = await logic.GetBlockNumber();
        SampleOutputUtil.PrintResult(blockNumber.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.GetBlockNumber));
    }
}
```

### Get Gas Limit
Gets the current gas limit.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas limit
/// </summary>
public class GetGasLimit : MonoBehaviour
{
    // Variables
    private string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private string contractAddress = "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F";
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var gasLimit = await logic.GetGasLimit(contractAbi, contractAddress);
        SampleOutputUtil.PrintResult(gasLimit.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.GetGasLimit));
    }
}
```

### Get Gas Price
Gets the current gas price.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current gas price
/// </summary>
public class GetGasPrice : MonoBehaviour
{
    // Variables
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var gasPrice = await logic.GetGasPrice();
        SampleOutputUtil.PrintResult(gasPrice.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.GetGasPrice));
    }
}
```

### Get Nonce
Gets the current nonce for an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the current nonce for an account
/// </summary>
public class GetNonce : MonoBehaviour
{
    // Variables
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var nonce = await logic.GetNonce();
        SampleOutputUtil.PrintResult(nonce.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.GetNonce));
    }
}
```

### SHA3
Encrypts a message with SHA3.

``` csharp
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private void ExecuteTask()
    {
        var hash = logic.Sha3(message);
        SampleOutputUtil.PrintResult(hash, nameof(UnsortedSample), nameof(UnsortedSample.Sha3));
    }
}
```

### Sign Message
Signs a message, the response is unique for each user.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var signedMessage = await logic.SignMessage(message);
        SampleOutputUtil.PrintResult(signedMessage, nameof(UnsortedSample), nameof(UnsortedSample.SignMessage));
    }
}
```

### Sign Verify
Verifies a users account via message sign.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var signatureVerified = await logic.SignVerify(message);
        var output = signatureVerified ? "Verified" : "Failed to verify";
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.SignVerify));
    }
}
```

### Send Transaction
Sends a transaction.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using Nethereum.Hex.HexTypes;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

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
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var transactionHash = await logic.SendTransaction(to);
        SampleOutputUtil.PrintResult(transactionHash, nameof(UnsortedSample), nameof(UnsortedSample.SendTransaction));
    }
}
```

### Get Transaction Status
Gets the status of a transaction.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the status of a transaction
/// </summary>
public class GetTransactionStatus : MonoBehaviour
{
    // Variables
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var receipt = await logic.GetTransactionStatus();
        var output = $"Confirmations: {receipt.Confirmations}," +
                     $" Block Number: {receipt.BlockNumber}," +
                     $" Status {receipt.Status}";
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.GetTransactionStatus));
    }
}
```

### Registered Contract
Allows a contract to be registered for easy calling.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Allows a contract to be registered for easy calling
/// </summary>
public class RegisteredContract : MonoBehaviour
{
    // Variables
    private UnsortedSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var balance = await logic.UseRegisteredContract();
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.UseRegisteredContract));
    }
}
```

## Private Key

### Get Address
Gets the public address the private key belongs to.

``` csharp
using UnityEngine;
using Web3Unity.Scripts.Prefabs;
using ChainSafe.Gaming.UnityPackage;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Gets the public address the private key belongs to.
/// </summary>
public class PrivateKeyGetAddress : MonoBehaviour
{
    private string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private UnsortedSample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        ExecuteSample();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private void ExecuteSample()
    {
        var result = logic.PrivateKeyGetAddress(privateKey);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.PrivateKeyGetAddress));
    }
}
```

### Sign Message
Signs a message using a private key.

``` csharp
using UnityEngine;
using Web3Unity.Scripts.Prefabs;
using ChainSafe.Gaming.UnityPackage;

/* This prefab script should be copied & placed on the root of an object in a scene.
Change the class name, variables and add any additional changes at the end of the function.
The scripts function should be called by a method of your choosing - button, function etc */

/// <summary>
/// Signs a message using a private key
/// </summary>
public class PrivateKeyGetAddress : MonoBehaviour
{
    private string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private UnsortedSample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new UnsortedSample(Web3Accessor.Web3);
        ExecuteSample();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private void ExecuteSample()
    {
        var result = logic.PrivateKeyGetAddress(privateKey);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.PrivateKeyGetAddress));
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
    // Variables
    private GelatoSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new GelatoSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.CallWithSyncFee();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.CallWithSyncFee));
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
    // Variables
    private GelatoSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new GelatoSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.SponsorCallErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCallErc2771));
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
    // Variables
    private GelatoSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new GelatoSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.SponsorCall();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCall));
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
    // Variables
    private GelatoSample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new GelatoSample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.SponsorCallErc2771();
        SampleOutputUtil.PrintResult(
            $"Task complete. Final status of {result.TaskId}: {result.Status.TaskState}. " +
            $"Transaction hash: {result.Status.TransactionHash}",
            nameof(GelatoSample), nameof(GelatoSample.SponsorCallErc2771));
    }
}
```