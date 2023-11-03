---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HK意境Blog"
  text: "知识宝库，生活体会，学历历程，人生思考"
  tagline: 😄很高兴你点开了我的主页🔭 我是一个正在修炼的后端开发实习生🌱 正积极致力于开源事业⚡ 希望我写下的东西能帮助到你
  image:
    # 首页主题右边图片
    src: './public/logo/logo.png'
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorwwem ipsum...
    linkText: 链接文本
    link: https://www.badu.com
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
---

<script setup>
import TeamMember from './.vitepress/components/TeamMember.vue'
import HomeContributor from './.vitepress/components/HomeContributor.vue'
</script>

<TeamMember/>
