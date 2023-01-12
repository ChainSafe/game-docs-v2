---
slug: /v1/webgl
sidebar_position: 13
sidebar_label: WebGL
---


# WebGL

### Get User's Network {#get-users-network}

```csharp
/*
1 Mainnet
5 Goerli
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
*/
int networkId = Web3GL.Network();
```

### Send Transaction through WebGL {#send-transaction-through-webgl}

```csharp
// account to send to
string to = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// amount in wei to send
string value = "12300000000000000";
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// connects to user's browser wallet (metamask) to send a transaction
try {
    string response = await Web3GL.SendTransaction(to, value, gasLimit, gasPrice);
    Debug.Log(response);
} catch (Exception e) {
    Debug.LogException(e, this);
}
```

### Send Contract through WebGL {#send-contract-through-webgl}

Send will execute a smart contract method, altering the smart contract state.

Working example: [https://chainsafe.github.io/game-sendContract-example/](https://chainsafe.github.io/game-sendContract-example/)

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/buxj5VXi_qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```csharp
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddTotal {
    uint256 public myTotal = 0;

    function addTotal(uint8 _myArg) public {
        myTotal = myTotal + _myArg;
    }
}
```

```csharp
// smart contract method to call
string method = "addTotal";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F";
// array of arguments for contract
string args = "[\"1\"]";
// value in wei
string value = "0";
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// connects to user's browser wallet (metamask) to update contract state
try {
  string response = await Web3GL.SendContract(method, abi, contract, args, value, gasLimit, gasPrice);
  Debug.Log(response);
} catch (Exception e) {
  Debug.LogException(e, this);
}
```

### Sign through WebGL {#sign-through-webgl}

Working example: [https://chainsafe.github.io/game-sign-example/](https://chainsafe.github.io/game-sign-example/)

```csharp
try {
  string message = "hello";
  string response = await Web3GL.Sign(message);
  Debug.Log(response);
} catch (Exception e) {
  Debug.LogException(e, this);
}
```

### SHA3 through WebGL

Will calculate the sha3 of the input.&#x20;

```csharp
 try {
    string message = "hello";
    string hashedMessage = await Web3GL.Sha3(message);
}   catch (Exception e) {
    Debug.LogException(e, this);
}
```

### Sign Verify Account in WebGL

Will hash and sign a message and return the signer's account.

```csharp
try {
   string hashedMessage = await Web3GL.Sha3(message);
   string signHashed = await Web3GL.Sign(hashedMessage);
   Task<string> verify = EVM.Verify(hashedMessage, signHashed);
 } catch (Exception e) {
   Debug.LogException(e, this);
}
```
