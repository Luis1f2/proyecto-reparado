import { Medicine } from "./entities/Medicine";

export interface MedicineRepository {
    save(medicine: Medicine): Promise<void>;
    getById(id: number): Promise<Medicine | null>;
    getAll(): Promise<Medicine[]>;
    update(id: number, medicine: Partial<Medicine>): Promise<void>;
    delete(id: number): Promise<void>;
}
