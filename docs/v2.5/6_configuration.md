---
slug: /current/configuration
sidebar_position: 6
sidebar_label: Configuration
---


# Configuration

:::info

This page walks you through our new Web3 builder and it's functionality in terms of binding services and using a web3 provider.

:::

## Web3 as the entry point to the SDK 

To access most features provided by the SDK, you first have to create an instance of Web3 object.
You can think of it as a preconfigured entry point to the SDK or a facade.
It usually makes sense to keep 1 instance of Web3 for the active player for the lifetime of 1 session.
When player connects his wallet, you build a new instance that's associated with him.
This makes Web3 a good candidate to be stored in a singleton of some sort.

With all that in mind, nobody stops you from creating as many Web3 instances as you need.
You can think of one instance that's created before user even logged into the game just for blockchain reading purposes.
Or even 4 instances for each player in a couch-party-game, to load their credits, preferences
or any other web3 goodness you can think of.

## Web3Builder

To build a new instance of Web3 you'd have to use Web3Builder object.
You can simply create one using a constructor with one required parameter being the
Project Configuration scriptable object. This object contains the data you entered when setting up
the SDK and can be obtained using `ProjectConfigUtilities.Load()`:

```csharp
using ChainSafe.Gaming.Build;
using ChainSafe.Gaming.UnityPackage;

private void Start()
{
    var projectConfig = ProjectConfigUtilities.Load();
    var web3Builder = new Web3Builder(projectConfig);
}
```

You can also provide another instance of `ProjectConfigScriptableObject`,
if you want to support multiple chains:

```csharp
public void InitializeModel(ProjectConfigScriptableObject web3ProjectConfig)
{
    var web3Builder = new Web3Builder(web3ProjectConfig);
}
```

Another option is to implement IProjectConfig and/or IChainConfig 
and use them for the very same purposes:

```csharp
using ChainSafe.Gaming.Configuration;

private class CustomChainConfig : IChainConfig
{
    public string ChainId => "27";
    public string Chain => "shiba";
    public string Network => "ethereum";
    public string Rpc => "https://custom.rpc.io";
}

private void Start()
{
    var projectConfig = ProjectConfigUtilities.Load();
    var customChainConfig = new CustomChainConfig();
    var web3Builder = new Web3Builder(projectConfig, customChainConfig);
}
```

## Binding services

To actually enable a feature you'd have to bind it using the `Configure` method of `Web3Builder`:

```csharp
var web3Builder = new Web3Builder(projectConfig)
    .Configure(services =>
    {
        // todo: bind services here
    });
```

### Environment

Any Web3 instance requires environment it's gonna be running in bound.
If running within Unity, go with UnityEnvironment.
To bind it call `UseUnityEnvironment()` extension method:

```csharp
using ChainSafe.Gaming.Unity.Environment;

var web3Builder = new Web3Builder(projectConfig)
    .Configure(services =>
    {
        services.UseUnityEnvironment();
    });
```

### Rpc Provider

RpcProvider is another required service. It enables reading from blockchain.
This one binds via `UseJsonRpcProvider` extension method:

```csharp
using ChainSafe.Gaming.Evm.JsonRpcProvider;

var web3Builder = new Web3Builder(projectConfig)
    .Configure(services =>
    {
        services.UseUnityEnvironment();
        services.UseJsonRpcProvider();
    });
```

It's worth noting you can pass a configuration object to `UseJsonRpcProvider` method to
provide custom settings for this instance of `JsonRpcProvider`.

Most of `Use$Service$()` methods support custom configuration objects, 
but in many cases a default one would be enough.

### Signer

Another core component for Web3 game-development is Signer. Using Signer you can
get active player account address and also sign data.

There are many usages for Signer, one of the most common being verifying if player really owns
this account address or what's called authentication.

### TransactionExecutor

Transaction executor is used to send transactions to blockchain.
This results in broadcasting transaction through network therefore writing to blockchain.

### Wallet

Some services fulfill obligations of both Signer and TransactionExecutor.
We call this services - Wallets.

Binding wallet is similar to binding Rpc Provider:

```csharp
using ChainSafe.Gaming.Wallets.WebPage;

var web3Builder = new Web3Builder(projectConfig)
    .Configure(services =>
    {
        services.UseUnityEnvironment();
        services.UseJsonRpcProvider();
        services.UseWebPageWallet();
    });
```

As the wallet is bound you can use both Signer & TransactionExecutor:

```csharp
var playerAddress = web3.Signer.GetAddress();
var transactionResponse = web3.TransactionExecutor.SendTransaction(new TransactionRequest());
```

But first, you have to actually build Web3 object.

## Building Web3 Client

To build a Web3 object you must call BuildAsync of Web3Builder. 
As you can see it's an asynchronous operation, 
so you should also mark the method calling BuildAsync as `async`. Now let's build a Web3 object.

```csharp
private async void Start()
{
    var projectConfig = ProjectConfigUtilities.Load();
    var web3 = await new Web3Builder(projectConfig)
        .Configure(services =>
        {
            services.UseUnityEnvironment();
            services.UseJsonRpcProvider();
            services.UseWebPageWallet();
        })
        .LaunchAsync();
        Web3Acessor.Set(web3);
}
```

Notice we added `await` keyword and replaced `web3Builder` variable with `web3`.
The reason is that `BuildAsync` returns a Web3 instance when you await it, 
so we don't need to keep reference to Web3Builder object in this case.

Building web3 instance is an async operation because there is some initialization code,
that has to be executed before you get access to the Web3 object.
Wallets, for example, try to connect user wallet, which is a long process, that might require input
from user outside the application.

Once BuildAsync finished executing you can be sure all services are initialized 
and you can safely use your new Web3 instance:

```csharp
var signedMessage = await web3.Signer.SignMessage("Web3 Ready");
```