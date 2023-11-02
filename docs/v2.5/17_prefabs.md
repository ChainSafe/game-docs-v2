---
slug: /current/prefabs
sidebar_position: 17
sidebar_label: Prefabs
---

# Prefabs

:::info

In order to copy and paste the scripts below without hassle you will need to have the sample package imported via unity package manager. If you need to install the sample package you can follow the install guide in our getting started section [here](https://docs.gaming.chainsafe.io/current/getting-started).

:::

### The login scene
You'll notice when you import the samples into the project that some scenes are added to your build configuration. You'll want to keep the login scene as the first scene as it's needed to initialize web3 to create a wallet connection. You can remove the rest and add a blank scene as your 2nd scene in build settings. We'll use this 2nd scene to drop scripts in and out of for testing purposes. Make sure your 2nd scene has an event system present in the hierarchy or the scripts won't work. You can right click in the object hierarchy on the left and go to UI -> Event system to add one if it isn't there.

### Altering sample code
You may need to alter the code of a sample example in order to use the results, don't worry it's easy, we'll walk you through it all. First you need to find the sample script in the example scene area, we're going to use a balance of prefab. If you're just using the script for testing, drop it onto a button and the inherited behaviour will make the call fire off automatically once the button the script is on is clicked. We want to do something with the result so we're going to modify it slightly.

Original Balance Of script in the example scene.

```csharp
using System.Threading.Tasks;

namespace Samples.Behaviours
{
    public class Erc20BalanceOfBehaviour : SampleBehaviour
    {
        public string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
        public string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";

        private Erc20Sample logic;

        protected override void Awake()
        {
            base.Awake();
            logic = new Erc20Sample(Web3);
        }

        protected override async Task ExecuteSample()
        {
            var balance = await logic.BalanceOf(contractAddress, account);
            SampleOutputUtil.PrintResult(balance.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.BalanceOf));
        }
    }
}
```

Modified Balance Of script so we can call it as we please and use the results.

```csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of an ERC20 token from an account
/// </summary>
public class Erc20BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private string account;
    private Erc20Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.BalanceOf(contractAddress, account);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.BalanceOf));
    }
}
```

As you can see we've replaced the sample behaviour with MonoBehaviour. We've also allowed the prefab to be initialized whenever we please, we can assign this to something like a button, an event or even an external function call. We can also save the result into a variable, this is great for displaying things on screen like balances or if you wanted to amend information in a data manager of your choosing.

### What should i do?
If you just want to quickly test results, dragging the sample prefabs in and changing the editor values will be faster for your development process. alternatively If you need to do specific things like alter variables or display something on screen: Simply copy the examples below into a new script, change the class name, alter the input variables and use the results as needed.

## ERC20 Prefabs

### Name Of
Fetches the name of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the name of an ERC20 contract
/// </summary>
public class Erc20NameOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private Erc20Sample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.Name(contractAddress);
        SampleOutputUtil.PrintResult(result, nameof(Erc20Sample), nameof(Erc20Sample.Name));
    }
}
```

### Symbol
Fetches the symbol of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the symbol of an ERC20 contract
/// </summary>
public class Erc20Symbol : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private Erc20Sample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.Symbol(contractAddress);
        SampleOutputUtil.PrintResult(result, nameof(Erc20Sample), nameof(Erc20Sample.Symbol));
    }
}
```

### Decimals
Fetches the decimals of an ERC20 contract.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the decimals of an ERC20 contract
/// </summary>
public class Erc20Decimals : MonoBehaviour
{
    // Variables
    private string contract = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private Erc20Sample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var decimals = await logic.Decimals(contract);
        SampleOutputUtil.PrintResult(decimals.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.Decimals));
    }
}
```

### Total Supply
Fetches the total supply of an ERC20 token.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the total supply of an ERC20 contract
/// </summary>
public class Erc20TotalSupply : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private Erc20Sample logic;
    
    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.Name(contractAddress);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.TotalSupply));
    }
}
```

### Balance Of
Fetches the balance of an ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of an ERC20 token from an account
/// </summary>
public class Erc20BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x3E0C0447e47d49195fbE329265E330643eB42e6f";
    private string account;
    private Erc20Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.BalanceOf(contractAddress, account);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.BalanceOf));
    }
}
```

### Balance Of Custom Token
Fetches the balance of a custom ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of a custom ERC20 token from an account
/// </summary>
public class Erc20CustomTokenBalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x99D555E4dAf4f7e103893AD075CFC605fB8e3544";
    private string contractAbi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"success\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"decreaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"DecreaseAllowance\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"decreaseMapping\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"DecreaseMapping\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"increaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"IncreaseAllowance\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"increaseMapping\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"IncreaseMapping\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"mint\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"success\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"Mint\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"success\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"success\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_decimal\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"_spender\", \"type\": \"address\" } ], \"name\": \"allowance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"remaining\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"balance\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"earnSupply\", \"outputs\": [ { \"internalType\": \"int256\", \"name\": \"\", \"type\": \"int256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" } ], \"name\": \"uintMapping\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private Erc20Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.CustomTokenBalance(contractAbi, contractAddress);
        SampleOutputUtil.PrintResult(result, nameof(Erc20Sample), nameof(Erc20Sample.CustomTokenBalance));
    }
}
```

