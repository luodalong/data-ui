module.exports = {
  theme: '',
  title: 'data-ui',
  description: '政务部门vue2前端组件库',
  base: '/',
  port: '8080',
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
        '/comps/button.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}