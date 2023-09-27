---
slug: /current/example-scene
sidebar_position: 17
sidebar_label: Example Scene
---


# Example Scene

:::info

This example scene was built to show off working functions for your reference.

:::

By going to the login screen in web3unity/scenes/ you can see the SDK's functions with working examples.

## Connecting To A Wallet 
In the login scene you'll be presented with a few different login options. You may choose either Web3Auth options, gelato, standard wallet connections or wallet connect if you're on WebGL.

## Web3Auth Functionality
Most functions will work with Web3Auth. If your chain is supported by Gelato and you have an API key you may use them as well.

## Gelato Functionality
If you have an API key present with some native tokens set you'll be able to call the Gelato functions.

![](v2Assets/BlockRacers1.png)
![](v2Assets/BlockRacers18.png)

## Scene Layout
Continuing on, there are a bunch of standard functions which we'll go through below.

![](v2Assets/BlockRacers2.png)

## Signing
This will generate a unique signature from a user that you may use for authorization purposes.

![](v2Assets/BlockRacers3.png)

```csharp
// Csharp here
```

## Verify
This will verify a signature from a wallet to prove its owners address.

![](v2Assets/BlockRacers4.png)

```csharp
// Csharp here
```

## Mint
This can be used to mint ERC20 Race tokens or even native tokens via the faucet to pay for things within game.

![](v2Assets/BlockRacers5.png)

```csharp
// Csharp here
```

## Transfer
This will allow you to transfer ERC20 Race tokens between wallets.

![](v2Assets/BlockRacers6.png)

```csharp
// Csharp here
```

## Custom Call
This will allow you to make a custom call, we've included 2 examples here. 1 being read which checks a contracts state variable and another being write which adds to the sate variable of a contract. You may read it again after to see changes.

![](v2Assets/BlockRacers7.png)

```csharp
// Csharp here
```

## Docs
Clicking this button will take you to ChainSafe's documentation [here](https://docs.gaming.chainsafe.io/)

![](v2Assets/BlockRacers8.png)

```csharp
// Csharp here
```