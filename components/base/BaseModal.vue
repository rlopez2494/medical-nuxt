<template>
  <transition name="overlay">
    <div v-if="modalState" class="z-10 absolute inset-0 bg-gray-500 bg-opacity-40 w-full h-full">

      <div id="dialog"
        class="w-full rounded overflow-hidden absolute bottom-0 bg-white rounded-t-3xl translate-y-0">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>


<script setup>
const emit = defineEmits(["close"])
const modalState = defineModel();
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-active #dialog,
.overlay-leave-active #dialog {
  transition: transform 0.3s cubic-bezier(0.3, 0.3, 0.2, 1);
}

.overlay-enter-from #dialog,
.overlay-leave-to #dialog {
  transform: translateY(420px);
}
</style>