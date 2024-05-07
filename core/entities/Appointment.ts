import validate from "validate.js";

export default class Appointment {
  id: string | null;
  patientId: string | null;
  doctorId: string | null;
  date: string | null;
  from: string | null;
  to: string | null;
  status: string | null;

  constructor({
    id = null,
    patientId = null,
    doctorId = null,
    from = null,
    to = null,
    date = null,
    status = null
  }) {
    this.id = id;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.from = from;
    this.to = to;
    this.date = date;
    this.status = status;
  }

  validate() {
    return validate(this, {
      id: {
        presence: true,
      },
      patientId: {
        presence: true,
      },
      doctorId: {
        presence: true,
      },
      from: {
        presence: true
      },
      to: {
        presence: true
      },
      date: {
        presence: true,
      },
      status: {
        presence: true,
      },
    })
  }

  getData() {
    return {
      id: this.id,
      patientId: this.patientId,
      doctorId: this.doctorId,
      from: this.from,
      to: this.to,
      date: this.date,
      status: this.status,
    }
  }
}