<script lang="ts" setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import { inBrowser, useData } from "vitepress";
const { isDark, page } = useData();

watch(isDark, (dark) => {
  if (!inBrowser) return;
 
  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");
 
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
    "https://giscus.app"
  );
});
</script>

<template>
    <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="HK-hub/HK-hub.github.io"
          repo-id="R_kgDOKpH-5w"
          category="*"
          category-id="*"
          mapping="pathname"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          lang="zh-CN"
          crossorigin="anonymous"
          :theme="isDark ? 'dark' : 'light'"
        />
      </div>
</template>
 