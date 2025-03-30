import { MedicineRepository } from "../domain/medicine_repository";

export class DeleteMedicine {
    constructor(private readonly repo: MedicineRepository) {}
  
    async execute(id: number): Promise<void> {
      await this.repo.delete(id);
    }
  }