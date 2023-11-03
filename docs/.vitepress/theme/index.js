// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DocBefore from '../../components/DocBefore.vue'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import './style.css'
import mediumZoom from 'medium-zoom'
import { useRoute,inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'



/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: h(DefaultTheme.Layout, null, {
    // 对应的插槽位置
    'doc-before': () => h(DocBefore),
    'nav-bar-content-before': () => h(Documate, {
      endpoint: '',
    })
  }),

  enhanceApp({ app, router, siteData }) {
    // ...
    if (inBrowser) {
      router.onAfterRouteChanged = (to) => {
        busuanzi.fetch()
      }
    }
  },

  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
