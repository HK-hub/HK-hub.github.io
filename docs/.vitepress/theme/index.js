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
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

onMounted(() => {
  if(typeof window !==undefined){
    var s_div = document.createElement('div');   // 创建节点
    s_div.setAttribute("id", "gitalk-page-container");   // 设置id
    document.querySelector('.content-container').appendChild(s_div);   // querySelector的节点可自己根据自己想加载的地方设置
    var gitment = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'HK-hub', // GitHub repository 所有者
      repo: 'HK-hub.github.io', // GitHub repository
      clientID: 'Iv1.fe3c344b7bc11aae', // 自己的clientID
      clientSecret: '626ccde62632a27215117143ad2b12331d3ae904',// 自己的clientSecret
      admin: ['HK-hub'], // GitHub repository 所有者
      labels: ['Gitalk'], // GitHub issue 的标签
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    })
    gitment.render('gitalk-page-container')
  }
})




/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: h(DefaultTheme.Layout, null, {
    // 对应的插槽位置
    'doc-before': () => h(DocBefore),
    'nav-bar-content-before': () => h(Documate, {
      endpoint: '',
    }),
    
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
