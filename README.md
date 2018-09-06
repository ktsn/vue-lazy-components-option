# vue-lazy-components-option

Provide `lazyComponents` option for Vue components

## Usage

Install it by npm:

```bash
$ npm install vue-lazy-components-option
```

Then you initialize it with Vue constructor:

```js
import Vue from 'vue'
import LazyComponents from 'vue-lazy-components-option'

Vue.use(LazyComponents)
```

`lazyComponents` option can be used for your components:

```vue
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  lazyComponents: () => ({
    Foo,
    Bar
  })
}
</script>
```

## What is it for?

This small library is meant to be used for dealing with circular dependency among your components.

To avoid that, you can assign your component in `beforeCreated` hook like [Vue.js official docs stated](https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components). But it easily bloats your code when the components are increased.

`lazyComponents` option does the same thing under the hood but its syntax is simpler as it is almost the same interface with `components` option except that it is a function returning components.

## License

MIT
