// docs/.vitepress/config.mjs
import { defineConfig } from "file:///F:/JavaCode/HBlog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/config/constants.js
var author = "HK\u610F\u5883";
var title = "HK\u610F\u5883\u7684\u77E5\u8BC6\u5E93";
var description = "\u77E5\u8BC6\u5B9D\u5E93\u3001\u751F\u6D3B\u4F53\u4F1A\u3001\u5B66\u4E60\u5386\u7A0B\u3001\u4EBA\u751F\u601D\u8003\u5C3D\u5728\u5176\u4E2D";
var site = "https://blog.geekim.cn";
var hostname = "https://hk-hub.github.io";
var copyright = "Copyright (c) 2024-present HK\u610F\u5883";
var image = "https://blog.geekim.cn/static/logo/logo.png";
var logo = "https://blog.geekim.cn/static/logo/logo.png";
var favicon = "https://blog.geekim.cn/static/logo/logo.png";
var lang = "zh-CN";
var email = "3161880795@qq.com";
var link = "https://github.com/HK-hub";
var wechatInfo = {
  qrcode: "URL_ADDRESS.geekim.cn/static/wechat/wechat.png",
  title: "HK\u610F\u5883\u7684\u77E5\u8BC6\u5E93",
  description: "\u77E5\u8BC6\u5B9D\u5E93\u3001\u751F\u6D3B\u4F53\u4F1A\u3001\u5B66\u4E60\u5386\u7A0B\u3001\u4EBA\u751F\u601D\u8003\u5C3D\u5728\u5176\u4E2D",
  qrcodeTitle: "HK\u610F\u5883",
  qrcodeDescription: "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5173\u6CE8\u516C\u4F17\u53F7"
};
var metaData = {
  lang,
  locale: "zh_CN",
  author,
  title,
  description,
  site,
  hostname,
  image,
  logo,
  favicon,
  copyright,
  // 公众号信息
  wechatInfo,
  // RSS订阅源配置
  feedConfig: {
    // 最多显示文章数量
    feedDocLimit: 10,
    hostname,
    rss: true,
    atom: true,
    json: true,
    title,
    image,
    logo,
    favicon,
    description,
    author,
    email,
    link,
    language: lang,
    copyright
  }
};

// docs/.vitepress/config/site.js
var siteConfig = {
  lang: metaData.lang,
  // 网站标签页标题
  title: "HK\u610F\u5883",
  // 内容主题
  siteTitle: "HK\u610F\u5883\u7684\u77E5\u8BC6\u5E93",
  description: metaData.description,
  // 简洁url, 生成的链接不带.html
  cleanUrls: true,
  // 最近更新时间
  lastUpdated: true,
  // markdown 文章保存路径, 相对于.vitepress 文件夹的路径
  srcDir: "./",
  // 当设置为true时，VitePress 不会因死链接而导致构建失败。
  ignoreDeadLinks: true,
  // sitemap配置
  sitemap: {
    hostname: "https://hk-hub.github.io/"
  }
};
var site_default = siteConfig;

// docs/.vitepress/config/markdown.js
import mathjax3 from "file:///F:/JavaCode/HBlog/node_modules/markdown-it-mathjax3/index.js";
import footnote from "file:///F:/JavaCode/HBlog/node_modules/markdown-it-footnote/index.js";
import markdownItTaskCheckbox from "file:///F:/JavaCode/HBlog/node_modules/markdown-it-task-checkbox/index.js";
var markdownConfig = {
  // 代码行号
  lineNumbers: true,
  // 右侧目录展示层级
  toc: { level: [1, 2, 3] },
  // 默认高亮语言
  defaultHighlightLang: "java",
  // 插件配置
  config: (md) => {
    md.use(mathjax3);
    md.use(footnote);
    md.use(markdownItTaskCheckbox, {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx_",
      ulClass: "task-list",
      liClass: "task-list-item"
    });
  }
};
var markdown_default = markdownConfig;

// docs/.vitepress/config/nav.js
var nav = [
  {
    text: "\u9996\u9875",
    link: "/"
  },
  {
    text: "\u6587\u7AE0",
    link: "/document/guild/one"
  },
  {
    text: "\u5F52\u6863",
    items: [
      { text: "\u5206\u7C7B", link: "/categories" },
      { text: "\u6807\u7B7E", link: "/tags" },
      { text: "\u5F52\u6863", link: "/document/guild/index.md" }
    ]
  },
  {
    text: "\u6C47\u603B",
    link: "/list"
  },
  {
    text: "\u9879\u76EE",
    items: [
      { text: "Geek-IM", link: "/document/guild/one" },
      { text: "Item B", link: "/document/guild/two" },
      { text: "Item C", link: "/document/guild/index" },
      { text: "three", link: "/document/guild/three" },
      { text: "\u77ED\u94FE\u63A5\u751F\u6210\u5668", link: "/document/short-url-generator" },
      { text: "hRPC", link: "/document/h-rpc" }
    ]
  },
  {
    text: "\u6307\u5357",
    items: [
      { text: "\u6C47\u603B", link: "/item-1" },
      { text: "Item B", link: "/item-2" },
      { text: "Item C", link: "/document/guild/index.md" }
    ]
  }
];
var nav_default = nav;

// docs/.vitepress/config/theme.js
import path from "path";

// docs/.vitepress/config/sidebar.js
import directoryTree from "file:///F:/JavaCode/HBlog/node_modules/directory-tree/lib/directory-tree.js";
function toSidebarOption(tree = []) {
  if (!Array.isArray(tree))
    return [];
  return tree.map((v) => {
    if (v.children) {
      return {
        text: v.name,
        collapsible: true,
        collapsed: true,
        items: toSidebarOption(v.children)
      };
    } else {
      return {
        text: v.name.replace(".md", ""),
        link: v.path.split("docs")[1].replace(".md", "")
      };
    }
  });
}
function autoGenerateSideBar(documentPath) {
  const markdwonSource = directoryTree(documentPath, {
    extensions: /\.md$/,
    normalizePath: true
  });
  return toSidebarOption(markdwonSource.children);
}
var sidebar_default = autoGenerateSideBar;

// docs/.vitepress/config/theme.js
var __vite_injected_original_dirname = "F:\\JavaCode\\HBlog\\docs\\.vitepress\\config";
var themeConfig = {
  // 导航栏标题
  siteTitle: "HK\u610F\u5883",
  logo: "/logo/logo.png",
  // 启动页面丝滑滚动
  smoothScroll: true,
  // https://vitepress.dev/reference/default-theme-config
  nav: nav_default,
  // 文章侧边栏列表
  sidebar: sidebar_default(path.resolve(__vite_injected_original_dirname, "../../document")),
  // 搜索栏
  search: {
    provider: "local"
  },
  // 导航栏右上角社交账号链接
  socialLinks: [
    { icon: "github", link: "https://github.com/HK-hub" },
    { icon: "twitter", link: "..." },
    // RSS
    // 掘金
    {
      icon: {
        svg: '<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/></svg>'
      },
      link: "https://juejin.cn/user/2577725130022615"
    }
  ],
  // 页脚
  footer: {
    message: "\u505A\u9AD8\u8D28\u91CF\u7684\u7F16\u7A0B\u5185\u5BB9\u7F51\u7AD9\uFF0C\u6B22\u8FCE star \u2B50 \u8BA9\u66F4\u591A\u4EBA\u53D1\u73B0",
    copyright: "MIT License | \u7248\u6743\u6240\u6709 Copyright \xA9 2019-present HK\u610F\u5883"
  },
  // 大纲级别
  outline: {
    level: [1, 3]
  },
  // 编辑此页
  editLink: {
    pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    text: "Edit this page on GitHub"
  },
  // 文档底部
  docFooter: {
    prev: "<\u2014\u2014\u4E0A\u4E00\u7BC7",
    next: "\u4E0B\u4E00\u7BC7\u2014\u2014>"
  },
  lastUpdated: {
    text: "\u6700\u540E\u7F16\u8F91\u4E8E",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium"
    }
  },
  returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
  // 外部链接图标
  externalLinkIcon: true
};
var theme_default = themeConfig;

// docs/.vitepress/components/read.js
import fs from "fs";
import path2 from "path";
import yaml from "file:///F:/JavaCode/HBlog/node_modules/js-yaml/dist/js-yaml.mjs";
var re = /---(.*?)---/sg;
var out = [];
function readAll(parentPath) {
  const files = fs.readdirSync(parentPath);
  files.map((item) => {
    let tempPath = path2.join(parentPath, item);
    let stats = fs.statSync(tempPath);
    if (stats.isDirectory()) {
      readAll(tempPath);
    } else {
      let ext = path2.extname(tempPath);
      if (ext === ".md" || ext === ".MD") {
        const content = fs.readFileSync(tempPath, "utf-8");
        const frontmatter = re.exec(content);
        re.lastIndex = 0;
        if (frontmatter) {
          const docs = yaml.load(frontmatter[1]);
          docs.link = tempPath.split("docs")[1].replace(".md", "");
          docs.title = docs.title ? docs.title : item.replace(".md", "");
          docs.date = docs.date ? docs.date : stats.mtime.toLocaleString();
          docs.showAccessNumber = true;
          docs.author = docs.author ? docs.author : "HK\u610F\u5883";
          docs.summary = docs.summary ? docs.summary : content.slice(0, 100);
          out.push(docs);
        } else {
          out.push({
            title: item.replace(".md", ""),
            author: "HK\u610F\u5883",
            date: stats.mtime.toLocaleString(),
            link: tempPath.split("docs")[1].replace(".md", ""),
            showAccessNumber: true,
            summary: content.slice(0, 100),
            categories: [],
            tags: []
          });
        }
      }
    }
  });
}
function readToJson(parentPath, jsonPath) {
  readAll(parentPath);
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(out),
    { encoding: "utf8" }
  );
  return out;
}
var read_default = readToJson;

// docs/.vitepress/config.mjs
import path5 from "path";

// docs/.vitepress/config/head.js
var head = [
  ["link", { rel: "icon", href: "/logo/logo.png" }],
  ["meta", { name: "author", content: "HK\u610F\u5883" }],
  ["meta", { name: "description", content: "HK\u610F\u5883\u7684\u77E5\u8BC6\u5E93, \u77E5\u8BC6\u5E93, \u535A\u5BA2, HK\u610F\u5883, \u751F\u6D3B\u4F53\u4F1A, \u5B66\u4E60\u5386\u7A0B, \u4EBA\u751F\u601D\u8003" }],
  ["meta", { name: "keywords", content: "HK\u610F\u5883\u7684\u77E5\u8BC6\u5E93, \u77E5\u8BC6\u5E93, \u535A\u5BA2, HK\u610F\u5883, \u751F\u6D3B\u4F53\u4F1A, \u5B66\u4E60\u5386\u7A0B, \u4EBA\u751F\u601D\u8003, GeeK IM" }],
  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#3c8772" }],
  ["meta", { name: "baidu_union_verify", content: "19bd8ed3f02a91e23043efdf1d823107" }],
  // 开放图协议
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: metaData.locale }],
  ["meta", { property: "og:title", content: metaData.title }],
  ["meta", { property: "og:description", content: metaData.description }],
  ["meta", { property: "og:site", content: metaData.site }],
  ["meta", { property: "og:site_name", content: metaData.title }],
  ["meta", { property: "og:image", content: metaData.image }],
  // git discussion评论
  ["script", { src: "https://esm.sh/giscus", type: "module" }]
  // 百度统计代码：https://tongji.baidu.com
  // 页面访问量统计
];

