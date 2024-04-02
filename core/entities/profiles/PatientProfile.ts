import validate from "validate.js";

export default class PatientProfile {
  userId?: string | null;
  height: number | null;
  weight: number | null;
  otherDisabilities: string[] | null;
  bloodType: string | null;
  emergencyContact: string | null;
  hereditaryConditions: string[] | null;

  // Database fields
  updatedAt?: string | null;
  createdAt?: string | null;

  constructor({
    userId = null,
    height = null,
    weight = null,
    otherDisabilities = null,
    bloodType = null,
    emergencyContact = null,
    hereditaryConditions = null,

    // Database fields
    updatedAt = null,
    createdAt = null,
  }) {
    this.userId = userId;
    this.height = height;
    this.weight = weight;
    this.otherDisabilities = otherDisabilities;
    this.bloodType = bloodType;
    this.emergencyContact = emergencyContact;
    this.hereditaryConditions = hereditaryConditions;

    // Database fields
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }

  validate() {
    const presenceTrue = {
      presence: true,
    };

    // 
    const constraints = {
      userId: presenceTrue,
      weight: presenceTrue,
      height: presenceTrue,
      emergencyContact: presenceTrue,
    };

    return validate(this, constraints);
  }

  getJSON() {
    return {
      userId: this.userId,
      height: this.height,
      weight: this.weight,
      otherDisabilities: this.otherDisabilities,
      bloodType: this.bloodType,
      emergencyContact: this.emergencyContact,
      hereditaryConditions: this.hereditaryConditions,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    };
  }
}