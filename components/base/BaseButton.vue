<template>
  <button :class="buttonClass" type="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const buttonClass = ref("bg-transparent border text-neutral-500 text-md font-light border-neutral-400 py-2 px-4 p-1 rounded-md")
</script>