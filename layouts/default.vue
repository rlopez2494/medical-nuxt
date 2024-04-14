<template>
  <div class="flex flex-col h-screen overflow-hidden relative">
    <BaseHeader />

    <main class="flex-grow overflow-y-scroll">
      <slot />
    </main>

    <BaseFooter v-if="showForm" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const showForm = ref(false);
const currentRoute = useRoute();

watch(currentRoute, async () => {
  try {
    const currentSession = await authStore.getCurrentSession();
    showForm.value = !!currentSession?.user;
  } catch (error) {
    console.error(error)
    showForm = false;
  }
}, { immediate: true })


const isPatientsFilterOpen = ref(false);

const togglePatientsFilter = (value = false) => {
  isPatientsFilterOpen.value = value;
}

provide("patientsFilter", {
  isPatientsFilterOpen,
  togglePatientsFilter
});
</script>