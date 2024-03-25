<template>
  <ul>
    <BaseListItem v-for="(patient, index) in patients" :key="index">
      <template v-slot:prepend>
        <img :src="patient.profilePicture" class="rounded-full h-16 mr-2">
      </template>

      <template v-slot:content>
        <section class="flex flex-col justify-center">
          <div>
            <p class="font-semibold mb-0">
              {{ getFullName(patient) }}
            </p>

          </div>
          <div>
            {{ getAge(patient) }}
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