import { Dose } from "../domain/entities/Dose";
import { DoseRepository } from "../domain/dose_repository";
import  pool  from "../../database/db_Mysql"; 

export class MySQLDoseRepository implements DoseRepository {
  async getAll(): Promise<Dose[]> {
    const [rows] = await pool.query("SELECT * FROM Dosis");
    return rows as Dose[];
  }

  async getById(id: number): Promise<Dose | null> {
    const [rows]: any = await pool.query("SELECT * FROM Dosis WHERE id_dosis = ?", [id]);
    return rows.length ? rows[0] as Dose : null;
  }

  async save(dose: Dose): Promise<void> {
    await pool.query(
      "INSERT INTO Dosis (id_medicamento, cantidad, horario, frecuencia) VALUES (?, ?, ?, ?)",
      [dose.id_medicamento, dose.cantidad, dose.horario, dose.frecuencia]
    );
  }

  async update(id: number, dose: Dose): Promise<void> {
    await pool.query(
      "UPDATE Dosis SET id_medicamento = ?, cantidad = ?, horario = ?, frecuencia = ? WHERE id_dosis = ?",
      [dose.id_medicamento, dose.cantidad, dose.horario, dose.frecuencia, id]
    );
  }

  async delete(id: number): Promise<void> {
    await pool.query("DELETE FROM Dosis WHERE id_dosis = ?", [id]);
  }
}
