<template>
  <li class="grid grid-cols-5 h-18 border-b border-b-solid border-b-gray-100 p-1 pt-2">

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