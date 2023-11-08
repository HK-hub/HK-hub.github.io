<script setup lang="js">
import { useData } from 'vitepress'
const { frontmatter } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
    <a v-if="frontmatter.share" :href="frontmatter.link" target="_blank">
        <span class="page-info">⚡ {{ frontmatter.share }}</span>
    </a>
    <span class="page-info">✍️{{ frontmatter.author || 'HK意境' }}</span>
    <span class="page-info">🕐{{ frontmatter.date || new Date().toLocaleString() }}</span>
     <span v-if="frontmatter.categories">
        📚
        <span class="page-info" v-for="item in frontmatter.categories" :key="item">{{ item }}</span>
    </span>
    <span v-if="frontmatter.tags">
        🔗
        <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
    </span>
</template>

<style scoped>
  .page-info{
    font-size: 13px;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>
