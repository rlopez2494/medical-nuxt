<template>
  <ul class="px-2">
    <NuxtLink v-for="(appointment, index) in appointments" :to="`/appointments/${appointment.id}`" :key="index">
      <BaseListItem>
        <template v-slot:prepend>
          <img :src="appointment.patientId.profilePicture" class="rounded-full h-14 w-14">
        </template>

        <template v-slot:content>
          <section class="flex flex-col justify-center relative translate-x-[-8px]">
            <div>
              <p class="font-semibold mb-0">
                {{ getFullName(appointment.patientId) }}
              </p>
            </div>

            <div style="color: #888888;" class="relative">
              <p class="font-light">
                {{ getAge(appointment.patientId) }} | {{ getTimeFromDate(appointment.date) }} <Icon
                  class="absolute translate-y-[-12px] translate-x-[-15px] text-teal-500" size="50px" name="mdi:dot">
                </Icon>
              </p>
            </div>
          </section>
        </template>
      </BaseListItem>

    </NuxtLink>
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