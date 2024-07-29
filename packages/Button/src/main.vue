<template>
  <div>
    <el-button :type="type">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'DataButton',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
