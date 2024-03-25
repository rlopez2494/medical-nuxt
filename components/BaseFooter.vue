<template>
  <div class="w-full">
    <footer class="bg-sky-100 h-16">
      <div class="h-full flex items-center justify-around">

        <NuxtLink to="/" class="text-center">
          <Icon name="mdi:home-circle" color="#888888" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm" style="color: #888888">Home</p>
        </NuxtLink>

        <NuxtLink to="/appointments" class="text-center">
          <Icon name="mdi:calendar-clock" color="#888888" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm" style="color: #888888">Appointments</p>
        </NuxtLink>

        <NuxtLink to="/patients" class="text-center">
          <Icon name="mdi:book-open-variant" color="#888888" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm" style="color: #888888">Patient List</p>
        </NuxtLink>

        <NuxtLink to="/profile" class="text-center">
          <Icon name="mdi:account-outline" color="#888888" size="2em" />
          <br class="m-0 p-0">
          <p class="mb-0 text-sm" style="color: #888888">Profile</p>
        </NuxtLink>

      </div>
    </footer>
  </div>

</template>