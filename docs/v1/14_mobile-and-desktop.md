---
slug: /v1/mobile-and-desktop
sidebar_position: 14
sidebar_label: Mobile & Desktop
---


# Mobile & Desktop

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/41w6G6Hp9ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**V1 Docs -** [https://chainsafe.github.io/game-docs/#sign-through-mobile-and-desktop](https://chainsafe.github.io/game-docs/#sign-through-mobile-and-desktop)

### Sign through Mobile and Desktop {#sign-through-mobile-and-desktop}

```csharp
string response = await Web3Wallet.Sign("hello");
print(response);
```

### Hosting Your Own Sign Page {#hosting-your-own-sign-page}

You can find the Web3Wallet repo here [https://github.com/ChainSafe/game-web3wallet](https://github.com/ChainSafe/game-web3wallet) you can download and host this on git for free. This instantiates web3 in webpage to allow MetaMask to connect & make transactions. We'll guide you through this process below.

Step 1: Create a GitHub account [https://github.com/join](https://github.com/join)\


Step 2: Clone the web3wallet repo using GitHub Desktop

![](<assets/image (14).png>)

Step 3: If it doesn't ask you automatically, in the top left, press add, then press clone repository and paste in the URL [https://github.com/ChainSafe/game-web3wallet](https://github.com/ChainSafe/game-web3wallet)

![](<assets/image (12).png>)

Step 4: GitHub desktop will ask you if you want to fork the repo. When prompted select "For My Own Purposes". This will create a fork that you can push to your own repository.

![](<assets/image (5).png>)

Step 5: You will need to edit the package.json file to confirm to the directory where the signer will be found run & the yarn install/build process [https://github.com/ChainSafe/game-web3wallet](https://github.com/ChainSafe/game-web3wallet) Once you are happy with you changes, you can press Ctrl + P or the blue button here to push your repository to GitHub. This stores these files online and makes them accessible!\


![](assets/image.png)

Step 6: Navigate to your GitHub repository settings page and find the pages section. From here select deploy from branch, set your branch to main and the folder as root. (Some users have reported that selecting "gh-page" branch has worked over main so please try this instead if you're experiencing errors) Press save and give that a minute to build. This creates a webpage with a public URL that we can access.

![](<assets/image (4).png>)

Step 7: The last thing to do is to update the Web3Wallet.cs file in the web3unity folder in unity. All you need to do here is update the URL to point to the one we just created. This new URL will be displayed for you just above the build and deployment settings once it's ready in the image above.

![](<assets/image (8).png>)

If you want more customization you can open the repository up in VSCode and play with the index.js & styles.css files to make alterations to the pages design & colors before pushing. Just please don't play with the functionality or we won't be able to assist you if something breaks. Happy coding!

### Hash Message (SHA3)

```csharp
string message = "hello";
string hashedMessage = Web3Wallet.Sha3(message);
// 0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8
print(hashedMessage);
```

### Sending Transaction through Mobile and Desktop {#sending-transaction-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### Transfer ERC-1155 NFT Token through Mobile and Desktop {#transfer-erc-1155-nft-token-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### Transfer ERC-721 NFT Token through Mobile and Desktop {#transfer-erc-721-nft-token-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### Transfer ERC-20 Token through Mobile and Desktop {#transfer-erc-20-token-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
// contract to interact with 
string contract = "0xc778417e063141139fce010982780140aa0cd5ab";
// value in wei
string value = "0";
// abi in json format
string abi = "[ { \"inputs\": [ { \"internalType\": \"string\", \"name\": \"name_\", \"type\": \"string\" }, { \"internalType\": \"string\", \"name\": \"symbol_\", \"type\": \"string\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Approval\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"internalType\": \"address\", \"name\": \"from\", \"type\": \"address\" }, { \"indexed\": true, \"internalType\": \"address\", \"name\": \"to\", \"type\": \"address\" }, { \"indexed\": false, \"internalType\": \"uint256\", \"name\": \"value\", \"type\": \"uint256\" } ], \"name\": \"Transfer\", \"type\": \"event\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"owner\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" } ], \"name\": \"allowance\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"approve\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"account\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"internalType\": \"uint8\", \"name\": \"\", \"type\": \"uint8\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"subtractedValue\", \"type\": \"uint256\" } ], \"name\": \"decreaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"spender\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"addedValue\", \"type\": \"uint256\" } ], \"name\": \"increaseAllowance\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"internalType\": \"string\", \"name\": \"\", \"type\": \"string\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [ { \"internalType\": \"address\", \"name\": \"sender\", \"type\": \"address\" }, { \"internalType\": \"address\", \"name\": \"recipient\", \"type\": \"address\" }, { \"internalType\": \"uint256\", \"name\": \"amount\", \"type\": \"uint256\" } ], \"name\": \"transferFrom\", \"outputs\": [ { \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" } ], \"stateMutability\": \"nonpayable\", \"type\": \"function\" } ]";
// smart contract method to call
string method = "transfer";
// account to send erc20 to
string toAccount = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
// amount of erc20 tokens to send
string amount = "1000000000000000";
// array of arguments for contract
string[] obj = {toAccount, amount};
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

###

### Sending Transaction through Mobile and Desktop {#sending-transaction-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### Transfer ERC-1155 NFT Token through Mobile and Desktop {#transfer-erc-1155-nft-token-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### Transfer ERC-721 NFT Token through Mobile and Desktop {#transfer-erc-721-nft-token-through-mobile-and-desktop}

```csharp
// https://chainlist.org/
string chainId = "5"; // goerli
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

### In Game Signing {#in-game-signing}

`Web3PrivateKey` will allow games to sign and broadcast directly in game. No need for an external wallet. These methods will work for WebGL, Desktop and Mobile.

CAUTION: These methods will use raw private keys. Exposing private keys can be dangerous. Use with caution.

#### Tutorial {#tutorial_1}

<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/L4UIfhLjgpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Get Account from Private Key {#get-account-from-private-key}

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// get account from private key
string account = Web3PrivateKey.Address(privateKey);
print("Account: " + account);
```

### Sign with Private Key {#sign-with-private-key}

```csharp
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
string message = "hello";
string response = Web3PrivateKey.Sign(privateKey, message);
print(response);
```

### Send Transaction with Private Key {#send-transaction-with-private-key}

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "goerli";
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

### Transfer ERC-1155 NFT Token with Private Key {#transfer-erc-1155-nft-token-with-private-key}

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "goerli";
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

### Transfer ERC-721 NFT Token with Private Key {#transfer-erc-721-nft-token-with-private-key}

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "goerli";
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

### Transfer ERC-20 Token with Private Key {#transfer-erc-20-token-with-private-key}

```csharp
// private key of account
string privateKey = "0x78dae1a22c7507a4ed30c06172e7614eb168d3546c13856340771e63ad3c0081";
// set chain: ethereum, moonbeam, polygon etc
string chain = "ethereum";
// set network mainnet, testnet
string network = "goerli";
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
