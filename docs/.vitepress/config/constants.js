const author = 'HK意境'
const title = 'HK意境的知识库'
const description = '知识宝库、生活体会、学习历程、人生思考尽在其中';
const site = 'https://blog.geekim.cn';
const hostname = 'https://hk-hub.github.io'
const copyright = 'Copyright (c) 2024-present HK意境'
const image = '../../public/static/logo/logo.png'
const logo = '../../public/static/logo/logo.png'
const favicon = '../../public/static/logo/logo.png'
const lang = 'zh-CN'

// RSS订阅配置
const email = '3161880795@qq.com'
const link = 'https://github.com/HK-hub'

export const metaData = {
    lang,
    locale: 'zh_CN',
    title,
    description,
    site,
    hostname,
    image,
    logo,
    favicon,
    copyright,

    // RSS订阅源配置
    feedConfig: {
        // 最多显示文章数量
        feedDocLimit: 10,
        hostname,
        rss: true,
        atom: true,
        json: true,
        title,
        image,
        logo,
        favicon,
        description,
        author,
        email,
        link,
        language: lang,
        copyright
    }
};


// 使用方式 import { metaData } from './constants';
