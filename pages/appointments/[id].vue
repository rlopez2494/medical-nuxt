<template>
  <div class="mx-auto">
    <section class="px-2 py-4 bg-teal-100" style="color: #888888;">
      <p class="text-center text-emerald-500 text-l font-medium">Wed, 12 May 24 | 10:00 PM</p>
      <div class="grid grid-cols-3 gap-2 pt-4 text-sm">
        <button type="button" class="bg-neutral-50 py-3 rounded-md shadow">
          <Icon name="mdi:check-circle-outline" size="2em" color="green"></Icon>
          <p class="mt-2">Mark as Completed</p>
        </button>
        <button type="button" class="bg-neutral-50 py-3 rounded-md shadow">
          <Icon name="mdi:delete" size="2em" color="red"></Icon>
          <p class="mt-2">Cancel Appointment</p>
        </button>
        <button type="button" class="bg-neutral-50 py-3 rounded-md shadow">
          <Icon name="mdi:history" size="2em" color="orange"></Icon>
          <p class="mt-2">Reschedule Appointment</p>
        </button>
      </div>
    </section>

    <section style="color: #888888;">
      <div class="bg-neutral-100 h-10 flex items-center justify-center">
        <p>Patient Details</p>
      </div>

      <div class="px-2 mt-1 font-light">
        <div class="flex items-center justify-between">
          <p class="text-start">Age:</p>
          <p class="text-end">25 years</p>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-start">Gender</p>
          <p class="text-end">Female</p>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-start">Phone No.:</p>
          <p class="text-end">1234567890</p>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-start">Address:</p>
          <p class="text-end">123, Main Street, New York</p>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-start">Medical History:</p>
          <p class="text-end">None</p>
        </div>
      </div>
    </section>

    <section class="mt-3" style="color: #888888;">
      <div class="bg-neutral-100 h-10 flex items-center justify-center">
        <p>Prescriptions</p>
      </div>

      <div class="grid grid-cols-2 gap-2 px-3 mt-3">
        <div>
          <img class="rounded-sm mx-auto" src="https://picsum.photos/600" width="600" height="600"
            alt="prescription-image">
        </div>
        <div>
          <img class="rounded-sm mx-auto" src="https://picsum.photos/600" width="600" height="600"
            alt="prescription-image">
        </div>
        <div>
          <img class="rounded-sm mx-auto" src="https://picsum.photos/600" width="600" height="600"
            alt="prescription-image">
        </div>
      </div>

    </section>
  </div>
</template>