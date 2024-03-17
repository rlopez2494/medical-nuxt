<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const title = ref("Header, hola que tal")
</script>