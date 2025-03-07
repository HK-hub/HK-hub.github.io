// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import OGMetadata from '../../components/OGMetadata.vue'
import DocBefore from '../../components/DocBefore.vue'
import CustomAds from '../../components/CustomAds.vue'
import Comment  from '../../components/Comment.vue'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import './style.css'
import mediumZoom from 'medium-zoom'
import { useRoute, inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'



/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: h(DefaultTheme.Layout, null, {
    // 对应的插槽位置
    // 文章meta信息重写
    'doc-top': () => h(OGMetadata),
    // 文章分类，标签展示
    'doc-before': () => h(DocBefore),
    /** // Ask AI
    'nav-bar-content-before': () => h(Documate, {
      endpoint: '',
    }), **/
    // 自定义广告组件
    'aside-ads-after': () => h(CustomAds, {
      items: [{
        title: '赞助打赏',
        qrcode: '../../public/static/img/qrcode.jpg',
        description: '您的一小点支持将是对我们最大的帮助'
      }]
    }),
    // 评论组件
    'doc-after': () => h(Comment),
  }),

  enhanceApp({ app, router, siteData }) {
    // 页面访问统计
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
