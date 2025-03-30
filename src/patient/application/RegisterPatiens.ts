import { Paciente } from "../domain/entities/Patient";
import { PatientRepository } from "../domain/Patient_Repositorie";

export class RegisterPatiens {
    constructor(private patientRepository: PatientRepository) {}

    async execute(paciente: Paciente): Promise<Paciente> {
        return await this.patientRepository.register(paciente);
    }
}