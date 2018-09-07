import Vue from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    lazyComponents?: () => Record<
      string,
      Component<any, any, any, any> | AsyncComponent<any, any, any, any>
    >
  }
}
