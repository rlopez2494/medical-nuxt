<template>
  <ul class="px-2">
    <NuxtLink v-for="(patient, index) in patients" :to="`/patients/${patient.id}`" :key="index">
      <BaseListItem>
        <template v-slot:prepend>
          <img :src="patient.profilePicture" class="rounded-full h-14 w-14">
        </template>

        <template v-slot:content>
          <section class="flex flex-col justify-center relative translate-x-[-8px]">
            <div>
              <p class="font-semibold mb-0">
                {{ getFullName(patient) }}
              </p>
            </div>
            <div>
              <p style="color: #888888;">
                {{ getAge(patient) }}
              </p>
            </div>
          </section>
        </template>

        <template v-slot:actions>
          <div class="flex flex-row-reverse items-center">
            <button>
              <Icon name="mdi:dots-vertical" size="2em"></Icon>
            </button>
          </div>
        </template>
      </BaseListItem>
    </NuxtLink>
  </ul>
</template>

<script setup>
const props = defineProps({
  patients: {
    type: Array,
    required: true,
    default: () => []
  }
})

const getFullName = (patient) => {
  return `${patient.firstName} ${patient.lastName}`
}

const getAge = (patient) => {
  return patient.age ? patient.age + ' years' : ''
}

</script>