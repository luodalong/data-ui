module.exports = {
  theme: '',
  title: 'data-ui',
  description: '政务部门vue2前端组件库',
  base: '/',
  port: '8080',
  head: [],
  plugins: ['demo-container'],
  markdown: {},
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/dialog.md',
        '/comps/previewImg.md',
        '/comps/tableColumn.md',
      ]
    }
  },
}