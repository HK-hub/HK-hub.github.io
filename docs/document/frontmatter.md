# 测试markdown文件元数据

<script setup>
import { useData } from 'vitepress'
import MetaData from '../components/MetaData.vue'
const { theme, page, frontmatter } = useData()
</script>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## meta data vue

<MetaData/>
