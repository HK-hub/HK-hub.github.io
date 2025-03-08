import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";
import { metaData } from "../config/constants";
import { log } from "console";
import dayjs from "dayjs";

const hostname = metaData.feedConfig.hostname;

export async function createRssFile(config: SiteConfig) {
	const feed = new Feed({
		title: metaData.title,
		description: metaData.feedConfig.description,
		id:  hostname,
		link: hostname,
		language: metaData.feedConfig.language,
		image: metaData.feedConfig.image,
		favicon: metaData.feedConfig.favicon,
		copyright: metaData.feedConfig.copyright,
	});
 
	const posts = await createContentLoader('document/**/*.md', {
		excerpt: true,
		render: true,
	}).load();

    log('开始生成RSS文件:', new Date())
    log('文章总数：', posts.length)

    // 按发布日期排序
    posts.sort((a, b) => Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date)))

    // 处理文章frontmatter，补充缺失信息
    function processPostFrontmatter(post) {
        const url = post?.url;
        const excerpt = post?.excerpt;
        const html = post?.html;
        let frontmatter = post.frontmatter || {};
        
        // 提取文件名作为备用标题
        let fileName = url.split('/').pop();
        if(!fileName) {
            fileName = 'index';
        }
        
        // 补充标题信息
        if (!frontmatter.title) {
            // 尝试从HTML内容中提取h1标签作为标题
            let titleFromContent = '';
            if (html) {
                const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
                if (h1Match && h1Match[1]) {
                    titleFromContent = h1Match[1].trim();
                }
            }
            frontmatter.title = titleFromContent || fileName;
        }
        
        // 补充日期信息
        if (!frontmatter.date) {
            // 使用当前日期
            frontmatter.date = dayjs().format('YYYY-MM-DD');
        }
        
        // 补充描述信息
        if (!frontmatter.description) {
            frontmatter.description = excerpt || 
                (html ? html.replace(/<[^>]+>/g, '').substring(0, 200) + '...' : '') || 
                metaData.feedConfig.description;
        }
        
        // 补充作者信息
        if (!frontmatter.author) {
            frontmatter.author = metaData.feedConfig.author;
        }
        
        // 补充封面图片
        if (!frontmatter.cover) {
            // 尝试从内容中提取第一张图片
            let coverFromContent = '';
            if (html) {
                const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/);
                if (imgMatch && imgMatch[1]) {
                    // 确保图片URL是绝对路径
                    const imgSrc = imgMatch[1];
                    if (imgSrc.startsWith('http')) {
                        coverFromContent = imgSrc;
                    } else if (imgSrc.startsWith('./') || imgSrc.startsWith('../') || imgSrc.startsWith('/')) {
                        // 相对路径转为绝对路径
                        coverFromContent = `${metaData.hostname}${imgSrc.replace(/^\.\//g, '/')}`;
                    }
                }
            }
            frontmatter.cover = coverFromContent || metaData.feedConfig.image;
        }
        
        return {
            url,
            excerpt,
            html,
            frontmatter
        };
    }
    
    // 生成feed item
	for (const post of posts) {
        // 仅保留最近篇数限制的文章
        if(feed.items.length >= metaData.feedConfig.feedDocLimit) {
            break;
        }
        
        // 处理并补充文章frontmatter
        const processedPost = processPostFrontmatter(post);
        const { url, excerpt, html, frontmatter } = processedPost;
        
        // 使用处理后的frontmatter信息
        const title = frontmatter.title;
        // 描述
        const description = excerpt || frontmatter.description || metaData.feedConfig.description;
        // 文章日期 - 确保是Date对象
        const date = new Date(frontmatter.date);
        // 文章封面
        const cover = frontmatter.cover || ''
        
        // 创建feed item对象
        const feedItem = {
            title,
            id: `${hostname}${url}`,
            link: `${hostname}${url}`,
            description: description,
            content: html,
            author: [
                {
                    name: frontmatter.author || metaData.feedConfig.author,
                    email: metaData.feedConfig.email,
                    link: metaData.feedConfig.link,
                },
            ],
            date: date,
        };
        
        // 只有当cover不为空时才添加image属性
        if (cover && cover.trim() !== '') {
            (feedItem as any).image = cover;
        }
        
        feed.addItem(feedItem);
        log('添加RSS条目成功:', title);
	}

    // 写入文件
    log('写入Feed.xml文件：', path.join(config.outDir, "feed.xml"))
	writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}

