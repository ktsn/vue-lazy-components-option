<template>
  <ul>
    <li
      v-for="(item, index) in value"
      :key="index"
    >
      <Node :value="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import Node from './Node.vue'

export default {
  lazyComponents: () => ({
    Node
  }),

  props: {
    value: {
      type: Array,
      required: true
    }
  }
}
</script>
