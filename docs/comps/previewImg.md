# PreviewImg 图片预览

基于`el-image`的图片预览功能`preview-src-list`，进行二次开发，在原来的基础上添加了下载功能，通过函数式命令调取`this.$PreviewImg(options)`, `options`见下方属性。


## 基本用法

::: demo
```html
<div class="demo-image__preview" style="display: flex">
  <div>
    <div>element-ui图片预览</div>
    <br/>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList">
    </el-image>
  </div>

  <div style="margin-left: 20px">
    <div>改进后图片预览</div>
    <br/>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      @click="viewImg">
    </el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    methods: {
      viewImg() {
        this.$PreviewImg({
          url: this.srcList,
          imageIndex: 1
        })
      }
    }
  }
</script>
```
:::

## Options属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| url     | 图片地址   | string/Array  |   —            |    —     |
| imageIndex     | 设置图片预览的 z-index	   | number    |  — |     0    |
