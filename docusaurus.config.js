// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitlayer',
  tagline: 'The First Bitcoin security - equivalent Layer2 based on BitVM.  ',
  url: 'https://www.bitlayer.org',
  baseUrl: '/demobit/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bitlayer.ico',
  organizationName: 'Bitlayer', // Usually your GitHub org/user name.
  projectName: 'Document', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./sidebarslearn.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      initialColorMode: 'dark',
      navbar: {
        title: 'Bitlayer',
        logo: {
          alt: 'Bitlayer Logo',
          src: 'img/FA_Bitlayer-Logo.png',
        },
        items: [
          {
            to: '/docs/aboutbitlayer/introduction',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Build Now',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/learn/overview/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Learn More',
            activeBaseRegex: `/learn/`,
          },
          {
            href: 'https://medium.com/@Bitlayer',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://twitter.com/BitLayerLabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
               label: 'Build Now',
               to: '/docs/aboutbitlayer/introduction',
              },
              {
                label: 'Learn More',
                to: '/learn/overview/intro',
               },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/bitlayerofficial',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/GGSjNyD8nj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BitLayerLabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@Bitlayer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bitlayer-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitlayer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
