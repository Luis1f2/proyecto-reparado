import { Medicine } from "../domain/entities/Medicine";
import { MedicineRepository } from "../domain/medicine_repository";

export class GetAllMedicines {
    constructor(private readonly repo: MedicineRepository) {}
  
    async execute(): Promise<Medicine[]> {
      return await this.repo.getAll();
    }
  }