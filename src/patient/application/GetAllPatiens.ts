import { PatientRepository  } from "../domain/Patient_Repositorie";

export class GetAllPatiens {
  constructor(private patientRepository : PatientRepository ) {}

  async execute() {
    return await this.patientRepository.getAll();
  }
}
