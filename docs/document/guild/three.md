---
title: 测试标题three
author: hk
date: '2023-10-24'
showAccessNumber: true
category: 
 - 测试分类three
tags: 
 - 测试标签1three
 - 测试标签2three
 - 测试标签3three
---

# three.md

<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```
