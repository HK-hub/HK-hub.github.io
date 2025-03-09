<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../utils/archive'
import { getPosts } from '../utils/useDocs'

const posts = getPosts()
// 使用类型断言来解决类型不匹配的问题
const data = computed(() => useYearSort(posts as any))
</script>

<template>
    <div class="archives-container">
        <div v-for="yearData in data" class="year-group">
            <div class="year">
                {{ yearData.year }}
            </div>
            <ul class="posts-list">
                <li v-for="(article, index) in yearData.posts" :key="index">
                    <a :href="withBase(article.regularPath)" class="post-link">
                        <div class="post-title">
                            <span class="dot"></span>
                            {{ article.frontMatter.title }}
                        </div>
                        <div class="post-date">{{ article.frontMatter.date.slice(5) }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.archives-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem;
}

.year-group {
    margin-bottom: 2rem;
}

.year {
    font-size: 2rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin-bottom: 1rem;
    font-family: var(--date-font-family), serif;
}

.posts-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.posts-list li {
    margin-bottom: 0.5rem;
}

.post-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: var(--vp-c-text-1);
    border-radius: 6px;
    transition: all 0.3s ease;
}

.post-link:hover {
    background-color: var(--vp-c-bg-soft);
}

.post-link:hover .post-title,
.post-link:hover .post-date {
    color: var(--vp-c-brand);
    transition: color 0.3s ease;
}

.post-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--vp-c-brand);
    flex-shrink: 0;
}

.post-date {
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
    font-family: var(--date-font-family), serif;
}
</style>