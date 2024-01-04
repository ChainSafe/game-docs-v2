---
slug: /current/cheat-sheet
sidebar_position: 1
sidebar_label: Cheat Sheet
---


# Cheatsheet

:::info

This is a Cheatsheet which can be used as a shorthand reference for the new ways of accomplishing tasks with the SDK. Refer to this if you need help with the new code structure.

:::

[Install the package using UPM](https://docs.gaming.chainsafe.io/current/getting-started#install-upm-package) before you start writing your own code.

```csharp
async void Start()
{
    // Configure & build Web3 client using Web3Builder
    var projectConfig = ProjectConfigUtilities.Load();
    var web3 = await new Web3Builder(projectConfig)
        .Configure(services =>
        {
            services.UseUnityEnvironment();
            services.UseJsonRpcProvider();

            if (Application.platform == RuntimePlatform.WebGLPlayer)
                services.UseWebGLWallet();
            else
                services.UseWebPageWallet();
        })
        .BuildAsync();

    // Read from blockchain using RpcProvider
    var ethBalance = await web3.RpcProvider.GetBalance(
        address: "0xaBed4239E4855E120fDA34aDBEABDd2911626BA1");

    // Read player address & sign messages using Signer
    var playerAddress = await web3.Signer.GetAddress();
    var signedMessageHash = await web3.Signer.SignMessage("Hello web3!"); // todo check if it really returns hash

    // Write to blockchain using TransactionExecutor
    var transactionResponse = await web3.TransactionExecutor.SendTransaction(
        new TransactionRequest
        {
            To = "0xdD4c825203f97984e7867F11eeCc813A036089D1",
            Value = new HexBigInteger(12300000000000000),
        });
    
    // Build contract objects using ContractBuilder
    var shibaContract = web3.ContractBuilder.Build("shiba"); // preregistered contracts
    var customContract = web3.ContractBuilder.Build(
        contractAbiJson, 
        address: "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F");
    
    // Read from contracts using Contract.Call()
    object[] response = await shibaContract.Call(EthMethod.BalanceOf, new object[] { playerAddress });
    
    // Write to contracts using Contract.Send()
    object[] response = await customContract.Send(method: "addTotal", new object[] { 1 });
    
    // Balance of custom coin ERC-20
    var tokenBalance = await ERC20.BalanceOf(
        web3,
        contractAddress: "0x3E0C0447e47d49195fbE329265E330643eB42e6f",
        account: "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2");
    
    // Balance of NFT ERC-721
    var contract721 = "0x9123541E259125657F03D7AD2A7D1a8Ec79375BA";
    var balance = await ERC721.BalanceOf(contract721, playerAddress);

    // Owner of NFT ERC-721
    var tokenId = "0x01559ae4021a565d5cc4740f1cefa95de8c1fb193949ecd32c337b03047da501";
    var ownerOf = await ERC721.OwnerOf(contract721, tokenId);
    
    // URI of NFT ERC-721
    var uri = await ERC721.URI(contract721, tokenId);
    
    // Balance of NFT ERC-1155
    var contract1155 = "0x2c1867bc3026178a47a677513746dcc6822a137a";
    var tokenId = "5";
    var balanceOf = await ERC1155.BalanceOf(contract1155, playerAddress, tokenId);
    
    // URI of NFT ERC-1155
    var uri = await ERC1155.URI(contract1155, tokenId);
}
```