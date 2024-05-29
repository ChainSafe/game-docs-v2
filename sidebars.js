// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    'chainsafe-gaming',
    {
      "type": "category",
      "label": "SDK Documentation",
      "items": [
        "v2.6/getting-started",
        "v2.6/project-id-registration",
        "v2.6/setting-up-an-rpc-node",
        "v2.6/prefab-scripts",
        "v2.6/configuration",
        "v2.6/connecting-a-wallet",
        "v2.6/interacting-with-tokens",
        "v2.6/interacting-with-nfts",
        "v2.6/interacting-with-smart-contracts",
        "v2.6/web2-like-authentication-using-web3auth",
        "v2.6/gasless-transactions-using-gelato",
        "v2.6/extending-the-sdk",
        "v2.6/ramp",
        "v2.6/lootboxes",
        "v2.6/marketplace",
        "v2.6/block-racers-game",
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