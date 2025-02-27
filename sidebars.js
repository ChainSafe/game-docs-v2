// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    'chainsafe-gaming',
    {
      type: 'category',
      label: 'SDK Documentation',
      collapsed: false,
      items: [
        'v2.6/getting-started',
        {
          type: 'category',
          label: 'Choose Your Wallet',
          items: [
            'v2.6/choose-your-wallet',
            'v2.6/metamask',
            'v2.6/reown',
            'v2.6/web3auth',
            'v2.6/hyperplay',
          ],
        },
        'v2.6/setting-up-an-rpc-node',
        'v2.6/login-process',
        'v2.6/abi-to-csharp-converter',
        'v2.6/chain-switching',
        'v2.6/blockchain-events',
        'v2.6/mud',
        'v2.6/sample-scripts-and-chain-interactions',
        {
          type: 'category',
          label: 'Packages & Extensions',
          items: [
            'v2.6/service-adapters',
            'v2.6/gasless-transactions-using-gelato',
            'v2.6/ramp',
            'v2.6/lootboxes',
            'v2.6/extending-the-sdk',
            'v2.6/extending-ui',
          ],
        },
        {
          type: 'category',
          label: 'Game Examples',
          items: ['v2.6/block-racers-game', 'v2.6/block-blasterz-game'],
        },
        'v2.6/faq',
      ],
    },
    {
      type: 'category',
      label: 'NFT Launchpad',
      items: [
        'nft_launchpad/introduction',
        'nft_launchpad/details',
        'nft_launchpad/tutorial',
        'token-api/docs/tokenapi',
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      items: [
        'nft_marketplace/introduction',
        'nft_marketplace/tutorial',
        'marketplace-api/docs/marketplaceapi',
      ],
    },
  ],
}
