<template>
  <header :class="`h-[55px] ${isAppoitmentSearch ? '' : 'justify-between'} px-3 flex items-center bg-teal-500`">

    <template v-if="isAppoitmentSearch">
      <NuxtLink to="/appointments">
        <Icon name="mdi:arrow-left" size="2em" color="white" class="mr-3"></Icon>
      </NuxtLink>
      <input v-model="search" type="text" id="search" placeholder="Enter your search here"
        class="w-full h-10 border-0 focus:ring-0 focus:outline-0 rounded pl-4 text-slate-500">
    </template>

    <h1 class="text-xl mb-0 text-white" v-else-if="isInAppointmentRecord">Appointment Record</h1>

    <h1 v-else class="text-xl mb-0 text-white">
      {{ getRouteName(currentRoute.name) }}
    </h1>

    <div v-if="isInAppointments">
      <NuxtLink to="/appointments/search">
        <Icon name="mdi:search" size="2em" color="white"></Icon>
      </NuxtLink>
    </div>

    <div v-else-if="isInPatients">
      <button class="mr-3" @click="togglePatientsFilter(true)">
        <Icon name="mdi:filter" size="2em" color="white"></Icon>
      </button>
      <NuxtLink to="/patients/search">
        <Icon name="mdi:search" size="2em" color="white"></Icon>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
const currentRoute = useRoute();

const { togglePatientsFilter } = inject("patientsFilter");

const capitalize = (string = "") => string.charAt(0).toUpperCase() + string.slice(1);
const getRouteName = (routeName = "") => {
  if (routeName == "index") return "Home";
  return capitalize(routeName);
};

const isInAppointments = ref(false);
const isInAppointmentRecord = ref(false);
const isAppoitmentSearch = ref(false);
const isInPatients = ref(false);

const search = ref("");

watch(currentRoute, (val) => {
  isInAppointments.value = val.path === "/appointments";
  isAppoitmentSearch.value = val.path === "/appointments/search";
  isInPatients.value = val.path === "/patients";
  isInAppointmentRecord.value = val.name == "appointments-id";
}, { flush: 'pre', immediate: true, deep: true })
</script>