const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ekstammen Wiki',

  base: '/',
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
    ['meta', { charset: 'utf-8' }],
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'Macckkan/EkstammenWiki',
    docsDir: 'docs',
    editLink: true,
    editLinkText: 'Redigera Dokument',
    lastUpdated: true,
    lastUpdatedText: 'Senast uppdaterad',
    contributors: true,
    sidebarDepth: 2,
    danger: 'FARA',
    tip: 'TIPS',
    warning: 'VARNING',
    notFound: ['Sidan hittades inte'],
    backToHome: 'Ta mig tillbaka',
    logo: '/images/ekstammen_logo.png',
    navbar: [
      {
        text: 'Hem',
        link: '/',
      },
      {
        text: 'Towny',
        link: '/towny/',
      },
      {
        text: 'SMP',
        link: '/smp/',
      },
      {
        text: 'Hemsida',
        link: 'https://ekstammen.nu',
      },
      {
        text: 'Discord',
        link: 'http://discord.ekstammen.nu',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Hem',
          children: [
            '/',
            '/discord.md',
          ]
        },
        {
          text: 'Server nätverk',
          children: [
            '/vote.md',
            '/ranker.md',
            '/tokens.md',
          ]
        },
        {
          text: 'Towny',
          children: [
            '/towny/',
          ]
        },
        {
          text: 'SMP',
          children: [
            '/smp/',
          ]
        },
      ],
      '/towny/': [
        {
          text: 'Hem',
          children: [
            '/',
            '/discord.md',
          ]
        },
        {
          text: 'Server nätverk',
          children: [
            '/vote.md',
            '/ranker.md',
            '/tokens.md',
          ]
        },
        {
          text: 'Towny',
          children: [
            '/towny/',
            '/towny/regler.md',
            '/towny/spawn/',
            '/towny/ranker.md',
          ]
        },
        {
          text: 'Funktioner & Plugins',
          children: [
            '/towny/plugins/towny.md',
            '/towny/plugins/discord.md',
            '/towny/plugins/chestshop.md',
            '/towny/plugins/cmi.md',
            '/towny/plugins/jobs.md',
            '/towny/plugins/lwc.md',
            '/towny/plugins/mobfarmmanager.md',
            '/towny/plugins/playershopgui.md',
          ]
        },
        {
          text: 'SMP',
          children: [
            '/smp/',
          ]
        },
      ],
      '/smp/': [
        {
          text: 'Hem',
          children: [
            '/',
            '/discord.md',
          ]
        },
        {
          text: 'Server nätverk',
          children: [
            '/vote.md',
            '/ranker.md',
            '/tokens.md',
          ]
        },
        {
          text: 'Towny',
          children: [
            '/towny/',
          ]
        },
        {
          text: 'SMP',
          children: [
            '/smp/',
            '/smp/regler.md',
          ]
        },
        {
          text: 'Funktioner & Datapacks',
          children: [
            '/smp/datapacks.md',
          ]
        }
      ]
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
