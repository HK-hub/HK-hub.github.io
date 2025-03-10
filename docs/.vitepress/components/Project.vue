<script setup>
import { ref, computed } from 'vue'

const projects = ref([
    {
        name: 'Geek-IM',
        description: '一个基于Netty的即时通讯系统',
        tags: ['Java', 'Netty', 'IM'],
        link: 'https://github.com/HK-hub/Geek-IM',
        stars: 100,
        forks: 30
    },
    {
        name: 'hRPC',
        description: '轻量级RPC框架',
        tags: ['Java', 'RPC', '分布式'],
        link: 'https://github.com/HK-hub/h-rpc',
        stars: 80,
        forks: 20
    },
    {
        name: '短链接生成器',
        description: '高性能的短链接生成与管理系统',
        tags: ['Java', 'Redis', '分布式'],
        link: '/document/short-url-generator',
        stars: 60,
        forks: 15
    }
])

const searchQuery = ref('')
const selectedTag = ref('')

const tags = computed(() => [...new Set(projects.value.flatMap(p => p.tags))])

const filteredProjects = computed(() => {
    return projects.value.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchesTag = !selectedTag.value || project.tags.includes(selectedTag.value)
        return matchesSearch && matchesTag
    })
})
</script>

<template>
    <div class="projects-container">
        <div class="search-filter">
            <input v-model="searchQuery" type="text" placeholder="搜索项目..." class="search-input" />
            <div class="tags-filter">
                <span v-for="tag in tags" :key="tag" :class="['tag', { active: selectedTag === tag }]"
                    @click="selectedTag = selectedTag === tag ? '' : tag">
                    {{ tag }}
                </span>
            </div>
        </div>

        <div class="projects-grid">
            <div v-for="project in filteredProjects" :key="project.name" class="project-card"
                @click="window.open(project.link, '_blank')">
                <h3 class="project-title">
                    <a :href="project.link" target="_blank" rel="noopener">
                        {{ project.name }}
                    </a>
                </h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">
                        {{ tag }}
                    </span>
                </div>
                <div class="project-stats">
                    <span class="stat">
                        <span class="icon">⭐</span>
                        {{ project.stars }}
                    </span>
                    <span class="stat">
                        <span class="icon">🔀</span>
                        {{ project.forks }}
                    </span>
                    <a :href="project.link" target="_blank" rel="noopener">
                        前往浏览->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects-container {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.search-filter {
    margin-bottom: 32px;
}

.search-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--vp-c-divider);
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
    transition: border-color 0.3s ease;
    background: var(--vp-c-bg-soft);
}

.search-input:focus {
    border-color: var(--vp-c-brand);
    outline: none;
}

.tags-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 32px;
}

.project-card {
    border: 2px solid var(--vp-c-divider);
    border-radius: 12px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    background: var(--vp-c-bg);
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--vp-c-brand);
}

.project-title {
    margin: 0 0 16px;
    color: var(--vp-c-brand);
    font-size: 1.4rem;
    font-weight: 600;
}

.project-title a {
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: color 0.3s ease;
}

.project-title a:hover {
    color: var(--vp-c-brand);
}

.project-description {
    margin: 0 0 20px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    font-size: 1rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.tag {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--vp-c-divider);
}

.tag:hover {
    background-color: var(--vp-c-bg-mute);
    transform: translateY(-1px);
}

.tag.active {
    background-color: var(--vp-c-brand);
    color: white;
    border-color: transparent;
}

.project-stats {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: flex-start;
}

.stat {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--vp-c-text-2);
    font-size: 0.95rem;
    font-weight: 500;
}

.icon {
    font-size: 1.1rem;
}

.project-stats a {
    margin-left: auto;
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: all 0.3s ease;
}

.project-stats a:hover {
    color: var(--vp-c-brand);
    transform: translateX(4px);
}

.arrow-icon {
    color: var(--vp-c-brand);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 4px;
}

.arrow-icon::after {
    content: '→';
    transition: transform 0.3s ease;
    display: inline-block;
}

.project-card:hover .arrow-icon::after {
    transform: translateX(4px);
}
</style>