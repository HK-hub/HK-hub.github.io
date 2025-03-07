// 读取markdown 文件frontmatter内容统一配置
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// 读取 frontmatter 内容
const re = /---(.*?)---/sg
const out = []

// 读取所有文件
function readAll(parentPath) {

    // 读取目录下文件和文件夹，非递归
    const files = fs.readdirSync(parentPath)
    // console.log(files.toString());

    files.map(item => {

        // console.log('file=', item);
        // 获取当前文件路径
        let tempPath = path.join(parentPath, item); //当前文件或文件夹的路径
        //判断是文件还是文件夹
        let stats = fs.statSync(tempPath); 
        if(stats.isDirectory()) {
            // 文件夹递归处理
            readAll(tempPath);
        } else {
            // 文件
            let ext = path.extname(tempPath);
            if(ext === '.md' || ext === '.MD') {
                // 读取文件内容
                const content = fs.readFileSync(tempPath, 'utf-8');
                // 通过正则获取frontmatter内容
                const frontmatter = re.exec(content)
                // 这里如果不操作，在后面正则判断时会有问题，当时在这里卡了很久
                re.lastIndex = 0
                
                // 如果存在frontmatter内容
                if(frontmatter) {
                    // 解析frontmatter内容
                    const docs = yaml.load(frontmatter[1]);
                    // console.log('docs:', docs)
                    // 文章列表的跳转
                    docs.link = tempPath.split("docs")[1].replace(".md", "")
                    // 文章列表的标题
                    docs.title = docs.title ? docs.title : item.replace(".md", "")
                    // 文章的修改时间
                    docs.date = docs.date? docs.date : stats.mtime.toLocaleString()
                    // 访问数量
                    docs.showAccessNumber = true
                    // 文章的作者
                    docs.author = docs.author? docs.author : 'HK意境'
                    // 文章的摘要
                    docs.summary = docs.summary? docs.summary : content.slice(0, 100)
                    // 文章的分类
                    out.push(docs)
                } else {
                    out.push({
                        title: item.replace(".md", ""),
                        author: 'HK意境',
                        date: stats.mtime.toLocaleString(),
                        link: tempPath.split("docs")[1].replace(".md", ""),
                        showAccessNumber: true,
                        summary: content.slice(0, 100),
                        categories: [],
                        tags: []
                    })
                }
            }
        }
    })
}

// 读取markdown头信息保存为json
function readToJson(parentPath, jsonPath) {
    readAll(parentPath)
    fs.writeFileSync(jsonPath, 
        JSON.stringify(out),
        {encoding: 'utf8'}
    )
    return out
}


export default readToJson
