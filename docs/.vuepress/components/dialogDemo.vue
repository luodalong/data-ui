<template>
  <div>
    <div>params参数：{{ params }}</div>

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
