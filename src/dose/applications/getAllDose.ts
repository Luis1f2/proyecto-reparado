import { DoseRepository } from "../domain/dose_repository";

export const getAllDose = (repo: DoseRepository) => {
  return async () => {
    return await repo.getAll();
  };
};
