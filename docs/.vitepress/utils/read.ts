import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { metaData } from '../config/constants.js';

// 定义文章frontmatter的接口
export interface ArticleMeta {
    title: string
    author: string
    date: string
    link: string
    showAccessNumber: boolean
    summary: string
    description: string
    categories?: string[]
    tags?: string[]
    // 允许其他可能的frontmatter字段
    [key: string]: any  
}

// 读取 frontmatter 内容的正则表达式
const frontmatterRegex = /---(.*?)---/sg
const articleList: ArticleMeta[] = []

// 读取所有文件
function readAll(parentPath: string): void {
    // 读取目录下文件和文件夹
    const files = fs.readdirSync(parentPath)

    files.forEach(item => {
        // 获取当前文件路径
        const tempPath = path.join(parentPath, item)
        const stats = fs.statSync(tempPath)

        if (stats.isDirectory()) {
            // 文件夹递归处理
            readAll(tempPath)
        } else {
            // 文件处理
            const ext = path.extname(tempPath).toLowerCase()
            if (ext === '.md') {
                processMarkdownFile(tempPath, item, stats)
            }
        }
    })
}

// 处理单个Markdown文件
function processMarkdownFile(filePath: string, fileName: string, stats: fs.Stats): void {
    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // 通过正则获取frontmatter内容
    const frontmatter = frontmatterRegex.exec(content)
    frontmatterRegex.lastIndex = 0

    const meta: ArticleMeta = frontmatter
        ? processFrontmatter(frontmatter[1], filePath, fileName, content, stats)
        : createDefaultMeta(fileName, filePath, content, stats)

    articleList.push(meta)
}

// 处理frontmatter内容
function processFrontmatter(frontmatterContent: string, filePath: string, fileName: string, content: string, stats: fs.Stats): ArticleMeta {
    const docs = yaml.load(frontmatterContent) as Partial<ArticleMeta>
    
    return {
        title: docs.title || fileName.replace(".md", ""),
        author: docs.author || metaData.author,
        date: docs.date || stats.mtime.toLocaleString(),
        link: filePath.split("docs")[1].replace(".md", ""),
        showAccessNumber: true,
        summary: docs.summary || content.slice(0, 100),
        description: docs.description  || docs.summary || content.slice(0, 100),
        categories: docs.categories || [],
        tags: docs.tags || [],
        ...docs  // 保留其他可能的frontmatter字段
    }
}

// 创建默认的元数据
function createDefaultMeta(fileName: string, filePath: string, content: string, stats: fs.Stats): ArticleMeta {
    return {
        title: fileName.replace(".md", ""),
        author: metaData.author,
        date: stats.mtime.toLocaleString(),
        link: filePath.split("docs")[1].replace(".md", ""),
        showAccessNumber: true,
        summary: content.slice(0, 100),
        description: content.slice(0, 100),
        categories: [],
        tags: []
    }
}

// 读取markdown头信息保存为json
export function readToJson(parentPath: string, jsonPath: string): ArticleMeta[] {
    readAll(parentPath)
    fs.writeFileSync(
        jsonPath, 
        JSON.stringify(articleList),
        { encoding: 'utf8' }
    )
    return articleList
}