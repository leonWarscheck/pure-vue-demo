<template>
  <div class="counter-display" role="status" aria-live="polite">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '../useCounterStore'
const { state, selectCount } = useCounterStore()
const count = computed(() => selectCount(state))
</script>
