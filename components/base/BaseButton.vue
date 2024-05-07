<template>
  <button :class="buttonClass" type="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const props = defineProps({
  color: {
    type: String,
    default: "teal-500"
  },
  outlined: {
    type: Boolean,
  }
})

const buttonClass = computed(() => ({
  "border": props.outlined,
  [`border-${props.color}`]: props.outlined,

  [`text-${props.color}`]: props.outlined,
  "text-white": !props.outlined && !!props.color,
  "text-md": true,
  "font-medium": true,

  [`bg-${props.color}`]: !props.outlined,

  "py-2": true,
  "px-4": true,
  "p-1": true,
  "rounded-md": true,
}));
</script>