<template>
  <li class="grid grid-cols-5 h-18 border border-b-solid border-b-gray-300 p-1">

    <div>
      <slot name="prepend">
      </slot>

    </div>

    <section class="col-span-3 flex items-center">
      <slot name="content">
        <div>
          {{ title }}
        </div>
        <div>
          {{ subtitle }}
        </div>
      </slot>
    </section>

    <slot name="actions"></slot>
  </li>
</template>

<script setup>
const props = defineProps(["title", "subtitle"])
</script>