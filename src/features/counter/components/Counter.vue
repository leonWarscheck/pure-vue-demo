<template>
  <div class="counter">
    <h2>Counter</h2>
    <CounterDisplay />
    <CounterControls />
  </div>
</template>

<script setup lang="ts">
import CounterDisplay from "./CounterDisplay.vue";
import CounterControls from "./CounterControls.vue";

</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
