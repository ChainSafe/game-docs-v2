---
slug: /current/webgl-browser
sidebar_position: 10
sidebar_label: WebGL Browser
---

:::info

WebGL or browser builds are built using the WebGL prefabs & scripts.

:::

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

### Block number {#block-number}

Get the current latest block number

```csharp
using Web3Unity.Scripts.Library.Ethers.Providers;
using UnityEngine;

public class WebGLGetBlockNumber : MonoBehaviour
{
    public async void BlockNumber()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        Debug.Log("Block Number: " + await provider.GetBlockNumber());
    }
}
```

### Gas Price {#block-number}

Get the current gas price for a transaction based on chain / network and rpc.

```csharp
using Web3Unity.Scripts.Library.Ethers.Providers;
using UnityEngine;

public class WebGLGetGasPrice : MonoBehaviour
{
    public async void GasPrice()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        Debug.Log("Gas Price: " + await provider.GetGasPrice());
    }
}
```

### Gas Limit {#block-number}

Get the current gas limit for a transaction based on chain / network and rpc.

```csharp
using Web3Unity.Scripts.Library.Ethers.Contracts;
using Web3Unity.Scripts.Library.Ethers.Providers;
using UnityEngine;

public class WebGLGetGasLimit : MonoBehaviour
{
    public async void GasLimit()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
        string contractAddress = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
        var contract = new Contract(contractAbi, contractAddress, provider);
        var gasLimit= await contract.EstimateGas("addTotal", new object[] {});
        Debug.Log("Gas Limit: " + gasLimit);
    }
}
```

### Transaction Status {#transaction-status}
```csharp
using Nethereum.Hex.HexTypes;
using Web3Unity.Scripts.Library.Ethers.Providers;
using Web3Unity.Scripts.Library.Ethers.Signers;
using Web3Unity.Scripts.Library.Ethers.Transactions;
using UnityEngine;

public class WebGLGetTxStatus : MonoBehaviour
{
    public async void TransactionStatus()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        var signer = new JsonRpcSigner(provider, 0);
        var tx = await signer.SendTransaction(new TransactionRequest
        {
            To = await signer.GetAddress(),
            Value = new HexBigInteger(100000)
        });
        var txReceipt = await tx.Wait();
        Debug.Log("Transaction receipt: " + txReceipt.Confirmations);
    }
}
```

### Nonce {#nonce}

```csharp
using Nethereum.Hex.HexTypes;
using Web3Unity.Scripts.Library.Ethers.Providers;
using Web3Unity.Scripts.Library.Ethers.Signers;
using Web3Unity.Scripts.Library.Ethers.Transactions;
using UnityEngine;

public class WebGLGetNonce : MonoBehaviour
{
    public async void Nonce()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        var signer = new JsonRpcSigner(provider, 0);
        var tx = await signer.SendTransaction(new TransactionRequest
        {
            To = await signer.GetAddress(),
            Value = new HexBigInteger(100000)
        });
        var nonce = tx.Nonce;
        Debug.Log("Nonce: " + nonce);
    }
}
```

### Send Transaction through WebGL {#send-transaction-through-webgl}

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

#if UNITY_WEBGL
public class WebGLSendTransactionExample : MonoBehaviour
{
    async public void OnSendTransaction()
    {
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
    }
}
#endif
```

### SHA3 through WebGL

Will calculate the sha3 of the input.&#x20;

```csharp
using System;
using UnityEngine;

#if UNITY_WEBGL
public class WebGLSha3Example : MonoBehaviour
{
    async public void OnHashMessage()
    {
        try
        {
            string message = "hello";
            string hashedMessage = await Web3GL.Sha3(message);
            Debug.Log("Hashed Message :" + hashedMessage);
        }
        catch (Exception e)
        {
            Debug.LogException(e, this);
        }
    }
}
#endif
```

### Verify WebGL {#verify}

Verify a signed message WebGL.

```csharp
using System;
using UnityEngine.UI;
using UnityEngine;

#if UNITY_WEBGL
public class WebGLSignVerifyExample : MonoBehaviour
{
    async public void OnHashMessage()
    {
        try
        {
            public string message = "hello";
            string hashedMessage = await Web3GL.Sha3(message);
            Debug.Log("Hashed Message: " + hashedMessage);
            string signHashed = await Web3GL.Sign(hashedMessage);
            Debug.Log("Signed Hashed: " + signHashed);
            ParseSignatureFunction(signHashed);
            string verify = await Web3GL.EcRecover(hashedMessage, signHashed);
            Debug.Log("Verify Address: " + verify);
        }
        catch (Exception e)
        {
            Debug.LogException(e, this);
        }
    }
    public void ParseSignatureFunction(string sig)
    {
        string signature = sig;
        string r = signature.Substring(0, 66);
        string s = "0x" + signature.Substring(66, 64);
        int v = int.Parse(signature.Substring(130, 2), System.Globalization.NumberStyles.HexNumber);
    }
}
#endif
```

### Call Custom Contracts {#call-custom-contracts}

Call will execute a smart contract method without altering the smart contract state.

Working example: [https://chainsafe.github.io/game-sendContract-example/](https://chainsafe.github.io/game-sendContract-example/)

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/8A9NmuCucqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Solidity Contract Example

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

### Reading a value from a solidity contract

```csharp
using Web3Unity.Scripts.Library.Ethers.Contracts;
using Newtonsoft.Json;
using Web3Unity.Scripts.Library.Ethers.Providers;
using UnityEngine;

