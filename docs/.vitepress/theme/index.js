// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { metaData } from '../config/constants'
import OGMetadata from '../components/OGMetadata.vue'
import DocBefore from '../components/DocBefore.vue'
import CustomAds from '../components/CustomAds.vue'
import Comment  from '../components/Comment.vue'
import WechatAccount from '../components/WechatAccount.vue'
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
    // Ask AI
    
    // 自定义广告组件
    'aside-ads-after': () => h(CustomAds, {
      items: [{
        title: '赞助打赏',
        qrcode: '../../public/static/img/qrcode.jpg',
        description: '您的一小点支持将是对我们最大的帮助'
      }]
    }),
    // 公众号组件
    'doc-footer-before': () => h(WechatAccount, {
      info: {
        title: `扫码关注微信公众号`,
        qrcode: '/static/img/qrcode.jpg',
        qrcodeTitle: metaData.wechatInfo.qrcodeTitle,
        description: '获取更多精彩内容！每周更新后端、前端、架构设计等技术文章，助力您的技术成长！'        
      }
    }),
    // 评论组件
    'doc-after': () => h(Comment),
  }),

  enhanceApp({ app, router, siteData }) {
    // 不蒜子页面访问统计
    if (inBrowser) {
      router.onAfterRouteChanged = (to) => {
        busuanzi.fetch()
      }
    }

    // 百度页面访问统计
    if (typeof _hmt !== 'undefined') {
      _hmt.push(['_trackPageview', to]);
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
