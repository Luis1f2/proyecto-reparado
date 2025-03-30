import { DoseRepository } from "../domain/dose_repository";

export const deleteDose = (repo: DoseRepository) => {
    return async (id: number) => {
        await repo.delete(id);
    };
};