#if UNITY_WEBGL
public class WebGLContractRead : MonoBehaviour
{
    async public void CheckVariable()
    {
        string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
        // address of contract
        string contractAddress = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
        string method = "myTotal";
        // you can use this to create a provider for hardcoding and parse this instead of rpc get instance
        var provider = new JsonRpcProvider("YOUR_NODE");
        var contract = new Contract(contractAbi, contractAddress, provider);
        Debug.Log("Contract: " + contract);
        var calldata = await contract.Call(method, new object[]
        {
            // if you need to add parameters you can do so, a call with no args is blank
            // arg1,
            // arg2
        });
        // display response in game
        print("Contract Variable Total: " + calldata[0]);
    }
}
#endif
```

### Reading an array from a solidity contract

```csharp
using Newtonsoft.Json;
using UnityEngine;
using UnityEngine.UI;
using Web3Unity.Scripts.Library.Ethers.Contracts;
using Web3Unity.Scripts.Library.Ethers.Providers;

#if UNITY_WEBGL
public class WebGLGetArray : MonoBehaviour
{
    // contract to interact with 
    string contractAddress = "0x5244d0453A727EDa96299384370359f4A2B5b20a";
    // abi in json format
    string abi =
        "[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"}],\"name\":\"setStore\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bought\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStore\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]";
    // smart contract method to call
    string method = "getStore";
    // Address TextField
    public Text playerAddresses;
    public async void GetArrayDataWeb()
    {
        var provider = new JsonRpcProvider("YOUR_NODE");
        var contract = new Contract(abi, contractAddress, provider);
        Debug.Log("Gas Price: " + await provider.GetGasPrice());
        var gasPrice = await provider.GetGasPrice();
        var gasValue = await contract.EstimateGas("getStore", new object[] {});
        Debug.Log("Gas Value: " + gasValue.Value);
        var calldata = await contract.Call(method);
        string json = JsonConvert.SerializeObject(calldata[0], Formatting.Indented);
        string[] addresses = JsonConvert.DeserializeObject<string[]>(json);
        if (addresses != null) Debug.Log("Addresses: " + addresses[0]);
        if (addresses != null) playerAddresses.text = addresses[0];
    }
}
#endif
```

### Writing a value to a solidity contract (WebGL Builds)

```csharp
using Newtonsoft.Json;
using Web3Unity.Scripts.Library.Ethers.Providers;
using UnityEngine;

#if UNITY_WEBGL
public class WebGLContractSend : MonoBehaviour
{
    async public void AddOneToVariable()
    {
        string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
        // address of contract
        string contractAddress = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
        string method = "addTotal";
        string amount = "1";
        string[] obj = {amount};
        string args = JsonConvert.SerializeObject(obj);
        string response = await Web3GL.SendContract(method, contractAbi, contractAddress, args, "0", "", "");
        // display response in game
        print("Please check the contract variable again in a few seconds once the chain has processed the request!");
    }
}
#endif
```

### Writing an array to a solidity contract (WebGL Builds)

```csharp
using UnityEngine;
using Web3Unity.Scripts.Library.Ethers.Contracts;


#if UNITY_WEBGL
public class WebGLSetArray : MonoBehaviour
{
    public async void SetArrayObject()
    {
        // contract to interact with 
        var contractAddress = "0x5244d0453A727EDa96299384370359f4A2B5b20a";
        // value in wei
        var value = "0";
        // abi in json format
        var abi =
            "[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"}],\"name\":\"setStore\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bought\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStore\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]";
        // smart contract method to call
        var method = "setStore";
        string[] stringArray =
            {"0xFb3aECf08940785D4fB3Ad87cDC6e1Ceb20e9aac", "0x92d4040e4f3591e60644aaa483821d1bd87001e3"};
        var contract = new Contract(abi, contractAddress);
        // gas limit OPTIONAL
        var gasLimit = "";
        // gas price OPTIONAL
        var gasPrice = "";
        var calldata = contract.Calldata(method, new object[]
        {
            stringArray
        });
        Debug.Log("Contract Data: " + calldata[0]);
        // send transaction
        var response = await Web3GL.SendTransactionData(contractAddress, value, gasLimit, gasPrice, calldata);
        print(response);
    }
}
#endif
```