### Native Balance Of
Fetches the native balance of an ERC20 token from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the native balance of an ERC20 token from an account.
/// </summary>
public class Erc20NativeBalanceOf : MonoBehaviour
{
    // Variables
    private string account;
    private Erc20Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }
        // Sets the sample behaviour & executes
        logic = new Erc20Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }
    
    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var result = await logic.NativeBalanceOf(account);
        SampleOutputUtil.PrintResult(result.ToString(), nameof(Erc20Sample), nameof(Erc20Sample.NativeBalanceOf));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Transfers ERC20 tokens to an account
/// </summary>
public class Erc20Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private string amount = "1000000000000000";
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
        var response = await logic.TransferErc20(contractAddress, toAccount, amount);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.TransferErc20));
    }
}
```

## ERC721 Prefabs

### All Erc721
Fetches all ERC721 NFTs from an account.

``` csharp
using System.Linq;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches all ERC721 NFTs from an account
/// </summary>
public class AllErc721 : MonoBehaviour
{
    // Variables
    private string chain = "ethereum";
    private string network = "goerli";
    private string account = "0xfaecAE4464591F8f2025ba8ACF58087953E613b1";
    // Optional
    private string contract = "0x2c1867BC3026178A47a677513746DCc6822A137A";
    private int take = 500;
    private int skip = 0;
    private Erc721Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc721Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var allNfts = await logic.All(chain, network, account, contract, take, skip);
        var output = string.Join(",\n", allNfts.Select(nft => $"{nft.TokenId} - {nft.Uri}"));
        SampleOutputUtil.PrintResult(output, nameof(Erc721Sample), nameof(Erc721Sample.All));
    }
}
```

### Balance Of
Fetches the balance of ERC721 NFTs from an account

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of ERC721 NFTs from an account
/// </summary>
public class Erc721BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
    private string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
    private Erc721Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc721Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var balance = await logic.BalanceOf(contractAddress, account);
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(Erc721Sample), nameof(Erc721Sample.BalanceOf));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Mints a 721 NFT to an account
/// </summary>
public class Erc721Mint : MonoBehaviour
{
    // Variables
    private string abi = "[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"safeMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]";
    private string contractAddress = "0x0B102638532be8A1b3d0ed1fcE6eC603Bec37848";
    private string uri = "ipfs://QmNn5EaGR26kU7aAMH7LhkNsAGcmcyJgun3Wia4MftVicW/1.json";
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
        var response = await logic.Mint721(abi, contractAddress, uri);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.Mint721));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Mints a 1155 NFT to an account
/// </summary>
public class Erc1155Mint : MonoBehaviour
{
    // Variables
    private string abi = "[ { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" } ], \"name\": \"TransferBatch\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"TransferSingle\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"string\", \"name\": \"value\", \"type\": \"string\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"URI\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address[]\", \"name\": \"accounts\", \"type\": \"address[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" } ], \"name\": \"balanceOfBatch\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"mint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"mintBatch\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeBatchTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"uri\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private string contractAddress = "0xA0a53f1Cabf7D723Ab2087400681039917D1B6D4";
    private int id = 1;
    private int amount = 1;
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
        var response = await logic.Mint1155(abi, contractAddress, id, amount);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.Mint1155));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the owner of an ERC721 token id
/// </summary>
public class Erc721OwnerOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x06dc21f89f01409e7ed0e4c80eae1430962ae52c";
    private string tokenId = "0x01559ae4021a565d5cc4740f1cefa95de8c1fb193949ecd32c337b03047da501";
    private Erc721Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new Erc721Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var balance = await logic.OwnerOf(contractAddress, tokenId);
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(Erc721Sample), nameof(Erc721Sample.OwnerOf));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the owners of ERC721 token ids
/// </summary>
public class Erc721OwnerOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x47381c5c948254e6e0E324F1AA54b7B24104D92D";
    private List<string> tokenIds = new() { "33", "29" };
    // optional: multicall contract https://github.com/makerdao/multicall
    private string multicall = "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e";
    private Erc721Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new Erc721Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var owners = await logic.OwnerOfBatch(contractAddress, tokenIds.ToArray(), multicall);
        var ownersString = $"{owners.Count} owner(s):\n" + string.Join(",\n", owners);
        SampleOutputUtil.PrintResult(ownersString, nameof(Erc721Sample), nameof(Erc721Sample.OwnerOfBatch));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the URI from an ERC721 NFT
/// </summary>
public class Erc721Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x06dc21f89f01409e7ed0e4c80eae1430962ae52c";
    private string tokenId = "0x01559ae4021a565d5cc4740f1cefa95de8c1fb193949ecd32c337b03047da501";
    private Erc721Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new Erc721Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var uri = await logic.Uri(contractAddress, tokenId);
        SampleOutputUtil.PrintResult(uri, nameof(Erc721Sample), nameof(Erc721Sample.Uri));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Transfers an ERC721 token to an account
/// </summary>
public class Erc721Transfer : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3";
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private int tokenId = 0;
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
        var response = await logic.TransferErc721(contractAddress, toAccount, tokenId);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.TransferErc721));
    }
}
```

