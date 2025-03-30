import { PatientRepository } from "../domain/Patient_Repositorie";
import { Paciente } from "../domain/entities/Patient";

export class UpdatePatient {
  constructor(private patientRepository: PatientRepository) {}

  async execute(id: string, paciente: Partial<Paciente>): Promise<Paciente | null> {
    return await this.patientRepository.update(id, paciente);
  }
}
