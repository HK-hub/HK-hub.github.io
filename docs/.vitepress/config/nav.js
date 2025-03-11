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
        { text: '分类', link: '/pages/categories' },
        { text: '标签', link: '/pages/tags' },
        { text: '归档', link: '/pages/archives' }
      ]
    },
    { 
      text: '项目', 
      link: '/pages/projects',
    },
    { 
      text: '指南', 
      items: [
        { text: '汇总', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/document/guild/index.md' }
      ]
    },
    { 
      text: '关于', 
      link: '/pages/about',
    },
]

export default nav