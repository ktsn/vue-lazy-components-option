<template>
  <Str
    v-if="typeof value === 'string'"
    :value="value"
  />
  <Arr
    v-else
    :value="value"
  />
</template>

<script lang="ts">
import Str from './Str.vue'
import Arr from './Arr.vue'

export default {
  lazyComponents: () => ({
    Str,
    Arr
  }),

  props: {
    value: {
      type: [String, Array],
      required: true
    }
  }
}
</script>
