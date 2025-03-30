import { Dose } from "../domain/entities/Dose";

export interface DoseRepository {
  getAll(): Promise<Dose[]>;
  getById(id: number): Promise<Dose | null>;
  save(dose: Dose): Promise<void>;
  update(id: number, dose: Dose): Promise<void>;
  delete(id: number): Promise<void>;
}
