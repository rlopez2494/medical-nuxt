
interface ProfileDTO {
  firstName: string;
  middleName?: string;
  lastName: string
  citizenId: string;
  birthDate: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

interface DoctorProfileDTO extends ProfileDTO {
  userId: string;
  title: string;
  name: string;
  medicalLicenseNumber: string;
}

interface PatientProfileDTO extends ProfileDTO {
  id: string;
  height: number;
  weight: number;
  otherDisabilities: string[];
  bloodType: string;
  emergencyContact: string;
  hereditaryConditions: string[];
}

export default interface UserProfilesRepository {
  createDoctorProfile({ data }: { data: DoctorProfileDTO }): Promise<DoctorProfileDTO>
  createPatientProfile({ data }: { data: PatientProfileDTO }): Promise<PatientProfileDTO>
}