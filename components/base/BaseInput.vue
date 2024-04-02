<template>
  <div class="inline-block">
    <label for="base-input" :class="{ 'block': true, 'text-red-500': errors.length }">{{ label }}</label>
    <input id="base-input" v-model="model" :class="inputClass" />

    <div v-if="errors.length" class="text-red-500">
      <p>{{ errors[0] }}</p>
    </div>
  </div>
</template>

<script setup>
const model = defineModel();

// 
const inputClass = computed(() => {
  const defaultClass = 'border border-gray-300 rounded-md p-2 w-full';
  const inputBorder = props.errors.length ? 'border-red-500' : 'border-gray-300';
  return defaultClass + ' ' + inputBorder;
})

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: '(Not specified)'
  },
  type: {
    type: String,
    default: 'text'
  },
  errors: {
    type: Array,
    default: () => []
  }
})
</script>