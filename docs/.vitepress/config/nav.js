// 导航栏配置

// 导航栏中的  link 直接配置到对应的.md文件
const nav = [
    { 
      text: '首页', 
      link: '/' 
    },
    { 
      text: '文章', 
      link: '/document/guild/one' 
    },
    { 
      text: '归档', 
      items: [
        { text: '分类', link: '/categories' },
        { text: '标签', link: '/tags' },
        { text: '归档', link: '/document/guild/index.md' }
      ]
    },
    { 
        text: '汇总', 
        link: '/list' 
    },
    { 
      text: '项目', 
      items: [
        { text: 'Geek-IM', link: '/document/guild/one' },
        { text: 'Item B', link: '/document/guild/two' },
        { text: 'Item C', link: '/document/guild/index' },
        { text: 'three', link: '/document/guild/three'},
        { text: '短链接生成器', link: '/document/short-url-generator' },
        { text: 'hRPC', link: '/document/h-rpc' }
      ]
    },
    { 
      text: '指南', 
      items: [
        { text: '汇总', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/document/guild/index.md' }
      ]
    },
]

export default nav