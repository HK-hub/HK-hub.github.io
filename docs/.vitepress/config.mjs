import { defineConfig } from 'vitepress'
import siteConfig from './config/site.js'
import markdownConfig from './config/markdown.js'
import themeConfig from './config/theme.js'

// 打印出配置
console.log('siteConfig:', JSON.stringify(siteConfig));
// console.log('themeConfig:', JSON.stringify(themeConfig));
console.log('markdonConfig:', JSON.stringify(markdownConfig));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  // 网站配置
  ...siteConfig,

  // 主题配置
  themeConfig,

  // markdown 配置
  markdown: markdownConfig,

})
