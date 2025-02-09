<template>
  <div class="counter-display" role="status" aria-live="polite">
    Count: {{ count }}
    Count Squared: {{ countSquared }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useCounterStore from '../useCounterStore'

const { state, selectCount, selectCountSquared } = useCounterStore()

const count = computed(() => selectCount(state.value))
const countSquared = computed(() => selectCountSquared(state.value))
</script>