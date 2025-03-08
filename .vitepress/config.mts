import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ssal docs",
  description: "Documentation for Super Simple Automating Language",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/syntax' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is SSAL?', link: '/guide/what-is-ssal' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Syntax Reference', link: '/reference/syntax' },
          { text: 'Command Reference', link: '/reference/commands' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Best Practices', link: '/advanced/best-practices' },
          { text: 'Troubleshooting', link: '/advanced/troubleshooting' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ssal-lang' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SSAL Contributors'
    },
    search: {
      provider: 'local'
    }
  }
})