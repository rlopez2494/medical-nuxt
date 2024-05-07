<template>
  <div class="h-full flex flex-col">
    <div class="flex-grow overflow-y-scroll">
      <section class="relative px-3">
        <BaseAutocomplete v-model="appointmentForm.patientId"
          :item-text="(item) => `${item.firstName} ${item.lastName} (${item.email})`" label="Patient" :items="patients"
          item-value="id">
          <template #item-content="{ item }">
            <div class="flex items-center">
              <p class="font-bold text-start mr-1">{{ item.firstName }} {{ item.lastName }}</p>
              <p class="text-sm text-end">({{ item.email }})</p>
            </div>
          </template>

          <template #list-prepend="{ clearSearch }">
            <button @click="clearSearch(); patientFormDialog = true" type="button"
              class="bg-sky-600 text-white w-full h-full rounded-t-md my-1 py-2 border border-solid border-y-gray-300">
              <p class="text-center">Add New Patient</p>
            </button>
          </template>
        </BaseAutocomplete>
      </section>

      <section v-if="patientFormDialog">
        <PatientsPatientForm @close="patientFormDialog = false;">

        </PatientsPatientForm>
      </section>

      <section>
        <VDatePicker mode="date" color="blue" borderless expanded v-model.string="appointmentForm.date"
          :attributes="attrs" />
      </section>

      <section>
        <div class="mt-3 bg-teal-500">
          <h2 class="py-2 text-center text-white">Duration</h2>
        </div>

        <div class="px-3">
          <BaseSelect label="From" :items="hourSlotOptions" v-model="appointmentForm.from" />
          <BaseSelect label="To" :items="hourSlotOptions" v-model="appointmentForm.to" />
        </div>
      </section>

      <section>
        <div class="mt-3 border border-solid border-y-gray-300 bg-teal-500">
          <h2 class="my-2 text-center text-white">Status</h2>
        </div>

        <div class="px-3">
          <BaseSelect label="Status" :items="appointmentStatuses" v-model="appointmentForm.status" />
        </div>
      </section>
    </div>

    <section class="px-3 py-4 grid gap-3 grid-cols-2 justify-items-stretch">
      <BaseButton outlined>
        Cancel
      </BaseButton>

      <BaseButton @click="submitAppointment">
        Save
      </BaseButton>
    </section>
  </div>
</template>

<script setup>
import { getMockPatients } from '@/mocks/patients';
import Appointment from "@/core/entities/Appointment";

const appointmentForm = reactive({
  patientId: null,
  date: new Date().toISOString().split('T')[0],
  from: "",
  to: "",
  status: "Open",
  doctorId: null,
});

const submitAppointment = () => {
  const appointmentInstance = new Appointment(appointmentForm);
  // Logic to save appointment
}

const appointmentStatuses = [
  "Open",
  "Closed",
  "Cancelled"
]

const hourSlotOptions = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 AM",
  "12:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
]

const patientFormDialog = ref(false);
const patients = ref(getMockPatients());

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date()
  }
]);
</script>