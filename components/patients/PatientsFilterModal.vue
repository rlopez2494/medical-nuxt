<template>
  <transition name="overlay">
    <div v-if="modalState" class="absolute inset-0 bg-gray-500 bg-opacity-40 w-full h-full">

      <div id="dialog" class="w-full rounded overflow-hidden absolute bottom-0 bg-white rounded-t-3xl translate-y-0">
        <section class="grid grid-cols-3 h-16 font-bold text-xl mb-2 px-3 border border-b-solid border-b-neutral-100">
          <div></div>
          <div class="flex items-center justify-center">
            <p class="mb-0 text-l font-medium">Filter</p>
          </div>
          <div class="text-right flex flex-row-reverse items-center">
            <button @click="closeFilter">
              <Icon name="mdi:close" size="35px"></Icon>
            </button>
          </div>
        </section>

        <section class="px-4 py-2">
          <label class="text-lg">Gender</label>
          <div class="grid grid-cols-3 gap-2 mt-3">
            <button :class="filterButtonClass">Male</button>
            <button :class="filterButtonClass">Female</button>
            <button :class="filterButtonClass">Other</button>
          </div>
        </section>

        <section class="px-4 pb-2 pt-3">
          <label class="text-lg">Age Range</label>
          <div class="grid grid-cols-3 gap-2 mt-3">
            <button :class="filterButtonClass">0 - 10</button>
            <button :class="filterButtonClass">10 - 20</button>
            <button :class="filterButtonClass">20 - 30</button>
            <button :class="filterButtonClass">30 - 40</button>
            <button :class="filterButtonClass">40 - 50</button>
            <button :class="filterButtonClass">50 - 60</button>
            <button :class="filterButtonClass">60 - 70</button>
            <button :class="filterButtonClass">Above 70</button>
          </div>
        </section>

        <section class="px-4 pb-5 pt-7 grid grid-cols-2 gap-5">
          <button :class="filterButtonClass + ' font-medium'">Reset</button>
          <button :class="buttonClass">Apply</button>
        </section>
      </div>
    </div>
  </transition>
</template>


<script setup>
const emit = defineEmits(["close"])
const modalState = defineModel();

function closeFilter() {
  emit('close');
}

const filterButtonClass = ref("bg-transparent border text-neutral-500 text-md font-light border-neutral-400 py-2 px-4 p-1 rounded-md")
const buttonClass = ref("w-full py-4 bg-teal-500 text-white text-lg py-2 px-4 p-1 rounded-md")
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