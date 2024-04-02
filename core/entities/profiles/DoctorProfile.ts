import validate from "validate.js";

export default class DoctorProfile {
  userId: string | null;
  name: string | null;
  title: string | null;
  medicalLicenseNumber: string | null;

  // Database fields
  updatedAt?: string | null;
  createdAt?: string | null;

  constructor({
    userId = null,
    name = null,
    title = null,
    medicalLicenseNumber = null,
    updatedAt = null,
    createdAt = null,
  }) {
    this.userId = userId;
    this.name = name;
    this.title = title;
    this.medicalLicenseNumber = medicalLicenseNumber;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }

  validate({ skip = [] }) {
    const presenceTrue = {
      presence: true,
    };

    // 
    const constraints = {
      userId: skip.includes('userId' as never) ? {} : presenceTrue,
      name: presenceTrue,
      title: presenceTrue,
      medicalLicenseNumber: presenceTrue,
    };

    return validate(this, constraints);
  }

  getJSON() {
    return {
      userId: this.userId,
      name: this.name,
      title: this.title,
      medicalLicenseNumber: this.medicalLicenseNumber,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    };
  }
}