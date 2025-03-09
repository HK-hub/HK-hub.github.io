<script setup lang="ts">
interface AdItem {
  title: string;
  qrcode: string;
  alt: string;
  description: string;
}

interface Props {
  items: AdItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="custom-ads">
    <div class="ads-container">
      <div v-for="item in items" :key="item.title" class="ads-item">
        <h3>{{ item.title }}</h3>
        <div class="qrcode-container">
          <img :src="item.qrcode" :alt="item.alt" class="qrcode" />
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-ads {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  margin: 1rem 0;
}

.ads-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.ads-item {
  text-align: center;
}

.ads-item h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.qrcode-container p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .ads-container {
    flex-direction: column;
  }
  
  .qrcode {
    width: 100px;
    height: 100px;
  }
}
</style>