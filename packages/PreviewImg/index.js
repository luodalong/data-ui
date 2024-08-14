import Main from './src/main'

/* istanbul ignore next */
// 删除方法
let removeIns = (instance) => {
  // 删除vue实例及dom对象
  instance.vm.$destroy()
}

Main.install = function (Vue) {
  let MainConstructor = Vue.extend(Main)

  function MainFun(options) {
    let instance = new MainConstructor({
      ...options,
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)

    instance.vm.$on('drawerClosed', () => {
      //点击关闭按钮后删除vue对象及dom对象
      removeIns(instance)
    })

    instance.vm.close = () => {
      removeIns(instance)
    }
    return instance.vm
  }
  Object.defineProperty(Vue.prototype, '$PreviewImg', {
    value: MainFun,
  })
  return MainFun
}

Main.isFunction = true

export default Main
