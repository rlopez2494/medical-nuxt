<template>
  <form class="container mx-auto p-4">
    <section class="grid grid-cols-2 gap-4">
      <div>
        <BaseInput label="First Name" v-model="form.firstName" type="text" />
      </div>
      <div>
        <BaseInput label="Last Name" v-model="form.lastName" type="text" />
      </div>
      <div>
        <BaseInput label="ID Card No." v-model="form.identityCardNumber" type="text" />
      </div>
      <div>
        <BaseInput label="Age" v-model="form.age" type="number" />
      </div>
      <div>
        <BaseSelect label="Gender" :items="genders" v-model="form.gender" type="number" />
      </div>
      <div>
        <BaseInput label="Phone Number" v-model="form.phoneNumber" type="tel" />
      </div>
      <div>
        <BaseInput label="Email" v-model="form.email" type="tel" />
      </div>
    </section>

    <section class="flex items-center justify-end mt-4">
      <button class="mx-1" :class="filterButtonClass" type="button">Save</button>
      <button class="mx-1" :class="filterButtonClass" type="button" @click="$emit('close')">Cancel</button>
    </section>
  </form>
</template>

<script setup>
const form = reactive({
  firstName: null,
  lastName: null,
  identityCardNumber: null,
  age: null,
  gender: null,
  phoneNumber: null,
  email: null
})

const filterButtonClass = ref("bg-transparent border border-sky-600 py-2 px-4 p-1 rounded-sm")
const genders = ref(['Male', 'Female', 'Other'])
</script>