// posts.data.js
import { createContentLoader } from 'vitepress'

// 函数返回值类型:ContentData[]
/**
 * interface ContentData {
  // mapped URL for the page. e.g. /posts/hello.html (does not include base)
  // manually iterate or use custom `transform` to normalize the paths
  url: string
  // frontmatter data of the page
  frontmatter: Record<string, any>

  // the following are only present if relevant options are enabled
  // we will discuss them below
  src: string | undefined
  html: string | undefined
  excerpt: string | undefined
}
 */

export default createContentLoader('../document/*.md', /* options */)