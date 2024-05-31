// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    'chainsafe-gaming',
    {
      "type": "category",
      "label": "SDK Documentation",
      "collapsed": false,
      "items": [
        "v2.6/getting-started",
        {
          type: 'category',
          label: 'Choose Your Wallet',
          items: [
            "v2.6/choose-your-wallet",
            "v2.6/metamask",
            "v2.6/wallet-connect",
            "v2.6/web3auth",
            "v2.6/hyperplay"
          ]
        },
        "v2.6/setting-up-an-rpc-node",
        "v2.6/connecting-a-wallet",
        "v2.6/prefab-scripts",
        {
          type: 'category',
          label: 'Interacting With Tokens',
          items: [
            "v2.6/interacting-with-erc20-tokens",
            "v2.6/interacting-with-nfts",
            "v2.6/interacting-with-smart-contracts"
          ]
        },
        "v2.6/gasless-transactions-using-gelato",
        "v2.6/ramp",
        "v2.6/lootboxes",
        "v2.6/marketplace",
        "v2.6/extending-the-sdk",
        {
          type: 'category',
          label: 'Game Examples',
          items: [
            "v2.6/block-racers-game",
            "v2.6/block-blasterz-game"
          ]
        },
        "v2.6/faq"
      ]
    },
    {
      type: 'category',
      label: 'NFT Launchpad',
      items: [
        "nft_launchpad/introduction",
        "nft_launchpad/details",
        "nft_launchpad/tutorial",
        "token-api/docs/tokenapi",
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      items: [
        "nft_marketplace/introduction",
        "nft_marketplace/tutorial",
        "marketplace-api/docs/marketplaceapi",
      ],
    },
  ],
};
