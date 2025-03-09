<script setup>
import { useData } from 'vitepress'
import { useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'

const { frontmatter, page } = useData()
const route = useRoute()

// 从页面内容中获取描述信息
const getDescription = (frontmatter, page) => {
  // 优先使用frontmatter中的description
  let description = frontmatter.value.description || frontmatter.value.title
  if (!description && page.value.html) {
    console.log('正在从页面内容提取描述...')
    console.log('页面HTML:', page.value.html)
    // 从HTML内容中提取第一段文字
    const match = page.value.html.match(/<p[^>]*>([^<]+)<\/p>/)
    if (match && match[1]) {
      // 移除HTML标签，只保留文字内容
      description = match[1].replace(/<[^>]+>/g, '').trim()
      console.log('提取到的描述:', description)
    } else {
      console.log('未找到合适的段落作为描述')
    }
  }
  return description
}

// 抽取更新meta标签的逻辑为独立函数
const updateMetaTags = () => {
  // 获取文章标题，优先使用frontmatter中的title，否则使用文件名
  const title = frontmatter.value.title || page.value.title
  // 站点完整URL
  let site = window.location.href
  // 检查URL是否被编码，如果是则解码
  try {
    const decodedSite = decodeURIComponent(site)
    if (decodedSite !== site) {
      site = decodedSite
    }
  } catch (e) {
    console.warn('URL解码失败:', e)
  }

  // 获取描述信息
  const description = getDescription(frontmatter, page)
  
  console.log('文章标题', title)
  console.log('文章站点', site)
  console.log('文章描述', description)

  // 只有在frontmatter中有相应的值时才更新meta标签
  if (title) {
    const metaTitle = document.createElement('meta')
    metaTitle.setAttribute('property', 'og:title')
    metaTitle.setAttribute('content', title)
    
    const existingMetaTitle = document.querySelector('meta[property="og:title"]')
    if (existingMetaTitle) {
      existingMetaTitle.parentNode.replaceChild(metaTitle, existingMetaTitle)
    } else {
      document.head.appendChild(metaTitle)
    }
  }

  if (site) {
    const metaUrl = document.createElement('meta')
    metaUrl.setAttribute('property', 'og:url')
    metaUrl.setAttribute('content', site)
    
    const existingMetaUrl = document.querySelector('meta[property="og:url"]')
    if (existingMetaUrl) {
      existingMetaUrl.parentNode.replaceChild(metaUrl, existingMetaUrl)
    } else {
      document.head.appendChild(metaUrl)
    }
  }

  if (description) {
    const metaDescription = document.createElement('meta')
    metaDescription.setAttribute('property', 'og:description')
    metaDescription.setAttribute('content', description)
    
    const existingMetaDescription = document.querySelector('meta[property="og:description"]')
    if (existingMetaDescription) {
      existingMetaDescription.parentNode.replaceChild(metaDescription, existingMetaDescription)
    } else {
      document.head.appendChild(metaDescription)
    }
  }
}

// 在组件挂载时更新meta标签
onMounted(updateMetaTags)

// 监听路由变化，当路由发生变化时更新meta标签
watch(() => route.path, () => {
  updateMetaTags()
})
</script>

<template>
  <!-- 这是一个功能性组件，不需要渲染任何内容 -->
</template>