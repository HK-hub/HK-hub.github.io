// 侧边导航栏目录
import directoryTree from 'directory-tree';

// 转换为侧边栏选项
function toSidebarOption(tree = []) {
    
    if (!Array.isArray(tree)) return [];

    // console.log('tree=', tree);
    // 遍历
    return tree.map((v) => {
        // 是否存在子路径
        if (v.children) {

            return {
                text: v.name,
                collapsible: true,
                collapsed: true,
                items: toSidebarOption(v.children)
            }
        } else {
            // 不具有子目录了
            return {
                text: v.name.replace(".md", ""),
                link: v.path.split("docs")[1].replace(".md", "")
            }
        }
    })
}

// 通过源码目录自动生成导航栏
function autoGenerateSideBar(documentPath) {

    // 解析传入目录下的指定格式文件
    const markdwonSource = directoryTree(documentPath, {
        extensions: /\.md$/,
        normalizePath: true,
    });

    return toSidebarOption(markdwonSource.children)
}

// 文章侧边栏列表
export default autoGenerateSideBar