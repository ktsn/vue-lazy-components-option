import _Vue from 'vue'

function install(Vue: typeof _Vue): void {
  Vue.mixin({
    beforeCreate() {
      const { lazyComponents } = this.$options
      if (typeof lazyComponents === 'function') {
        const components = this.$options.components!
        const resolved = lazyComponents()

        Object.keys(resolved).forEach(key => {
          components[key] = components[key] || resolved[key]
        })
      }
    }
  })
}

export default { install }

declare module 'vue/types/options' {
  interface ComponentOptions<V extends _Vue> {
    lazyComponents?: () => Record<
      string,
      Component<any, any, any, any> | AsyncComponent<any, any, any, any>
    >
  }
}
