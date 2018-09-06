<template>
  <p>{{ value }}</p>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
