<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>App</h1>
    <ClientOnly>
      <Counter />
    </ClientOnly>
  </div>
</template>

<script setup>
import Counter from "~/src/features/counter/components/Counter.vue";
</script>
