import path from "path";
import fs from "fs";
// 修改glob的导入方式，解决CommonJS模块导入问题
import pkg from "glob";
const { glob } = pkg;
import { type SiteConfig } from "vitepress";
import { log } from "console";
import { metaData } from '../config/constants';

// 公众号信息模板
const wechatInfo = `
---

## 关注我们

如果您喜欢这篇文章，欢迎关注我们的公众号获取更多精彩内容！

![公众号二维码](${metaData.wechatInfo.qrcode})

**公众号名称：${metaData.wechatInfo.qrcodeTitle}**

每周更新Java、前端、架构设计等技术文章，助力您的技术成长！
`;

/**
 * 处理markdown文件，在文件末尾添加公众号信息
 * @param filePath markdown文件路径
 */
async function appendWechatInfo(filePath: string): Promise<void> {
  try {
    // 读取文件内容
    const content = await fs.promises.readFile(filePath, 'utf-8');
    
    // 检查文件是否已经包含公众号信息
    if (content.includes('关注我们') || content.includes('公众号名称：技术分享平台')) {
      log(`文件已包含公众号信息，跳过处理: ${filePath}`);
      return;
    }
    
    // 在文件末尾添加公众号信息
    const newContent = content + wechatInfo;
    
    // 写入文件
    await fs.promises.writeFile(filePath, newContent, 'utf-8');
    log(`成功添加公众号信息: ${filePath}`);
  } catch (error) {
    log(`处理文件失败: ${filePath}`, error);
  }
}

/**
 * 在构建前处理所有markdown文件
 * @param config VitePress站点配置
 */
export async function transformMarkdownFiles(config: SiteConfig): Promise<void> {
  log('开始处理markdown文件，添加公众号信息:', new Date());
  
  // 获取所有markdown文件路径
  const srcDir = config.srcDir;
  const markdownFiles = await glob(['**/*.md', '!node_modules', '!.vitepress'], {
    cwd: srcDir,
    absolute: true,
  });
  
  log(`找到${markdownFiles.length}个markdown文件`);
  
  // 处理每个markdown文件
  const promises = markdownFiles.map(file => appendWechatInfo(file));
  await Promise.all(promises);
  
  log('markdown文件处理完成，已添加公众号信息');
}