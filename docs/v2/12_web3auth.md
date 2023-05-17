---
slug: /current/web3auth
sidebar_position: 12
sidebar_label: Web3Auth Builds
---

# Web3Auth Builds

:::info

The Web3Auth build option allows game developers to build Unity games that run on all platforms. Please note that any other scripts and prefabs you use will be dependent on your chosen platform i.e Web3Wallet or WebGL. A scene that showcases all of the wallets features is available after login in web3unity/scenes/web3auth/walletscene. Additionally you can find the prefabs for the functions below in web3unity/prefabs/web3authwallet.

:::

### Building To Web3Auth ###

Web3Auth builds will work alongside both Web3Wallet and WebGL scripts/prefabs. You may select either platform provided any other scripts you're using match the build platform. Check out our amazing fully functional in game wallet below!

![](<v2Assets/Web3Auth-Wallet.png>)

### Sign Web3Auth {#sign-through-web3auth}

Generates a cryptographic signature for a given string or message via Web3Auth.

```csharp
using UnityEngine.UI;
using UnityEngine;
using Web3Unity.Scripts.Library.Ethers.Web3AuthWallet;

public class SignW3A : MonoBehaviour
{
    public Text responseText;
    public string message = "This is a test message to sign";
    private GameObject CSWallet = null;
    
    public void OnEnable()
    {
        // resets response text
        responseText.text = "";
    }

    public void OnSignMessage()
    {
        // finds the wallet, sets sign and incoming tx conditions to true and opens
        CSWallet = GameObject.FindGameObjectWithTag("CSWallet");
        W3AWalletUtils.incomingTx = true;
        W3AWalletUtils.incomingAction = "Sign";
        W3AWalletUtils.incomingMessageData = message;
        CSWallet.GetComponent<Web3AuthWallet>().OpenButton();
    }

    void Update()
    {
        if (W3AWalletUtils.signedTxResponse != "")
        {
            // display signed tx response from wallet
            responseText.text = W3AWalletUtils.signedTxResponse;
            W3AWalletUtils.signedTxResponse = "";
        }
    }
}
```

### Verify Web3Auth {#verify-through-web3auth}

Verify a signed message via Web3Auth.

```csharp
using UnityEngine.UI;
using System.Text;
using Nethereum.Signer;
using Nethereum.Util;
using UnityEngine;
using Web3Unity.Scripts.Library.Ethers.Web3AuthWallet;

public class VerifyW3A : MonoBehaviour
{
    public Text responseText;
    public string message = "hello";
    private GameObject CSWallet = null;

    public void OnEnable()
    {
        // resets response text
        responseText.text = "";
    }
    
    public void UserSign()
    {
        // finds the wallet, sets sign and incoming tx conditions to true and opens
        CSWallet = GameObject.FindGameObjectWithTag("CSWallet");
        W3AWalletUtils.incomingTx = true;
        W3AWalletUtils.incomingAction = "Sign";
        W3AWalletUtils.incomingMessageData = message;
        CSWallet.GetComponent<Web3AuthWallet>().OpenButton();
    }
    
    public void SignVerifySignature(string signatureString, string originalMessage)
    {
        string msg = "\x19" + "Ethereum Signed Message:\n" + originalMessage.Length + originalMessage;
        byte[] msgHash = new Sha3Keccack().CalculateHash(Encoding.UTF8.GetBytes(msg));
        EthECDSASignature signature = MessageSigner.ExtractEcdsaSignature(signatureString);
        EthECKey key = EthECKey.RecoverFromSignature(signature, msgHash);

        bool isValid = key.Verify(msgHash, signature);
        Debug.Log("Address Returned: " + key.GetPublicAddress());
        Debug.Log("Is Valid: " + isValid);
        // display signed tx response from wallet
        responseText.text = "Verify Address: " + key.GetPublicAddress();
    }
    
    void Update()
    {
        if (W3AWalletUtils.signedTxResponse != "")
        {
            //verification
            SignVerifySignature(W3AWalletUtils.signedTxResponse, message);
            W3AWalletUtils.signedTxResponse = "";
        }
    }
}
```

### Transfer ERC-20 Token Through Web3Auth {#transfer-erc-20-token-through-web3auth}

Send an ERC-20 token transfer through Unity via Web3Auth.

