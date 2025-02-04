<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>App</h1>
    <ClientOnly>
      <Counter />
      <Counter2 />
    </ClientOnly>
  </div>
</template>

<script setup>
import Counter from "~/src/features/counter/components/Counter.vue";
import Counter2 from "~/src/features/counter-2-split-store/components/Counter2.vue";
</script>
