<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme';

const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/63684823?v=4',
        name: 'HK意境',
        title: '逆水行舟，不进则退',
        desc: 'FE Developer<br/>Creator @ <a href="https://github.com/hk-hub" target="_blank">HK-hub</a>',
        links: [
            { icon: 'github', link: 'https://github.com/hk-hub' },
            {
                icon: 'github', link: "https://space.bilibili.com/351534170",
            },
            { icon: 'youtube', link: 'https://www.youtube.com/@chocolate1999' },
            { icon: 'twitter', link: 'https://twitter.com/ycyChocolate' },
        ]
    },
    {
        avatar: 'https://www.github.com/Chocolate1999.png',
        name: 'Choi Yang',
        title: '逆水行舟，不进则退',
        desc: 'FE Developer<br/>Creator @ <a href="https://github.com/chodocs/chodocs" target="_blank">ChoDocs</a>',
        links: [
            { icon: 'github', link: 'https://github.com/Chocolate1999' },
            {
                icon: 'github', link: "https://space.bilibili.com/351534170",
            },
            { icon: 'youtube', link: 'https://www.youtube.com/@chocolate1999' },
            { icon: 'twitter', link: 'https://twitter.com/ycyChocolate' },
        ]
    },
    {
        avatar: 'https://www.github.com/HearLing.png',
        name: 'HearLing',
        title: '热爱学习，不秃头',
        desc: 'FE Developer',
        links: [
            { icon: 'github', link: 'https://github.com/HearLing' },
            {
                icon: 'github', link: "https://space.bilibili.com/201738571",
            },
        ]
    },
]
</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                核心成员介绍
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members" />
    </VPTeamPage>
</template>
