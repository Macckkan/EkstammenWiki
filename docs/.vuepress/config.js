const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ekstammen Wiki',

  base: '/EkstammenWiki/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/ekstammen_logo.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'Macckkan/EkstammenWiki',
    editLinks: false,
    docsDir: '',
    sidebarDepth: 2,
    editLinkText: 'Redigera Dokument',
    lastUpdated: true,
    lastUpdatedText: 'Senast uppdaterad',
    navbar: [
      {
        text: 'Hem',
        link: '/',
      },
      {
        text: 'Hemsida',
        link: 'https://ekstammen.nu',
      },
      {
        text: 'Discord',
        link: 'http://discord.ekstammen.nu',
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Hem',
          collapsable: false,
          children: [
            '/discord.md',
            '/vote.md',
          ]
        },
        {
          text: 'Towny',
          collapsable: false,
          children: [
            '/towny/',
            '/towny/regler.md',
            {
              text: 'Plugins',
              collapsable: true,
              children: [
                '/towny/plugins/towny.md',
              ]
            }
          ]
        },
        {
          text: 'SMP',
          collapsable: false,
          children: [
            '/smp/',
            '/smp/regler.md',
            '/smp/datapacks.md',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
