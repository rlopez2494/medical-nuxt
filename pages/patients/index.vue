<template>
  <ClientOnly>
    <PatientsList :patients="patients" />
    <PatientsFilterModal v-if="isFilterVisible" @close="toggleFilter(false)" />
  </ClientOnly>
</template>

<script setup>
import { getMockPatients } from "~/mocks/patients";
const patients = ref(getMockPatients());
const isFilterVisible = ref(true);

const toggleFilter = (value = false) => {
  isFilterVisible.value = value;
};
</script>