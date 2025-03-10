# HBlog - 基于VitePress的现代个人博客系统

<p align="center">
  ![logo](./public/logo.png)
</p>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vitepress" alt="node compatibility"></a>
  <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vitepress" alt="license"></a>
  <a href="https://www.npmjs.com/package/vitepress"><img src="https://img.shields.io/npm/v/vitepress" alt="npm"></a>
</p>

## 📝 项目介绍

HBlog是一个基于VitePress构建的现代化个人博客系统，专注于为开发者提供一个简洁、高效的知识分享平台。项目采用最新的VitePress 1.0技术栈，具有快速的页面响应速度和优秀的开发体验。

## ✨ 特色功能

- 💰 **自定义赞助** - 支持自定义打赏赞助组件，方便读者支持
- 📢 **公众号展示** - 支持在文章底部展示自定义微信公众号信息
- 📝 **自动补全** - 支持自动生成和补充文章的frontmatter元数据
- 🌐 **OGP支持** - 自动生成开放图谱协议meta标签，优化社交媒体分享预览效果
- 📰 **RSS订阅** - 支持RSS订阅，第一时间获取更新通知
- ⚙️ **配置集中管理** - 所有配置（站点/主题/RSS等）独立抽取，TypeScript类型定义，结构清晰易维护
- 📚 **文章归档** - 按时间线展示所有文章，方便回顾和检索
- 🏷️ **标签分类** - 多维度文章分类，快速定位感兴趣的内容
- 💬 **评论系统** - 集成Giscus评论，支持GitHub账号登录
- 📊 **访问统计** - 集成不蒜子统计，百度统计，实时查看访问数据
- 📱 **响应式设计** - 完美适配移动端和桌面端显示

## 🛠️ 技术栈

- 框架：VitePress 1.0.0-rc.24
- UI组件：Vue 3
- 构建工具：Vite
- Markdown增强：
  - markdown-it-mathjax3（数学公式支持）
  - markdown-it-footnote（脚注支持）
  - markdown-it-task-lists（任务列表支持）

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/your-username/HBlog.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📖 项目结构

```
HBlog
├── docs                    # 文档目录
│   ├── .vitepress         # VitePress配置
│   ├── public             # 静态资源
│   ├── pages             # 页面文件
│   └── index.md          # 首页
├── package.json          # 项目配置
└── README.md            # 项目说明
```

## 🔧 自定义配置

1. 修改 `docs/.vitepress/config.js` 进行站点配置
2. 在 `docs/document` 目录下添加新的文章
3. 在 `docs/public` 目录下添加静态资源

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交Pull Request

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议，请自由地享受和参与开源。

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 提供优秀的文档构建工具
- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
