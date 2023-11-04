<script setup lang="js">
import { useDocs } from '../.vitepress/components/useDocs'
import { useData } from 'vitepress';

const { docData } = useDocs() //获取所有文章信息遍历即可
const dcos = useData()
</script>

<template>
    <div v-for="item in docData" :key="item.title" >
        <a :href="item.link" class="docs" target="_blank">
            <div>
                {{ item.title }}
            </div>
            <span class="docs-info docs-tag" v-for="c in item.categories" :key="c">📚{{ c }}</span>
            <span class="docs-info">🕐{{ item.date }}</span>
            <span class="docs-info">✍️{{ item.author }}</span>
            <span v-if="item.tags !== undefined && item.tags != 0">
                🔗
                <span class="docs-info docs-tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </span>
        </a>
    </div>
</template>


<style>
  .docs-info{
    font-size: 13px;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>