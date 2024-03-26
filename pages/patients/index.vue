<template>
  <ClientOnly>
    <PatientsList :patients="patients" />
    <button @click="toggleFilter(true)" type="button">Toggle Filter</button>
    <PatientsFilterModal v-model="isFilterVisible" @close="toggleFilter(false)" />
  </ClientOnly>
</template>

<script setup>
import { getMockPatients } from "~/mocks/patients";
const patients = ref(getMockPatients());
const isFilterVisible = ref(false);

const toggleFilter = (value = false) => {
  isFilterVisible.value = value;
};
</script>