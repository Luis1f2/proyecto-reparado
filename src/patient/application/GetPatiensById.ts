import { Paciente } from "../domain/entities/Patient";
import { PatientRepository } from "../domain/Patient_Repositorie";

export class GetPatientById {
  constructor(private patientRepository: PatientRepository) {}

  async execute(id: string): Promise<Paciente | null> {
    return await this.patientRepository.getById(id);
  }
}
