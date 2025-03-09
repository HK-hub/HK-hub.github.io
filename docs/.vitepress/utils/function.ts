type Post = {
    frontMatter: {
        date: string
        title: string
        categories: string[]
        tags: string[]
        description: string
    }
    regularPath: string
}

// 初始化标签数据
export function initTags(posts) {
    const data: any = {}
    for (let index = 0; index < posts.length; index++) {
        const element = posts[index]
        const tags = element.frontMatter.tags
        if (tags) {
            tags.forEach((item) => {
                if (data[item]) {
                    data[item].push(element)
                } else {
                    data[item] = []
                    data[item].push(element)
                }
            })
        }
    }

    // 按date逆序排序
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key]
            element.sort((a, b) => {
                return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
            })
        }
    }
    return data
}

// 初始化分类数据
export function initCategory(posts) {
    const data: any = {}
    for (let index = 0; index < posts.length; index++) {
        const element = posts[index]
        const categories = element.frontMatter.categories
        if (categories) {
            categories.forEach((item) => {
                if (data[item]) {
                    data[item].push(element)
                } else {
                    data[item] = []
                    data[item].push(element)
                }
            })
        }
    }

    // 按date逆序排序
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key]
            element.sort((a, b) => {
                return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
            })
        }
    }
    return data
}

export function useYearSort(posts) {
    // 首先按日期降序排序所有文章
    posts.sort((a, b) => {
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    })

    const yearMap = new Map<string, Post[]>()
    
    // 遍历排序后的文章进行分组
    posts.forEach(post => {
        if (post.frontMatter.date) {
            const year = new Date(post.frontMatter.date).getFullYear().toString()
            if (!yearMap.has(year)) {
                yearMap.set(year, [])
            }
            yearMap.get(year).push(post)
        }
    })

    // 转换为按年份降序排列的数组
    const result = Array.from(yearMap.entries())
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => ({
            year,
            posts
        }))

    return result
}