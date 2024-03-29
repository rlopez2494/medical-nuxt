<template>
  <BaseModal v-model="isPatientFormDialogVisible">
    <section>
      <PatientsPatientForm @close="isPatientFormDialogVisible = false;" />
    </section>
  </BaseModal>

  <BaseListItem>
    <template v-slot:prepend>
      <img :src="patient.profilePicture" class="rounded-full h-14 w-14 mt-1 my-3">
    </template>

    <template v-slot:content>
      <section class="flex flex-col justify-center relative translate-x-[-8px] my-3">
        <div>
          <p class="font-semibold mb-0">
            {{ getFullName(patient) }}
          </p>

        </div>
        <div class="grid grid-cols-11 w-full">
          <p style="color: #888888;" class="col-span-5">
            <Icon name="mdi:phone"></Icon> {{ patient.phoneNumber }}
          </p>
          <p class="col-span-1 text-center"> | </p>
          <a class="col-span-5 text-cyan-500" @click="openPatientFormDialog">View
            Details</a>
        </div>
      </section>
    </template>
  </BaseListItem>

  <section>
    <div class="h-10 flex items-center px-3 border-t-2 border-t-solid border-b-gray-100">
      <h1 class="text-lg text-neutral-400">Appointments</h1>
    </div>

    <ul class="px-2">
      <NuxtLink v-for="(appointment, index) in appointments" :to="`/appointments/${appointment.id}`" :key="index">
        <BaseListItem>
          <template v-slot:content>
            <section class="flex flex-col justify-center text-neutral-500">
              <div>
                <p :class="{ 'mb-0': true, 'text-teal-500 font-semibold': index == 0 }">
                  {{ getTimeFromDate(appointment.date) }}
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
  </section>
</template>

<script setup>
import { getMockPatient } from "@/mocks/patients"
import { mockAppointments } from "@/mocks/appointments"

const isPatientFormDialogVisible = ref(false);
const openPatientFormDialog = () => {
  isPatientFormDialogVisible.value = true;
}

const patient = ref(getMockPatient());
const appointments = ref(mockAppointments.slice(0, 3));

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