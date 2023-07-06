# Cheatsheet

[Install the package using UPM](https://docs.gaming.chainsafe.io/current/getting-started#install-upm-package) before you start writing your own code.

```csharp
async void Start()
{
    // Configure & build Web3 object using Web3Builder
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
    
    var tokenBalance = await ERC20.BalanceOf(
        web3,
        contractAddress: "0x3E0C0447e47d49195fbE329265E330643eB42e6f",
        account: "0xd25b827D92b0fd656A1c829933e9b0b836d5C3e2");

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
    
    // Build contract objects using ContractFactory
    var shibaContract = web3.ContractFactory.Build("shiba");
    var customContract = web3.ContractFactory.Build(
        contractAbiJson, 
        address: "0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F");
    
    // Read from contracts using Call()
    await shibaContract.Call(EthMethod.BalanceOf, new object[] { playerAddress });
    
    // Write to contracts using Send()
    await customContract.Send(method: "addTotal", new object[] { 1 });
    
    // todo mint nft??
}
```