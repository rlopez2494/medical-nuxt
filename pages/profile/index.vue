<template>
  <section class="bg-teal-500 text-white py-5">
    <div class="pb-3">
      <img :src="patient.profilePicture" class="mx-auto rounded-full h-20 w-20">
    </div>
    <h1 class="text-center text-xl font-medium">Dr. {{ patient.firstName }} {{ patient.lastName }}</h1>
  </section>

  <section>
    <BaseListItem class="px-3">
      <template v-slot:content>
        <p class="font-light text-lg mb-0 py-2 text-neutral-500">Today's availability</p>
      </template>

      <template v-slot:actions>
        <div class="flex flex-row-reverse items-center pr-3">
          <input type="checkbox" class="ml-auto form-checkbox h-6 w-6 text-blue-500">
        </div>
      </template>
    </BaseListItem>

    <BaseListItem class="px-3">
      <template v-slot:content>
        <p class="font-light text-lg mb-0 py-2 text-neutral-500">Upcoming availability</p>
      </template>

      <template v-slot:actions>
        <div class="flex flex-row-reverse items-center">
          <Icon name="mdi:chevron-right" size="2em" class="text-neutral-500"></Icon>
        </div>
      </template>
    </BaseListItem>

    <BaseListItem class="px-3 cursor-pointer" @click="logout">
      <template v-slot:content>
        <p class="font-light text-lg mb-0 py-2 text-red-500">Logout</p>
      </template>

      <template v-slot:actions>
        <div class="flex flex-row-reverse items-center">
          <Icon name="mdi:chevron-right" size="2em" class="text-neutral-500"></Icon>
        </div>
      </template>
    </BaseListItem>
  </section>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"
const authStore = useAuthStore();

useHead({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Profile page"
    }
  ]
})

import { getMockPatient } from "@/mocks/patients"
const patient = getMockPatient()

// Methods
const logout = () => {
  authStore.logout();
}

</script>