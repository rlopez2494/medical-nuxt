<template>
  <li class="h-18 border border-b-solid border-b-gray-300 p-1">
    <article class="h-full flex align-center">
      <slot name="prepend">
      </slot>
      <slot name="content">
        <section>
          <div>
            {{ title }}
          </div>
          <div>
            {{ subtitle }}
          </div>
        </section>
      </slot>
      <slot name="actions"></slot>
    </article>
  </li>
</template>

<script setup>
const props = defineProps(["title", "subtitle"])
</script>