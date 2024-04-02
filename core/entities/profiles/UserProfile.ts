import validate from "validate.js";

export default class UserProfile {
  userId: string;
  firstName: string;
  middleName?: string;
  lastName: string
  citizenId: string;
  birthDate: string;
  gender: string;
  createdAt: string;
  updatedAt: string;

  constructor({
    userId = null,
    firstName = null,
    middleName = null,
    lastName = null,
    citizenId = null,
    birthDate = null,
    gender = null,
    createdAt = null,
    updatedAt = null,
  }) {
    this.userId = userId as any
    this.firstName = firstName as any
    this.middleName = middleName as any
    this.lastName = lastName as any
    this.citizenId = citizenId as any
    this.birthDate = birthDate as any
    this.gender = gender as any
    this.createdAt = createdAt as any
    this.updatedAt = updatedAt as any
  }

  validate() {
    const presenceTrue = {
      presence: true,
    };

    // 
    const constraints = {
      userId: presenceTrue,
      firstName: presenceTrue,
      lastName: { ...presenceTrue },
      citizenId: presenceTrue,
      birthDate: presenceTrue,
      gender: presenceTrue,
    };

    return validate(this, constraints);
  }

  getJSON() {
    return {
      userId: this.userId,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      citizenId: this.citizenId,
      birthDate: this.birthDate,
      gender: this.gender,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    };
  }
}