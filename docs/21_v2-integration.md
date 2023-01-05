---
slug: /version-2-integration
sidebar_position: 21
sidebar_label: Version 2 Integration
---


# Version 2 Integration

:::info

This guide will help you switch over from version 1 of the SDK to version 2, don't worry it's quite easy and offers a much more streamlined process of learning & using the SDK.

:::

### Major Changes {#major-changes}

The major changes between version 1 and version 2 of the SDK have been made to help new users onboarding into the SDK as well as increasing ease of use for our current developers.

These changes include:

New libraries being present so code is a lot cleaner, i.e EVM & Web Wallet.
RPC providers are now handled user side as opposed to API side.
Methods have been cleaned up so you no longer need to enter the network and chain parameters over and over.
On Hash Message for sign verify with WebGL has been altered slightly to be handled via libraries.

### Removing The Old Files {#removing-the-old-files}

Delete the Plugins, Web3Unity & WebGLTemplates folders from your game as seen below to ensure there are no code clashes.

![](assets\v2\v2DeletePreviousSDKFiles.png)

### Importing Version 2 {#importing-version-2}

Download & import the latest version 2 of the SDK package from [https://github.com/ChainSafe/Gaming_SDK_V2/releases/](https://github.com/ChainSafe/Gaming_SDK_V2/releases/)

![](assets\v2\v2installv2unitypackage.png)

### Adding The New Libraries {#adding-the-new-libraries}

You may see some errors when you initially import the new package, don't worry this is normal. As the libraries have now been given name spaces you just need to import them up the top to gain access to all of their features. This has been done for EVM, Web Wallet & Contracts. You can import them at the top of the file as seen below. Web Graphics Library should just work as normal given that the changes below are present.

![](assets\v2\v2importevmlib.png)

![](assets\v2\v2web3walleterror.png)

![](assets\v2\v2web3walletlibimport.png)


### Changes To Remove Errors {#changes-to-remove-errors}

The next step is to change your EVM.Call & EVM.CreateContractData methods to the new way of doing things. You'll see this is now done locally with less parameters as opposed to going through the API. This means less time spent developing/waiting & more time spent gaming!

![](assets\v2\v2InstallErrors.png)

### EVM.Call-To-Call-Data {#evm.call-to-call-data}

Below you can see the differences between the old EVM.Call and the new contract.Calldata method. We're simply creating a new object reference and accessing the function as seen below.

![](assets\v2\v2importcontractslib.png)

![](assets\v2\v2evmcallold.png)

![](assets\v2\v2evmcallnew.png)

### EVM.CreateContractData-To-Call-Data {#evm.createcontractdata-to-call-data}

Following a similar pattern, the same can be done for create contract data, please pay attention to the slight changes. You'll notice that the previous way of serializing data into object has now been included into the contract object for ease of use. You can simply remove these and place them into the object creation as seen below.

![](assets\v2\v2importcontractslib.png)

![](assets\v2\v2createcontractdataold.png)

![](assets\v2\v2createcontractdatanew.png)

### WebGraphicsLibrary Sign Verify {#webgraphicslibrary-sign-verify}

Web Graphics Library Sign verify has been altered slightly so now instead of it being an EVM.Call it's handled entirely within the lib, pretty neat hey! You can see the changes between the old and the new versions below.

![](assets\v2\v2webglsignverifyold.png)

![](assets\v2\v2webglsignverifynew.png)

### Test, Test & Test Again! {#test-test-&-test-again}
So far this is all you should need to do. As we make changes we'll be implementing and testing these within both versions of the chicken demo also so if you get stuck in any way, you can always refer to the examples in their respective repositories here [https://discord.com/channels/593655374469660673/948330931394052116/1006409190400598070/](https://discord.com/channels/593655374469660673/948330931394052116/1006409190400598070/). Please give it a test and let our support staff know in discord if you have any troubles. Happy coding!