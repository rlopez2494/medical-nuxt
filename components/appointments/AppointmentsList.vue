<template>
  <ul>
    <BaseListItem v-for="(appointment, index) in appointments" :key="index">
      <template v-slot:prepend>
        <img :src="appointment.patientId.profilePicture" class="rounded-full h-16 mr-2">
      </template>

      <template v-slot:content>
        <section class="flex flex-col justify-center">
          <div>
            <p class="font-semibold mb-0">
              {{ getFullName(appointment.patientId) }}
            </p>

          </div>
          <div>
            {{ getAge(appointment.patientId) }} | {{ getTimeFromDate(appointment.date) }}
          </div>
        </section>
      </template>
    </BaseListItem>
  </ul>
</template>

<script setup>
const props = defineProps({
  appointments: {
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

const getTimeFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
</script>