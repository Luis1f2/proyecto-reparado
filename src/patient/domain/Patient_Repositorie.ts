import { Paciente } from "./entities/Patient";

export interface PatientRepository {
  register(patient: Paciente): Promise<Paciente>;
  update(id: string, patient: Partial<Paciente>): Promise<Paciente | null>;
  delete(id: string): Promise<boolean>;
  getAll(): Promise<Paciente[]>;
  getById(id: string): Promise<Paciente | null>;
}
