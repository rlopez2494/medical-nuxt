<template>
  <section class="h-10 flex justify-around items-stretch">
    <button @click="appointmentsFilterType = 'Upcoming'"
      :class="`w-1/3 ${isSelectedFilterMode('Upcoming')}`">Upcoming</button>
    <button @click="appointmentsFilterType = 'Missed'"
      :class="`w-1/3 ${isSelectedFilterMode('Missed')}`">Missed</button>
    <button @click="appointmentsFilterType = 'Completed'"
      :class="`w-1/3 ${isSelectedFilterMode('Completed')}`">Completed</button>
  </section>

  <section class="h-6 flex justify-center items-center bg-stone-200">
    <p class="text-center mb-0 text-stone-600">Today</p>
  </section>
  <ul>
    <BaseListItem v-for="(appointment, index) in filteredAppointments" :key="index">
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

    <li class="h-12 text-center flex items-center justify-center">
      <p class="underline text-sky-600">View past appointments ></p>
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";


const props = defineProps({
  appointments: {
    type: Array,
    required: true,
    default: () => []
  }
})
const appointmentsFilterType = ref("Upcoming");


const filteredAppointments = computed(
  () => {
    return props
      .appointments
      .filter(filteringByMode[appointmentsFilterType.value])
  }
)

const getFullName = (patient) => {
  return `${patient.firstName} ${patient.lastName}`
}

const getAge = (patient) => {
  return patient.age ? patient.age + ' years' : ''
}

const isSelectedFilterMode = (filterType) => {
  return appointmentsFilterType.value === filterType ? "border-b-2 border-b-solid border-b-sky-600" : ""
}

const currentDateToTime = new Date().getTime();
const filteringByMode = {
  "Upcoming"({ date }) {
    const dateToTime = new Date(date).getTime();
    return dateToTime >= currentDateToTime;
  },
  "Missed"({ date }) {
    const dateToTime = new Date(date).getTime();
    return dateToTime < currentDateToTime;
  },
  "Completed"({ status }) {
    return status == "Completed"
  }
};

const getTimeFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
</script>