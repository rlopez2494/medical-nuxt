<template>
  <label for="base-input" class="block">{{ label }}</label>
  <input id="base-input" type="text" v-model="model"
    class="w-full border border-solid border-y-gray-300 p-2 rounded-md" />
</template>

<script setup>
const model = defineModel();

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: '(Not specified)'
  },
  type: {
    type: String,
    default: 'text'
  }
})
</script>