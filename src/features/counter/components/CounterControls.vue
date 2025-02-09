<template>
    <div class="counter-controls" role="group" aria-label="Counter controls">
      <button 
        @click="handleDecrementClicked"
        aria-label="Decrease count"
      >
        -
      </button>
      <button 
        @click="handleIncrementClicked"
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import useCounterStore from '../useCounterStore'

  const { decrementClicked, incrementClicked, dispatch } = useCounterStore()

  const handleDecrementClicked = () => { 
    dispatch(decrementClicked())
  }
  const handleIncrementClicked = () => {
    dispatch(incrementClicked())
  }
  </script>
