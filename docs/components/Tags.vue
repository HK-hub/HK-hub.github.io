<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../.vitepress/utils/function'
import { getPosts } from '../.vitepress/components/useDocs'

let url = location.href.split('?')[1]
let params = new URLSearchParams(url)
const posts = getPosts()

const data = computed(() => initTags(posts))
let selectTag = ref(params.get('tag') ? params.get('tag') : '')
const toggleTag = (tag: string) => {
    selectTag.value = tag
}
// choose the first key
const defaultDisplayTag = Object.keys(data.value)[0]
if (defaultDisplayTag) {
    toggleTag(defaultDisplayTag)
}
</script>

<template>
    <div class="tags">
        <span @click="toggleTag(String(key))" v-for="(_, key) in data" class="tag">
            {{ key }} <sup>{{ data[key].length }}</sup>
        </span>
    </div>
    <div class="tag-header">{{ selectTag }}</div>
    <ul class="posts-list">
        <li v-for="(article, index) in selectTag ? data[selectTag] : []" :key="index">
            <a :href="withBase(article.regularPath)" class="posts">
                <div class="post-title">{{ article.frontMatter.title }}</div>
                <div class="date">{{ article.frontMatter.date }}</div>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.tags {
    margin: 25px auto 0;
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
}

.tag {
    display: inline-block;
    padding: 0 16px 4px 16px;
    margin: 6px 8px;
    font-size: 0.875rem;
    line-height: 25px;
    background-color: var(--vp-c-bg-alt);
    transition: 0.4s;
    border-radius: 2px;
    color: var(--vp-c-text-1);
    cursor: pointer;
}

.tag sup {
    color: var(--vp-c-brand);
    font-weight: bold;
}

.tag-header {
    padding: 28px 0 10px 0;
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--bt-theme-title);
    font-family: var(--date-font-family);
    max-width: 960px;
    margin: 0 auto;
}

.posts-list {
    list-style-type: disc;
    list-style-position: outside;
    padding: 0 0 0 40px;
    margin: 0 auto;
    max-width: 960px;
    color: var(--vp-c-brand);
}

.posts-list li {
    margin: 0;
    padding: 0;
}

.posts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    text-decoration: none;
    border-bottom: 1px solid var(--vp-c-divider);
    transition: border-color 0.25s;
}

.posts:hover {
    border-color: var(--vp-c-brand);
}

.post-title {
    flex: 1;
    margin-right: 16px;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
}

.posts:hover .post-title {
    color: var(--vp-c-brand);
}

.date {
    color: var(--vp-c-text-2);
    font-family: var(--date-font-family);
    font-size: 0.875rem;
}

@media screen and (max-width: 768px) {
    .date {
        font-size: 0.75rem;
    }
}
</style>