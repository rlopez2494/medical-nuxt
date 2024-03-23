<template>
  <div>
    <ClientOnly>
      <AppointmentsList :appointments="appointments" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { mockAppointments } from "~/mocks/appointments";
const appointments = ref(mockAppointments);
</script>