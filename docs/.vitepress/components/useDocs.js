import docData from './frontmatter.json'


// 格式化数据
export function useDocs() {

    // 时间倒序显示
    docData.sort((a, b) => new Date(b.date) - new Date(a.date))

    //所有的文章分类
    const categories = {} 
    //所有的文章标签
    const tags = new Set()
    //文章总数
    let docNum = 0
    //标签总数
    let tagNum = 0

    // 统计分类和标签
    docData.map(item => {
        docNum++
        if (item.categories) {
            item.categories.map(c => {
                if (!categories[c]) {
                    categories[c] = 0
                }
                categories[c]++
            })
        }
        if (item.tags) {
            item.tags.map(c => {
                tags.add(c)
            })
        }
    })
    tagNum = tags.size

    return {
        /**
        * docData: 包含所有的文章信息
        * categories: 所有分类
        * tags: 所有标签
        * docNum: 文章总数
        * tagNum: 标签总数
        */
        docData, categories, tags, docNum, tagNum
    }
}
