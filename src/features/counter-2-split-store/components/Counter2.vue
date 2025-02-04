<template>
  <div class="counter">
    <h2>Counter2</h2>
    <CounterDisplay />
    <CounterControls />
  </div>
</template>

<script setup lang="ts">
import CounterDisplay from "./CounterDisplay2.vue";
import CounterControls from "./CounterControls2.vue";

</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
