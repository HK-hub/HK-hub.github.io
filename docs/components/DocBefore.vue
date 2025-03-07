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
    gap: 2px;
}

.category-tag, .tag {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1.6;
    display: inline-flex;
    align-items: center;
}

.category-tag {
    background-color: rgba(64, 158, 255, 0.1);
    color: rgb(64, 158, 255);
    border: 1px solid rgba(64, 158, 255, 0.2);
}

.tag {
    background-color: rgba(144, 147, 153, 0.1);
    color: rgb(144, 147, 153);
    border: 1px solid rgba(144, 147, 153, 0.2);
}

.category-tag:hover, .tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
