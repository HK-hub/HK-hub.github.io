// 导航栏配置

// 导航栏中的  link 直接配置到对应的.md文件
const nav = [
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
        { text: 'Geek-IM', link: '/document/guild/one' },
        { text: 'Item B', link: '/guild/two' },
        { text: 'Item C', link: '/guild/index' },
        { text: 'three', link: '/guild/three'},
        { text: '短链接生成器', link: '/short-url-generator' },
        { text: 'hRPC', link: '/h-rpc' }
      ]
    },
    { 
      text: '指南', 
      items: [
        { text: '汇总', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '../../guild/index.md' }
      ]
    },
]

export default nav