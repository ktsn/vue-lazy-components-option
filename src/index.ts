import './augment'
import _Vue, { ComponentOptions } from 'vue'

function install(Vue: typeof _Vue): void {
  Vue.mixin(lazyComponentsMixin)
}

export const lazyComponentsMixin: ComponentOptions<_Vue> = {
  beforeCreate() {
    const { lazyComponents } = this.$options
    if (typeof lazyComponents === 'function') {
      const components = this.$options.components!
      const resolved = lazyComponents()

      Object.keys(resolved).forEach((key) => {
        components[key] = components[key] || resolved[key]
      })
    }
  },
}

export default { install }
