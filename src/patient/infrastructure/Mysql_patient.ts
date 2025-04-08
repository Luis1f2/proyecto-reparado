import { PatientRepository } from "../domain/Patient_Repositorie";
import { Paciente } from "../domain/entities/Patient"
import pool from "../../database/db_Mysql";

export class MySQLPacienteRepository implements PatientRepository {
    async register(paciente: Paciente): Promise<Paciente> {
        await pool.query("INSERT INTO Paciente SET ?", [paciente]);
        return paciente;
      }
    
      async update(id: string, paciente: Partial<Paciente>): Promise<Paciente | null> {
        const numericId = parseInt(id);
    
       
        const camposActualizables: Partial<Paciente> = {
            nombre: paciente.nombre,
            genero: paciente.genero,
            fecha_nacimiento: paciente.fecha_nacimiento,
            direccion: paciente.direccion,
            telefono: paciente.telefono,
            grupo_sanguineo: paciente.grupo_sanguineo,
            peso: paciente.peso,
            alergias: paciente.alergias,
            enfermedades_pers: paciente.enfermedades_pers
        };
    
        await pool.query("UPDATE Paciente SET ? WHERE id_paciente = ?", [camposActualizables, numericId]);
        return this.getById(id);
    }
    
    
      async delete(id: string): Promise<boolean> {
        const numericId = parseInt(id);
        const [result] = await pool.query("DELETE FROM Paciente WHERE id_paciente = ?", [numericId]);
        return (result as any).affectedRows > 0;
      }
    
      async getAll(): Promise<Paciente[]> {
        const [rows] = await pool.query("SELECT * FROM Paciente");
        return rows as Paciente[];
      }
    
      async getById(id: string): Promise<Paciente | null> {
        const numericId = parseInt(id);
        const [rows]: any = await pool.query("SELECT * FROM Paciente WHERE id_paciente = ?", [numericId]);
        return rows[0] || null;
      }
}