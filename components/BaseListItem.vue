<template>
  <li class="grid grid-cols-5 h-18 border-b border-b-solid border-b-gray-100 p-1 pt-2">

    <div v-if="$slots['prepend']" class="col-span-1">
      <slot name="prepend">
      </slot>
    </div>

    <section
      :class="{ 'col-span-5': !$slots['prepend'], 'col-span-4': $slots['prepend'], 'flex items-center justify-between': true }">
      <slot name="content">
        <div>
          {{ title }}
        </div>
        <div>
          {{ subtitle }}
        </div>
      </slot>

      <slot name="actions"></slot>
    </section>
  </li>
</template>

<script setup>
const props = defineProps(["title", "subtitle"])
</script>