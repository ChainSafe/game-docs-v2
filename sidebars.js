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
        {
          type: 'category',
          label: 'SDK Documentation',
          items: [
            {
              "Current": ['v2.5/cheat-sheet', 'v2.5/getting-started', 'v2.5/project-id-registration', 'v2.5/setting-up-an-rpc-node', 'v2.5/configuration', 'v2.5/connecting-a-wallet', 'v2.5/interacting-with-tokens', 'v2.5/interacting-with-nfts', 'v2.5/voucher-minting-nfts', 'v2.5/interacting-with-smart-contracts', 'v2.5/web2-like-authentication-using-web3auth', 'v2.5/gasless-transactions-using-gelato', 'v2.5/extending-the-sdk', 'v2.5/lootboxes', 'v2.5/ramp', 'v2.5/block-racers-game', 'v2.5/prefab-scripts', 'v2.5/faq'],
            },
            {
              "v2.1.0": ['v2/project-id-registration', 'v2/setting-up-an-rpc-node', 'v2/installation', 'v2/erc20-interactions', 'v2/erc721-interactions', 'v2/erc1155-interactions', 'v2/using-the-minter', 'v2/in-game-marketplace', 'v2/minting-with-voucher', 'v2/webgl-browser', 'v2/web3wallet-mobile-and-desktop', 'v2/keep-your-games-safe-from-cheaters', 'v2/importing-nfts', 'v2/implementing-social-logins-to-webgl-builds', 'v2/how-tos', 'v2/migration', 'v2/faq', 'v2/media'],
            },
            {
              "v1.6.3": ['v1/getting-started', 'v1/tutorial', 'v1/installation', 'v1/project-id-registration', 'v1/evm-blockchain', 'v1/erc1155', 'v1/erc721', 'v1/erc20', 'v1/custom-interactions', 'v1/minter-evm', 'v1/in-game-marketplace', 'v1/minting-with-voucher', 'v1/webgl', 'v1/mobile-and-desktop', 'v1/keep-your-games-safe-from-cheaters', 'v1/importing-nfts', 'v1/implementing-social-logins-to-webgl-builds', 'v1/how-tos', 'v1/media', 'v1/faq',],
            },
          ],
        },
      ],
    },
  ],
};