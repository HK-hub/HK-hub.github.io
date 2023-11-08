import mathjax3 from 'markdown-it-mathjax3'
import footnote from 'markdown-it-footnote'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox';

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
        md.use(markdownItTaskCheckbox, { 
          disabled: true,
          divWrap: false,
          divClass: 'checkbox',
          idPrefix: 'cbx_',
          ulClass: 'task-list',
          liClass: 'task-list-item',
        });
      },
}

export default markdownConfig