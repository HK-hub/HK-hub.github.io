import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";
import { metaData } from "../config/constants";
import { log } from "console";

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

    // 生成feed item
	for (const post of posts) {
        const url = post?.url
        const excerpt = post?.excerpt
        const html = post?.html 

        log('文章url：', post.url)
        
        // 仅保留最近3篇文章
        if(feed.items.length >= metaData.feedConfig.feedDocLimit) {
            break;
        }
        let fileName = url.split('/').pop();
        // 如果fileName为空
        if(!fileName) {
            fileName = 'index';
        }
        // 使用文章的frontmatter.title作为RSS标题，如果不存在则尝试从URL提取
        const title = post?.frontmatter?.title || fileName || ''
        log('文章标题：', title)
        // 描述
        const description = excerpt ||  post?.frontmatter?.description || metaData.feedConfig.description;
        // 文章日期
        const date = post?.frontmatter?.date || new Date()
        
        feed.addItem({
            title,
            id: `${hostname}${url}`,
            link: `${hostname}${url}`,
            description: description,
            content: html,
            author: [
                {
                    name: metaData.feedConfig.author,
                    email: metaData.feedConfig.email,
                    link: metaData.feedConfig.link,
                },
            ],
            date: date
        });
	}

    // 写入文件
    log('写入Feed.xml文件：', path.join(config.outDir, "feed.xml"))
	writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}

