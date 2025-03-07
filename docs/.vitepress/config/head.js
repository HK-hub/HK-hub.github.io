import { metaData } from './constants'

// copy from https://gitee.com/ewsq/charles7c/blob/main/docs/.vitepress/config/head.ts
export const head = [
    ['link', { rel: 'icon', href: '/logo/logo.png' }],
    ['meta', { name: 'author', content: 'HK意境' }],
    ['meta', { name: 'description', content: 'HK意境的知识库, 知识库, 博客, HK意境, 生活体会, 学习历程, 人生思考'}],
    ['meta', { name: 'keywords', content: 'HK意境的知识库, 知识库, 博客, HK意境, 生活体会, 学习历程, 人生思考, GeeK IM' }],
  
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'baidu_union_verify', content: '19bd8ed3f02a91e23043efdf1d823107' }],
  
    // 开放图协议
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: metaData.locale }],
    ['meta', { property: 'og:title', content: metaData.title }],
    ['meta', { property: 'og:description', content: metaData.description }],
    ['meta', { property: 'og:site', content: metaData.site }],
    ['meta', { property: 'og:site_name', content: metaData.title }],
    ['meta', { property: 'og:image', content: metaData.image }],
    
    // git discussion评论
    ['script', {src: 'https://esm.sh/giscus', type: 'module'}]
    // 百度统计代码：https://tongji.baidu.com
    // 页面访问量统计
];
// 使用方式 import { head } from './config/head';