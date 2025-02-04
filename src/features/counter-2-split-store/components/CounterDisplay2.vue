<template>
  <div class="counter-display" role="status" aria-live="polite">
    Count: {{ count }} Count Squared: {{ countSquared }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useCounterStore from "../useCounterStore2";
const { selectCount, selectCountSquared } = useCounterStore();

const count = computed(() => selectCount());
const countSquared = computed(() => selectCountSquared());
</script>
