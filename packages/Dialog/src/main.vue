<template>
  <el-dialog
    :visible.sync="visible"
    :title="dialogParams.title"
    :width="dialogParams.width || '50%'"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
    @closed="closed"
  >
    <keep-alive>
      <components
        :is="dialogParams.Comp"
        :params="dialogParams.params"
        @cancel="cancel"
        @callback="callback"
      ></components>
    </keep-alive>
  </el-dialog>
</template>

<script>
  export default {
    name: 'DataDialog',
    data() {
      return {
        visible: false,
        dialogParams: {
          title: '',
          width: '',
          Comp: null,
          params: {},
        },
      }
    },
    mounted() {
      this.visible = true
      const { title, width, Comp, params } = this.$options

      this.dialogParams = {
        ...this.dialogParams,
        title,
        width,
        Comp,
        params,
      }
    },
    methods: {
      closed() {
        this.$emit('drawerClosed')
      },
      cancel() {
        this.visible = false
      },
      callback(res) {
        this.$options.callback && this.$options.callback(res)
      },
    },
  }
</script>
