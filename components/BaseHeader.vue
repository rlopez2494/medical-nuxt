<template>
  <header :class="`${isAppoitmentSearch ? '' : 'justify-between'} px-3 flex items-center h-12 bg-sky-600`">

    <template v-if="isAppoitmentSearch">
      <NuxtLink to="/appointments">
        <Icon name="mdi:arrow-left" size="2em" color="white" class="mr-3"></Icon>
      </NuxtLink>
      <input v-model="search" type="text" id="search" placeholder="Enter your search here"
        class="w-full h-10 border-0 focus:ring-0 focus:outline-0 rounded pl-4 text-slate-500">
    </template>

    <h1 v-else class="text-xl mb-0 text-white">{{ title }}</h1>

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
const isAppoitmentSearch = ref(false);

const search = ref("");

const title = ref("Appointments")
watch(currentRoute, (val) => {
  isInAppointments.value = val.path === "/appointments";
  isAppoitmentSearch.value = val.path === "/appointments/search";
}, { flush: 'pre', immediate: true, deep: true })
</script>