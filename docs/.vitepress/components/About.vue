<script setup>
import { ref } from 'vue'

const teamInfo = ref({
    name: 'HK-hub Team',
    description: '我们是一个充满激情的技术团队，致力于开源项目的开发与创新。我们相信技术可以改变世界，并且一直在探索新的可能性。',
    vision: '打造优秀的开源项目，为开发者社区贡献力量。',
    techStack: [
        { name: 'Java', icon: '☕', level: 90 },
        { name: 'Spring', icon: '🍃', level: 85 },
        { name: 'Vue', icon: '⚡', level: 80 },
        { name: 'MySQL', icon: '📊', level: 85 },
        { name: 'Redis', icon: '🚀', level: 80 },
        { name: 'Docker', icon: '🐳', level: 75 }
    ],
    stats: {
        projects: 15,
        contributors: 8,
        stars: 500,
        commits: '1000+'
    },
    members: [
        {
            name: 'HK-hub',
            role: '团队负责人',
            avatar: 'https://avatars.githubusercontent.com/u/1234567',
            github: 'https://github.com/HK-hub',
            description: '全栈开发工程师，热爱技术创新'
        }
    ],
    contact: {
        email: 'team@example.com',
        github: 'https://github.com/HK-hub',
        blog: 'https://your-blog-url.com'
    }
})
</script>

<template>
    <div class="about-container">
        <!-- 团队介绍部分 -->
        <section class="team-intro">
            <h1>{{ teamInfo.name }}</h1>
            <p class="description">{{ teamInfo.description }}</p>
            <p class="vision">愿景：{{ teamInfo.vision }}</p>
        </section>

        <!-- 技术栈展示 -->
        <section class="tech-stack">
            <h2>技术栈</h2>
            <div class="tech-grid">
                <div v-for="tech in teamInfo.techStack" :key="tech.name" class="tech-item">
                    <span class="tech-icon">{{ tech.icon }}</span>
                    <span class="tech-name">{{ tech.name }}</span>
                </div>
            </div>
        </section>

        <!-- 统计数据 -->
        <section class="stats">
            <div class="stat-grid">
                <div class="stat-item">
                    <h3>{{ teamInfo.stats.projects }}</h3>
                    <p>开源项目</p>
                </div>
                <div class="stat-item">
                    <h3>{{ teamInfo.stats.contributors }}</h3>
                    <p>贡献者</p>
                </div>
                <div class="stat-item">
                    <h3>{{ teamInfo.stats.stars }}</h3>
                    <p>获得星标</p>
                </div>
                <div class="stat-item">
                    <h3>{{ teamInfo.stats.commits }}</h3>
                    <p>代码提交</p>
                </div>
            </div>
        </section>

        <!-- 团队成员 -->
        <section class="team-members">
            <h2>团队成员</h2>
            <div class="members-grid">
                <div v-for="member in teamInfo.members" :key="member.name" class="member-card">
                    <img :src="member.avatar" :alt="member.name" class="member-avatar">
                    <h3>{{ member.name }}</h3>
                    <p class="member-role">{{ member.role }}</p>
                    <p class="member-desc">{{ member.description }}</p>
                    <a :href="member.github" target="_blank" rel="noopener" class="github-link">
                        GitHub Profile
                    </a>
                </div>
            </div>
        </section>

        <!-- 联系方式 -->
        <section class="contact">
            <h2>联系我们</h2>
            <div class="contact-links">
                <a :href="`mailto:${teamInfo.contact.email}`" class="contact-item">
                    <span class="icon">📧</span>
                    <span>{{ teamInfo.contact.email }}</span>
                </a>
                <a :href="teamInfo.contact.github" target="_blank" rel="noopener" class="contact-item">
                    <span class="icon">🐱</span>
                    <span>GitHub</span>
                </a>
                <a :href="teamInfo.contact.blog" target="_blank" rel="noopener" class="contact-item">
                    <span class="icon">📝</span>
                    <span>技术博客</span>
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

section {
    margin-bottom: 60px;
}

/* 团队介绍样式 */
.team-intro {
    text-align: center;
    margin-bottom: 60px;
}

.team-intro h1 {
    font-size: 2.5rem;
    color: var(--vp-c-brand);
    margin-bottom: 20px;
}

.description {
    font-size: 1.2rem;
    color: var(--vp-c-text-2);
    max-width: 800px;
    margin: 0 auto 20px;
    line-height: 1.6;
}

.vision {
    font-size: 1.1rem;
    color: var(--vp-c-text-1);
    font-style: italic;
}

/* 技术栈样式 */
.tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
    justify-content: center;
}

.tech-item {
    background: var(--vp-c-brand);
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font-size: 0.95rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.tech-item:hover {
    transform: translateY(-2px);
    background: var(--vp-c-brand-dark);
}

.tech-icon {
    font-size: 1.2rem;
}

.tech-name {
    font-weight: 500;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: var(--vp-c-bg-mute);
    border-radius: 3px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: var(--vp-c-brand);
    transition: width 1s ease-in-out;
}

/* 统计数据样式 */
.stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    text-align: center;
}

.stat-item {
    padding: 20px;
    background: var(--vp-c-bg-soft);
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
}

.stat-item h3 {
    font-size: 2rem;
    color: var(--vp-c-brand);
    margin-bottom: 10px;
}

/* 团队成员样式 */
.members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.member-card {
    background: var(--vp-c-bg-soft);
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s ease;
}

.member-card:hover {
    transform: translateY(-5px);
}

.member-avatar {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    margin-bottom: 20px;
}

.member-role {
    color: var(--vp-c-text-2);
    margin: 10px 0;
}

.member-desc {
    color: var(--vp-c-text-2);
    margin-bottom: 20px;
    line-height: 1.6;
}

.github-link {
    display: inline-block;
    padding: 8px 16px;
    background: var(--vp-c-brand);
    color: white;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.3s ease;
}

.github-link:hover {
    background: var(--vp-c-brand-dark);
}

/* 联系方式样式 */
.contact {
    text-align: center;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    background: var(--vp-c-bg-soft);
    border-radius: 8px;
    text-decoration: none;
    color: var(--vp-c-text-1);
    transition: all 0.3s ease;
}

.contact-item:hover {
    transform: translateY(-2px);
    background: var(--vp-c-bg-mute);
}

.icon {
    font-size: 1.2rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .about-container {
        padding: 20px;
    }

    .team-intro h1 {
        font-size: 2rem;
    }

    .description {
        font-size: 1rem;
    }

    .stat-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-links {
        flex-direction: column;
        align-items: center;
    }
}
</style>