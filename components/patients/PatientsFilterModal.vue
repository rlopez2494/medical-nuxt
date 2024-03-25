<template>
  <div class="absolute inset-0 bg-gray-500 bg-opacity-40 w-full h-full">
    <div class="w-full rounded overflow-hidden absolute bottom-0 bg-white rounded-t-3xl">

      <section class="grid grid-cols-3 h-12 font-bold text-xl mb-2 px-3 border border-b-solid border-b-gray-300">
        <div></div>
        <div class="text-center">
          <p class="mb-0 mt-2 text-l">Filter</p>
        </div>
        <div class="text-right flex flex-row-reverse items-center">
          <button @click="closeFilter">
            <Icon name="mdi:close" size="35px"></Icon>
          </button>
        </div>
      </section>

      <section class="px-4 py-2">
        <label>Gender</label>
        <div class="grid grid-cols-3 gap-2">
          <button :class="filterButtonClass">Male</button>
          <button :class="filterButtonClass">Female</button>
          <button :class="filterButtonClass">Other</button>
        </div>
      </section>

      <section class="px-4 py-2">
        <label>Age Range</label>
        <div class="grid grid-cols-3 gap-2">
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

      <section class="px-4 py-5 flex items-center justify-around">
        <button :class="buttonClass">Reset</button>
        <button :class="buttonClass">Apply</button>
      </section>
    </div>
  </div>
</template>


<script setup>
const emit = defineEmits(["close"])

function closeFilter() {
  emit('close');
}

const filterButtonClass = ref("bg-transparent border border-sky-600 py-2 px-4 p-1 rounded-sm")
const buttonClass = ref("py-4 px-10 bg-sky-600 text-white text-lg py-2 px-4 p-1 rounded-md")
</script>