<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { initCategory } from '../.vitepress/utils/function'
import { getPosts } from '../.vitepress/components/useDocs'

const posts = getPosts()
const data = computed(() => initCategory(posts))
</script>

<template>
    <div class="category-container">
        <div v-for="(posts, key) in data">
            <h2 class="category">
                {{ key }}
            </h2>
            <ul class="post-list">
                <li v-for="(article, index) in posts" :key="index">
                    <a :href="withBase(article.regularPath)" class="post-item">
                        <div class="post-title">
                            <div class="post-dot"></div>
                            {{ article.frontMatter.title }}
                        </div>
                        <div class="date">{{ article.frontMatter.date }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.category-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 24px;
}

.category {
    padding: 28px 0 16px 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--bt-theme-title);
    font-family: var(--date-font-family), serif;
}

.post-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.post-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    text-decoration: none;
    color: var(--vp-c-text-1);
    transition: color 0.2s;
}

.post-item:hover {
    color: var(--vp-c-brand);
}

.post-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
}

.post-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--vp-c-brand);
}

.date {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    font-family: var(--date-font-family), serif;
}
</style>