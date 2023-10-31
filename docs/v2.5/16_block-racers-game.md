---
slug: /current/block-racers-game
sidebar_position: 16
sidebar_label: Block Racers Game
---


# Block Racers Example Game

:::info

This game was built to show you how our SDK would function in a game environment. Please feel free to use the code as you wish, please don't take any of the assets as they are here entirely for educational purposes and should not be reused for financial gain.

:::

The repo contains a fun multiplayer racing game which was build to help explain the functionality of the SDK complete with code examples.

## Block Racers Project Files
The repo for the Block Racers project files can be found [here](https://github.com/ChainSafe/BlockRacers/)

## Block Racers Playable Demo
The Block Racers game demo can be found [here](https://chainsafe.github.io/BlockRacersGame/)

## Booting Up The Game & Connecting Your Wallet
Once the game has booted up, simply connect your wallet and have a look around through the menus.

![](v2Assets/BlockRacers1.png)
![](v2Assets/BlockRacers18.png)

## Tutorial Examples
There is a tutorial area which will take you through some of the SDKs basic functions, drive up to one of the floating texts to bring up an example menu.

![](v2Assets/BlockRacers2.png)

## Signing
This will generate a unique signature from a user that you may use for authorization purposes.

![](v2Assets/BlockRacers3.png)

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

## Verify
This will verify a signature from a wallet to prove its owners address.

![](v2Assets/BlockRacers4.png)

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

## Mint
This can be used to mint ERC20 Race tokens or even native tokens via the faucet to pay for things within game.

![](v2Assets/BlockRacers5.png)

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
    private object[] args =
    {
        1
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
        var response = await logic.ContractSend(method, abi, contractAddress, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.ContractSend));
    }
}
```

## Transfer
This will allow you to transfer ERC20 Race tokens between wallets.

![](v2Assets/BlockRacers6.png)

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

## Custom Call
This will allow you to make a custom call, we've included 2 examples here. 1 being read which checks a contracts state variable and another being write which adds to the sate variable of a contract. You may read it again after to see changes.

![](v2Assets/BlockRacers7.png)

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
    private object[] args = {};

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
        var response = await logic.ContractCall(method, abi, contractAddress, args);
        var output = SampleOutputUtil.BuildOutputValue(response);
        SampleOutputUtil.PrintResult(output, nameof(UnsortedSample), nameof(UnsortedSample.ContractCall));
    }
}
```

## Docs
Clicking this button will take you to ChainSafe's documentation [here](https://docs.gaming.chainsafe.io/)

![](v2Assets/BlockRacers8.png)

## Voucher
This will generate a unique voucher via ECDSA which can be used for things like claims & minting.

![](v2Assets/BlockRacers9.png)

```csharp
using UnityEngine;
using Web3Unity.Scripts.Prefabs;
using ChainSafe.Gaming.UnityPackage;

/* This prefab script should be copied & placed on the root of an object.
Change the class name, variables and add any additional changes at the end of the execute function.
The initialize function should be called by a method of your choosing */

/// <summary>
/// Signs a message using a private key
/// </summary>
public class PrivateKeySign : MonoBehaviour
{
    private string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
    private string message = "hello";
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
        var signedMessage = logic.PrivateKeySign(privateKey, message);
        SampleOutputUtil.PrintResult(signedMessage.ToString(), nameof(UnsortedSample), nameof(UnsortedSample.PrivateKeySign));
    }
}
```

## Dashboard
Clicking this button will take you to the chainsafe dashboard [here](https://dashboard.gaming.chainsafe.io/) where you can do things like signing up for a project ID and set various other project information.

![](v2Assets/BlockRacers10.png)

## Pause & Controls
Pressing tab will bring up the pause menu allowing you to either go back to the main menu, select fullscreen or even view the games controls. We have both keyboard and gamepad inputs available.

![](v2Assets/BlockRacers11.png)
![](v2Assets/BlockRacers12.png)

## The Garage
The garage will let you change cars which are actually NFTs which is pretty cool.

![](v2Assets/BlockRacers13.png)

## Choosing Your Car
By pressing change car you'll be presented with options to change your model, colour, stats and even the NFT displayed on the back of your car.

![](v2Assets/BlockRacers14.png)

## Upgrades
In the upgrade area of the garage you may use tokens to upgrade things like your engine, handling and nos levels as the NFTs are also dynamic.

![](v2Assets/BlockRacers15.png)

## All NFT Call
To show off our new all NFT call, we're giving you the ability to call any NFT you own and display it as your cars back window too.

![](v2Assets/BlockRacers16.png)

## Marketplace
This are will show off our marketplace functionality.

![](v2Assets/BlockRacers17.png)

## Ready, Set, Race!
Once you're set and happy with your car feel free to enter the race area, set your region for a lag free experience and search for a multiplayer match!

![](v2Assets/BlockRacers19.png)
![](v2Assets/BlockRacers20.png)