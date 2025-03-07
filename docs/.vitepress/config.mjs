import { defineConfig } from 'vitepress'
import siteConfig from './config/site.js'
import markdownConfig from './config/markdown.js'
import themeConfig from './config/theme.js'
import readToJson from './components/read.js'
import path from 'path'
import { head } from './config/head.js'
import { createRssFile } from './utils/rss.js'

// 打印出配置
// console.log('siteConfig:', JSON.stringify(siteConfig));
// console.log('themeConfig:', JSON.stringify(themeConfig));
// console.log('markdonConfig:', JSON.stringify(markdownConfig));

// 读取所有markdown 文件
readToJson(path.resolve(__dirname, '../document'), path.resolve(__dirname, './components/frontmatter.json'))


// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  // <head> 标签配置
  head,

  // 网站配置
  ...siteConfig,

  // 主题配置
  themeConfig,

  // markdown 配置
  markdown: markdownConfig,

  // RSS订阅构建
  buildEnd: createRssFile,

  // 使用插件
  plugins: [
    '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top',          // 返回顶部插件
    '@vuepress/medium-zoom',          // 图片预览插件
    '@vuepress/nprogress',        //页面顶部进度条
],

})