// docs/.vitepress/utils/rss.ts
import path3 from "path";
import { writeFileSync } from "fs";
import { Feed } from "file:///F:/JavaCode/HBlog/node_modules/feed/lib/feed.js";
import { createContentLoader } from "file:///F:/JavaCode/HBlog/node_modules/vitepress/dist/node/index.js";
import { log } from "console";
import dayjs from "file:///F:/JavaCode/HBlog/node_modules/dayjs/dayjs.min.js";
var hostname2 = metaData.feedConfig.hostname;
async function createRssFile(config) {
  const feed = new Feed({
    title: metaData.title,
    description: metaData.feedConfig.description,
    id: hostname2,
    link: hostname2,
    language: metaData.feedConfig.language,
    image: metaData.feedConfig.image,
    favicon: metaData.feedConfig.favicon,
    copyright: metaData.feedConfig.copyright
  });
  const posts = await createContentLoader("document/**/*.md", {
    excerpt: true,
    render: true
  }).load();
  log("\u5F00\u59CB\u751F\u6210RSS\u6587\u4EF6:", /* @__PURE__ */ new Date());
  log("\u6587\u7AE0\u603B\u6570\uFF1A", posts.length);
  posts.sort((a, b) => Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date)));
  function processPostFrontmatter(post) {
    const url = post == null ? void 0 : post.url;
    const excerpt = post == null ? void 0 : post.excerpt;
    const html = post == null ? void 0 : post.html;
    let frontmatter = post.frontmatter || {};
    let fileName = url.split("/").pop();
    if (!fileName) {
      fileName = "index";
    }
    if (!frontmatter.title) {
      let titleFromContent = "";
      if (html) {
        const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
        if (h1Match && h1Match[1]) {
          titleFromContent = h1Match[1].trim();
        }
      }
      frontmatter.title = titleFromContent || fileName;
    }
    if (!frontmatter.date) {
      frontmatter.date = dayjs().format("YYYY-MM-DD");
    }
    if (!frontmatter.description) {
      frontmatter.description = excerpt || (html ? html.replace(/<[^>]+>/g, "").substring(0, 200) + "..." : "") || metaData.feedConfig.description;
    }
    if (!frontmatter.author) {
      frontmatter.author = metaData.feedConfig.author;
    }
    if (!frontmatter.cover) {
      let coverFromContent = "";
      if (html) {
        const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/);
        if (imgMatch && imgMatch[1]) {
          const imgSrc = imgMatch[1];
          if (imgSrc.startsWith("http")) {
            coverFromContent = imgSrc;
          } else if (imgSrc.startsWith("./") || imgSrc.startsWith("../") || imgSrc.startsWith("/")) {
            coverFromContent = `${metaData.hostname}${imgSrc.replace(/^\.\//g, "/")}`;
          }
        }
      }
      frontmatter.cover = coverFromContent || metaData.feedConfig.image;
    }
    return {
      url,
      excerpt,
      html,
      frontmatter
    };
  }
  for (const post of posts) {
    if (feed.items.length >= metaData.feedConfig.feedDocLimit) {
      break;
    }
    const processedPost = processPostFrontmatter(post);
    const { url, excerpt, html, frontmatter } = processedPost;
    const title2 = frontmatter.title;
    const description2 = excerpt || frontmatter.description || metaData.feedConfig.description;
    const date = new Date(frontmatter.date);
    const cover = frontmatter.cover || "";
    const feedItem = {
      title: title2,
      id: `${hostname2}${url}`,
      link: `${hostname2}${url}`,
      description: description2,
      content: html,
      author: [
        {
          name: frontmatter.author || metaData.feedConfig.author,
          email: metaData.feedConfig.email,
          link: metaData.feedConfig.link
        }
      ],
      date
    };
    if (cover && cover.trim() !== "") {
      feedItem.image = cover;
    }
    feed.addItem(feedItem);
    log("\u6DFB\u52A0RSS\u6761\u76EE\u6210\u529F:", title2);
  }
  log("\u5199\u5165Feed.xml\u6587\u4EF6\uFF1A", path3.join(config.outDir, "feed.xml"));
  writeFileSync(path3.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}

// docs/.vitepress/utils/markdown-transform.ts
import pkg from "file:///F:/JavaCode/HBlog/node_modules/glob/glob.js";
var { glob } = pkg;
var wechatInfo2 = `
---

## \u5173\u6CE8\u6211\u4EEC

\u5982\u679C\u60A8\u559C\u6B22\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6B22\u8FCE\u5173\u6CE8\u6211\u4EEC\u7684\u516C\u4F17\u53F7\u83B7\u53D6\u66F4\u591A\u7CBE\u5F69\u5185\u5BB9\uFF01

![\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801](${metaData.wechatInfo.qrcode})

**\u516C\u4F17\u53F7\u540D\u79F0\uFF1A${metaData.wechatInfo.qrcodeTitle}**

\u6BCF\u5468\u66F4\u65B0Java\u3001\u524D\u7AEF\u3001\u67B6\u6784\u8BBE\u8BA1\u7B49\u6280\u672F\u6587\u7AE0\uFF0C\u52A9\u529B\u60A8\u7684\u6280\u672F\u6210\u957F\uFF01
`;

