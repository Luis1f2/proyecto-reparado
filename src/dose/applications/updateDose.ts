import { Dose } from "../domain/entities/Dose";
import { DoseRepository } from "../domain/dose_repository";

export const updateDose = (repo: DoseRepository) => {
  return async (id: number, dose: Dose) => {
    await repo.update(id, dose);
  };
};
