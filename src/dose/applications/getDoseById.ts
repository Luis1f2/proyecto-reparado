import { DoseRepository } from "../domain/dose_repository";

export const getDoseById = (repo: DoseRepository) => {
  return async (id: number) => {
    return await repo.getById(id);
  };
};
