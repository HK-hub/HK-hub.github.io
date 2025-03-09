<script setup lang="js">
import { useData } from 'vitepress'
const { frontmatter } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
    <a v-if="frontmatter.share" :href="frontmatter.link" target="_blank">
        <span class="page-info share-info">⚡ {{ frontmatter.share }}</span>
    </a>
    <span class="page-info author-info">👨‍💻{{ frontmatter.author || 'HK意境' }}</span>
    <span class="page-info date-info">🕐{{ frontmatter.date || new Date().toLocaleString() }}</span>
    <span v-if="frontmatter.categories && frontmatter.categories.length > 0" class="categories-container">
        📚
        <span class="page-info category" v-for="item in frontmatter.categories" :key="item">{{ item }}</span>
    </span>
    <span v-if="frontmatter.tags && frontmatter.tags.length > 0" class="tags-container">
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
    font-size: 17px;
    color: var(--vp-c-text-2);
}

.date-info {
    font-size: 17px;
    color: var(--vp-c-text-2);
}

.categories-container,
.tags-container {
    display: inline-flex;
    align-items: center;
    gap: 0px;
}

.category,
.tag {
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    line-height: 1.2;
}

.category {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    border: none;
}

.tag {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-divider);
}

.category:hover,
.tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
}

.tag:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
}
</style>
