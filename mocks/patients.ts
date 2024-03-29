import { faker } from "@faker-js/faker";

const generateMockPatient = () => {
  const createdAt = faker.date.between({
    from: '2024-01-01T00:00:00.000Z',
    to: '2024-06-01T00:00:00.000Z'
  });

  const updatedAt = faker.date.between({
    from: '2024-06-03T00:00:00.000Z',
    to: '2024-08-01T00:00:00.000Z'
  })

  const newBirthDate = faker.date.birthdate();

  const getAge = (dateString: any) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return {
    profilePicture: "https://picsum.photos/600",
    identityCardNumber: faker.helpers.rangeToNumber({ min: 1, max: 10000000 }),
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: newBirthDate,
    email: faker.internet.email(),
    age: getAge(newBirthDate), // UI specific age transformation
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    height: faker.number.int({ min: 150, max: 200 }),
    weight: faker.number.int({ min: 40, max: 300 }),
    otherDisabilities: faker.helpers.arrayElement(['None', 'Hearing', 'Vision', 'Physical']),
    bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    emergencyContact: faker.phone.number(),
    phoneNumber: faker.phone.number(),
    hereditaryConditions: faker.helpers.arrayElement(['None', 'Diabetes', 'Cancer', 'Heart Disease']),

    // Database fields
    updatedAt,
    createdAt,
  }
};

export const getMockPatients = ({ length = 10 } = {}) =>
  Array.from({ length }, () => generateMockPatient());

export const getMockPatient = () => generateMockPatient();