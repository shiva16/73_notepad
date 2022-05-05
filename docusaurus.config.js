const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: '[rsapkf/73]',
  titleDelimiter: '::',
  tagline: "@rsapkf's notes.",
  url: 'https://rsapkf-notes.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'rsapkf',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSidebar: true,
    navbar: {
      style: 'dark',
      title: '[rsapkf/73]',
      hideOnScroll: true,
      logo: {
        alt: 'Logo',
        src: 'img/undraw_Notebook.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'linux/linux',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://rsapkf.xyz/',
          label: 'Homepage',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Links',
          position: 'right',
          items: [
            {
              label: 'Links',
              href: 'https://links.rsapkf.xyz/',
            },
            {
              label: 'Dotfiles',
              href: 'https://github.com/rsapkf/config/',
            },
            {
              label: 'CFOP algs',
              href: 'https://github.com/rsapkf/20/',
            },
          ],
        },
        {
          href: 'https://github.com/rsapkf/73/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      apiKey: '1de83fa2ba21b6cfbec9865ea4f26935',
      indexName: 'rsapkf',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick links',
          items: [
            {
              label: 'sed',
              to: '/linux/sed/',
            },
            {
              label: 'awk',
              to: '/linux/awk/',
            },
            {
              label: 'jq',
              to: '/linux/jq/',
            },
            {
              label: 'fzf',
              to: '/linux/fzf/',
            },
            {
              label: 'PGP',
              to: '/linux/pgp/',
            },
            {
              label: 'Speedcubing',
              to: '/recreational-mathematics/speedcubing/',
            },
            {
              label: 'Chess',
              to: '/recreational-mathematics/chess/',
            },
            {
              label: 'Mnemonics',
              to: '/recreational-mathematics/mnemonics/',
            },
            {
              label: 'Poems',
              to: '/misc/poems/',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: 'Linux',
              to: '/linux/',
            },
            {
              label: 'Programming',
              to: '/programming/python/',
            },
            {
              label: 'Recreational mathematics',
              to: '/recreational-mathematics/speedcubing/',
            },
            {
              label: 'Misc',
              to: '/misc/websites',
            },
            {
              label: 'Book notes',
              to: '/books/python-tricks',
            },
          ],
        },
        {
          title: 'Etc',
          items: [
            {
              label: '?',
              href: 'https://math.dartmouth.edu/~carlp/sheldon02132019.pdf',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} <a href="https://rsapkf.xyz/">rsapkf</a>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rsapkf/73/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
