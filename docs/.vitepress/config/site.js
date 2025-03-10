import { metaData } from "./constants"

// 网站配置
const siteConfig = {
    
    lang: "zh-CN",
    // 网站标签页标题
    title: "HK意境",

    // 内容主题
    siteTitle: "HK意境的知识库",
    description: metaData.description,

    // 简洁url, 生成的链接不带.html
    cleanUrls: true,

    // 最近更新时间
    lastUpdated: true,

    // markdown 文章保存路径, 相对于.vitepress 文件夹的路径
    srcDir: './',

    // 当设置为true时，VitePress 不会因死链接而导致构建失败。
    ignoreDeadLinks: true,

    // sitemap配置
    sitemap: {
        hostname: 'https://hk-hub.github.io/'
    },
}
export default siteConfig;