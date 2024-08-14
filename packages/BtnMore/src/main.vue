<script>
export default {
  name: 'DataBtnMore',
  functional: true,
  props: {
    count: {
      type: Number,
      default: 2, // 最多显示的按钮数量（包括更多）
    },
    size: {
      type: String,
      default: '',
    },
  },
  render(h, context) {
    const { children, props } = context
    const showChildren = (children || []).filter((i) => {
      return i.data
    })

    const vnodes = []
    if (props.count < 1) {
      props.count = 1
    }
    if (showChildren.length > props.count) {
      // 中文注释：将count - 1个节点存入vnodes
      for (let i = 0; i < props.count - 1; i++) {
        vnodes.push(showChildren[i])
      }

      // 中文注释：将第二个及之后的节点存入el-dropdown的更多按钮中
      vnodes.push(
        h(
          'el-dropdown',
          {
            props: {
              trigger: 'click',
            },
            style: {
              marginRight: '-14px',
            },
          },
          [
            h(
              'el-button',
              {
                props: {
                  type: 'text',
                  size: props.size,
                },
                style: {
                  marginLeft: '10px',
                },
              },
              [
                '更多',
                h('i', {
                  class: 'el-icon-arrow-down el-icon--right',
                  style: { marginLeft: '2px' },
                }),
              ]
            ),
            h(
              'el-dropdown-menu',
              {
                slot: 'dropdown',
              },
              showChildren.slice(props.count - 1).map((child) => {
                // 中文注释：设置child的样式padding为0 15px
                child.data.style = { paddingLeft: '15px', paddingRight: '15px' }
                return h(
                  'el-dropdown-item',
                  { style: { paddingLeft: '0px', paddingRight: '0px' } },
                  [child]
                )
              })
            ),
          ]
        )
      )

      return vnodes
    } else {
      return context.children || []
    }
  },
}
</script>
