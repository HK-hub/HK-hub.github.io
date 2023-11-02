<script setup lang="js">
import { useDocs } from '../.vitepress/components/useDocs'
import { useData } from 'vitepress';

const { docData } = useDocs() //获取所有文章信息遍历即可
const dcos = useData()
</script>

<template>
    <a v-for="item in docData" :key="item.title" :href="item.link" class="docs">
        <div class="docs-title">
          {{ item.title }}
          <span class="docs-info docs-tag" v-for="c in item.category" :key="c">📚{{ c }}</span>
        </div>
        <div class="docs-footer">
          <span class="docs-info">🕐{{ item.date }}</span>
          <span class="docs-info">✍️{{ item.author }}</span>
          <span>
            🔗
            <span class="docs-info docs-tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </span>
        </div>
    </a>
</template>
