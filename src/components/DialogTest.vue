<template>
  <div>
    {{ params }}
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
  }
</script>

<style lang="scss" scoped></style>
