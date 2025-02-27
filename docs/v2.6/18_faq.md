---
slug: /current/faq
sidebar_position: 18
sidebar_label: FAQ
---


# Frequently Asked Questions

:::info

Frequently asked questions about ChainSafe Gaming's SDK, web3.unity.

:::

1. [Common Questions](#common-questions)
2. [Common Questions About Upgrading To The Latest Version of web3.unity](#common-questions-about-upgrading-to-the-latest-version-of-web3unity)
3. [Common Error Messages](#common-error-messages)


## Common Questions

### Is the SDK free to use?&#x20;

Yes, the SDK is free to use.

### Can I make desktop games with the SDK?

Yes, you can make desktop, web, and mobile games using our SDK.

### Does the SDK support other EVM-compatible chains besides Ethereum?

Yes. The SDK will support other EVM-compatible chains, should you run into any issues with a particular chain, please reach out on our [Discord](https://discord.gg/zxHUgGGTGk?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs).

### Does the SDK support other non-EVM blockchains like Solana or Algorand?

Not currently. Although, the SDK is mainly compatible with Ethereum Virtual Machine (EVM) blockchains, we do have plans for supporting non-EVM chains in the future depending on community support.

### The Google Play / Apple AppStore is rejecting my application, what can I do?

**Answer #1:** This usually happens because the game has not informed the user that a MetaMask pop up will occur. You can solve this by adding a simple notification as seen below.

![](assets/faq/request-metamask.png)

**Answer #2:** Some stores may require a demo version of the game so that the stores teams can review the product without needing an external wallet. You can simply add a demo button within the game that takes the user to a free-to-play version of your game without blockchain calls to test. This should be enough for the store to accept your games application. Happy coding!

## Common Questions About Upgrading To The Latest Version of web3.unity

### How do I download the latest version?

web3.unity is currently on v2.
    
You can download the [latest release](https://github.com/ChainSafe/web3.unity/releases/?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) and import it into your Unity build. We have an installation tutorial [here](https://docs.gaming.chainsafe.io/).
    
### What are the benefits of moving to the latest version?

* **Improves reliability -** This upgrade gives developers the flexibility to choose the best infrastructure for their use case and avoid possible downtime while also choosing fallback options if any infra provider fails.
* **Improves scalability -** Game studios will be able to pick and choose the infrastructure that serves their uptime requirements.
* **Improves SDK speed -** Removing the API server speeds up the blockchain gaming UX since reads and writes can happen either player-side or on dedicated infrastructure.
* **Improves transaction handling -** Improved event listening (getting a notification immediately when a transaction goes through, rather than pinging the API server repeatedly for a status update) is one of the most consistently requested features. Decentralizing provides more responsive event handling by allowing devs and players to check transactions directly.
* **Improves collaboration -** Open sourcing v2 invites the gaming community to contribute meaningfully to the codebase — helping to debug, optimize, and ultimately, determine for themselves where it may be undesirable or infeasible for service providers to run infrastructure.

### Are code changes required when I update to the latest version?

The latest version (v2.6) will require code changes for games using legacy versions of web3.unity.

Some effort will be required to refactor games that use modified versions of our prefabs, as well as needing to configure an RPC provider for broadcasting transactions to the various networks we support. Without these changes, games will be impacted and players will no longer be able to make and sign transactions. 
    
### How long will it take to migrate my game from legacy versions to the latest version?
    
This largely depends on the amount of affected code you have in your game and the platform that you’re building on; both our team and the community are here to help.
    
Join our [Discord](https://discord.gg/zxHUgGGTGk?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) for support or reach out to our team at `bd@chainsafe.io` for consulting engagements, we are happy to assist.
    
### What is an RPC and how do I get one?
    
A Remote Procedure Call or RPC node is a type of computer server that allows users to read data on the blockchain and send transactions to different networks. You can deploy one using either [QuickNode](https://www.quicknode.com/?utm_source=chainsafe&utm_medium=referrals&utm_campaign=Referrals) or [Chainstack](https://chainstack.com/?utm_source=chainsafe&utm_medium=referrals&utm_campaign=Referrals).
    
### Are RPCs required?
    
The latest decentralized version of the SDK will significantly reduce the involvement our intermediary API servers play which previously was causing developers with intermittent outages and bottlenecks. Instead, we are encouraging users to assess and determine the uptime guarantees needed from infrastructure providers in supplying an RPC node. A default rpc will suffice but if you want to avoid congestion and uptime issues we would suggest using your own.
    
### My current build is running just fine, is upgrading compulsory?
    
While we appreciate and understand how this may impact some of our existing developers and their games/communities, an upgrade to the latest version is required. There are many optimizations, fixes and new features in our latest version that make the upgrade well worth it.
    
### Can someone help migrate my game to the latest version?
    
Please join us in our [Discord](https://discord.gg/zxHUgGGTGk?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) ([#gaming-help](https://discord.gg/QKxVQBsyPt?utm_source=docs&utm_medium=documentation&utm_campaign=chainsafe_gaming_docs) for support from our core devs, ChainSages, and other SDK community members. If additional consulting is required, please contact us at ```js
bd@chainsafe.io
``` 
to set up a call with our team.
    
### Will the web3.unity SDK remain free to use?
    
Yes, the SDK will remain free to use.

### Wallet address is being returned in all lower case, i need it in checksum format.

No problems you can simple run a checksum conversion on the wallet address like so:

```csharp
// Put this at the top of your script, it's a using directive to give you access to the helper method.
using Nethereum.Util;

// This is your checksum function, place it anywhere.

/// <summary>
/// Converts an address to checksum format.
/// </summary>
private string ConvertToChecksum(string address)
{
    string checksumAddress = new AddressUtil().ConvertToChecksumAddress(address);
    return checksumAddress;
}

// Call it like this.
var checksumAddress = ConvertToChecksum(Your Address Here);
```

## Common Error Messages

### I'm seeing the following error when I install the package. `The type or namespace name 'Newtonsoft' could not be found`  

NewtonSoft is a dependency of the SDK and needs to be installed for the SDK to work. If you see a newtonsoft error you can manually install the package by going to window->package manager->pressing the + button on the top left, pressing add via git url and pasting in "com.unity.nuget.newtonsoft-json@3.0.1".

### I'm having issues building to Android/IOS/WebGL
Code stripping needs to be changed depending on your unity version. Go to Edit -> Project settings -> Player and scroll down until you see the code stripping settings. Older unity versions will need to set this to false. Newer unity versions will need to set the managed stripping level to low.

### I'm getting the following error when trying to import an NFT texture into the SDK. `Curl error 1: Protocol "ipfs" not supported or disabled in libcurl`

IPFS has its own protocol that isn't supported in JSON.Net. In order to get around this, you will need to add something like the following code snippet:

```csharp
string imageUri = data.image;
if (imageUri.StartsWith("ipfs://"))
{
     imageUri = imageUri.Replace("ipfs://", "https://ipfs.io/ipfs/");
C#// Some code
```

### I'm getting the following error `Cannot read properties of undefined reading connect` when clicking the login button. What am I doing wrong?

![](assets/faq/webgl-error.jpg)

This error typically happens when the user hasn't selected the Web3GL template for making WebGL Games. Make sure you have selected the provided template before making a Web3GL-based game.

![](assets/faq/webgl-template.png)

### I'm having issues building with react or into a server and it's showing `Uncaught TypeError: Cannot read properties of undefined (reading 'connect')` on build, what should I do?

You need to add the web3 component into your react build manually. To do so:

1. &#x20;In your public folder, add the web3 folder from a unity build.
2. Then import the following as a script at index.html.
3. 
 ```js
 \<script src="%PUBLIC\_URL%/YourGame/web3/index.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/web3/lib/web3modal.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/web3/lib/web3.min.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/network.js">\</script>
 ```
 This should solve your issue. Happy coding!

### I'm having `IndexOutOfRangeException` exception thrown when building to WebGL

```
IndexOutOfRangeException: Index was outside the bounds of the array.
```

When building to WebGL you could run into this issue on some Unity versions. To fix this, simply open your project's _Player Settings_ then navigate to _Resolution and Presentation_ and pick **Web3.Unity** under _WebGL Template_. Even if it was already selected your project should be able to build to WebGL now.

### I cannot use your WebGL template to build for WebGL since I already have my own template with other dependencies
No problem! Our WebGL template primarily ensures that the web3UnityInstance is assigned after the Unity instance is fully loaded and injected into the HTML. Here's how this is typically handled:
```js
script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          web3UnityInstance = unityInstance;
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
      };
```
This assignment is critical for web3.unity to function properly. Regardless of how or where you are initializing the Unity instance, ensure that the web3UnityInstance is explicitly assigned to your Unity instance during the initialization process.


 <details>
  <summary>Example how to do it with react-unity-webgl</summary>

  In react-unity-webgl add this: 
  ```js
  const { unityProvider, sendMessage, isLoaded, loadingProgression } =
      useUnityContext({
          loaderUrl: 'build/build.loader.js',
          dataUrl: 'build/build.data',
          frameworkUrl: 'build/build.framework.js',
          codeUrl: 'build/build.wasm'
      })

     useEffect(() => {
     window.web3UnityInstance = {
          SendMessage: (gameObjectName, methodName, parameter) => {
               if (!gameObjectName || !methodName) {
                    console.error(
                         "SendMessage requires at least 'gameObjectName' and 'methodName'."
                    )
                    return
               }

               // Call the sendMessage function
               sendMessage(gameObjectName, methodName, parameter)

               // Log for debugging
               console.log(
                    'SendMessage called with:',
                    gameObjectName,
                    methodName,
                    parameter
               )
          }
     }
     }, [isLoaded])

  ```
   Big thanks to Majiick for this solution.

</details> 
      
