import { Medicine } from "../domain/entities/Medicine";
import { MedicineRepository } from "../domain/medicine_repository";

export class SaveMedicine {
  constructor(private readonly repo: MedicineRepository) {}

  async execute(medicine: Medicine): Promise<void> {
    if (!medicine.nombre || !medicine.id_paciente) {
      throw new Error('Nombre e ID de paciente son requeridos');
    }

    await this.repo.save(medicine);
  }
}
