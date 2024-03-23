<template>
  <header class="px-3 justify-between flex items-center h-12 bg-sky-600">
    <h1 class="text-xl mb-0 text-white">{{ title }}</h1>

    <div v-if="isInAppointments">
      <NuxtLink to="/appointments/search">
        <Icon name="mdi:search" size="2em" color="white"></Icon>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
const currentRoute = useRoute();
const isInAppointments = ref(false);

const title = ref("Appointments")

watch(currentRoute, (val) => {
  isInAppointments.value = val.path === "/appointments";
}, { flush: 'pre', immediate: true, deep: true })
</script>