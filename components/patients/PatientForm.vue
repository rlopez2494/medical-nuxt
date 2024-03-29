<template>
  <form class="container mx-auto p-4">
    <section class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
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
      <button class="mx-1" :class="buttonClass" type="button">Save</button>
      <button class="mx-1" :class="buttonClass" type="button" @click="$emit('close')">Cancel</button>
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

const filterButtonClass = ref("bg-transparent border text-neutral-500 text-md font-light border-neutral-400 py-2 px-4 p-1 rounded-md")
const buttonClass = ref("w-full py-4 bg-teal-500 text-white text-lg py-2 px-4 p-1 rounded-md")
const genders = ref(['Male', 'Female', 'Other'])
</script>