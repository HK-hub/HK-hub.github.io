// 侧边导航栏目录
import fs from 'fs'
const fs = require('fs') 
function readAll(parentPath) {
    const files = fs.readdirSync(parentPath)
    console.log(files);
}
readAll('../../document')


// 文章侧边栏列表
const side = [
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
]

export default side