type Post = {
    frontMatter: {
        date: string
        title: string
        categories: string
        tags: string[]
        description: string
    }
    regularPath: string
}


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

export function initCategory(post: Post[]) {
    const data: any = {}
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        const category = element.frontMatter.categories
        if (category) {
            if (data[category]) {
                data[category].push(element)
            } else {
                data[category] = []
                data[category].push(element)
            }
        }
    }
    return data
}

export function useYearSort(post: Post[]) {
    const data = []
    let year = '0'
    let num = -1
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        if (element.frontMatter.date) {
            const y = element.frontMatter.date.split('-')[0]
            if (y === year) {
                data[num].push(element)
            } else {
                num++
                data[num] = [] as any
                data[num].push(element)
                year = y
            }
        }
    }
    return data
}