# Mobile & Desktop

{% embed url="https://www.youtube.com/watch?v=41w6G6Hp9ig" %}

### Sign through Mobile and Desktop <a href="#sign-through-mobile-and-desktop" id="sign-through-mobile-and-desktop"></a>

```csharp
string response = await Web3Wallet.Sign("hello");
print(response);
```

### Sending Transaction through Mobile and Desktop <a href="#sending-transaction-through-mobile-and-desktop" id="sending-transaction-through-mobile-and-desktop"></a>

```csharp
// https://chainlist.org/
string chainId = "4"; // rinkeby
// account to send to
string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
// value in wei
string value = "12300000000000000";
// data OPTIONAL
string data = "";
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, to, value, data, gasLimit, gasPrice);
print(response);
```

### Transfer ERC-1155 NFT Token through Mobile and Desktop <a href="#transfer-erc-1155-nft-token-through-mobile-and-desktop" id="transfer-erc-1155-nft-token-through-mobile-and-desktop"></a>

```csharp
// https://chainlist.org/
string chainId = "4"; // rinkeby
// contract to interact with 
string contract = "0x6b0bc2e986b0e70db48296619a96e9ac02c5574b";
// value in wei
string value = "0";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"uri_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" } ], \"name\": \"TransferBatch\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"TransferSingle\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"string\", \"name\": \"value\", \"type\": \"string\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"URI\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address[]\", \"name\": \"accounts\", \"type\": \"address[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" } ], \"name\": \"balanceOfBatch\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_address\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"ownerMint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeBatchTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"uri\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// smart contract method to call
string method = "safeTransferFrom";
// account to sent tokens to
string toAccount = PlayerPrefs.GetString("Account");
// token id to send
string tokenId = "2";
// amount of tokens to send
string amount = "1";
// array of arguments for contract
string[] obj = { PlayerPrefs.GetString("Account"), toAccount, tokenId, amount, "0x" };
string args = JsonConvert.SerializeObject(obj);
// create data to interact with smart contract
string data = await EVM.CreateContractData(abi, method, args);
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, value, data, gasLimit, gasPrice);
print(response);
```

### Transfer ERC-721 NFT Token through Mobile and Desktop <a href="#transfer-erc-721-nft-token-through-mobile-and-desktop" id="transfer-erc-721-nft-token-through-mobile-and-desktop"></a>

```csharp
// https://chainlist.org/
string chainId = "4"; // rinkeby
// contract to interact with 
string contract = "0xde458cd3deaa28ce67beefe3f45368c875b3ffd6";
// value in wei
string value = "0";
// abi in json format
string abi = "[{ \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }]"; 
// smart contract method to call
string method = "safeTransferFrom";
// account to send erc721 to
string toAccount = PlayerPrefs.GetString("Account");
// token id to send
string tokenId = "5";
// array of arguments for contract
string[] obj = { PlayerPrefs.GetString("Account"), toAccount, tokenId };
string args = JsonConvert.SerializeObject(obj);
// create data to interact with smart contract
string data = await EVM.CreateContractData(abi, method, args);
// gas limit OPTIONAL
string gasLimit = "";
// gas price OPTIONAL
string gasPrice = "";
// send transaction
string response = await Web3Wallet.SendTransaction(chainId, contract, value, data, gasLimit, gasPrice);
print(response);
```

### In Game Signing <a href="#in-game-signing" id="in-game-signing"></a>

`Web3PrivateKey` will allow games to sign and broadcast directly in game. No need for an external wallet. These methods will work for WebGL, Desktop and Mobile.

CAUTION: These methods will use raw private keys. Exposing private keys can be dangerous. Use with caution.

#### Tutorial <a href="#tutorial_1" id="tutorial_1"></a>

{% embed url="https://www.youtube.com/watch?v=L4UIfhLjgpI" %}

### Get Account from Private Key <a href="#get-account-from-private-key" id="get-account-from-private-key"></a>

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// get account from private key
string account = Web3PrivateKey.Address(privateKey);
print("Account: " + account);
```

### Sign with Private Key <a href="#sign-with-private-key" id="sign-with-private-key"></a>

```csharp
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
string message = "hello";
string response = Web3PrivateKey.Sign(privateKey, message);
print(response);
```

### Send Transaction with Private Key <a href="#send-transaction-with-private-key" id="send-transaction-with-private-key"></a>

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "rinkeby";
// account of player        
string account = Web3PrivateKey.Address(privateKey);
// account to send to
string to = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// value in wei
string value = "123";
// optional rpc url
string rpc = "";

string chainId = await EVM.ChainId(chain, network, rpc);
string gasPrice = await EVM.GasPrice(chain, network, rpc);
string data = "";
string gasLimit = "21000";
string transaction = await EVM.CreateTransaction(chain, network, account, to, value, data, gasPrice, gasLimit, rpc);
string signature = Web3PrivateKey.SignTransaction(privateKey, transaction, chainId);
string response = await EVM.BroadcastTransaction(chain, network, account, to, value, data, signature, gasPrice, gasLimit, rpc);
print(response);
```

