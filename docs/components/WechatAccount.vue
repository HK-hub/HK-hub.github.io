<script setup lang="ts">
interface WechatInfo {
  title: string;
  qrcode: string;
  qrcodeTitle: string,
  alt?: string;
  description: string;
}

interface Props {
  info: WechatInfo;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="wechat-account">
    <div class="wechat-container">
      <h3>{{ info.title }}</h3>
      <div class="qrcode-container">
        <img :src="info.qrcode" :alt="info.alt || info.title" class="qrcode" />
        <p>{{ info.qrcodeTitle }}</p>
      </div>
      <p class="description">{{ info.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.wechat-account {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin: 1.5rem 0;
  border-top: 1px solid var(--vp-c-divider);
}

.wechat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.wechat-container h3 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode {
  width: 150px;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qrcode-container p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  max-width: 300px;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .qrcode {
    width: 120px;
    height: 120px;
  }
}
</style>