// markdown 文件内容统一配置
import fs from 'fs'
import path from 'path'

// 读取所有文件
function readAll(parentPath) {
    const files = fs.readdirSync(parentPath)
    
    console.log(files.toString());
}

export default readAll
