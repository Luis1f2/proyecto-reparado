import { Dose } from "../domain/entities/Dose";
import { DoseRepository } from "../domain/dose_repository";

export const saveDose = (repo: DoseRepository) => {
  return async (dose: Dose) => {
    await repo.save(dose);
  };
};
