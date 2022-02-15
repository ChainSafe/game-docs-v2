# Custom Interactions

### Call Custom Blockchains <a href="#call-custom-blockchains" id="call-custom-blockchains"></a>

Connect to any EVM compatible blockchain by providing an RPC. All methods have an optional field to add an RPC URL.

```csharp
string chain = "rootstock";
string network = "testnet"; 
string account = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
string rpc = "https://public-node.testnet.rsk.co";

string balance = await EVM.BalanceOf(chain, network, account, rpc);
print(balance);
```

### Call Custom Contracts <a href="#call-custom-contracts" id="call-custom-contracts"></a>

Call will execute a smart contract method without altering the smart contract state.

Working example: [https://chainsafe.github.io/game-sendContract-example/](https://chainsafe.github.io/game-sendContract-example/)

{% embed url="https://www.youtube.com/watch?index=11&list=PLPn3rQCo3XrOQkC3v55Ou8NMPgn8pb7O5&v=8A9NmuCucqI" %}

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
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "rinkeby";
// smart contract method to call
string method = "myTotal";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// address of contract
string contract = "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F";
// array of arguments for contract
string args = "[]";
// connects to user's browser wallet to call a transaction
string response = await EVM.Call(chain, network, contract, abi, method, args);
// display response in game
print(response);
```
