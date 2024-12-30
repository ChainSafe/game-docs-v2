---
slug: /current/mud
sidebar_position: 20
sidebar_label: MUD Autonomous Worlds
---

# Build Autonomous Worlds with MUD

## Introduction

MUD is a framework for ambitious on-chain applications, allowing you to build autonomous worlds that are infinitely
extendable by default. These worlds come with access control, upgradability, hooks, plugins, and a suite of excellent
developer tools. MUD evolved from experiences building cutting-edge on-chain games like Dark Forest and zkDungeon. With
our MUD integration, you can now easily create truly decentralized game applications within Unity!

_If you're not familiar with MUD and the concept of autonomous worlds, please refer to the [MUD documentation](https://mud.dev/introduction?utm_source=chainsafe&utm_medium=referrals&utm_campaign=Referrals) first._

## Building a MUD Application in Unity

Before you can start developing your Unity MUD application, you should either deploy or run your MUD world locally. A
MUD world is essentially a set of smart contracts with one main contract called 'World'. Please follow the [Hello World
Tutorial](https://mud.dev/quickstart?utm_source=chainsafe&utm_medium=referrals&utm_campaign=Referrals) from the original MUD documentation to get started.

You can find examples of interacting with the MUD world in the Samples of our UPM package, but we'll cover the most
important parts in this tutorial.

### Configuring the Web3 Client

Once you have a tutorial project up and running locally on your machine, you can connect your Unity application to your
MUD world. To do this, you need to configure your Web3 client to communicate with the MUD world:

```csharp
public MudConfigAsset mudConfig;

private Web3 web3;

async void Awake()
{
    web3 = await new Web3Builder(
            ProjectConfigUtilities.Load(), // project config
            ProjectConfigUtilities.BuildLocalhostConfig()) // chain config
        .Configure(services =>
        {
            // ...
            
            services.UseMud(mudConfig); // enable MUD
        })
        .LaunchAsync();
}
```

The MUD module must be configured first in order to be used. You can provide any implementation of `IMudConfig`, but
there is a handy ScriptableObject class that you can use inside Unity called `MudConfigAsset`.

Notice that we're providing a second configuration to the `Web3Builder`. This instructs `Web3Builder` to use **Localhost**
for our **Chain Configuration**, as we're currently running our MUD world locally using Anvil.

You should also configure your Web3 client to use one of the accounts from your locally running chain if you plan to
execute any transactions. Here’s how you can do it:

```csharp
web3 = await new Web3Builder(/* ... */)
    .Configure(services =>
    {
        // ...
        
        // Initializes wallet as the first account of the locally running Ethereum Node (Anvil).
        services.Debug().UseJsonRpcWallet(new JsonRpcWalletConfig { AccountIndex = 0 });
        
        // ...
    })
    .LaunchAsync();
```

### Building the MUD World Client

Once you have a Web3 client built, you can create a MUD world client with `await web3.Mud().BuildWorld()`.

_At the moment, the `BuildWorld()` method requires a configuration for your MUD world that you need to fill in manually.
This will change in the future once we introduce strongly-typed code generation for your worlds, similar to what we have
for smart contracts._

```csharp
world = await web3.Mud().BuildWorld(new MudWorldConfig
{
    ContractAddress = worldContractAddress,
    ContractAbi = worldContractAbi.text,
    DefaultNamespace = "app",
    TableSchemas = new List<MudTableSchema>
    {
        new()
        {
            Namespace = "app",
            TableName = "Counter",
            Columns = new List<KeyValuePair<string, string>>
            {
                new("value", "uint32"),
            },
            KeyColumns = new string[0], // empty key schema - singleton table (one record only)
        },
    },
});
```

### Interacting with Tables

* You can access any table by calling `world.GetTable(tableName)`.
* You can query table records with `await table.Query(query)`.
* To query all the records from the table, use `MudQuery.All` as the query.
* You can subscribe to table update events using the table object: `table.RecordUpdated += OnCounterRecordUpdated`.

```csharp
var table = world.GetTable("Counter");

// Query counter value 
var allRecords = await table.Query(MudQuery.All); // Query all records of the Counter table
var singleRecord = allRecords.Single(); // Get single record
var counterValue = (BigInteger)singleRecord[0]; // Get value of the first column
Debug.Log($"Counter value on load: {counterValue}");

// Subscribe to table updates.
table.RecordUpdated += OnCounterRecordUpdated;
```

_The way you interact with the table is not perfect and is still a work in progress. We plan to introduce strongly-typed
code generation for tables as well._

### Invoking MUD System Functions

All the logic for the MUD world is located in smart contracts called Systems. You can invoke functions provided by a
System of your MUD world easily using the SDK:

```csharp
await world.GetSystems().Send("increment");
```

The object provided to you by `GetSystems` has the interface of a smart contract client, meaning you can use it in the
same way you would with a smart contract. Here’s how to call a read-only function:

```csharp
var playersOnlineCount = await world.GetSystems().Call<int>("getPlayersOnline");
```