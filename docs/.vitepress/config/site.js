import { metaData } from "./constants"

// 网站配置
const siteConfig = {
    lang: metaData.lang,
    // 网站标签页标题
    title: "HK意境",

    // 内容主题
    siteTitle: "HK意境Blog",
    description: "知识宝库，生活体会，学历历程，人生思考",

    // 简洁url, 生成的链接不带.html
    cleanUrls: true,

    // 最近更新时间
    lastUpdated: true,

    // markdown 文章保存路径, 相对于.vitepress 文件夹的路径
    srcDir: './',

    // 当设置为true时，VitePress 不会因死链接而导致构建失败。
    ignoreDeadLinks: true
}

export default siteConfig