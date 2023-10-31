import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  // 网站标签页标题
  title: "HK意境",

  // 内容主题
  siteTitle: "HK意境Blog",
  description: "知识宝库，生活体会，学历历程，人生思考",

  themeConfig: {
    // 导航栏标题
    siteTitle: "HK意境",
    logo: "../public/static/logo/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: '首页', 
        link: '/' 
      },
      { 
        text: '文章', 
        link: '/markdown-examples' 
      },
      { 
        text: '项目', 
        items: [
          { text: 'Geek-IM', link: '/im' },
          { text: '短链接生成器', link: '/short-url-generator' },
          { text: 'hRPC', link: '/h-rpc' }
        ]
      },
      { 
        text: '指南', 
        items: [
          { text: '汇总', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
    ],

    
    // 文章侧边栏列表
    sidebar: [
      {
        text: 'Examples',
        // 是否可以折叠
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Vite',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'IM即时通讯',
        collapsed: true,
        items: [
          { text: 'GeekIM', link: '/im' },
          { text: '功能总览', link: '/api-examples' }
        ]
      },
      {
        text: '短链接生成器',
        collapsed: true,
        items: [
          { text: 'ShrotUrlGenerator', link: '/short-url-generator' },
          { text: '功能总览', link: '/api-examples' }
        ]
      },
      {
          text: 'Config',
          collapsed: true,
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
    ],

    // 搜索栏
    search: {
      provider: 'local',
    },

    // 导航栏右上角社交账号链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HK-hub' },
      { icon: 'twitter', link: '...' },
      {
        icon: {
          svg: '<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/></svg>'
        },
        link: '...',
      }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present HK意境'
    },

    // 大纲级别
    outline:{
      level: [1,3]
    },

    // 编辑此页
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // 文档底部
    docFooter: {
      prev: '<——上一页',
      next: '下一页——>'
    },
    // 外部链接图标
    externalLinkIcon: true,

    // 广告
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  },

  // markdown 配置
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    defaultHighlightLang: 'java' 
  },

  // 简洁url, 生成的链接不带.html
  cleanUrls: true,

  // 最近更新时间
  lastUpdated: true,


})
