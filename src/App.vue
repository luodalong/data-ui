<template>
  <div id="app">
    <el-button @click="openDialog">打开Dialog 对话框</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openDialog() {
      this.$Dialog({
        title: 'Dialog对话框',
        width: '600px',
        params: {
          name: '张三',
          age: 18,
        },
        Comp: () => import('./components/DialogTest.vue'),
        callback: (res) => {
          console.log(
            '%c [ res ]',
            'font-size:13px; background:#f29100; color:#ffffff;',
            res
          )
        },
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
