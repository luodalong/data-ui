import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { mdPlugin } from './plugins'

const func = (md) => {
  console.log('%c [ md ]', 'font-size:13px; background:#f29100; color:#ffffff;', md)
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'data-ui',
  description: '政务部门vue2组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/dialog' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Dialog 对话框', link: '/components/dialog' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: {
    plugins: [MarkdownPreview(), func()],
  },
  markdown: {
    config: md => {
      md.use(mdPlugin)
    },
  },
})
