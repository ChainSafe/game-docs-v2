---
slug: /custom-interactions
sidebar_position: 9
sidebar_label: Custom Interactions
---


# Custom Interactions

### Call Custom Blockchains {#call-custom-blockchains}

Connect to any EVM compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL. This returns the native token's balance for the chain, if you'd like to get the balance a custom erc20 token you can see the balance of example here: [https://docs.gaming.chainsafe.io/erc20/](https://docs.gaming.chainsafe.io/erc20/)

```csharp
string chain = "rootstock";
string network = "testnet"; 
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
string rpc = "https://public-node.testnet.rsk.co";

string balance = await EVM.BalanceOf(chain, network, account, rpc);
print(balance);
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
// set chain
string chain = "ethereum";
// set network
string network = "goerli";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// smart contract method, variable or mapping to call
string method = "myTotal";
// address of contract
string contract = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
// array of arguments for contract
string args = "[]";
// connects to user's browser wallet to call a transaction
string response = await EVM.Call(chain, network, contract, abi, method, args);
// display response in game
print(response);
```

### Writing a value to a solidity contract (WebGL Builds)

```csharp
// set chain
string chain = "ethereum";
// set network
string network = "goerli";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
// method you want to write to
string method = "addTotal";
// amount you want to change, in this case we are adding 1 to "addTotal"
string amount = "1";
// array of arguments for contract you can also add a nonce here as optional parameter. You leave this blank or remove and set args to "[]" if your function has no inputs
string[] obj = {amount};
string args = JsonConvert.SerializeObject(obj);
// connects to user's browser wallet to call a transaction
string response = await Web3GL.SendContract(method, abi, contract, args, "0", "", "");
// display response in game
print(response);
```

### Writing a value to a solidity contract (Web Wallet Builds)

```csharp
// set chain
string chain = "ethereum";
// set network
string network = "goerli";
// set chainID, here we use the networkID for goerli
string chainId = "5";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x741C3F3146304Aaf5200317cbEc0265aB728FE07";
// method you want to write to
string method = "addTotal";
// amount you want to change, in this case we are adding 1 to "addTotal"
string amount = "1";
// array of arguments for contract you can also add a nonce here as optional parameter or leave it blank or remove and set args to "[]" if your function has no inputs. Webwallet functions will revert if require conditions are not met.
string[] obj = {amount};
string args = JsonConvert.SerializeObject(obj);
// create data for contract interaction
string data = await EVM.CreateContractData(abi, method, args);
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, "0", data, "", "");
// display response in game
print(response);
```
