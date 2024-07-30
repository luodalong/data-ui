<!--
  组件UiTableColumn
  @author luodalong
  @date 2024.04.29

  功能介绍：拓展el-table-column, 实现多列排序

  使用须知：确保调用列表的查询字段为queryParams.orderByColumn，确保调用函数为getList
-->
<template>
  <el-table-column
    v-if="$scopedSlots.default"
    min-width="120px"
    v-bind="$attrs"
    :sortable="false"
  >
    <template slot="header" slot-scope="scope">
      <span>{{ scope.column.label }}</span>

      <div class="caret-wrapper" :class="caretClass">
        <i
          class="sort-caret ascending"
          @click="handleSortChange('ascending')"
        ></i>
        <i
          class="sort-caret descending"
          @click="handleSortChange('descending')"
        ></i>
      </div>
    </template>

    <template slot-scope="scope">
      <slot :row="scope.row" :index="scope.$index" :column="scope.column" />
    </template>
  </el-table-column>

  <el-table-column v-else min-width="140px" v-bind="$attrs" :sortable="false">
    <template slot="header" slot-scope="scope">
      <span>{{ scope.column.label }}</span>

      <div class="caret-wrapper" :class="caretClass">
        <i
          class="sort-caret ascending"
          @click="handleSortChange('ascending')"
        ></i>
        <i
          class="sort-caret descending"
          @click="handleSortChange('descending')"
        ></i>
      </div>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'DataTableColumn',
  computed: {
    queryParams: {
      get() {
        const query = this.$parent.queryParams
          ? this.$parent.queryParams
          : this.$parent.$parent.queryParams
            ? this.$parent.$parent.queryParams
            : this.$parent.$parent.$parent.queryParams
        return query
      },
      set(val) {
        if (this.$parent.queryParams) {
          this.$parent.queryParams = val
        } else if (this.$parent.$parent.queryParams) {
          this.$parent.$parent.queryParams = val
        } else if (this.$parent.$parent.$parent.queryParams) {
          this.$parent.$parent.$parent.queryParams = val
        }
      },
    },
    getList() {
      const fun = this.$parent.getList
        ? this.$parent.getList
        : this.$parent.$parent.getList
          ? this.$parent.$parent.getList
          : this.$parent.$parent.$parent.getList
      return fun
    },
    caretClass() {
      const orderByColumn = (this.queryParams.orderByColumn || '').split(',')
      const className = orderByColumn.some(
        (i) => i === `${this.$attrs.prop} asc`
      )
        ? 'ascending'
        : orderByColumn.some((i) => i === `${this.$attrs.prop} desc`)
          ? 'descending'
          : ''

      return className
    },
  },
  methods: {
    handleSortChange(order) {
      let orderByColumn = this.queryParams.orderByColumn || ''
      const order2 =
        order === 'ascending' ? 'asc' : order === 'descending' ? 'desc' : ''

      // string 转 array
      orderByColumn = orderByColumn ? orderByColumn.split(',') : []
      ;((p, o) => {
        const idx = orderByColumn.findIndex((i) => i === `${p} ${o}`)
        if (idx > -1) {
          // 移除相同项
          orderByColumn.splice(idx, 1)
          return false
        }

        const key = orderByColumn.findIndex(
          (i) => i === `${p} ${o === 'asc' ? 'desc' : 'asc'}`
        )
        if (key > -1) {
          // 存在相反方向，替换
          orderByColumn.splice(key, 1, `${p} ${o}`)
        } else {
          // 不存在，添加
          orderByColumn.push(`${p} ${o}`)
        }
      })(this.$attrs.prop, order2)

      // array 转 string
      orderByColumn = orderByColumn.join(',')

      this.queryParams = {
        ...this.queryParams,
        orderByColumn,
      }

      this.getList()
    },
  },
}
</script>

<style lang="scss" scoped>
.caret-wrapper.ascending > .ascending {
  border-bottom-color: #255df0;
}
.caret-wrapper.descending > .descending {
  border-top-color: #255df0;
}
</style>