## ERC1155 Prefabs

### All Erc1155
Fetches all ERC1155 NFTs from an account.

``` csharp
using System.Linq;
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches all ERC1155 NFTs from an account
/// </summary>
public class AllErc1155 : MonoBehaviour
{
    // Variables
    private string chain = "ethereum";
    private string network = "goerli"; // mainnet goerli
    private string account = "0xfaecAE4464591F8f2025ba8ACF58087953E613b1";
    // Optional
    private string contract = "";
    private int take = 1000;
    private int skip = 0;
    private Erc1155Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc1155Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var allNfts = await logic.All(chain, network, account, contract, take, skip);
        var output = string.Join(",\n", allNfts.Select(nft => $"{nft.TokenId} - {nft.Uri}"));
        SampleOutputUtil.PrintResult(output, nameof(Erc1155Sample), nameof(Erc1155Sample.All));
    }
}
```

### Balance Of
Fetches the balance of ERC1155 NFTs from an account.

``` csharp
using System.Threading.Tasks;
using ChainSafe.Gaming.UnityPackage;
using UnityEngine;
using Web3Unity.Scripts.Prefabs;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from an account
/// </summary>
public class Erc1155BalanceOf : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x2c1867bc3026178a47a677513746dcc6822a137a";
    private string account = "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2";
    private string tokenId = "0x01559ae4021aee70424836ca173b6a4e647287d15cee8ac42d8c2d8d128927e5";
    private Erc1155Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(account))
        {
            account = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc1155Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var balance = await logic.BalanceOf(contractAddress, account, tokenId);
        SampleOutputUtil.PrintResult(balance.ToString(), nameof(Erc1155Sample), nameof(Erc1155Sample.BalanceOf));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the balance of ERC1155 NFTs from multiple accounts
/// </summary>
public class Erc1155BalanceOfBatch : MonoBehaviour
{
    // Variables
    private string contractAddress = "0xdc4aff511e1b94677142a43df90f948f9ae181dd";
    private string[] accounts = { "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2", "0xE51995Cdb3b1c109E0e6E67ab5aB31CDdBB83E4a" };
    private string[] tokenIds = { "1", "2" };
    private Erc1155Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets our account to be default if nothing has been entered
        if (string.IsNullOrEmpty(accounts[0]))
        {
            accounts[0] = PlayerPrefs.GetString("PlayerAccount");
        }

        // Sets the sample behaviour & executes
        logic = new Erc1155Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var balances = await logic.BalanceOfBatch(contractAddress, accounts, tokenIds);
        var balancesString = string.Join(", ", balances);
        SampleOutputUtil.PrintResult(balancesString, nameof(Erc1155Sample), nameof(Erc1155Sample.BalanceOfBatch));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the texture of an ERC1155 NFT and displays it to a raw image
/// </summary>
public class Erc1155ImportTexture : MonoBehaviour
{
    // Variables
    // You need to assign this raw image object in the editor
    public RawImage textureContainer;
    private string contractAddress = "0x0288B4F1389ED7b3d3f9C7B73d4408235c0CBbc6";
    private string tokenId = "0";
    private Erc1155Sample logic;
    private Texture nullTexture;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        logic = new Erc1155Sample(Web3Accessor.Web3);
        nullTexture = textureContainer.texture;
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        textureContainer.texture = nullTexture;
        textureContainer.texture = await logic.ImportNftTexture(contractAddress, tokenId);
        SampleOutputUtil.PrintResult("Texture loaded", nameof(Erc1155Sample), nameof(Erc1155Sample.ImportNftTexture));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Fetches the URI from an ERC1155 NFT
/// </summary>
public class Erc1155Uri : MonoBehaviour
{
    // Variables
    private string contractAddress = "0x2c1867BC3026178A47a677513746DCc6822A137A";
    private string tokenId = "0x01559ae4021aee70424836ca173b6a4e647287d15cee8ac42d8c2d8d128927e5";
    private Erc1155Sample logic;

    /// <summary>
    /// Starts the task, you can put this in the start function or call it from a button/event
    /// </summary>
    public async void InitializeTask()
    {
        // Sets the sample behaviour & executes
        logic = new Erc1155Sample(Web3Accessor.Web3);
        await ExecuteTask();
    }

    /// <summary>
    /// Executes the prefab task and sends the result to the console, you can also save this into a variable for later use
    /// </summary>
    private async Task ExecuteTask()
    {
        var uri = await logic.Uri(contractAddress, tokenId);
        SampleOutputUtil.PrintResult(uri, nameof(Erc1155Sample), nameof(Erc1155Sample.Uri));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Transfer ERC1155 tokens to an account
/// </summary>
public class Erc1155Transfer : MonoBehaviour
{
    // Variables
    private string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
    private string contractAddress = "0xe793e17Ec93bEc809C5Ac6dd0d8b383446E65B78";
    private int tokenId = 101;
    private int amount = 1;
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
        var response = await logic.TransferErc1155(contractAddress, tokenId, amount, toAccount);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.TransferErc1155));
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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

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