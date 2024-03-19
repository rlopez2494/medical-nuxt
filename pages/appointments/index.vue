<template>
  <div>
    <ClientOnly>
      <AppointmentsList :appointments="appointments" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { faker } from "@faker-js/faker";

const getMockAppointment = () => {
  const newBirthDate = faker.date.birthdate();

  return {
    id: faker.string.uuid(),
    patientId: {
      profilePicture: "https://picsum.photos/600",
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      birthDate: newBirthDate,
      age: getAge(newBirthDate),
    },
    doctorId: faker.string.uuid(),
    date: faker.date.between({
      from: '2024-01-01T00:00:00.000Z',
      to: '2024-06-01T00:00:00.000Z'
    }),
    status: faker.helpers.arrayElement(['Open', 'Closed', 'Canceled', 'Completed']),
  }
};

const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const appointments = [
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
  getMockAppointment(),
]
</script>