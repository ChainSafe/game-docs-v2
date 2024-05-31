---
slug: /current/interacting-with-smart-contracts
sidebar_position: 14
sidebar_label: Interacting With Smart Contracts
---


# Interacting with Smart Contracts

:::info

This page explains smart contract interactions within the SDK.

:::

Smart contracts in Ethereum are like digital agreements that run on the blockchain.
They are computer programs that automatically execute and enforce predefined actions
and rules when certain conditions are fulfilled. Imagine a vending machine: you put
in money, select a product, and it delivers the item without needing a human in between. Similarly,
in Ethereum's smart contracts, you input cryptocurrency, trigger a specific action, and the contract 
autonomously carries out the agreed-upon task, like transferring ownership of a digital asset or
distributing funds. This eliminates the need for intermediaries and ensures transparent, 
tamper-proof, and reliable execution of agreements.

Each smart contract has it's own ABI (Application Binary Interface). You can get the ABI 
from sources like contract compilation, blockchain explorers like Etherscan, DApp development
libraries, or third-party tools. It helps you understand how to communicate with the contract 
on the blockchain.

### Creating a Smart Contract Instance

To interact with a smart contract you first have to create an instance of one on your side. 
This is done by calling the `Build(string abi, string contractAddress)` method of `ContractBuilder`:

TODO: Add using statements after fix-namespaces branch is merged 
```csharp
var abi = "%YOUR_ABI_IN_JSON_FORMAT%";
var address = "0x1d6f31b71e12a1a584ca20853495161c48ba491f";
var contract = web3.ContractBuilder.Build(abi, address);
```

You can also preregister a contract during the initialization phase of your game:

```csharp
var web3 = await new Web3Builder(ProjectConfigUtilities.Load())
    .Configure(services =>
    {
        // ...
        services.ConfigureRegisteredContracts(contracts =>
        {
            var abi = "%YOUR_ABI_IN_JSON_FORMAT%";
            var address = "0x1d6f31b71e12a1a584ca20853495161c48ba491f";
            contracts.RegisterContract("shiba", abi, address);
        });
    })
    .LaunchAsync();
```

Now you can simply create a new instance of the contract using the contract name:

```csharp
var contract = web3.ContractBuilder.Build("shiba");
```

### Invoking Smart Contract Methods

After acquiring your Smart Contract instance, you're free to invoke any of its methods.

These method calls can be categorized into two types - read and write:
- Read method call is an interaction with a smart contract that retrieves information from the blockchain without making any changes to the contract's state.
- Write method call is an interaction with a smart contract that alters the blockchain's state by executing a function that can modify the contract's data or trigger other actions.

To execute a read method call use `Call` method of your smart contract instance:

```csharp
object[] response = await contract.Call("getRank", new object[] { accountAddress });
BigInteger rank = BigInteger.Parse(response[0].ToString());
```

Write calls alter the blockchain's state, meaning player have to provide gas in ETH to execute such call.
You can set any amount for the gas, but you can also estimate the required gas fee amount using
the `EstimateGas` method:

```csharp
var gasLimit = await contract.EstimateGas("add", new object[] { 1 });
```

To actually call write method you can use `Send` method of `Contract`:

```csharp
object[] response = await contract.Send("add", new object[] { 1 });
BigInteger total = BigInteger.Parse(response[0].ToString());
```

You can set gas limit (as well as any other transaction option) by creating a prototype
transaction request. Fill only those properties that you wish to override and the contract will
set all the info that's left:

TODO: make sure I should use GasLimit property of TransactionRequest here
```csharp
var gasLimitHex = await contract.EstimateGas("add", new object[] { 1 });
var transactionRequest = new TransactionRequest { GasLimit = gasLimitHex };
await contract.Send("add", new object[] { 1 }, transactionRequest);
```