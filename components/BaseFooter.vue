<template>
  <div class="w-full" style="color: #888888;">
    <footer class="bg-neutral-50 h-16">
      <div class="grid grid-cols-3 pt-2">
        <NuxtLink to="/appointments" active-class="text-teal-500" class="text-center">
          <Icon name="mdi:calendar-clock" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm">Appointments</p>
        </NuxtLink>

        <NuxtLink to="/patients" active-class="text-teal-500" class="text-center">
          <Icon name="mdi:book-open-variant" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm">Patient List</p>
        </NuxtLink>

        <NuxtLink to="/profile" active-class="text-teal-500" class="text-center">
          <Icon name="mdi:account-outline" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm">Profile</p>
        </NuxtLink>
      </div>
    </footer>
  </div>

</template>