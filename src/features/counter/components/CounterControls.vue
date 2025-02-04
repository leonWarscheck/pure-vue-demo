<template>
    <div class="counter-controls" role="group" aria-label="Counter controls">
      <button 
        @click={decrementClicked}
        aria-label="Decrease count"
      >
        -
      </button>
      <button 
        @click={incrementClicked}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import useCounterStore from '../useCounterStore'
  const { decrementClicked, incrementClicked } = useCounterStore()
  </script>