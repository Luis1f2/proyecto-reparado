import { MedicineRepository } from "../domain/medicine_repository";
import { Medicine } from "../domain/entities/Medicine";
import pool from "../../database/db_Mysql";

export class MySQLMedicineRepository implements MedicineRepository {
  async save(medicine: Medicine): Promise<void> {
    await pool.query('INSERT INTO medicamento SET ?', [medicine]);
  }

  async update(id: number, medicine: Partial<Medicine>): Promise<void> {
    await pool.query('UPDATE medicamento SET ? WHERE id_medicamento = ?', [medicine, id]);
  }

  async delete(id: number): Promise<void> {
    await pool.query('DELETE FROM medicamento WHERE id_medicamento = ?', [id]);
  }

  async getAll(): Promise<Medicine[]> {
    const [rows] = await pool.query('SELECT * FROM medicamento');
    return rows as Medicine[];
  }

  async getById(id: number): Promise<Medicine | null> {
    const [rows]: any = await pool.query('SELECT * FROM medicamento WHERE id_medicamento = ?', [id]);
    return rows[0] || null;
  }
}
