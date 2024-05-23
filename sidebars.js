// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: false,
      items: [
        'chainsafe-gaming',
        {
          "type": "category",
          "label": "SDK Documentation",
          "items": [
            "v2.5/cheat-sheet",
            "v2.5/getting-started",
            "v2.5/project-id-registration",
            "v2.5/setting-up-an-rpc-node",
            "v2.5/configuration",
            "v2.5/connecting-a-wallet",
            "v2.5/interacting-with-tokens",
            "v2.5/interacting-with-nfts",
            "v2.5/interacting-with-smart-contracts",
            "v2.5/web2-like-authentication-using-web3auth",
            "v2.5/gasless-transactions-using-gelato",
            "v2.5/extending-the-sdk",
            "v2.5/lootboxes",
            "v2.5/ramp",
            "v2.5/block-racers-game",
            "v2.5/prefab-scripts",
            "v2.5/faq"
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
    },
  ],
};