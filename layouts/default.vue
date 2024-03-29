<template>
  <div class="flex flex-col h-screen overflow-hidden relative">
    <BaseHeader />

    <main class="flex-grow overflow-y-scroll">
      <slot />
    </main>

    <BaseFooter />
  </div>
</template>

<script setup>
const isPatientsFilterOpen = ref(false);

const togglePatientsFilter = (value = false) => {
  isPatientsFilterOpen.value = value;
}

provide("patientsFilter", {
  isPatientsFilterOpen,
  togglePatientsFilter
});
</script>