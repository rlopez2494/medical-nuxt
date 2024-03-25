<template>
  <label for="base-select" class="block">{{ label }}</label>
  <select id="base-select" v-model="model" class="w-full border border-solid border-y-gray-300 p-2 rounded-md">
    <option value="" disabled selected>Select an option</option>
    <option v-for="item in items" :key="item" :value="item">{{ item }}</option>
  </select>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: '(Not specified)'
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>