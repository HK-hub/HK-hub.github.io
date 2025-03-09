import docData from '../config/frontmatter.json'
import { ArticleMeta } from './read'

interface DocStats {
    docData: ArticleMeta[]
    categories: Record<string, number>
    tags: Set<string>
    docNum: number
    tagNum: number
}

export interface Post {
    frontMatter: {
        date: string
        title: string
        categories?: string[]
        tags?: string[]
        description: string
    }
    regularPath: string
}

// 格式化数据
export function useDocs(): DocStats {
    // 时间倒序显示
    docData.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

    //所有的文章分类
    const categories: Record<string, number> = {}
    //所有的文章标签
    const tags: Set<string> = new Set()
    //文章总数
    let docNum: number = 0
    //标签总数
    let tagNum: number = 0

    // 统计分类和标签
    docData.forEach((item: ArticleMeta) => {
        docNum++
        if (item.categories) {
            item.categories.forEach(c => {
                if (!categories[c]) {
                    categories[c] = 0
                }
                categories[c]++
            })
        }
        if (item.tags) {
            item.tags.forEach(c => {
                tags.add(c)
            })
        }
    })
    tagNum = tags.size

    return {
        docData,
        categories,
        tags,
        docNum,
        tagNum
    }
}

// 从formatter.json获取文章数据
export function getPosts(): Post[] {
    const posts = docData.map((post: ArticleMeta): Post => ({
        frontMatter: {
            date: post.date,
            title: post.title,
            categories: post.categories,
            tags: post.tags,
            description: post.description || post.summary
        },
        regularPath: post.link
    }))
    return posts
}