```csharp
using System;
using System.Numerics;
using Web3Unity.Scripts.Library.Ethers.Contracts;
using UnityEngine;
using UnityEngine.UI;
using Web3Unity.Scripts.Library.Ethers.Web3AuthWallet;

public class TransferW3A: MonoBehaviour
{
    public Text responseText;
    public string contractAddress = "0xed7f68Ed23bB75841ab1448A95fa19aA46e9EA3E";
    public string toAccount = "0xdA064B1Cef52e19caFF22ae2Cc1A4e8873B8bAB0";
    public string amount = "1000000000000000000";
    public string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"mint\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"success\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"_to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [], \"name\": \"_decimal\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"_totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"balance\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    private GameObject CSWallet = null;
    
    public void OnEnable()
    {
        // resets response text
        responseText.text = "";
    }
    
    public void Transfer()
    {
        // smart contract method to call
        string method = "transfer";
        W3AWalletUtils.outgoingContract = contractAddress;
        // connects to user's browser wallet (metamask) to send a transaction
        try {
            // connects to user's browser wallet to call a transaction
            var contract = new Contract(contractAbi, contractAddress);
            Debug.Log("Contract: " + contract);
            var calldata = contract.Calldata(method, new object[]
            {
                toAccount,
                BigInteger.Parse(amount)
            });
            Debug.Log("Contract Data: " + calldata);
            // finds the wallet, sets sign and incoming tx conditions to true and opens
            CSWallet = GameObject.FindGameObjectWithTag("CSWallet");
            W3AWalletUtils.incomingTx = true;
            W3AWalletUtils.incomingAction = "Broadcast";
            W3AWalletUtils.incomingTxData = calldata;
            CSWallet.GetComponent<Web3AuthWallet>().OpenButton();
        } catch (Exception e) {
            Debug.LogException(e, this);
        }
    }

    public void Mint()
    {
        string account = PlayerPrefs.GetString("Account");
        // smart contract method to call
        string method = "mint";
        W3AWalletUtils.outgoingContract = contractAddress;
        // connects to user's browser wallet (metamask) to send a transaction
        try {
            var contract = new Contract(contractAbi, contractAddress);
            Debug.Log("Contract: " + contract);
            var calldata = contract.Calldata(method, new object[]
            {
                account,
                BigInteger.Parse(amount)
            });
            Debug.Log("Contract Data: " + calldata);
            // finds the wallet, sets sign and incoming tx conditions to true and opens
            CSWallet = GameObject.FindGameObjectWithTag("CSWallet");
            W3AWalletUtils.incomingTx = true;
            W3AWalletUtils.incomingAction = "Broadcast";
            W3AWalletUtils.incomingTxData = calldata;
            CSWallet.GetComponent<Web3AuthWallet>().OpenButton();
        } catch (Exception e) {
            Debug.LogException(e, this);
        }
    }
    
    void Update()
    {
        if (W3AWalletUtils.signedTxResponse != "")
        {
            // display signed tx response from wallet
            responseText.text = W3AWalletUtils.signedTxResponse;
            W3AWalletUtils.signedTxResponse = "";
        }
    }
}
```

### Call Custom Contracts Web3Auth {#call-custom-contracts-through-web3auth}

Call will execute a smart contract method without altering the smart contract state via Web3Auth.

### Solidity Contract Example

This code snippet defines a simple smart contract example where the `myTotal` variable (initialized at 0) is added to (by the input value `_myArg`) and updated to a new total. 

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

### Reading & Writing A Value From A Solidity Contract Web3Auth

Retrieves the value of a specified variable (`myTotal`) from a smart contract.

```csharp
using Web3Unity.Scripts.Library.Ethers.Contracts;
using UnityEngine.UI;
using UnityEngine;
using Web3Unity.Scripts.Library.Ethers.Web3AuthWallet;

public class ContractCallSignW3A : MonoBehaviour
{
    public string chain = "ethereum";
    // set network mainnet, testnet
    public string network = "goerli";
    // abi in json format
    public string contractAbi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
    // address of contract
    public string contractAddress = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
    public Text responseText;
    private GameObject CSWallet = null;

    /*
        //Solidity Contract
        // SPDX-License-Identifier: MIT
        pragma solidity ^0.8.0;

        contract AddTotal {
            uint256 public myTotal = 0;

            function addTotal(uint8 _myArg) public {
                myTotal = myTotal + _myArg;
            }
        }
    */
    
    public void OnEnable()
    {
        // resets response text
        responseText.text = "";
    }

    async public void CheckVariable()
    {
        string method = "myTotal";
        // you can use this to create a provider for hardcoding and parse this instead of rpc get instance
        //var provider = new JsonRpcProvider(PlayerPrefs.GetString("RPC"));
        var contract = new Contract(contractAbi, contractAddress, RPC.GetInstance.Provider());
        Debug.Log("Contract: " + contract);
        var calldata = await contract.Call(method, new object[]
        {
            // if you need to add parameters you can do so, a call with no args is blank
            // arg1,
            // arg2
        });
        Debug.Log("Contract Data: " + calldata[0]);
        // display response in game
        print("Contract Variable Total: " + calldata[0]);
        responseText.text = "Contract Variable Total: " + calldata[0];
    }

    public void AddOneToVariable()
    {
        string method = "addTotal";
        string amount = "1";
        W3AWalletUtils.outgoingContract = contractAddress;
        var contract = new Contract(contractAbi, contractAddress);
        Debug.Log("Contract: " + contract);
        var calldata = contract.Calldata(method, new object[]
        {
            // values need to be converted to their data types in solidity
            int.Parse(amount)
        });
        Debug.Log("Contract Data: " + calldata);
        // finds the wallet, sets sign and incoming tx conditions to true and opens
        CSWallet = GameObject.FindGameObjectWithTag("CSWallet");
        W3AWalletUtils.incomingTx = true;
        W3AWalletUtils.incomingAction = "Broadcast";
        W3AWalletUtils.incomingTxData = calldata;
        CSWallet.GetComponent<Web3AuthWallet>().OpenButton();
        print("Please check the contract variable again in a few seconds once the chain has processed the request!");
    }
    
    void Update()
    {
        if (W3AWalletUtils.signedTxResponse != "")
        {
            // display signed tx response from wallet
            responseText.text = W3AWalletUtils.signedTxResponse;
            W3AWalletUtils.signedTxResponse = "";
        }
    }
}
```
