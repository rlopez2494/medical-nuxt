<template>
  <header class="h-12 bg-sky-600">
    <div class="mx-2 h-full flex items-center">
      <h1 class="text-xl mb-0 text-white">{{ title }}</h1>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const title = ref("Appointments")
</script>