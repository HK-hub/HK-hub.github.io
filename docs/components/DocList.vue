<script setup lang="js">
import { useDocs } from '../.vitepress/components/useDocs'
import { useData } from 'vitepress';

const { docData } = useDocs() //获取所有文章信息遍历即可
const dcos = useData()
</script>

<template>
    <div class="article-list">
        <div v-for="item in docData" :key="item.title" class="article-card">
            <a :href="item.link" class="article-link" target="_blank">
                <h2 class="article-title">{{ item.title }}</h2>
                <div class="article-meta">
                    <div class="meta-group">
                        <span class="docs-info" v-if="item.categories && item.categories.length">
                            <span class="docs-tag" v-for="c in item.categories" :key="c">📚{{ c }}</span>
                        </span>
                        <span class="docs-info">🕐{{ item.date }}</span>
                        <span class="docs-info">✍️{{ item.author }}</span>
                    </div>
                    <div class="meta-tags" v-if="item.tags && item.tags.length">
                        🔗 <span class="docs-tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style>
.article-list {
    display: grid;
    gap: 1.5rem;
    padding: 1rem 0;
}

.article-card {
    background: var(--vp-c-bg-soft);
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid var(--vp-c-divider);
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--vp-c-brand);
}

.article-link {
    display: block;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
}

.article-title {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
    line-height: 1.4;
}

.article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

.meta-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
}

.docs-info {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--vp-c-text-2);
}

.docs-tag {
    background: var(--vp-c-bg-mute);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    transition: background-color 0.2s;
}

.docs-tag:hover {
    background: var(--vp-c-bg-alt);
}

@media (max-width: 640px) {
    .article-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .article-title {
        font-size: 1.1rem;
    }
}
</style>