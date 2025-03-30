import { Medicine } from "../domain/entities/Medicine";
import { MedicineRepository } from "../domain/medicine_repository";

export class UpdateMedicine {
    constructor(private readonly repo: MedicineRepository) {}
  
    async execute(id: number, updates: Partial<Medicine>): Promise<void> {
      await this.repo.update(id, updates);
    }
  }
