<template>
  <div>
    <section class="relative mx-3">
      <BaseAutocomplete v-model="selectedPatient"
        :item-text="(item) => `${item.firstName} ${item.lastName} (${item.email})`" label="Patient" :items="patients"
        return-object>
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
      <VDatePicker color="blue" borderless expanded v-model="date" :attributes="attrs" />
    </section>

    <section>
      <div class="mt-3 border border-solid border-y-gray-300">
        <h2 class="my-2 text-center">Slots Available</h2>
      </div>

      <div class="px-3 pt-5 grid grid-cols-3 gap-2">
        <button :class="filterButtonClass">10:00 AM</button>
        <button :class="filterButtonClass">10:30 AM</button>
        <button :class="filterButtonClass">11:00 AM</button>
        <button :class="filterButtonClass">11:30 AM</button>
        <button :class="filterButtonClass">12:00 AM</button>
        <button :class="filterButtonClass">12:30 AM</button>
        <button :class="filterButtonClass">01:00 PM</button>
        <button :class="filterButtonClass">01:30 PM</button>
        <button :class="filterButtonClass">02:00 PM</button>
        <button :class="filterButtonClass">02:30 PM</button>
        <button :class="filterButtonClass">03:00 PM</button>
        <button :class="filterButtonClass">03:30 PM</button>
        <button :class="filterButtonClass">04:00 PM</button>
        <button :class="filterButtonClass">04:30 PM</button>
        <button :class="filterButtonClass">05:00 PM</button>
        <button :class="filterButtonClass">05:30 PM</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getMockPatients } from '@/mocks/patients';

const patientFormDialog = ref(false);
const patients = ref(getMockPatients());
const selectedPatient = ref(null);
const filterButtonClass = ref("bg-transparent border border-sky-600 py-2 px-4 p-1 rounded-sm");

const date = ref(new Date().toISOString().split('T')[0]);
const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date()
  }
]);
</script>