// docs/.vitepress/utils/frontmatter-transform.ts
import path4 from "path";
import fs2 from "fs";
import yaml2 from "file:///F:/JavaCode/HBlog/node_modules/js-yaml/dist/js-yaml.mjs";
import { log as log2 } from "console";
function getMarkdownFiles(dir, files = []) {
  const items = fs2.readdirSync(dir);
  for (const item of items) {
    const fullPath = path4.join(dir, item);
    const stat = fs2.statSync(fullPath);
    if (item === "node_modules" || item === ".vitepress") {
      continue;
    }
    if (stat.isDirectory()) {
      getMarkdownFiles(fullPath, files);
    } else if (path4.extname(item) === ".md") {
      files.push(fullPath);
    }
  }
  return files;
}
async function appendFrontmatter(filePath) {
  try {
    const content = await fs2.promises.readFile(filePath, "utf-8");
    const re2 = /---(.*?)---/sg;
    const frontmatterMatch = re2.exec(content);
    let frontmatter = {};
    let restContent = content;
    if (frontmatterMatch) {
      try {
        frontmatter = yaml2.load(frontmatterMatch[1]);
        restContent = content.slice(frontmatterMatch[0].length);
      } catch (e) {
        log2(`\u89E3\u6790frontmatter\u5931\u8D25: ${filePath}`, e);
      }
    }
    const fileName = path4.basename(filePath, ".md");
    let isUpdated = false;
    if (!frontmatter.title) {
      frontmatter.title = fileName;
      isUpdated = true;
    }
    if (!frontmatter.description) {
      const firstParagraph = restContent.trim().split("\n\n")[0];
      const plainText = firstParagraph.replace(/#+\s|\*\*|\*|`|\[.*?\]\(.*?\)/g, "");
      frontmatter.description = plainText.slice(0, 150).trim();
      isUpdated = true;
    }
    if (!frontmatter.date) {
      const stats = fs2.statSync(filePath);
      frontmatter.date = stats.mtime.toLocaleString();
      isUpdated = true;
    }
    if (!frontmatter.author) {
      frontmatter.author = metaData.feedConfig.author;
      isUpdated = true;
    }
    if (frontmatter.showAccessNumber === void 0) {
      frontmatter.showAccessNumber = true;
      isUpdated = true;
    }
    if (!frontmatter.categories && !frontmatter.category) {
      frontmatter.categories = [];
      isUpdated = true;
    } else if (frontmatter.category && !frontmatter.categories) {
      frontmatter.categories = frontmatter.category;
      delete frontmatter.category;
      isUpdated = true;
    }
    if (!frontmatter.tags) {
      frontmatter.tags = [];
      isUpdated = true;
    }
    if (isUpdated) {
      const newFrontmatter = `---
${yaml2.dump(frontmatter)}---
`;
      const newContent = frontmatterMatch ? content.replace(frontmatterMatch[0], newFrontmatter) : newFrontmatter + content;
      await fs2.promises.writeFile(filePath, newContent, "utf-8");
    } else {
    }
  } catch (error) {
    log2(`\u5904\u7406\u6587\u4EF6\u5931\u8D25: ${filePath}`, error);
  }
}
async function transformFrontmatter(config) {
  log2("\u5F00\u59CB\u5904\u7406markdown\u6587\u4EF6\uFF0C\u8865\u5145frontmatter\u4FE1\u606F:", /* @__PURE__ */ new Date());
  const srcDir = config.srcDir;
  const markdownFiles = getMarkdownFiles(srcDir);
  log2(`\u627E\u5230${markdownFiles.length}\u4E2Amarkdown\u6587\u4EF6`);
  const promises = markdownFiles.map((file) => appendFrontmatter(file));
  await Promise.all(promises);
  log2("markdown\u6587\u4EF6\u5904\u7406\u5B8C\u6210\uFF0C\u5DF2\u8865\u5145frontmatter\u4FE1\u606F");
}

// docs/.vitepress/config.mjs
var __vite_injected_original_dirname2 = "F:\\JavaCode\\HBlog\\docs\\.vitepress";
transformFrontmatter({
  srcDir: path5.resolve(__vite_injected_original_dirname2, "../document")
});
read_default(path5.resolve(__vite_injected_original_dirname2, "../document"), path5.resolve(__vite_injected_original_dirname2, "./components/frontmatter.json"));
var config_default = defineConfig({
  // <head> 标签配置
  head,
  // 网站配置
  ...site_default,
  // 主题配置
  themeConfig: theme_default,
  // markdown 配置
  markdown: markdown_default,
  // RSS订阅构建
  buildEnd: createRssFile,
  // 使用插件
  plugins: [
    "@vuepress/active-header-links",
    // 页面滚动时自动激活侧边栏链接的插件
    "@vuepress/back-to-top",
    // 返回顶部插件
    "@vuepress/medium-zoom",
    // 图片预览插件
    "@vuepress/nprogress"
    //页面顶部进度条
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9jb25zdGFudHMuanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaXRlLmpzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvbWFya2Rvd24uanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9uYXYuanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy90aGVtZS5qcyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIuanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbXBvbmVudHMvcmVhZC5qcyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQuanMiLCAiZG9jcy8udml0ZXByZXNzL3V0aWxzL3Jzcy50cyIsICJkb2NzLy52aXRlcHJlc3MvdXRpbHMvbWFya2Rvd24tdHJhbnNmb3JtLnRzIiwgImRvY3MvLnZpdGVwcmVzcy91dGlscy9mcm9udG1hdHRlci10cmFuc2Zvcm0udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxKYXZhQ29kZVxcXFxIQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9KYXZhQ29kZS9IQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm1qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHNpdGVDb25maWcgZnJvbSAnLi9jb25maWcvc2l0ZS5qcydcclxuaW1wb3J0IG1hcmtkb3duQ29uZmlnIGZyb20gJy4vY29uZmlnL21hcmtkb3duLmpzJ1xyXG5pbXBvcnQgdGhlbWVDb25maWcgZnJvbSAnLi9jb25maWcvdGhlbWUuanMnXHJcbmltcG9ydCByZWFkVG9Kc29uIGZyb20gJy4vY29tcG9uZW50cy9yZWFkLmpzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBoZWFkIH0gZnJvbSAnLi9jb25maWcvaGVhZC5qcydcclxuaW1wb3J0IHsgY3JlYXRlUnNzRmlsZSB9IGZyb20gJy4vdXRpbHMvcnNzLmpzJ1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1NYXJrZG93bkZpbGVzIH0gZnJvbSAnLi91dGlscy9tYXJrZG93bi10cmFuc2Zvcm0uanMnXHJcbmltcG9ydCB7IHRyYW5zZm9ybUZyb250bWF0dGVyIH0gZnJvbSAnLi91dGlscy9mcm9udG1hdHRlci10cmFuc2Zvcm0uanMnXHJcblxyXG4vLyBcdTYyNTNcdTUzNzBcdTUxRkFcdTkxNERcdTdGNkVcclxuLy8gY29uc29sZS5sb2coJ3NpdGVDb25maWc6JywgSlNPTi5zdHJpbmdpZnkoc2l0ZUNvbmZpZykpO1xyXG4vLyBjb25zb2xlLmxvZygndGhlbWVDb25maWc6JywgSlNPTi5zdHJpbmdpZnkodGhlbWVDb25maWcpKTtcclxuLy8gY29uc29sZS5sb2coJ21hcmtkb25Db25maWc6JywgSlNPTi5zdHJpbmdpZnkobWFya2Rvd25Db25maWcpKTtcclxuXHJcbi8vIFx1ODg2NVx1NTE0NWZvcm1hdHRlclxyXG50cmFuc2Zvcm1Gcm9udG1hdHRlcih7XHJcbiAgc3JjRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jdW1lbnQnKVxyXG59KVxyXG4vLyBcdThCRkJcdTUzRDZcdTYyNDBcdTY3MDltYXJrZG93biBcdTY1ODdcdTRFRjZcclxucmVhZFRvSnNvbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZG9jdW1lbnQnKSwgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9mcm9udG1hdHRlci5qc29uJykpXHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIFxyXG4gIC8vIDxoZWFkPiBcdTY4MDdcdTdCN0VcdTkxNERcdTdGNkVcclxuICBoZWFkLFxyXG5cclxuICAvLyBcdTdGNTFcdTdBRDlcdTkxNERcdTdGNkVcclxuICAuLi5zaXRlQ29uZmlnLFxyXG5cclxuICAvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcclxuICB0aGVtZUNvbmZpZyxcclxuXHJcbiAgLy8gbWFya2Rvd24gXHU5MTREXHU3RjZFXHJcbiAgbWFya2Rvd246IG1hcmtkb3duQ29uZmlnLFxyXG5cclxuICAvLyBSU1NcdThCQTJcdTk2MDVcdTY3ODRcdTVFRkFcclxuICBidWlsZEVuZDogY3JlYXRlUnNzRmlsZSxcclxuXHJcbiAgLy8gXHU0RjdGXHU3NTI4XHU2M0QyXHU0RUY2XHJcbiAgcGx1Z2luczogW1xyXG4gICAgJ0B2dWVwcmVzcy9hY3RpdmUtaGVhZGVyLWxpbmtzJywgICAvLyBcdTk4NzVcdTk3NjJcdTZFREFcdTUyQThcdTY1RjZcdTgxRUFcdTUyQThcdTZGQzBcdTZEM0JcdTRGQTdcdThGQjlcdTY4MEZcdTk0RkVcdTYzQTVcdTc2ODRcdTYzRDJcdTRFRjZcclxuICAgICdAdnVlcHJlc3MvYmFjay10by10b3AnLCAgICAgICAgICAvLyBcdThGRDRcdTU2REVcdTk4NzZcdTkwRThcdTYzRDJcdTRFRjZcclxuICAgICdAdnVlcHJlc3MvbWVkaXVtLXpvb20nLCAgICAgICAgICAvLyBcdTU2RkVcdTcyNDdcdTk4ODRcdTg5QzhcdTYzRDJcdTRFRjZcclxuICAgICdAdnVlcHJlc3MvbnByb2dyZXNzJywgICAgICAgIC8vXHU5ODc1XHU5NzYyXHU5ODc2XHU5MEU4XHU4RkRCXHU1RUE2XHU2NzYxXHJcbl0sXHJcblxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcY29uc3RhbnRzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9KYXZhQ29kZS9IQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2NvbnN0YW50cy5qc1wiO2NvbnN0IGF1dGhvciA9ICdIS1x1NjEwRlx1NTg4MydcclxuY29uc3QgdGl0bGUgPSAnSEtcdTYxMEZcdTU4ODNcdTc2ODRcdTc3RTVcdThCQzZcdTVFOTMnXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gJ1x1NzdFNVx1OEJDNlx1NUI5RFx1NUU5M1x1MzAwMVx1NzUxRlx1NkQzQlx1NEY1M1x1NEYxQVx1MzAwMVx1NUI2Nlx1NEU2MFx1NTM4Nlx1N0EwQlx1MzAwMVx1NEVCQVx1NzUxRlx1NjAxRFx1ODAwM1x1NUMzRFx1NTcyOFx1NTE3Nlx1NEUyRCc7XHJcbmNvbnN0IHNpdGUgPSAnaHR0cHM6Ly9ibG9nLmdlZWtpbS5jbic7XHJcbmNvbnN0IGhvc3RuYW1lID0gJ2h0dHBzOi8vaGstaHViLmdpdGh1Yi5pbydcclxuY29uc3QgY29weXJpZ2h0ID0gJ0NvcHlyaWdodCAoYykgMjAyNC1wcmVzZW50IEhLXHU2MTBGXHU1ODgzJ1xyXG4vLyBcdTRGN0ZcdTc1MjhcdTVCOENcdTY1NzRVUkxcdThERUZcdTVGODRcdTgwMENcdTk3NUVcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcclxuY29uc3QgaW1hZ2UgPSAnaHR0cHM6Ly9ibG9nLmdlZWtpbS5jbi9zdGF0aWMvbG9nby9sb2dvLnBuZydcclxuY29uc3QgbG9nbyA9ICdodHRwczovL2Jsb2cuZ2Vla2ltLmNuL3N0YXRpYy9sb2dvL2xvZ28ucG5nJ1xyXG5jb25zdCBmYXZpY29uID0gJ2h0dHBzOi8vYmxvZy5nZWVraW0uY24vc3RhdGljL2xvZ28vbG9nby5wbmcnXHJcbmNvbnN0IGxhbmcgPSAnemgtQ04nXHJcblxyXG4vLyBSU1NcdThCQTJcdTk2MDVcdTkxNERcdTdGNkVcclxuY29uc3QgZW1haWwgPSAnMzE2MTg4MDc5NUBxcS5jb20nXHJcbmNvbnN0IGxpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL0hLLWh1YidcclxuXHJcbi8vIFx1NTE2Q1x1NEYxN1x1NTNGN1x1NEZFMVx1NjA2RlxyXG5jb25zdCB3ZWNoYXRJbmZvID0ge1xyXG4gICAgcXJjb2RlOiAnVVJMX0FERFJFU1MuZ2Vla2ltLmNuL3N0YXRpYy93ZWNoYXQvd2VjaGF0LnBuZycsXHJcbiAgICB0aXRsZTogJ0hLXHU2MTBGXHU1ODgzXHU3Njg0XHU3N0U1XHU4QkM2XHU1RTkzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU3N0U1XHU4QkM2XHU1QjlEXHU1RTkzXHUzMDAxXHU3NTFGXHU2RDNCXHU0RjUzXHU0RjFBXHUzMDAxXHU1QjY2XHU0RTYwXHU1Mzg2XHU3QTBCXHUzMDAxXHU0RUJBXHU3NTFGXHU2MDFEXHU4MDAzXHU1QzNEXHU1NzI4XHU1MTc2XHU0RTJEJyxcclxuICAgIHFyY29kZVRpdGxlOiAnSEtcdTYxMEZcdTU4ODMnLFxyXG4gICAgcXJjb2RlRGVzY3JpcHRpb246ICdcdTVGQUVcdTRGRTFcdTYyNkJcdTRFMDBcdTYyNkJcdUZGMENcdTUxNzNcdTZDRThcdTUxNkNcdTRGMTdcdTUzRjcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhRGF0YSA9IHtcclxuICAgIGxhbmcsXHJcbiAgICBsb2NhbGU6ICd6aF9DTicsXHJcbiAgICBhdXRob3IsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgc2l0ZSxcclxuICAgIGhvc3RuYW1lLFxyXG4gICAgaW1hZ2UsXHJcbiAgICBsb2dvLFxyXG4gICAgZmF2aWNvbixcclxuICAgIGNvcHlyaWdodCxcclxuICAgIC8vIFx1NTE2Q1x1NEYxN1x1NTNGN1x1NEZFMVx1NjA2RlxyXG4gICAgd2VjaGF0SW5mbyxcclxuICAgIC8vIFJTU1x1OEJBMlx1OTYwNVx1NkU5MFx1OTE0RFx1N0Y2RVxyXG4gICAgZmVlZENvbmZpZzoge1xyXG4gICAgICAgIC8vIFx1NjcwMFx1NTkxQVx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1NjU3MFx1OTFDRlxyXG4gICAgICAgIGZlZWREb2NMaW1pdDogMTAsXHJcbiAgICAgICAgaG9zdG5hbWUsXHJcbiAgICAgICAgcnNzOiB0cnVlLFxyXG4gICAgICAgIGF0b206IHRydWUsXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBsb2dvLFxyXG4gICAgICAgIGZhdmljb24sXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGxpbmssXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmcsXHJcbiAgICAgICAgY29weXJpZ2h0XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy8gXHU0RjdGXHU3NTI4XHU2NUI5XHU1RjBGIGltcG9ydCB7IG1ldGFEYXRhIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2l0ZS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovSmF2YUNvZGUvSEJsb2cvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaXRlLmpzXCI7aW1wb3J0IHsgbWV0YURhdGEgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuLy8gXHU3RjUxXHU3QUQ5XHU5MTREXHU3RjZFXHJcbmNvbnN0IHNpdGVDb25maWcgPSB7XHJcbiAgICBsYW5nOiBtZXRhRGF0YS5sYW5nLFxyXG4gICAgLy8gXHU3RjUxXHU3QUQ5XHU2ODA3XHU3QjdFXHU5ODc1XHU2ODA3XHU5ODk4XHJcbiAgICB0aXRsZTogXCJIS1x1NjEwRlx1NTg4M1wiLFxyXG5cclxuICAgIC8vIFx1NTE4NVx1NUJCOVx1NEUzQlx1OTg5OFxyXG4gICAgc2l0ZVRpdGxlOiBcIkhLXHU2MTBGXHU1ODgzXHU3Njg0XHU3N0U1XHU4QkM2XHU1RTkzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogbWV0YURhdGEuZGVzY3JpcHRpb24sXHJcblxyXG4gICAgLy8gXHU3QjgwXHU2RDAxdXJsLCBcdTc1MUZcdTYyMTBcdTc2ODRcdTk0RkVcdTYzQTVcdTRFMERcdTVFMjYuaHRtbFxyXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxyXG5cclxuICAgIC8vIFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFxyXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcblxyXG4gICAgLy8gbWFya2Rvd24gXHU2NTg3XHU3QUUwXHU0RkREXHU1QjU4XHU4REVGXHU1Rjg0LCBcdTc2RjhcdTVCRjlcdTRFOEUudml0ZXByZXNzIFx1NjU4N1x1NEVGNlx1NTkzOVx1NzY4NFx1OERFRlx1NUY4NFxyXG4gICAgc3JjRGlyOiAnLi8nLFxyXG5cclxuICAgIC8vIFx1NUY1M1x1OEJCRVx1N0Y2RVx1NEUzQXRydWVcdTY1RjZcdUZGMENWaXRlUHJlc3MgXHU0RTBEXHU0RjFBXHU1NkUwXHU2QjdCXHU5NEZFXHU2M0E1XHU4MDBDXHU1QkZDXHU4MUY0XHU2Nzg0XHU1RUZBXHU1OTMxXHU4RDI1XHUzMDAyXHJcbiAgICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcblxyXG4gICAgLy8gc2l0ZW1hcFx1OTE0RFx1N0Y2RVxyXG4gICAgc2l0ZW1hcDoge1xyXG4gICAgICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9oay1odWIuZ2l0aHViLmlvLydcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2l0ZUNvbmZpZzsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcbWFya2Rvd24uanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0phdmFDb2RlL0hCbG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbWFya2Rvd24uanNcIjtpbXBvcnQgbWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnXG5pbXBvcnQgZm9vdG5vdGUgZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnXG5pbXBvcnQgbWFya2Rvd25JdFRhc2tDaGVja2JveCBmcm9tICdtYXJrZG93bi1pdC10YXNrLWNoZWNrYm94JztcblxuLy8gbWFya2Rvd24gXHU5MTREXHU3RjZFXG5jb25zdCBtYXJrZG93bkNvbmZpZyA9IHtcblxuICAgIC8vIFx1NEVFM1x1NzgwMVx1ODg0Q1x1NTNGN1xuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIC8vIFx1NTNGM1x1NEZBN1x1NzZFRVx1NUY1NVx1NUM1NVx1NzkzQVx1NUM0Mlx1N0VBN1xuICAgIHRvYzogeyBsZXZlbDogWzEsIDIsIDNdIH0sXG4gICAgLy8gXHU5RUQ4XHU4QkE0XHU5QUQ4XHU0RUFFXHU4QkVEXHU4QTAwXG4gICAgZGVmYXVsdEhpZ2hsaWdodExhbmc6ICdqYXZhJyxcblxuICAgIC8vIFx1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RVxuICAgIGNvbmZpZzogKG1kKSA9PiB7XG4gICAgICAgIG1kLnVzZShtYXRoamF4Myk7XG4gICAgICAgIG1kLnVzZShmb290bm90ZSk7XG4gICAgICAgIG1kLnVzZShtYXJrZG93bkl0VGFza0NoZWNrYm94LCB7IFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGRpdldyYXA6IGZhbHNlLFxuICAgICAgICAgIGRpdkNsYXNzOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGlkUHJlZml4OiAnY2J4XycsXG4gICAgICAgICAgdWxDbGFzczogJ3Rhc2stbGlzdCcsXG4gICAgICAgICAgbGlDbGFzczogJ3Rhc2stbGlzdC1pdGVtJyxcbiAgICAgICAgfSk7XG4gICAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBtYXJrZG93bkNvbmZpZyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXYuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0phdmFDb2RlL0hCbG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbmF2LmpzXCI7Ly8gXHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXG5cbi8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NEUyRFx1NzY4NCAgbGluayBcdTc2RjRcdTYzQTVcdTkxNERcdTdGNkVcdTUyMzBcdTVCRjlcdTVFOTRcdTc2ODQubWRcdTY1ODdcdTRFRjZcbmNvbnN0IG5hdiA9IFtcbiAgICB7IFxuICAgICAgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIFxuICAgICAgbGluazogJy8nIFxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRleHQ6ICdcdTY1ODdcdTdBRTAnLCBcbiAgICAgIGxpbms6ICcvZG9jdW1lbnQvZ3VpbGQvb25lJyBcbiAgICB9LFxuICAgIHsgXG4gICAgICB0ZXh0OiAnXHU1RjUyXHU2ODYzJywgXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTUyMDZcdTdDN0InLCBsaW5rOiAnL2NhdGVnb3JpZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NjgwN1x1N0I3RScsIGxpbms6ICcvdGFncycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1RjUyXHU2ODYzJywgbGluazogJy9kb2N1bWVudC9ndWlsZC9pbmRleC5tZCcgfVxuICAgICAgXVxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgdGV4dDogJ1x1NkM0N1x1NjAzQicsIFxuICAgICAgICBsaW5rOiAnL2xpc3QnIFxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRleHQ6ICdcdTk4NzlcdTc2RUUnLCBcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0dlZWstSU0nLCBsaW5rOiAnL2RvY3VtZW50L2d1aWxkL29uZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnSXRlbSBCJywgbGluazogJy9kb2N1bWVudC9ndWlsZC90d28nIH0sXG4gICAgICAgIHsgdGV4dDogJ0l0ZW0gQycsIGxpbms6ICcvZG9jdW1lbnQvZ3VpbGQvaW5kZXgnIH0sXG4gICAgICAgIHsgdGV4dDogJ3RocmVlJywgbGluazogJy9kb2N1bWVudC9ndWlsZC90aHJlZSd9LFxuICAgICAgICB7IHRleHQ6ICdcdTc3RURcdTk0RkVcdTYzQTVcdTc1MUZcdTYyMTBcdTU2NjgnLCBsaW5rOiAnL2RvY3VtZW50L3Nob3J0LXVybC1nZW5lcmF0b3InIH0sXG4gICAgICAgIHsgdGV4dDogJ2hSUEMnLCBsaW5rOiAnL2RvY3VtZW50L2gtcnBjJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsIFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU2QzQ3XHU2MDNCJywgbGluazogJy9pdGVtLTEnIH0sXG4gICAgICAgIHsgdGV4dDogJ0l0ZW0gQicsIGxpbms6ICcvaXRlbS0yJyB9LFxuICAgICAgICB7IHRleHQ6ICdJdGVtIEMnLCBsaW5rOiAnL2RvY3VtZW50L2d1aWxkL2luZGV4Lm1kJyB9XG4gICAgICBdXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgbmF2IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxKYXZhQ29kZVxcXFxIQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxKYXZhQ29kZVxcXFxIQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHRoZW1lLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9KYXZhQ29kZS9IQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3RoZW1lLmpzXCI7Ly8gXHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXHJcbmltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcclxuLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU5MTREXHU3RjZFXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBhdXRvR2VuZXJhdGVTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJcIlxyXG5cclxuXHJcbi8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG5jb25zdCB0aGVtZUNvbmZpZyA9IHtcclxuICAgIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NjgwN1x1OTg5OFxyXG4gICAgc2l0ZVRpdGxlOiBcIkhLXHU2MTBGXHU1ODgzXCIsXHJcbiAgICBsb2dvOiBcIi9sb2dvL2xvZ28ucG5nXCIsXHJcblxyXG4gICAgLy8gXHU1NDJGXHU1MkE4XHU5ODc1XHU5NzYyXHU0RTFEXHU2RUQxXHU2RURBXHU1MkE4XHJcbiAgICBzbW9vdGhTY3JvbGw6IHRydWUsXHJcblxyXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xyXG4gICAgbmF2OiBuYXYsXHJcbiAgICBcclxuICAgIC8vIFx1NjU4N1x1N0FFMFx1NEZBN1x1OEZCOVx1NjgwRlx1NTIxN1x1ODg2OFxyXG4gICAgc2lkZWJhcjogYXV0b0dlbmVyYXRlU2lkZUJhcihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vZG9jdW1lbnQnKSksXHJcblxyXG4gICAgLy8gXHU2NDFDXHU3RDIyXHU2ODBGXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NTNGM1x1NEUwQVx1ODlEMlx1NzkzRVx1NEVBNFx1OEQyNlx1NTNGN1x1OTRGRVx1NjNBNVxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ISy1odWInIH0sXHJcbiAgICAgIHsgaWNvbjogJ3R3aXR0ZXInLCBsaW5rOiAnLi4uJyB9LFxyXG4gICAgICAvLyBSU1NcclxuICAgICAgXHJcbiAgICAgIC8vIFx1NjM5OFx1OTFEMVxyXG4gICAgICB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgc3ZnOiAnPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDM2IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE3LjU4NzUgNi43NzI2OEwyMS44MjMyIDMuNDA1MDVMMTcuNTg3NSAwLjAwNzQ4MjM3TDE3LjU4MzcgMEwxMy4zNTU1IDMuMzk3NTdMMTcuNTgzNyA2Ljc2ODk0TDE3LjU4NzUgNi43NzI2OFpNMTcuNTg2MyAxNy4zOTU1SDE3LjU5TDI4LjUxNjEgOC43NzQzMkwyNS41NTI2IDYuMzk0NTNMMTcuNTkgMTIuNjgwOEgxNy41ODYzTDE3LjU4MjUgMTIuNjg0NUw5LjYxOTkzIDYuNDAyMDFMNi42NjAxNiA4Ljc4MTgxTDE3LjU4MjUgMTcuMzk5MkwxNy41ODYzIDE3LjM5NTVaTTE3LjU4MjggMjMuMjg5MUwxNy41ODY1IDIzLjI4NTRMMzIuMjEzMyAxMS43NDU2TDM1LjE3NjggMTQuMTI1NEwyOC41MjM4IDE5LjM3NTJMMTcuNTg2NSAyOEwwLjI4NDM3NiAxNC4zNTc0TDAgMTQuMTI5MUwyLjk1OTc3IDExLjc1MzFMMTcuNTgyOCAyMy4yODkxWlwiIGZpbGw9XCIjMUU4MEZGXCIvPjwvc3ZnPidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2p1ZWppbi5jbi91c2VyLzI1Nzc3MjUxMzAwMjI2MTUnLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIC8vIFx1OTg3NVx1ODExQVxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdcdTUwNUFcdTlBRDhcdThEMjhcdTkxQ0ZcdTc2ODRcdTdGMTZcdTdBMEJcdTUxODVcdTVCQjlcdTdGNTFcdTdBRDlcdUZGMENcdTZCMjJcdThGQ0Ugc3RhciBcdTJCNTAgXHU4QkE5XHU2NkY0XHU1OTFBXHU0RUJBXHU1M0QxXHU3M0IwJyxcclxuICAgICAgY29weXJpZ2h0OiAnTUlUIExpY2Vuc2UgfCBcdTcyNDhcdTY3NDNcdTYyNDBcdTY3MDkgQ29weXJpZ2h0IFx1MDBBOSAyMDE5LXByZXNlbnQgSEtcdTYxMEZcdTU4ODMnXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFx1NTkyN1x1N0VCMlx1N0VBN1x1NTIyQlxyXG4gICAgb3V0bGluZTp7XHJcbiAgICAgIGxldmVsOiBbMSwzXVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcclxuICAgIGVkaXRMaW5rOiB7XHJcbiAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcclxuICAgICAgdGV4dDogJ0VkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YidcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHU2NTg3XHU2ODYzXHU1RTk1XHU5MEU4XHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogJzxcdTIwMTRcdTIwMTRcdTRFMEFcdTRFMDBcdTdCQzcnLFxyXG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU3QkM3XHUyMDE0XHUyMDE0PidcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGxhc3RVcGRhdGVkOiB7XHJcbiAgICAgIHRleHQ6ICdcdTY3MDBcdTU0MEVcdTdGMTZcdThGOTFcdTRFOEUnLFxyXG4gICAgICBmb3JtYXRPcHRpb25zOiB7XHJcbiAgICAgICAgZGF0ZVN0eWxlOiAnZnVsbCcsXHJcbiAgICAgICAgdGltZVN0eWxlOiAnbWVkaXVtJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxyXG5cclxuICAgIC8vIFx1NTkxNlx1OTBFOFx1OTRGRVx1NjNBNVx1NTZGRVx1NjgwN1xyXG4gICAgZXh0ZXJuYWxMaW5rSWNvbjogdHJ1ZSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lQ29uZmlnXHJcblxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovSmF2YUNvZGUvSEJsb2cvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFyLmpzXCI7Ly8gXHU0RkE3XHU4RkI5XHU1QkZDXHU4MjJBXHU2ODBGXHU3NkVFXHU1RjU1XG5pbXBvcnQgZGlyZWN0b3J5VHJlZSBmcm9tICdkaXJlY3RvcnktdHJlZSc7XG5cbi8vIFx1OEY2Q1x1NjM2Mlx1NEUzQVx1NEZBN1x1OEZCOVx1NjgwRlx1OTAwOVx1OTg3OVxuZnVuY3Rpb24gdG9TaWRlYmFyT3B0aW9uKHRyZWUgPSBbXSkge1xuICAgIFxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0cmVlKSkgcmV0dXJuIFtdO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3RyZWU9JywgdHJlZSk7XG4gICAgLy8gXHU5MDREXHU1Mzg2XG4gICAgcmV0dXJuIHRyZWUubWFwKCh2KSA9PiB7XG4gICAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NUI1OFx1NTcyOFx1NUI1MFx1OERFRlx1NUY4NFxuICAgICAgICBpZiAodi5jaGlsZHJlbikge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHYubmFtZSxcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHRvU2lkZWJhck9wdGlvbih2LmNoaWxkcmVuKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU0RTBEXHU1MTc3XHU2NzA5XHU1QjUwXHU3NkVFXHU1RjU1XHU0RTg2XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHYubmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxuICAgICAgICAgICAgICAgIGxpbms6IHYucGF0aC5zcGxpdChcImRvY3NcIilbMV0ucmVwbGFjZShcIi5tZFwiLCBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy8gXHU5MDFBXHU4RkM3XHU2RTkwXHU3ODAxXHU3NkVFXHU1RjU1XHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU1QkZDXHU4MjJBXHU2ODBGXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVTaWRlQmFyKGRvY3VtZW50UGF0aCkge1xuXG4gICAgLy8gXHU4OUUzXHU2NzkwXHU0RjIwXHU1MTY1XHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2MzA3XHU1QjlBXHU2ODNDXHU1RjBGXHU2NTg3XHU0RUY2XG4gICAgY29uc3QgbWFya2R3b25Tb3VyY2UgPSBkaXJlY3RvcnlUcmVlKGRvY3VtZW50UGF0aCwge1xuICAgICAgICBleHRlbnNpb25zOiAvXFwubWQkLyxcbiAgICAgICAgbm9ybWFsaXplUGF0aDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0b1NpZGViYXJPcHRpb24obWFya2R3b25Tb3VyY2UuY2hpbGRyZW4pXG59XG5cbi8vIFx1NjU4N1x1N0FFMFx1NEZBN1x1OEZCOVx1NjgwRlx1NTIxN1x1ODg2OFxuZXhwb3J0IGRlZmF1bHQgYXV0b0dlbmVyYXRlU2lkZUJhciIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb21wb25lbnRzXFxcXHJlYWQuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0phdmFDb2RlL0hCbG9nL2RvY3MvLnZpdGVwcmVzcy9jb21wb25lbnRzL3JlYWQuanNcIjsvLyBcdThCRkJcdTUzRDZtYXJrZG93biBcdTY1ODdcdTRFRjZmcm9udG1hdHRlclx1NTE4NVx1NUJCOVx1N0VERlx1NEUwMFx1OTE0RFx1N0Y2RVxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnXG5cbi8vIFx1OEJGQlx1NTNENiBmcm9udG1hdHRlciBcdTUxODVcdTVCQjlcbmNvbnN0IHJlID0gLy0tLSguKj8pLS0tL3NnXG5jb25zdCBvdXQgPSBbXVxuXG4vLyBcdThCRkJcdTUzRDZcdTYyNDBcdTY3MDlcdTY1ODdcdTRFRjZcbmZ1bmN0aW9uIHJlYWRBbGwocGFyZW50UGF0aCkge1xuXG4gICAgLy8gXHU4QkZCXHU1M0Q2XHU3NkVFXHU1RjU1XHU0RTBCXHU2NTg3XHU0RUY2XHU1NDhDXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjBDXHU5NzVFXHU5MDEyXHU1RjUyXG4gICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXJlbnRQYXRoKVxuICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLnRvU3RyaW5nKCkpO1xuXG4gICAgZmlsZXMubWFwKGl0ZW0gPT4ge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlPScsIGl0ZW0pO1xuICAgICAgICAvLyBcdTgzQjdcdTUzRDZcdTVGNTNcdTUyNERcdTY1ODdcdTRFRjZcdThERUZcdTVGODRcbiAgICAgICAgbGV0IHRlbXBQYXRoID0gcGF0aC5qb2luKHBhcmVudFBhdGgsIGl0ZW0pOyAvL1x1NUY1M1x1NTI0RFx1NjU4N1x1NEVGNlx1NjIxNlx1NjU4N1x1NEVGNlx1NTkzOVx1NzY4NFx1OERFRlx1NUY4NFxuICAgICAgICAvL1x1NTIyNFx1NjVBRFx1NjYyRlx1NjU4N1x1NEVGNlx1OEZEOFx1NjYyRlx1NjU4N1x1NEVGNlx1NTkzOVxuICAgICAgICBsZXQgc3RhdHMgPSBmcy5zdGF0U3luYyh0ZW1wUGF0aCk7IFxuICAgICAgICBpZihzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAvLyBcdTY1ODdcdTRFRjZcdTU5MzlcdTkwMTJcdTVGNTJcdTU5MDRcdTc0MDZcbiAgICAgICAgICAgIHJlYWRBbGwodGVtcFBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NTg3XHU0RUY2XG4gICAgICAgICAgICBsZXQgZXh0ID0gcGF0aC5leHRuYW1lKHRlbXBQYXRoKTtcbiAgICAgICAgICAgIGlmKGV4dCA9PT0gJy5tZCcgfHwgZXh0ID09PSAnLk1EJykge1xuICAgICAgICAgICAgICAgIC8vIFx1OEJGQlx1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmModGVtcFBhdGgsICd1dGYtOCcpO1xuICAgICAgICAgICAgICAgIC8vIFx1OTAxQVx1OEZDN1x1NkI2M1x1NTIxOVx1ODNCN1x1NTNENmZyb250bWF0dGVyXHU1MTg1XHU1QkI5XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSByZS5leGVjKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgLy8gXHU4RkQ5XHU5MUNDXHU1OTgyXHU2NzlDXHU0RTBEXHU2NENEXHU0RjVDXHVGRjBDXHU1NzI4XHU1NDBFXHU5NzYyXHU2QjYzXHU1MjE5XHU1MjI0XHU2NUFEXHU2NUY2XHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1RjUzXHU2NUY2XHU1NzI4XHU4RkQ5XHU5MUNDXHU1MzYxXHU0RTg2XHU1Rjg4XHU0RTQ1XG4gICAgICAgICAgICAgICAgcmUubGFzdEluZGV4ID0gMFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NUI1OFx1NTcyOGZyb250bWF0dGVyXHU1MTg1XHU1QkI5XG4gICAgICAgICAgICAgICAgaWYoZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU4OUUzXHU2NzkwZnJvbnRtYXR0ZXJcdTUxODVcdTVCQjlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jcyA9IHlhbWwubG9hZChmcm9udG1hdHRlclsxXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb2NzOicsIGRvY3MpXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFx1NzY4NFx1OERGM1x1OEY2Q1xuICAgICAgICAgICAgICAgICAgICBkb2NzLmxpbmsgPSB0ZW1wUGF0aC5zcGxpdChcImRvY3NcIilbMV0ucmVwbGFjZShcIi5tZFwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAvLyBcdTY1ODdcdTdBRTBcdTUyMTdcdTg4NjhcdTc2ODRcdTY4MDdcdTk4OThcbiAgICAgICAgICAgICAgICAgICAgZG9jcy50aXRsZSA9IGRvY3MudGl0bGUgPyBkb2NzLnRpdGxlIDogaXRlbS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1NjU4N1x1N0FFMFx1NzY4NFx1NEZFRVx1NjUzOVx1NjVGNlx1OTVGNFxuICAgICAgICAgICAgICAgICAgICBkb2NzLmRhdGUgPSBkb2NzLmRhdGU/IGRvY3MuZGF0ZSA6IHN0YXRzLm10aW1lLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU4QkJGXHU5NUVFXHU2NTcwXHU5MUNGXG4gICAgICAgICAgICAgICAgICAgIGRvY3Muc2hvd0FjY2Vzc051bWJlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2NTg3XHU3QUUwXHU3Njg0XHU0RjVDXHU4MDA1XG4gICAgICAgICAgICAgICAgICAgIGRvY3MuYXV0aG9yID0gZG9jcy5hdXRob3I/IGRvY3MuYXV0aG9yIDogJ0hLXHU2MTBGXHU1ODgzJ1xuICAgICAgICAgICAgICAgICAgICAvLyBcdTY1ODdcdTdBRTBcdTc2ODRcdTY0NThcdTg5ODFcbiAgICAgICAgICAgICAgICAgICAgZG9jcy5zdW1tYXJ5ID0gZG9jcy5zdW1tYXJ5PyBkb2NzLnN1bW1hcnkgOiBjb250ZW50LnNsaWNlKDAsIDEwMClcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2NTg3XHU3QUUwXHU3Njg0XHU1MjA2XHU3QzdCXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGRvY3MpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ0hLXHU2MTBGXHU1ODgzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHN0YXRzLm10aW1lLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB0ZW1wUGF0aC5zcGxpdChcImRvY3NcIilbMV0ucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBY2Nlc3NOdW1iZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBjb250ZW50LnNsaWNlKDAsIDEwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy8gXHU4QkZCXHU1M0Q2bWFya2Rvd25cdTU5MzRcdTRGRTFcdTYwNkZcdTRGRERcdTVCNThcdTRFM0Fqc29uXG5mdW5jdGlvbiByZWFkVG9Kc29uKHBhcmVudFBhdGgsIGpzb25QYXRoKSB7XG4gICAgcmVhZEFsbChwYXJlbnRQYXRoKVxuICAgIGZzLndyaXRlRmlsZVN5bmMoanNvblBhdGgsIFxuICAgICAgICBKU09OLnN0cmluZ2lmeShvdXQpLFxuICAgICAgICB7ZW5jb2Rpbmc6ICd1dGY4J31cbiAgICApXG4gICAgcmV0dXJuIG91dFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlYWRUb0pzb25cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxoZWFkLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9KYXZhQ29kZS9IQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2hlYWQuanNcIjtpbXBvcnQgeyBtZXRhRGF0YSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG4vLyBjb3B5IGZyb20gaHR0cHM6Ly9naXRlZS5jb20vZXdzcS9jaGFybGVzN2MvYmxvYi9tYWluL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvaGVhZC50c1xuZXhwb3J0IGNvbnN0IGhlYWQgPSBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9sb2dvL2xvZ28ucG5nJyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdhdXRob3InLCBjb250ZW50OiAnSEtcdTYxMEZcdTU4ODMnIH1dLFxuICAgIFsnbWV0YScsIHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ0hLXHU2MTBGXHU1ODgzXHU3Njg0XHU3N0U1XHU4QkM2XHU1RTkzLCBcdTc3RTVcdThCQzZcdTVFOTMsIFx1NTM1QVx1NUJBMiwgSEtcdTYxMEZcdTU4ODMsIFx1NzUxRlx1NkQzQlx1NEY1M1x1NEYxQSwgXHU1QjY2XHU0RTYwXHU1Mzg2XHU3QTBCLCBcdTRFQkFcdTc1MUZcdTYwMURcdTgwMDMnfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiAnSEtcdTYxMEZcdTU4ODNcdTc2ODRcdTc3RTVcdThCQzZcdTVFOTMsIFx1NzdFNVx1OEJDNlx1NUU5MywgXHU1MzVBXHU1QkEyLCBIS1x1NjEwRlx1NTg4MywgXHU3NTFGXHU2RDNCXHU0RjUzXHU0RjFBLCBcdTVCNjZcdTRFNjBcdTUzODZcdTdBMEIsIFx1NEVCQVx1NzUxRlx1NjAxRFx1ODAwMywgR2VlSyBJTScgfV0sXG4gIFxuICAgIFsnbWV0YScsIHsgbmFtZTogJ0hhbmRoZWxkRnJpZW5kbHknLCBjb250ZW50OiAnVHJ1ZScgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAnTW9iaWxlT3B0aW1pemVkJywgY29udGVudDogJzMyMCcgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzNjODc3MicgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAnYmFpZHVfdW5pb25fdmVyaWZ5JywgY29udGVudDogJzE5YmQ4ZWQzZjAyYTkxZTIzMDQzZWZkZjFkODIzMTA3JyB9XSxcbiAgXG4gICAgLy8gXHU1RjAwXHU2NTNFXHU1NkZFXHU1MzRGXHU4QkFFXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnd2Vic2l0ZScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6IG1ldGFEYXRhLmxvY2FsZSB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBtZXRhRGF0YS50aXRsZSB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBtZXRhRGF0YS5kZXNjcmlwdGlvbiB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6c2l0ZScsIGNvbnRlbnQ6IG1ldGFEYXRhLnNpdGUgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IG1ldGFEYXRhLnRpdGxlIH1dLFxuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IG1ldGFEYXRhLmltYWdlIH1dLFxuICAgIFxuICAgIC8vIGdpdCBkaXNjdXNzaW9uXHU4QkM0XHU4QkJBXG4gICAgWydzY3JpcHQnLCB7c3JjOiAnaHR0cHM6Ly9lc20uc2gvZ2lzY3VzJywgdHlwZTogJ21vZHVsZSd9XVxuICAgIC8vIFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMVx1NEVFM1x1NzgwMVx1RkYxQWh0dHBzOi8vdG9uZ2ppLmJhaWR1LmNvbVxuICAgIC8vIFx1OTg3NVx1OTc2Mlx1OEJCRlx1OTVFRVx1OTFDRlx1N0VERlx1OEJBMVxuXTtcbi8vIFx1NEY3Rlx1NzUyOFx1NjVCOVx1NUYwRiBpbXBvcnQgeyBoZWFkIH0gZnJvbSAnLi9jb25maWcvaGVhZCc7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxKYXZhQ29kZVxcXFxIQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx1dGlsc1xcXFxyc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0phdmFDb2RlL0hCbG9nL2RvY3MvLnZpdGVwcmVzcy91dGlscy9yc3MudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IEZlZWQgfSBmcm9tIFwiZmVlZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50TG9hZGVyLCB0eXBlIFNpdGVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCB7IG1ldGFEYXRhIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuY29uc3QgaG9zdG5hbWUgPSBtZXRhRGF0YS5mZWVkQ29uZmlnLmhvc3RuYW1lO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJzc0ZpbGUoY29uZmlnOiBTaXRlQ29uZmlnKSB7XHJcblx0Y29uc3QgZmVlZCA9IG5ldyBGZWVkKHtcclxuXHRcdHRpdGxlOiBtZXRhRGF0YS50aXRsZSxcclxuXHRcdGRlc2NyaXB0aW9uOiBtZXRhRGF0YS5mZWVkQ29uZmlnLmRlc2NyaXB0aW9uLFxyXG5cdFx0aWQ6ICBob3N0bmFtZSxcclxuXHRcdGxpbms6IGhvc3RuYW1lLFxyXG5cdFx0bGFuZ3VhZ2U6IG1ldGFEYXRhLmZlZWRDb25maWcubGFuZ3VhZ2UsXHJcblx0XHRpbWFnZTogbWV0YURhdGEuZmVlZENvbmZpZy5pbWFnZSxcclxuXHRcdGZhdmljb246IG1ldGFEYXRhLmZlZWRDb25maWcuZmF2aWNvbixcclxuXHRcdGNvcHlyaWdodDogbWV0YURhdGEuZmVlZENvbmZpZy5jb3B5cmlnaHQsXHJcblx0fSk7XHJcbiBcclxuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGNyZWF0ZUNvbnRlbnRMb2FkZXIoJ2RvY3VtZW50LyoqLyoubWQnLCB7XHJcblx0XHRleGNlcnB0OiB0cnVlLFxyXG5cdFx0cmVuZGVyOiB0cnVlLFxyXG5cdH0pLmxvYWQoKTtcclxuXHJcbiAgICBsb2coJ1x1NUYwMFx1NTlDQlx1NzUxRlx1NjIxMFJTU1x1NjU4N1x1NEVGNjonLCBuZXcgRGF0ZSgpKVxyXG4gICAgbG9nKCdcdTY1ODdcdTdBRTBcdTYwM0JcdTY1NzBcdUZGMUEnLCBwb3N0cy5sZW5ndGgpXHJcblxyXG4gICAgLy8gXHU2MzA5XHU1M0QxXHU1RTAzXHU2NUU1XHU2NzFGXHU2MzkyXHU1RThGXHJcbiAgICBwb3N0cy5zb3J0KChhLCBiKSA9PiBOdW1iZXIobmV3IERhdGUoYi5mcm9udG1hdHRlci5kYXRlKSkgLSBOdW1iZXIobmV3IERhdGUoYS5mcm9udG1hdHRlci5kYXRlKSkpXHJcblxyXG4gICAgLy8gXHU1OTA0XHU3NDA2XHU2NTg3XHU3QUUwZnJvbnRtYXR0ZXJcdUZGMENcdTg4NjVcdTUxNDVcdTdGM0FcdTU5MzFcdTRGRTFcdTYwNkZcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NQb3N0RnJvbnRtYXR0ZXIocG9zdCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHBvc3Q/LnVybDtcclxuICAgICAgICBjb25zdCBleGNlcnB0ID0gcG9zdD8uZXhjZXJwdDtcclxuICAgICAgICBjb25zdCBodG1sID0gcG9zdD8uaHRtbDtcclxuICAgICAgICBsZXQgZnJvbnRtYXR0ZXIgPSBwb3N0LmZyb250bWF0dGVyIHx8IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFx1NjNEMFx1NTNENlx1NjU4N1x1NEVGNlx1NTQwRFx1NEY1Q1x1NEUzQVx1NTkwN1x1NzUyOFx1NjgwN1x1OTg5OFxyXG4gICAgICAgIGxldCBmaWxlTmFtZSA9IHVybC5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICAgIGlmKCFmaWxlTmFtZSkge1xyXG4gICAgICAgICAgICBmaWxlTmFtZSA9ICdpbmRleCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFx1ODg2NVx1NTE0NVx1NjgwN1x1OTg5OFx1NEZFMVx1NjA2RlxyXG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIudGl0bGUpIHtcclxuICAgICAgICAgICAgLy8gXHU1QzFEXHU4QkQ1XHU0RUNFSFRNTFx1NTE4NVx1NUJCOVx1NEUyRFx1NjNEMFx1NTNENmgxXHU2ODA3XHU3QjdFXHU0RjVDXHU0RTNBXHU2ODA3XHU5ODk4XHJcbiAgICAgICAgICAgIGxldCB0aXRsZUZyb21Db250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoMU1hdGNoID0gaHRtbC5tYXRjaCgvPGgxW14+XSo+KFtePF0rKTxcXC9oMT4vKTtcclxuICAgICAgICAgICAgICAgIGlmIChoMU1hdGNoICYmIGgxTWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUZyb21Db250ZW50ID0gaDFNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJvbnRtYXR0ZXIudGl0bGUgPSB0aXRsZUZyb21Db250ZW50IHx8IGZpbGVOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBcdTg4NjVcdTUxNDVcdTY1RTVcdTY3MUZcdTRGRTFcdTYwNkZcclxuICAgICAgICBpZiAoIWZyb250bWF0dGVyLmRhdGUpIHtcclxuICAgICAgICAgICAgLy8gXHU0RjdGXHU3NTI4XHU1RjUzXHU1MjREXHU2NUU1XHU2NzFGXHJcbiAgICAgICAgICAgIGZyb250bWF0dGVyLmRhdGUgPSBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBcdTg4NjVcdTUxNDVcdTYzQ0ZcdThGRjBcdTRGRTFcdTYwNkZcclxuICAgICAgICBpZiAoIWZyb250bWF0dGVyLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGZyb250bWF0dGVyLmRlc2NyaXB0aW9uID0gZXhjZXJwdCB8fCBcclxuICAgICAgICAgICAgICAgIChodG1sID8gaHRtbC5yZXBsYWNlKC88W14+XSs+L2csICcnKS5zdWJzdHJpbmcoMCwgMjAwKSArICcuLi4nIDogJycpIHx8IFxyXG4gICAgICAgICAgICAgICAgbWV0YURhdGEuZmVlZENvbmZpZy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gXHU4ODY1XHU1MTQ1XHU0RjVDXHU4MDA1XHU0RkUxXHU2MDZGXHJcbiAgICAgICAgaWYgKCFmcm9udG1hdHRlci5hdXRob3IpIHtcclxuICAgICAgICAgICAgZnJvbnRtYXR0ZXIuYXV0aG9yID0gbWV0YURhdGEuZmVlZENvbmZpZy5hdXRob3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFx1ODg2NVx1NTE0NVx1NUMwMVx1OTc2Mlx1NTZGRVx1NzI0N1xyXG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIuY292ZXIpIHtcclxuICAgICAgICAgICAgLy8gXHU1QzFEXHU4QkQ1XHU0RUNFXHU1MTg1XHU1QkI5XHU0RTJEXHU2M0QwXHU1M0Q2XHU3QjJDXHU0RTAwXHU1RjIwXHU1NkZFXHU3MjQ3XHJcbiAgICAgICAgICAgIGxldCBjb3ZlckZyb21Db250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdNYXRjaCA9IGh0bWwubWF0Y2goLzxpbWdbXj5dK3NyYz1bXCInXShbXlwiJ10rKVtcIiddW14+XSo+Lyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nTWF0Y2ggJiYgaW1nTWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBcdTc4NkVcdTRGRERcdTU2RkVcdTcyNDdVUkxcdTY2MkZcdTdFRERcdTVCRjlcdThERUZcdTVGODRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdTcmMgPSBpbWdNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1nU3JjLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlckZyb21Db250ZW50ID0gaW1nU3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW1nU3JjLnN0YXJ0c1dpdGgoJy4vJykgfHwgaW1nU3JjLnN0YXJ0c1dpdGgoJy4uLycpIHx8IGltZ1NyYy5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU4RjZDXHU0RTNBXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyRnJvbUNvbnRlbnQgPSBgJHttZXRhRGF0YS5ob3N0bmFtZX0ke2ltZ1NyYy5yZXBsYWNlKC9eXFwuXFwvL2csICcvJyl9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJvbnRtYXR0ZXIuY292ZXIgPSBjb3ZlckZyb21Db250ZW50IHx8IG1ldGFEYXRhLmZlZWRDb25maWcuaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZXhjZXJwdCxcclxuICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgZnJvbnRtYXR0ZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBcdTc1MUZcdTYyMTBmZWVkIGl0ZW1cclxuXHRmb3IgKGNvbnN0IHBvc3Qgb2YgcG9zdHMpIHtcclxuICAgICAgICAvLyBcdTRFQzVcdTRGRERcdTc1NTlcdTY3MDBcdThGRDFcdTdCQzdcdTY1NzBcdTk2NTBcdTUyMzZcdTc2ODRcdTY1ODdcdTdBRTBcclxuICAgICAgICBpZihmZWVkLml0ZW1zLmxlbmd0aCA+PSBtZXRhRGF0YS5mZWVkQ29uZmlnLmZlZWREb2NMaW1pdCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gXHU1OTA0XHU3NDA2XHU1RTc2XHU4ODY1XHU1MTQ1XHU2NTg3XHU3QUUwZnJvbnRtYXR0ZXJcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWRQb3N0ID0gcHJvY2Vzc1Bvc3RGcm9udG1hdHRlcihwb3N0KTtcclxuICAgICAgICBjb25zdCB7IHVybCwgZXhjZXJwdCwgaHRtbCwgZnJvbnRtYXR0ZXIgfSA9IHByb2Nlc3NlZFBvc3Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gXHU0RjdGXHU3NTI4XHU1OTA0XHU3NDA2XHU1NDBFXHU3Njg0ZnJvbnRtYXR0ZXJcdTRGRTFcdTYwNkZcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGZyb250bWF0dGVyLnRpdGxlO1xyXG4gICAgICAgIC8vIFx1NjNDRlx1OEZGMFxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZXhjZXJwdCB8fCBmcm9udG1hdHRlci5kZXNjcmlwdGlvbiB8fCBtZXRhRGF0YS5mZWVkQ29uZmlnLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIC8vIFx1NjU4N1x1N0FFMFx1NjVFNVx1NjcxRiAtIFx1Nzg2RVx1NEZERFx1NjYyRkRhdGVcdTVCRjlcdThDNjFcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZnJvbnRtYXR0ZXIuZGF0ZSk7XHJcbiAgICAgICAgLy8gXHU2NTg3XHU3QUUwXHU1QzAxXHU5NzYyXHJcbiAgICAgICAgY29uc3QgY292ZXIgPSBmcm9udG1hdHRlci5jb3ZlciB8fCAnJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFx1NTIxQlx1NUVGQWZlZWQgaXRlbVx1NUJGOVx1OEM2MVxyXG4gICAgICAgIGNvbnN0IGZlZWRJdGVtID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgaWQ6IGAke2hvc3RuYW1lfSR7dXJsfWAsXHJcbiAgICAgICAgICAgIGxpbms6IGAke2hvc3RuYW1lfSR7dXJsfWAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgY29udGVudDogaHRtbCxcclxuICAgICAgICAgICAgYXV0aG9yOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZnJvbnRtYXR0ZXIuYXV0aG9yIHx8IG1ldGFEYXRhLmZlZWRDb25maWcuYXV0aG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtZXRhRGF0YS5mZWVkQ29uZmlnLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IG1ldGFEYXRhLmZlZWRDb25maWcubGluayxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBcdTUzRUFcdTY3MDlcdTVGNTNjb3Zlclx1NEUwRFx1NEUzQVx1N0E3QVx1NjVGNlx1NjI0RFx1NkRGQlx1NTJBMGltYWdlXHU1QzVFXHU2MDI3XHJcbiAgICAgICAgaWYgKGNvdmVyICYmIGNvdmVyLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgKGZlZWRJdGVtIGFzIGFueSkuaW1hZ2UgPSBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmVlZC5hZGRJdGVtKGZlZWRJdGVtKTtcclxuICAgICAgICBsb2coJ1x1NkRGQlx1NTJBMFJTU1x1Njc2MVx1NzZFRVx1NjIxMFx1NTI5RjonLCB0aXRsZSk7XHJcblx0fVxyXG5cclxuICAgIC8vIFx1NTE5OVx1NTE2NVx1NjU4N1x1NEVGNlxyXG4gICAgbG9nKCdcdTUxOTlcdTUxNjVGZWVkLnhtbFx1NjU4N1x1NEVGNlx1RkYxQScsIHBhdGguam9pbihjb25maWcub3V0RGlyLCBcImZlZWQueG1sXCIpKVxyXG5cdHdyaXRlRmlsZVN5bmMocGF0aC5qb2luKGNvbmZpZy5vdXREaXIsIFwiZmVlZC54bWxcIiksIGZlZWQucnNzMigpLCBcInV0Zi04XCIpO1xyXG59XHJcblxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXEphdmFDb2RlXFxcXEhCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx1dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHV0aWxzXFxcXG1hcmtkb3duLXRyYW5zZm9ybS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovSmF2YUNvZGUvSEJsb2cvZG9jcy8udml0ZXByZXNzL3V0aWxzL21hcmtkb3duLXRyYW5zZm9ybS50c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuLy8gXHU0RkVFXHU2NTM5Z2xvYlx1NzY4NFx1NUJGQ1x1NTE2NVx1NjVCOVx1NUYwRlx1RkYwQ1x1ODlFM1x1NTFCM0NvbW1vbkpTXHU2QTIxXHU1NzU3XHU1QkZDXHU1MTY1XHU5NUVFXHU5ODk4XHJcbmltcG9ydCBwa2cgZnJvbSBcImdsb2JcIjtcclxuY29uc3QgeyBnbG9iIH0gPSBwa2c7XHJcbmltcG9ydCB7IHR5cGUgU2l0ZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IHsgbWV0YURhdGEgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcclxuXHJcbi8vIFx1NTE2Q1x1NEYxN1x1NTNGN1x1NEZFMVx1NjA2Rlx1NkEyMVx1Njc3RlxyXG5jb25zdCB3ZWNoYXRJbmZvID0gYFxyXG4tLS1cclxuXHJcbiMjIFx1NTE3M1x1NkNFOFx1NjIxMVx1NEVFQ1xyXG5cclxuXHU1OTgyXHU2NzlDXHU2MEE4XHU1NTlDXHU2QjIyXHU4RkQ5XHU3QkM3XHU2NTg3XHU3QUUwXHVGRjBDXHU2QjIyXHU4RkNFXHU1MTczXHU2Q0U4XHU2MjExXHU0RUVDXHU3Njg0XHU1MTZDXHU0RjE3XHU1M0Y3XHU4M0I3XHU1M0Q2XHU2NkY0XHU1OTFBXHU3Q0JFXHU1RjY5XHU1MTg1XHU1QkI5XHVGRjAxXHJcblxyXG4hW1x1NTE2Q1x1NEYxN1x1NTNGN1x1NEU4Q1x1N0VGNFx1NzgwMV0oJHttZXRhRGF0YS53ZWNoYXRJbmZvLnFyY29kZX0pXHJcblxyXG4qKlx1NTE2Q1x1NEYxN1x1NTNGN1x1NTQwRFx1NzlGMFx1RkYxQSR7bWV0YURhdGEud2VjaGF0SW5mby5xcmNvZGVUaXRsZX0qKlxyXG5cclxuXHU2QkNGXHU1NDY4XHU2NkY0XHU2NUIwSmF2YVx1MzAwMVx1NTI0RFx1N0FFRlx1MzAwMVx1NjdCNlx1Njc4NFx1OEJCRVx1OEJBMVx1N0I0OVx1NjI4MFx1NjcyRlx1NjU4N1x1N0FFMFx1RkYwQ1x1NTJBOVx1NTI5Qlx1NjBBOFx1NzY4NFx1NjI4MFx1NjcyRlx1NjIxMFx1OTU3Rlx1RkYwMVxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIFx1NTkwNFx1NzQwNm1hcmtkb3duXHU2NTg3XHU0RUY2XHVGRjBDXHU1NzI4XHU2NTg3XHU0RUY2XHU2NzJCXHU1QzNFXHU2REZCXHU1MkEwXHU1MTZDXHU0RjE3XHU1M0Y3XHU0RkUxXHU2MDZGXHJcbiAqIEBwYXJhbSBmaWxlUGF0aCBtYXJrZG93blx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kV2VjaGF0SW5mbyhmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFx1OEJGQlx1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuICAgIFxyXG4gICAgLy8gXHU2OEMwXHU2N0U1XHU2NTg3XHU0RUY2XHU2NjJGXHU1NDI2XHU1REYyXHU3RUNGXHU1MzA1XHU1NDJCXHU1MTZDXHU0RjE3XHU1M0Y3XHU0RkUxXHU2MDZGXHJcbiAgICBpZiAoY29udGVudC5pbmNsdWRlcygnXHU1MTczXHU2Q0U4XHU2MjExXHU0RUVDJykgfHwgY29udGVudC5pbmNsdWRlcygnXHU1MTZDXHU0RjE3XHU1M0Y3XHU1NDBEXHU3OUYwXHVGRjFBXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXHU1RTczXHU1M0YwJykpIHtcclxuICAgICAgbG9nKGBcdTY1ODdcdTRFRjZcdTVERjJcdTUzMDVcdTU0MkJcdTUxNkNcdTRGMTdcdTUzRjdcdTRGRTFcdTYwNkZcdUZGMENcdThERjNcdThGQzdcdTU5MDRcdTc0MDY6ICR7ZmlsZVBhdGh9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gXHU1NzI4XHU2NTg3XHU0RUY2XHU2NzJCXHU1QzNFXHU2REZCXHU1MkEwXHU1MTZDXHU0RjE3XHU1M0Y3XHU0RkUxXHU2MDZGXHJcbiAgICBjb25zdCBuZXdDb250ZW50ID0gY29udGVudCArIHdlY2hhdEluZm87XHJcbiAgICBcclxuICAgIC8vIFx1NTE5OVx1NTE2NVx1NjU4N1x1NEVGNlxyXG4gICAgYXdhaXQgZnMucHJvbWlzZXMud3JpdGVGaWxlKGZpbGVQYXRoLCBuZXdDb250ZW50LCAndXRmLTgnKTtcclxuICAgIGxvZyhgXHU2MjEwXHU1MjlGXHU2REZCXHU1MkEwXHU1MTZDXHU0RjE3XHU1M0Y3XHU0RkUxXHU2MDZGOiAke2ZpbGVQYXRofWApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2coYFx1NTkwNFx1NzQwNlx1NjU4N1x1NEVGNlx1NTkzMVx1OEQyNTogJHtmaWxlUGF0aH1gLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzI4XHU2Nzg0XHU1RUZBXHU1MjREXHU1OTA0XHU3NDA2XHU2MjQwXHU2NzA5bWFya2Rvd25cdTY1ODdcdTRFRjZcclxuICogQHBhcmFtIGNvbmZpZyBWaXRlUHJlc3NcdTdBRDlcdTcwQjlcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFuc2Zvcm1NYXJrZG93bkZpbGVzKGNvbmZpZzogU2l0ZUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGxvZygnXHU1RjAwXHU1OUNCXHU1OTA0XHU3NDA2bWFya2Rvd25cdTY1ODdcdTRFRjZcdUZGMENcdTZERkJcdTUyQTBcdTUxNkNcdTRGMTdcdTUzRjdcdTRGRTFcdTYwNkY6JywgbmV3IERhdGUoKSk7XHJcbiAgXHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5bWFya2Rvd25cdTY1ODdcdTRFRjZcdThERUZcdTVGODRcclxuICBjb25zdCBzcmNEaXIgPSBjb25maWcuc3JjRGlyO1xyXG4gIGNvbnN0IG1hcmtkb3duRmlsZXMgPSBhd2FpdCBnbG9iKFsnKiovKi5tZCcsICchbm9kZV9tb2R1bGVzJywgJyEudml0ZXByZXNzJ10sIHtcclxuICAgIGN3ZDogc3JjRGlyLFxyXG4gICAgYWJzb2x1dGU6IHRydWUsXHJcbiAgfSk7XHJcbiAgXHJcbiAgbG9nKGBcdTYyN0VcdTUyMzAke21hcmtkb3duRmlsZXMubGVuZ3RofVx1NEUyQW1hcmtkb3duXHU2NTg3XHU0RUY2YCk7XHJcbiAgXHJcbiAgLy8gXHU1OTA0XHU3NDA2XHU2QkNGXHU0RTJBbWFya2Rvd25cdTY1ODdcdTRFRjZcclxuICBjb25zdCBwcm9taXNlcyA9IG1hcmtkb3duRmlsZXMubWFwKGZpbGUgPT4gYXBwZW5kV2VjaGF0SW5mbyhmaWxlKSk7XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIFxyXG4gIGxvZygnbWFya2Rvd25cdTY1ODdcdTRFRjZcdTU5MDRcdTc0MDZcdTVCOENcdTYyMTBcdUZGMENcdTVERjJcdTZERkJcdTUyQTBcdTUxNkNcdTRGMTdcdTUzRjdcdTRGRTFcdTYwNkYnKTtcclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcSmF2YUNvZGVcXFxcSEJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxKYXZhQ29kZVxcXFxIQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdXRpbHNcXFxcZnJvbnRtYXR0ZXItdHJhbnNmb3JtLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9KYXZhQ29kZS9IQmxvZy9kb2NzLy52aXRlcHJlc3MvdXRpbHMvZnJvbnRtYXR0ZXItdHJhbnNmb3JtLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeWFtbCBmcm9tIFwianMteWFtbFwiO1xyXG5pbXBvcnQgeyB0eXBlIFNpdGVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCB7IG1ldGFEYXRhIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XHJcblxyXG4vLyBmcm9udG1hdHRlclx1NUZDNVx1OTcwMFx1NUI1N1x1NkJCNVxyXG5jb25zdCByZXF1aXJlZEZpZWxkcyA9IHtcclxuICB0aXRsZTogdHJ1ZSwgICAgICAgLy8gXHU2ODA3XHU5ODk4XHJcbiAgZGVzY3JpcHRpb246IHRydWUsIC8vIFx1NjNDRlx1OEZGMFxyXG4gIGRhdGU6IHRydWUsICAgICAgICAvLyBcdTY1RTVcdTY3MUZcclxuICBhdXRob3I6IHRydWUsICAgICAgLy8gXHU0RjVDXHU4MDA1XHJcbiAgc2hvd0FjY2Vzc051bWJlcjogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU4QkJGXHU5NUVFXHU2NTcwXHU5MUNGXHJcbiAgY2F0ZWdvcmllczogZmFsc2UsIC8vIFx1NTIwNlx1N0M3Qlx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVxyXG4gIHRhZ3M6IGZhbHNlICAgICAgICAvLyBcdTY4MDdcdTdCN0VcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTkwMTJcdTVGNTJcdTgzQjdcdTUzRDZcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDltYXJrZG93blx1NjU4N1x1NEVGNlxyXG4gKiBAcGFyYW0gZGlyIFx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG4gKiBAcGFyYW0gZmlsZXMgXHU2NTg3XHU0RUY2XHU1MjE3XHU4ODY4XHJcbiAqIEByZXR1cm5zIG1hcmtkb3duXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XHU2NTcwXHU3RUM0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNYXJrZG93bkZpbGVzKGRpcjogc3RyaW5nLCBmaWxlczogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcclxuICBjb25zdCBpdGVtcyA9IGZzLnJlYWRkaXJTeW5jKGRpcik7XHJcbiAgXHJcbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihkaXIsIGl0ZW0pO1xyXG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZ1bGxQYXRoKTtcclxuICAgIFxyXG4gICAgLy8gXHU2MzkyXHU5NjY0bm9kZV9tb2R1bGVzXHU1NDhDLnZpdGVwcmVzc1x1NzZFRVx1NUY1NVxyXG4gICAgaWYgKGl0ZW0gPT09ICdub2RlX21vZHVsZXMnIHx8IGl0ZW0gPT09ICcudml0ZXByZXNzJykge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAvLyBcdTkwMTJcdTVGNTJcdTU5MDRcdTc0MDZcdTVCNTBcdTc2RUVcdTVGNTVcclxuICAgICAgZ2V0TWFya2Rvd25GaWxlcyhmdWxsUGF0aCwgZmlsZXMpO1xyXG4gICAgfSBlbHNlIGlmIChwYXRoLmV4dG5hbWUoaXRlbSkgPT09ICcubWQnKSB7XHJcbiAgICAgIC8vIFx1NjUzNlx1OTZDNm1hcmtkb3duXHU2NTg3XHU0RUY2XHJcbiAgICAgIGZpbGVzLnB1c2goZnVsbFBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZmlsZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU5MDRcdTc0MDZtYXJrZG93blx1NjU4N1x1NEVGNlx1RkYwQ1x1ODg2NVx1NTE0NVx1N0YzQVx1NTkzMVx1NzY4NGZyb250bWF0dGVyXHU0RkUxXHU2MDZGXHJcbiAqIEBwYXJhbSBmaWxlUGF0aCBtYXJrZG93blx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kRnJvbnRtYXR0ZXIoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBcdThCRkJcdTUzRDZcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICBcclxuICAgIC8vIFx1OTAxQVx1OEZDN1x1NkI2M1x1NTIxOVx1ODNCN1x1NTNENmZyb250bWF0dGVyXHU1MTg1XHU1QkI5XHJcbiAgICBjb25zdCByZSA9IC8tLS0oLio/KS0tLS9zZztcclxuICAgIGNvbnN0IGZyb250bWF0dGVyTWF0Y2ggPSByZS5leGVjKGNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICBsZXQgZnJvbnRtYXR0ZXI6IGFueSA9IHt9O1xyXG4gICAgbGV0IHJlc3RDb250ZW50ID0gY29udGVudDtcclxuICAgIFxyXG4gICAgLy8gXHU1OTgyXHU2NzlDXHU1QjU4XHU1NzI4ZnJvbnRtYXR0ZXJcdTUxODVcdTVCQjlcdUZGMENcdTg5RTNcdTY3OTBcdTVCODNcclxuICAgIGlmIChmcm9udG1hdHRlck1hdGNoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZnJvbnRtYXR0ZXIgPSB5YW1sLmxvYWQoZnJvbnRtYXR0ZXJNYXRjaFsxXSk7XHJcbiAgICAgICAgLy8gXHU4M0I3XHU1M0Q2ZnJvbnRtYXR0ZXJcdTRFNEJcdTU0MEVcdTc2ODRcdTUxODVcdTVCQjlcclxuICAgICAgICByZXN0Q29udGVudCA9IGNvbnRlbnQuc2xpY2UoZnJvbnRtYXR0ZXJNYXRjaFswXS5sZW5ndGgpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nKGBcdTg5RTNcdTY3OTBmcm9udG1hdHRlclx1NTkzMVx1OEQyNTogJHtmaWxlUGF0aH1gLCBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBcdTY1ODdcdTRFRjZcdTU0MERcdUZGMDhcdTRFMERcdTU0MkJcdTYyNjlcdTVDNTVcdTU0MERcdUZGMDlcdTRGNUNcdTRFM0FcdTlFRDhcdThCQTRcdTY4MDdcdTk4OThcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCwgJy5tZCcpO1xyXG4gICAgXHJcbiAgICAvLyBcdTg4NjVcdTUxNDVcdTdGM0FcdTU5MzFcdTc2ODRmcm9udG1hdHRlclx1NUI1N1x1NkJCNVxyXG4gICAgbGV0IGlzVXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAvLyBcdTY4MDdcdTk4OThcclxuICAgIGlmICghZnJvbnRtYXR0ZXIudGl0bGUpIHtcclxuICAgICAgZnJvbnRtYXR0ZXIudGl0bGUgPSBmaWxlTmFtZTtcclxuICAgICAgaXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gXHU2M0NGXHU4RkYwXHVGRjA4XHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU2M0NGXHU4RkYwXHVGRjBDXHU0RjdGXHU3NTI4XHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XHU3Njg0XHU1MjREMTAwXHU0RTJBXHU1QjU3XHU3QjI2XHU0RjVDXHU0RTNBXHU2M0NGXHU4RkYwXHVGRjA5XHJcbiAgICBpZiAoIWZyb250bWF0dGVyLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIC8vIFx1NjNEMFx1NTNENlx1NkI2M1x1NjU4N1x1NTE4NVx1NUJCOVx1NzY4NFx1N0IyQ1x1NEUwMFx1NkJCNVx1NEY1Q1x1NEUzQVx1NjNDRlx1OEZGMFxyXG4gICAgICBjb25zdCBmaXJzdFBhcmFncmFwaCA9IHJlc3RDb250ZW50LnRyaW0oKS5zcGxpdCgnXFxuXFxuJylbMF07XHJcbiAgICAgIC8vIFx1NzlGQlx1OTY2NE1hcmtkb3duXHU2ODA3XHU4QkIwXHJcbiAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGZpcnN0UGFyYWdyYXBoLnJlcGxhY2UoLyMrXFxzfFxcKlxcKnxcXCp8YHxcXFsuKj9cXF1cXCguKj9cXCkvZywgJycpO1xyXG4gICAgICBmcm9udG1hdHRlci5kZXNjcmlwdGlvbiA9IHBsYWluVGV4dC5zbGljZSgwLCAxNTApLnRyaW0oKTtcclxuICAgICAgaXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gXHU2NUU1XHU2NzFGXHJcbiAgICBpZiAoIWZyb250bWF0dGVyLmRhdGUpIHtcclxuICAgICAgLy8gXHU0RjdGXHU3NTI4XHU2NTg3XHU0RUY2XHU3Njg0XHU0RkVFXHU2NTM5XHU2NUY2XHU5NUY0XHJcbiAgICAgIGNvbnN0IHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xyXG4gICAgICBmcm9udG1hdHRlci5kYXRlID0gc3RhdHMubXRpbWUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgaXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gXHU0RjVDXHU4MDA1XHJcbiAgICBpZiAoIWZyb250bWF0dGVyLmF1dGhvcikge1xyXG4gICAgICBmcm9udG1hdHRlci5hdXRob3IgPSBtZXRhRGF0YS5mZWVkQ29uZmlnLmF1dGhvcjtcclxuICAgICAgaXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gXHU4QkJGXHU5NUVFXHU2NTcwXHU5MUNGXHU2NjNFXHU3OTNBXHJcbiAgICBpZiAoZnJvbnRtYXR0ZXIuc2hvd0FjY2Vzc051bWJlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZyb250bWF0dGVyLnNob3dBY2Nlc3NOdW1iZXIgPSB0cnVlO1xyXG4gICAgICBpc1VwZGF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBcdTUyMDZcdTdDN0JcdTU0OENcdTY4MDdcdTdCN0VcdUZGMDhcdTU5ODJcdTY3OUNcdTk3MDBcdTg5ODFcdTc2ODRcdThCRERcdUZGMDlcclxuICAgIGlmICghZnJvbnRtYXR0ZXIuY2F0ZWdvcmllcyAmJiAhZnJvbnRtYXR0ZXIuY2F0ZWdvcnkpIHtcclxuICAgICAgZnJvbnRtYXR0ZXIuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICBpc1VwZGF0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChmcm9udG1hdHRlci5jYXRlZ29yeSAmJiAhZnJvbnRtYXR0ZXIuY2F0ZWdvcmllcykge1xyXG4gICAgICAvLyBcdTUxN0NcdTVCQjlcdTU5MDRcdTc0MDZcdUZGMUFcdTY3MDlcdTRFOUJcdTY1ODdcdTRFRjZcdTRGN0ZcdTc1MjhjYXRlZ29yeVx1ODAwQ1x1NEUwRFx1NjYyRmNhdGVnb3JpZXNcclxuICAgICAgZnJvbnRtYXR0ZXIuY2F0ZWdvcmllcyA9IGZyb250bWF0dGVyLmNhdGVnb3J5O1xyXG4gICAgICBkZWxldGUgZnJvbnRtYXR0ZXIuY2F0ZWdvcnk7XHJcbiAgICAgIGlzVXBkYXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghZnJvbnRtYXR0ZXIudGFncykge1xyXG4gICAgICBmcm9udG1hdHRlci50YWdzID0gW107XHJcbiAgICAgIGlzVXBkYXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NjcwOVx1NjZGNFx1NjVCMFx1RkYwQ1x1OTFDRFx1NTE5OVx1NjU4N1x1NEVGNlxyXG4gICAgaWYgKGlzVXBkYXRlZCkge1xyXG4gICAgICAvLyBcdTVDMDZmcm9udG1hdHRlclx1OEY2Q1x1NjM2Mlx1NEUzQVlBTUxcdTY4M0NcdTVGMEZcclxuICAgICAgY29uc3QgbmV3RnJvbnRtYXR0ZXIgPSBgLS0tXFxuJHt5YW1sLmR1bXAoZnJvbnRtYXR0ZXIpfS0tLVxcbmA7XHJcbiAgICAgIFxyXG4gICAgICAvLyBcdTdFQzRcdTU0MDhcdTY1QjBcdTc2ODRcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcclxuICAgICAgY29uc3QgbmV3Q29udGVudCA9IGZyb250bWF0dGVyTWF0Y2ggXHJcbiAgICAgICAgPyBjb250ZW50LnJlcGxhY2UoZnJvbnRtYXR0ZXJNYXRjaFswXSwgbmV3RnJvbnRtYXR0ZXIpIFxyXG4gICAgICAgIDogbmV3RnJvbnRtYXR0ZXIgKyBjb250ZW50O1xyXG4gICAgICBcclxuICAgICAgLy8gXHU1MTk5XHU1MTY1XHU2NTg3XHU0RUY2XHJcbiAgICAgIGF3YWl0IGZzLnByb21pc2VzLndyaXRlRmlsZShmaWxlUGF0aCwgbmV3Q29udGVudCwgJ3V0Zi04Jyk7XHJcbiAgICAgIC8vIGxvZyhgXHU2MjEwXHU1MjlGXHU2NkY0XHU2NUIwZnJvbnRtYXR0ZXJcdTRGRTFcdTYwNkY6ICR7ZmlsZVBhdGh9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBsb2coYFx1NjVFMFx1OTcwMFx1NjZGNFx1NjVCMGZyb250bWF0dGVyOiAke2ZpbGVQYXRofWApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2coYFx1NTkwNFx1NzQwNlx1NjU4N1x1NEVGNlx1NTkzMVx1OEQyNTogJHtmaWxlUGF0aH1gLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzI4XHU2Nzg0XHU1RUZBXHU1MjREXHU1OTA0XHU3NDA2XHU2MjQwXHU2NzA5bWFya2Rvd25cdTY1ODdcdTRFRjZcdTc2ODRmcm9udG1hdHRlclxyXG4gKiBAcGFyYW0gY29uZmlnIFZpdGVQcmVzc1x1N0FEOVx1NzBCOVx1OTE0RFx1N0Y2RVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zZm9ybUZyb250bWF0dGVyKGNvbmZpZzogU2l0ZUNvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGxvZygnXHU1RjAwXHU1OUNCXHU1OTA0XHU3NDA2bWFya2Rvd25cdTY1ODdcdTRFRjZcdUZGMENcdTg4NjVcdTUxNDVmcm9udG1hdHRlclx1NEZFMVx1NjA2RjonLCBuZXcgRGF0ZSgpKTtcclxuICBcclxuICAvLyBcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDltYXJrZG93blx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gIGNvbnN0IHNyY0RpciA9IGNvbmZpZy5zcmNEaXI7XHJcbiAgXHJcbiAgLy8gXHU0RjdGXHU3NTI4XHU5MDEyXHU1RjUyXHU2NUI5XHU1RjBGXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5bWFya2Rvd25cdTY1ODdcdTRFRjZcclxuICBjb25zdCBtYXJrZG93bkZpbGVzID0gZ2V0TWFya2Rvd25GaWxlcyhzcmNEaXIpO1xyXG4gIGxvZyhgXHU2MjdFXHU1MjMwJHttYXJrZG93bkZpbGVzLmxlbmd0aH1cdTRFMkFtYXJrZG93blx1NjU4N1x1NEVGNmApO1xyXG4gIFxyXG4gIC8vIFx1NTkwNFx1NzQwNlx1NkJDRlx1NEUyQW1hcmtkb3duXHU2NTg3XHU0RUY2XHJcbiAgY29uc3QgcHJvbWlzZXMgPSBtYXJrZG93bkZpbGVzLm1hcChmaWxlID0+IGFwcGVuZEZyb250bWF0dGVyKGZpbGUpKTtcclxuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgXHJcbiAgbG9nKCdtYXJrZG93blx1NjU4N1x1NEVGNlx1NTkwNFx1NzQwNlx1NUI4Q1x1NjIxMFx1RkYwQ1x1NURGMlx1ODg2NVx1NTE0NWZyb250bWF0dGVyXHU0RkUxXHU2MDZGJyk7XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVSLFNBQVMsb0JBQW9COzs7QUNBRixJQUFNLFNBQVM7QUFDalUsSUFBTSxRQUFRO0FBQ2QsSUFBTSxjQUFjO0FBQ3BCLElBQU0sT0FBTztBQUNiLElBQU0sV0FBVztBQUNqQixJQUFNLFlBQVk7QUFFbEIsSUFBTSxRQUFRO0FBQ2QsSUFBTSxPQUFPO0FBQ2IsSUFBTSxVQUFVO0FBQ2hCLElBQU0sT0FBTztBQUdiLElBQU0sUUFBUTtBQUNkLElBQU0sT0FBTztBQUdiLElBQU0sYUFBYTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsbUJBQW1CO0FBQ3ZCO0FBRU8sSUFBTSxXQUFXO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUEsWUFBWTtBQUFBO0FBQUEsSUFFUixjQUFjO0FBQUEsSUFDZDtBQUFBLElBQ0EsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFDSjs7O0FDdkRBLElBQU0sYUFBYTtBQUFBLEVBQ2YsTUFBTSxTQUFTO0FBQUE7QUFBQSxFQUVmLE9BQU87QUFBQTtBQUFBLEVBR1AsV0FBVztBQUFBLEVBQ1gsYUFBYSxTQUFTO0FBQUE7QUFBQSxFQUd0QixXQUFXO0FBQUE7QUFBQSxFQUdYLGFBQWE7QUFBQTtBQUFBLEVBR2Is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R0FBR0QsTUFBSyxRQUFRQyxtQ0FBVywrQkFBK0IsQ0FBQztBQUkzRyxJQUFPLGlCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRzFCO0FBQUE7QUFBQSxFQUdBLEdBQUc7QUFBQTtBQUFBLEVBR0g7QUFBQTtBQUFBLEVBR0EsVUFBVTtBQUFBO0FBQUEsRUFHVixVQUFVO0FBQUE7QUFBQSxFQUdWLFNBQVM7QUFBQSxJQUNQO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxFQUNKO0FBRUEsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCIsICJwYXRoIiwgInBhdGgiLCAicGF0aCIsICJob3N0bmFtZSIsICJ0aXRsZSIsICJkZXNjcmlwdGlvbiIsICJwYXRoIiwgIndlY2hhdEluZm8iLCAicGF0aCIsICJmcyIsICJ5YW1sIiwgImxvZyIsICJmcyIsICJwYXRoIiwgInJlIiwgInlhbWwiLCAibG9nIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