### Transfer ERC-1155 NFT Token with Private Key <a href="#transfer-erc-1155-nft-token-with-private-key" id="transfer-erc-1155-nft-token-with-private-key"></a>

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "rinkeby";
// smart contract method to call
string method = "safeTransferFrom";
// account of player 
string account = Web3PrivateKey.Address(privateKey);
// ERC-1155 contract address 
string contract = "0x3a8a85a6122c92581f590444449ca9e66d8e8f35";
// account to send to
string toAccount = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// ERC-1155 token id
string tokenId = "5";
// amount of erc1155 tokens
string amount = "1";
// amount of wei to send
string value = "0";
// abi to interact with contract
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"uri_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"ApprovalForAll\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"indexed\": false, \"internalType\": \"uint256[]\", \"name\": \"values\", \"type\": \"uint256[]\" } ], \"name\": \"TransferBatch\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"TransferSingle\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"internalType\": \"string\", \"name\": \"value\", \"type\": \"string\" }, { \"indexed\": true, \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"URI\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address[]\", \"name\": \"accounts\", \"type\": \"address[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" } ], \"name\": \"balanceOfBatch\", \"outputs\": [ { \"internalType\": \"uint256[]\", \"name\": \"\", \"type\": \"uint256[]\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" } ], \"name\": \"isApprovedForAll\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"_address\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"ownerMint\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256[]\", \"name\": \"ids\", \"type\": \"uint256[]\" }, { \"internalType\": \"uint256[]\", \"name\": \"amounts\", \"type\": \"uint256[]\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeBatchTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"id\", \"type\": \"uint256\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"operator\", \"type\": \"address\" }, { \"internalType\": \"bool\", \"name\": \"approved\", \"type\": \"bool\" } ], \"name\": \"setApprovalForAll\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"bytes4\", \"name\": \"interfaceId\", \"type\": \"bytes4\" } ], \"name\": \"supportsInterface\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"uri\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
// optional rpc url
string rpc = "";

string[] obj = { account, toAccount, tokenId, amount, "0x" };
string args = JsonConvert.SerializeObject(obj);
string chainId = await EVM.ChainId(chain, network, rpc);
string gasPrice = await EVM.GasPrice(chain, network, rpc);
string data = await EVM.CreateContractData(abi, method, args);
string gasLimit = "75000";
string transaction = await EVM.CreateTransaction(chain, network, account, contract, value, data, gasPrice, gasLimit, rpc);
string signature = Web3PrivateKey.SignTransaction(privateKey, transaction, chainId);
string response = await EVM.BroadcastTransaction(chain, network, account, contract, value, data, signature, gasPrice, gasLimit, rpc);
print(response);
```

### Transfer ERC-721 NFT Token with Private Key <a href="#transfer-erc-721-nft-token-with-private-key" id="transfer-erc-721-nft-token-with-private-key"></a>

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "rinkeby";
// smart contract method to call
string method = "safeTransferFrom";
// account of player 
string account = Web3PrivateKey.Address(privateKey);
// ERC-721 contract address
string contract = "0xae70a9accf2e0c16b380c0aa3060e9fba6718daf";
// account to send to
string toAccount = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// ERC-721 token id 
string tokenId = "2543";
// amount of wei to send
string value = "0";
// abi to interact with contract
string abi = "[{ \"inputs\": [ { \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"tokenId\", \"type\": \"uint256\" }, { \"internalType\": \"bytes\", \"name\": \"_data\", \"type\": \"bytes\" } ], \"name\": \"safeTransferFrom\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }]";
string rpc = "";

// array of arguments for contract
string[] obj = { account, toAccount, tokenId, "0x" };
string args = JsonConvert.SerializeObject(obj);
string chainId = await EVM.ChainId(chain, network, rpc);
string gasPrice = await EVM.GasPrice(chain, network, rpc);
string data = await EVM.CreateContractData(abi, method, args);
string gasLimit = "75000";
string transaction = await EVM.CreateTransaction(chain, network, account, contract, value, data, gasPrice, gasLimit, rpc);
string signature = Web3PrivateKey.SignTransaction(privateKey, transaction, chainId);
string response = await EVM.BroadcastTransaction(chain, network, account, contract, value, data, signature, gasPrice, gasLimit, rpc);
print(response);
```

### Transfer ERC-20 Token with Private Key <a href="#transfer-erc-20-token-with-private-key" id="transfer-erc-20-token-with-private-key"></a>

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "rinkeby";
// smart contract method to call
string method = "transfer";
// account of player 
string account = Web3PrivateKey.Address(privateKey);
// smart contract address: https://rinkeby.etherscan.io/address/0xc7ad46e0b8a400bb3c915120d284aafba8fc4735
string contract = "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735";
// account to send to
string toAccount = "0x428066dd8A212104Bc9240dCe3cdeA3D3A0f7979";
// amount of erc20 tokens to send. usually 18 decimals
string amount = "1000000000000000000";
// amount of wei to send
string value = "0";
// abi to interact with contract
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"name_\", \"type\": \"string\" }, { \"internalType\": \"string\", \"name\": \"symbol_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" } ], \"name\": \"allowance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"subtractedValue\", \"type\": \"uint256\" } ], \"name\": \"decreaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"addedValue\", \"type\": \"uint256\" } ], \"name\": \"increaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
// optional rpc url
string rpc = "";

string[] obj = { toAccount, amount };
string args = JsonConvert.SerializeObject(obj);
string chainId = await EVM.ChainId(chain, network, rpc);
string gasPrice = await EVM.GasPrice(chain, network, rpc);
string data = await EVM.CreateContractData(abi, method, args);
string gasLimit = "75000";
string transaction = await EVM.CreateTransaction(chain, network, account, contract, value, data, gasPrice, gasLimit, rpc);
string signature = Web3PrivateKey.SignTransaction(privateKey, transaction, chainId);
string response = await EVM.BroadcastTransaction(chain, network, account, contract, value, data, signature, gasPrice, gasLimit, rpc);
print(response);
```
