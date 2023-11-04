import mathjax3 from 'markdown-it-mathjax3'
import footnote from 'markdown-it-footnote'


// markdown 配置
const markdownConfig = {

    // 代码行号
    lineNumbers: true,
    // 右侧目录展示层级
    toc: { level: [1, 2, 3] },
    // 默认高亮语言
    defaultHighlightLang: 'java',

    // 插件配置
    config: (md) => {
        md.use(mathjax3);
        md.use(footnote);
      },
}

export default markdownConfig