<template>
  <div class="h-full relative">
    <ClientOnly>
      <section style="color: #888888;" class="h-10 flex justify-around items-stretch">
        <button @click="appointmentsFilterType = 'Upcoming'"
          :class="`w-1/3 ${isSelectedFilterMode('Upcoming')}`">Upcoming</button>
        <button @click="appointmentsFilterType = 'Missed'"
          :class="`w-1/3 ${isSelectedFilterMode('Missed')}`">Missed</button>
        <button @click="appointmentsFilterType = 'Completed'"
          :class="`w-1/3 ${isSelectedFilterMode('Completed')}`">Completed</button>
      </section>

      <AppointmentsList :appointments="filteredAppointments" />

      <li class="h-12 text-center flex items-center justify-center">
        <p class="underline text-teal-500">View past appointments ></p>
      </li>

      <NuxtLink to="/appointments/new"
        class="absolute bottom-3 right-3 w-[60px] h-[60px] bg-teal-500 rounded-full flex items-center justify-center">
        <Icon name="mdi:plus" size="2em" color="white"></Icon>
      </NuxtLink>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

authStore
  .getCurrentUser()
  .then((user) => {
    console.log("Hola como estas este es el user: ", user)
  })

useHead({
  title: "Appointments",
  meta: [
    {
      name: "description",
      content: "Appointments page"
    }
  ]
})


import { mockAppointments } from "@/mocks/appointments";
const appointments = ref(mockAppointments);


const appointmentsFilterType = ref("Upcoming");
const filteredAppointments = computed(
  () => {
    return appointments.value
      .filter(filteringByMode[appointmentsFilterType.value])
  }
)

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

const currentDateToTime = new Date().getTime();

const isSelectedFilterMode = (filterType) => {
  return appointmentsFilterType.value === filterType ? "border-b-2 border-b-solid border-b-teal-500 text-teal-500" : ""
}
</script>