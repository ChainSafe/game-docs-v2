// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: false,
      items: [
        'welcome-to-the-chainsafe-sdk',
        {
          type: 'category',
          label: 'V1 Legacy Documentation',
          items: ['v1/getting-started-v1', 'v1/tutorial', 'v1/installation', 'v1/project-id-registration', 'v1/evm-blockchain', 'v1/erc1155', 'v1/erc721', 'v1/erc20', 'v1/custom-interactions', 'v1/minter-evm', 'v1/in-game-marketplace', 'v1/minting-with-voucher', 'v1/webgl', 'v1/mobile-and-desktop', 'v1/keep-your-games-safe-from-cheaters', 'v1/importing-nfts', 'v1/implementing-social-logins-to-webgl-builds', 'v1/how-tos', 'v1/media', 'v1/faq',],
        },
        {
          type: 'category',
          label: 'SDK Documentation',
          items: ['v2/getting-started', 'v2/installation', 'v2/project-id-registration', 'v2/erc1155-interactions', 'v2/erc721-interactions', 'v2/erc20-interactions', 'v2/using-the-minter', 'v2/in-game-marketplace', 'v2/minting-with-voucher', 'v2/webgl-browser', 'v2/web3wallet-mobile-and-desktop', 'v2/keep-your-games-safe-from-cheaters', 'v2/importing-nfts', 'v2/implementing-social-logins-to-webgl-builds', 'v2/how-tos', 'v2/media', 'v2/faq',],
        },
      ],
    },
  ],
};