// 导航栏配置
import nav from "./nav"
// 侧边栏配置
import path from 'path'
import autoGenerateSideBar from "./sidebar"


// 主题配置
const themeConfig = {
    // 导航栏标题
    siteTitle: "HK意境",
    logo: "../../public/static/logo/logo.png",

    // 启动页面丝滑滚动
    smoothScroll: true,

    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    
    // 文章侧边栏列表
    sidebar: autoGenerateSideBar(path.resolve(__dirname, '../../document')),

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
        link: 'https://juejin.cn/user/2577725130022615',
      }
    ],

    // 页脚
    footer: {
      message: '做高质量的编程内容网站，欢迎 star ⭐ 让更多人发现',
      copyright: 'MIT License | 版权所有 Copyright © 2019-present HK意境'
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
      prev: '<——上一篇',
      next: '下一篇——>'
    },
    
    returnToTopLabel: '返回顶部',

    // 外部链接图标
    externalLinkIcon: true,

    // 广告
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
}


export default themeConfig

