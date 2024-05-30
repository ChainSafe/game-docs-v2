---
slug: /current/faq
sidebar_position: 24
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

Yes, you can make desktop, web, and mobile games using our SDK. To create a desktop game with web3.unity, you will need to create a Web3GL build with web3.unity.

### Does the SDK support other EVM-compatible chains besides Ethereum?

Yes. The SDK will support other EVM-compatible chains. 

You will need to edit the `network.js` file found within the **WebTemplates** folder. Edit the `ChainId` to the one for the blockchain you want your game to interact with. See websites like [Chainlist](https://chainlist.org/) for a list of EVM ChainID's. You will then also need to an appropriate RPC endpoint for the chain you wish to connect with.

Should you run into any issues with a particular chain, please reach out on our [Discord](https://discord.gg/zxHUgGGTGk).

### Does the SDK support other non-EVM blockchains like Solana or Algorand?

Not currently. Although, the SDK is mainly compatible with Ethereum Virtual Machine (EVM) blockchains, we do have plans for supporting non-EVM chains in the future depending on community support.

### The Google Play / Apple AppStore is rejecting my application, what can I do?

**Answer #1:** This usually happens because the game has not informed the user that a MetaMask pop up will occur. You can solve this by adding a simple notification as seen below.

![](assets/reqMetamask.png)

**Answer #2:** Some stores may require a demo version of the game so that the stores teams can review the product without needing an external wallet. You can simply add a demo button within the game that takes the user to a free-to-play version of your game without blockchain calls to test. This should be enough for the store to accept your games application. Happy coding!

### How do I enable Torus and other crypto wallets for the SDK?

You can do this by editing the WebGLTemplates -> WebGL2020x -> Web3 -> index.js file. You need to uncomment the wallet at the top to allow the UNPKG javascript file to be used and then uncomment the wallet in the connect function below. Other wallets can be added the same way, provided the developers of the wallet supply a UNPKG javascript file and the wallet is EVM-compatible (such as MetaMask).

![](assets/EnablingAlternateWallets.png)

## Common Questions About Upgrading To The Latest Version of web3.unity

### How do I download the latest version?

web3.unity is currently on v2.
    
You can download the [latest release](https://github.com/ChainSafe/web3.unity/releases/) and import it into your Unity build. We have an installation tutorial here: [https://docs.gaming.chainsafe.io/](https://docs.gaming.chainsafe.io/)
    
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
    
Join our [Discord](https://discord.gg/zxHUgGGTGk) for support or reach out to our team at `bd@chainsafe.io` for consulting engagements, we are happy to assist.
    
### What is an RPC and how do I get one?
    
A Remote Procedure Call or RPC node is a type of computer server that allows users to read data on the blockchain and send transactions to different networks. You can deploy one using either [QuickNode](https://www.quicknode.com/) or [Chainstack](https://chainstack.com/).
    
### Why are RPCs required?
    
The latest decentralized version of the SDK will significantly reduce the involvement our intermediary API servers play which previously was causing developers with intermittent outages and bottlenecks. Instead, we are encouraging users to assess and determine the uptime guarantees needed from infrastructure providers in supplying an RPC node.
    
### My current build is running just fine, is upgrading compulsory?
    
While we appreciate and understand how this may impact some of our existing developers and their games/communities, an upgrade to the latest version is required. 
    
We believe the net positive as a result of ultimate developer control, transparency, and decentralization makes upgrading to the latest version a worthwhile endeavor in the long run.
    
### Can someone help migrate my game to the latest version?
    
Please join us in our [Discord](https://discord.gg/zxHUgGGTGk) ([#gaming-help](https://discord.gg/QKxVQBsyPt), [#community-code-support](https://discord.gg/sYhfpxrEHt)) for support from our core devs, ChainSages, and other SDK community members. 
    
If additional consulting is required, please contact us at `bd@chainsafe.io` to set up a call with our team.
    
### Can I pay to keep my game running using ChainSafe’s API server?
    
Please stay tuned to our [website](https://gaming.chainsafe.io) or on our [Discord](https://discord.gg/zxHUgGGTGk) for further information. 
    
### Will the web3.unity SDK remain free to use?
    
Yes, the SDK will remain free to use.

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

![](assets/image0.jpg)

This error typically happens when the user hasn't selected the Web3GL template for making WebGL Games. Make sure you have selected the provided template before making a Web3GL-based game.

![](assets/webgl\_template.png)

### I'm having issues building with react or into a server and it's showing `Uncaught TypeError: Cannot read properties of undefined (reading 'connect')` on build, what should I do?

You need to add the web3 component into your react build manually. To do so:

1. &#x20;In your public folder, add the web3 folder from a unity build.
2. Then import the following as a script at index.html.
3. 
 ```js
 \<script src="%PUBLIC\_URL%/YourGame/web3/index.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/web3/lib/web3modal.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/web3/lib/web3.min.js">\</script> \<script src="%PUBLIC\_URL%/YourGame/network.js">\</script>
```
 This should solve your issue. Happy coding!
