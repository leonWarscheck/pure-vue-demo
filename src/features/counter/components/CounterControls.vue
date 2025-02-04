<template>
    <div class="counter-controls" role="group" aria-label="Counter controls">
      <button 
        @click="dispatch(decrementClicked())"
        aria-label="Decrease count"
      >
        -
      </button>
      <button 
        @click="dispatch(incrementClicked())"
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import useCounterStore from '../useCounterStore'
  const { decrementClicked, incrementClicked,dispatch } = useCounterStore()
  </script>