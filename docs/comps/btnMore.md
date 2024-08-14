# BtnMore 展示更多按钮

控制超过指定按钮数量显示更多按钮

## 基本用法

::: demo
```html
<div class="demo-image__preview" style="display: flex">
  <data-btn-more>
    <el-button type="text">新增</el-button>
    <el-button type="text">编辑</el-button>
    <el-button type="text">删除</el-button>
    <el-button type="text">详情</el-button>
  </data-btn-more>
</div>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>
```
:::

## Options属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| count     | 展示按钮数量   | Number  |   —            |    2     |
| size     | 更多大小	   | String    |  同el-button |     —    |
