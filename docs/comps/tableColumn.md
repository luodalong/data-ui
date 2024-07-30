# TableColumn 排序表格列组件

功能介绍：拓展`el-table-column`, 实现多列排序

使用须知：确保调用列表的查询字段为`queryParams.orderByColumn`，确保调用函数为`getList`

## 基本用法

::: demo
```html
<template>
  <el-table
    :data="tableData" stripe
    style="width: 100%">
    <data-table-column
      prop="date"
      label="日期"
      width="180">
    </data-table-column>
    <data-table-column
      prop="name"
      label="姓名"
      width="180">
    </data-table-column>
    <data-table-column
      prop="address"
      label="地址">
    </data-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        queryParams: {
          orderByColumn: ''
        }
      }
    },
    methods: {
      getList() {
        console.log('%c [ this.queryParams ]', 'font-size:13px; background:#f29100; color:#ffffff;', this.queryParams)
      }
    }
  }
</script>
```
:::

## 功能说明
1. 支持多列排序，排序字段以逗号分隔
如："name desc,address desc,date desc"

