import path from "path";
import fs from "fs";
// 修改glob的导入方式，解决CommonJS模块导入问题
import pkg from "glob";
const { glob } = pkg;
import { type SiteConfig } from "vitepress";
import { log } from "console";
import yaml from "js-yaml";
import { metaData } from '../config/constants';

// frontmatter必需字段
const requiredFields = {
  title: true,       // 标题
  description: true, // 描述
  date: true,        // 日期
  author: true,      // 作者
  showAccessNumber: true, // 显示访问数量
  categories: false, // 分类（可选）
  tags: false        // 标签（可选）
};

/**
 * 处理markdown文件，补充缺失的frontmatter信息
 * @param filePath markdown文件路径
 */
async function appendFrontmatter(filePath: string): Promise<void> {
  try {
    // 读取文件内容
    const content = await fs.promises.readFile(filePath, 'utf-8');
    
    // 通过正则获取frontmatter内容
    const re = /---(.*?)---/sg;
    const frontmatterMatch = re.exec(content);
    
    let frontmatter: any = {};
    let restContent = content;
    
    // 如果存在frontmatter内容，解析它
    if (frontmatterMatch) {
      try {
        frontmatter = yaml.load(frontmatterMatch[1]);
        // 获取frontmatter之后的内容
        restContent = content.slice(frontmatterMatch[0].length);
      } catch (e) {
        log(`解析frontmatter失败: ${filePath}`, e);
      }
    }
    
    // 文件名（不含扩展名）作为默认标题
    const fileName = path.basename(filePath, '.md');
    
    // 补充缺失的frontmatter字段
    let isUpdated = false;
    
    // 标题
    if (!frontmatter.title) {
      frontmatter.title = fileName;
      isUpdated = true;
    }
    
    // 描述（如果没有描述，使用文件内容的前100个字符作为描述）
    if (!frontmatter.description) {
      // 提取正文内容的第一段作为描述
      const firstParagraph = restContent.trim().split('\n\n')[0];
      // 移除Markdown标记
      const plainText = firstParagraph.replace(/#+\s|\*\*|\*|`|\[.*?\]\(.*?\)/g, '');
      frontmatter.description = plainText.slice(0, 150).trim();
      isUpdated = true;
    }
    
    // 日期
    if (!frontmatter.date) {
      // 使用文件的修改时间
      const stats = fs.statSync(filePath);
      frontmatter.date = stats.mtime.toLocaleString();
      isUpdated = true;
    }
    
    // 作者
    if (!frontmatter.author) {
      frontmatter.author = metaData.feedConfig.author
      isUpdated = true;
    }
    
    // 访问数量显示
    if (frontmatter.showAccessNumber === undefined) {
      frontmatter.showAccessNumber = true;
      isUpdated = true;
    }
    
    // 分类和标签（如果需要的话）
    if (!frontmatter.categories && !frontmatter.category) {
      frontmatter.categories = [];
      isUpdated = true;
    } else if (frontmatter.category && !frontmatter.categories) {
      // 兼容处理：有些文件使用category而不是categories
      frontmatter.categories = frontmatter.category;
      delete frontmatter.category;
      isUpdated = true;
    }
    
    if (!frontmatter.tags) {
      frontmatter.tags = [];
      isUpdated = true;
    }
    
    // 如果有更新，重写文件
    if (isUpdated) {
      // 将frontmatter转换为YAML格式
      const newFrontmatter = `---\n${yaml.dump(frontmatter)}---\n`;
      
      // 组合新的文件内容
      const newContent = frontmatterMatch 
        ? content.replace(frontmatterMatch[0], newFrontmatter) 
        : newFrontmatter + content;
      
      // 写入文件
      await fs.promises.writeFile(filePath, newContent, 'utf-8');
      log(`成功更新frontmatter信息: ${filePath}`);
    } else {
      log(`无需更新frontmatter: ${filePath}`);
    }
  } catch (error) {
    log(`处理文件失败: ${filePath}`, error);
  }
}

/**
 * 在构建前处理所有markdown文件的frontmatter
 * @param config VitePress站点配置
 */
export async function transformFrontmatter(config: SiteConfig): Promise<void> {
  log('开始处理markdown文件，补充frontmatter信息:', new Date());
  
  // 获取所有markdown文件路径
  const srcDir = config.srcDir;
  const markdownFiles = await glob(['**/*.md', '!node_modules', '!.vitepress'], {
    cwd: srcDir,
    absolute: true,
  });
  
  log(`找到${markdownFiles.length}个markdown文件`);
  
  // 处理每个markdown文件
  const promises = markdownFiles.map(file => appendFrontmatter(file));
  await Promise.all(promises);
  
  log('markdown文件处理完成，已补充frontmatter信息');
}