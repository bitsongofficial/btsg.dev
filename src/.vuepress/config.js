module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BitSong Network Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Welcome to the BitSong developer site!",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Website', link: 'https://bitsong.io' },
      { text: 'Music Player', link: 'https://play.bitsong.io' },
      { text: 'Explorer', link: 'https://explorebitsong.com' },
      { text: 'Community', link: 'https://btsg.community' },
      { text: 'Blog', link: 'https://medium.com/@bitsongofficial' },
      { text: 'Github', link: 'https://github.com/bitsongofficial' },
    ],
    sidebar: [
      {
        title: "Guide",
        path: "/guide/",
        children: [
          ['/guide/installation.md', 'Install BitSong Network'],
          ['/guide/join-mainnet.md', 'Join the BitSong Mainnet'],
          ['/guide/bitsongcli.md', 'BitSong CLI'],
        ]
      },
      {
        title: "Delegators",
        path: "/delegators/",
        children: [
          ['/delegators/delegator-guide-cli.md', 'Delegator Guide (CLI)'],
          ['/delegators/delegator-faq.md', 'Delegator FAQ'],
          ['/delegators/delegator-security.md', 'Delegator Security']
        ]
      },
      {
        title: "Validators",
        path: "/validators/",
        children: [
          ['/validators/overview.md', 'Overview'],
          ['/validators/validator-setup.md', 'Setting Up a Validator'],
          ['/validators/validator-faq.md', 'Validator FAQ'],
          ['/validators/validator-security.md', 'Validator Security'],
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
