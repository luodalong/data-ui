<template>
  <image-viewer
    v-if="showViewer"
    :z-index="20000"
    :initial-index="imageIndex"
    :on-close="closeViewer"
    :url-list="previewSrcList"
  />
</template>

<script>
import ImageViewer from './image-viewer'

export default {
  name: 'DataPreviewImg',
  components: { ImageViewer },
  data() {
    return {
      dialogVisible: false,
      showViewer: false,
    }
  },
  computed: {
    previewSrcList() {
      const url = this.$options.url || ''
      return Array.isArray(url) ? url : [url]
    },
    imageIndex() {
      return this.$options.imageIndex || 0
    },
  },
  mounted() {
    const url = this.$options.url || ''
    // 多条图片预览
    if (Array.isArray(url)) {
      this.showViewer = true
      return
    }

    const suffix = url.split('.').pop()
    if (['png', 'jpg', 'jpeg'].includes(suffix)) {
      this.showViewer = true
    } else {
      // 文件
      url && window.open(url, '_blank')
    }
  },
  methods: {
    closeViewer() {
      this.showViewer = false
    },
  },
}
</script>
