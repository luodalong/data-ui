# Dialog 对话框

基于`el-dialog`二次开发的对话框组件，用于显示需要用户确认的对话框，不同于`el-dialog`, 该`dialog`对话框通过函数式命令调取`this.$Dialog(options)`, 同时支持嵌套显示，`options`见下方属性。


## 基本用法

::: demo
```html
<template>
  <div>
    <el-button type="primary" @click="openDialog">打开Dialog对话框</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      openDialog() {
        this.$Dialog({
          title: 'Dialog对话框',
          width: '800px',
          Comp: () => import('../.vuepress/components/dialogDemo.vue'),
          params: {
            name: '张三',
            age: 18
          },
          callback: (data) => {
            console.log(data)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped></style>

```

### dialogDemo代码
```html
<template>
  <div>
    <div>{{ params }}</div>

    <br />

    <div>
      <el-button @click="onCancel">关闭</el-button>
      <el-button type="primary" @click="onSave">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onCancel() {
      this.$emit('cancel')
    },
    onSave() {
      this.$emit('callback', 'success')
    },
  },
}
</script>

<style lang="scss" scoped></style>

```
:::

## Options属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题   | string  |   —            |    —     |
| width     | 宽度   | string（带px或%）    |  — |     50%    |
| Comp     | 弹出组件   | —    | — | —   |
| params     | 组件携带参数   | object    | — | —   |
| callback     | 组件回调   | function    | — | —   |
