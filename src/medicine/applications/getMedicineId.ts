import { Medicine } from "../domain/entities/Medicine";
import { MedicineRepository } from "../domain/medicine_repository";

export class GetMedicineById {
    constructor(private readonly repo: MedicineRepository) {}
  
    async execute(id: number): Promise<Medicine | null> {
      return await this.repo.getById(id);
    }
  }
