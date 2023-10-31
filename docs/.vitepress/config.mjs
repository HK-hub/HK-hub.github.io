import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "HK意境",
  description: "个人博客，生活体会，学历历程，人生思考",
  themeConfig: {

    siteTitle: "HK意境’Blog",
    logo: "../../public/static/logo/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/markdown-examples' },
      { text: '项目', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HK-hub' }
    ]
  }
})
