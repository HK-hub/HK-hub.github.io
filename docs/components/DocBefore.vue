<script setup lang="js">
import { useData } from 'vitepress'
const { frontmatter } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
    <a v-if="frontmatter.share" :href="frontmatter.link" target="_blank">
        <span class="page-info share-info">⚡ {{ frontmatter.share }}</span>
    </a>
    <span class="page-info author-info">✍️{{ frontmatter.author || 'HK意境' }}</span>
    <span class="page-info date-info">🕐{{ frontmatter.date || new Date().toLocaleString() }}</span>
     <span v-if="frontmatter.categories" class="categories-container">
        📚
        <span class="page-info category-tag" v-for="item in frontmatter.categories" :key="item">{{ item }}</span>
    </span>
    <span v-if="frontmatter.tags" class="tags-container">
        🔗
        <span class="page-info tag" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
    </span>
</template>

<style scoped>
.page-info {
    font-size: 13px;
    margin-right: 12px;
    display: inline-flex;
    align-items: center;
    transition: all 0.3s ease;
}

.share-info {
    color: var(--vp-c-brand);
    font-weight: 500;
}

.author-info {
    color: var(--vp-c-text-2);
}

.date-info {
    color: var(--vp-c-text-2);
}

.categories-container, .tags-container {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.category-tag, .tag {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.category-tag {
    background: linear-gradient(135deg, var(--vp-c-brand-light) 0%, var(--vp-c-brand) 100%);
    color: var(--vp-c-white);
}

.tag {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
    border: 1px solid var(--vp-c-divider);
}

.category-tag:hover, .tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
