---
slug: /current/getting-started
sidebar_position: 1
sidebar_label: Getting Started
---


# Getting Started

:::info

This guide will help you switch over from version 1.6 of the SDK to current version, don't worry it's quite easy and offers a much more streamlined process of learning & using the SDK. Please note that this is currently in Beta and will still go through changes.

:::

### Major Changes {#major-changes}

The major changes between versions 1.6 and the current of the SDK have been made to help new users onboarding into the SDK as well as increasing ease of use for our current developers.

These changes include:

New libraries being present so code is a lot cleaner, i.e EVM & Web Wallet.
RPC providers are now handled user side as opposed to API side which means you will need an infura enabled rpc (chainstack) or a local node.
Chainstack offers 3 million calls per month for free, this is more than enough for testing and most production applications.
Methods have been cleaned up so you no longer need to enter the network and chain parameters over and over.
On Hash Message for sign verify with WebGL has been altered slightly to be handled via libraries.
Private key transactions have been removed, you may still use sign however, these calls will now need a new import of "using Web3Unity.Scripts.Library.Web3PrivateKey"

Here's a side by side video comparing changes in the chicken demo in 1.6 and the latest release from Sneakz
<iframe width="800" height="450" src="https://www.youtube.com/embed/V7R8_3XvBEo?list=PLPn3rQCo3XrP6kFaurgMfMQBsyppYBhqW" title="A Side-By-Side Code Comparison Between v1.6.x and v2 Of web3.unity Using The Chicken Demo!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Removing The Old Files {#removing-the-old-files}

Delete the Web3Unity & WebGLTemplates and Plugins -> Nethereum folders from your game as seen below to ensure there are no code clashes.

![](v2Assets/v2DeletePreviousSDKFiles.png)

### Importing Version 2 {#importing-version-2}

Download & import the latest version of the SDK package from [https://github.com/ChainSafe/Gaming_SDK_V2/releases/](https://github.com/ChainSafe/Gaming_SDK_V2/releases/)

![](v2Assets/v2installv2unitypackage.png)

### Adding The New Libraries {#adding-the-new-libraries}

You may see some errors when you initially import the new package, don't worry this is normal. As the libraries have now been given name spaces you just need to import them up the top to gain access to all of their features. This has been done for EVM, Web Wallet & Contracts. You can import them at the top of the file as seen below. Web Graphics Library should just work as normal given that the changes below are present.

![](v2Assets/v2importevmlib.png)

![](v2Assets/v2web3walleterror.png)

![](v2Assets/v2web3walletlibimport.png)


### Changes To Remove Errors {#changes-to-remove-errors}

The next step is to change your EVM.Call & EVM.CreateContractData methods to the new way of doing things. You'll see this is now done locally with less parameters as opposed to going through the API. This means less time spent developing/waiting & more time spent gaming!

![](v2Assets/v2InstallErrors.png)

### Contract ABI to JSON format {#contract-abi-to-json-format}
In order to interact with a contract you'll need the ABI of the contract in a readable format, to do this you can follow the steps below.

1. copy the ABI from your contract source, remix or other IDE.
2. paste it into your browser address bar to get it onto 1 line.
3. copy it again from the address bar and paste it into here https://codebeautify.org/csharp-escape-unescape
4. press escape and copy the result.
5. paste result into unity under string contractAbi = "PASTE_HERE";

### EVM.Call-To-Call-Data {#evm.call-to-call-data}

Below you can see the differences between the old EVM.Call and the new contract.Calldata method. We're simply creating a new object reference and accessing the function as seen below. All builds will require this change.

![](v2Assets/v2importcontractslib.png)

![](v2Assets/v2evmcallold.png)

![](v2Assets/v2evmcallnew.png)

### EVM.CreateContractData-To-Call-Data {#evm.createcontractdata-to-call-data}

Following a similar pattern, the same can be done for create contract data, please pay attention to the slight changes. You'll notice that the previous way of serializing data into object has now been included into the contract object for ease of use. You can simply remove these and place them into the object creation as seen below. Please note this only for Web Wallet Builds, other builds will not need a method change for transactions.

![](v2Assets/v2importcontractslib.png)

![](v2Assets/v2createcontractdataold.png)

![](v2Assets/v2createcontractdatanew.png)

### Web Graphics Library Sign Verify {#web-graphics-library-sign-verify}

Web Graphics Library Sign verify has been altered slightly so now instead of it being an EVM.Call it's handled entirely within the lib, pretty neat hey! You can see the changes between the old and the new versions below.

![](v2Assets/v2webglsignverifyold.png)

![](v2Assets/v2webglsignverifynew.png)

### Test, Test & Test Again! {#test-test-&-test-again}
So far this is all you should need to do. As we make changes we'll be implementing and testing these within both versions of the chicken demo also so if you get stuck in any way, you can always refer to the examples in their respective repositories here [https://discord.com/channels/593655374469660673/948330931394052116/1006409190400598070/](https://discord.com/channels/593655374469660673/948330931394052116/1006409190400598070/). Please give it a test and let our support staff know in discord if you have any troubles. Happy coding!