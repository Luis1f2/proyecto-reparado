import { PatientRepository } from "../domain/Patient_Repositorie";

export class DeletePatient {
  constructor(private patientRepository: PatientRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.patientRepository.delete(id);
  }
}
