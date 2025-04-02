import { DoseRepository } from "../domain/doseRepository";
import pool from "../../database/db_Mysql";

export class MySQLDoseRepository implements DoseRepository {
    async getPending() {
        const [dosis]: any = await pool.query(`
            SELECT d.id, d.usuario_id as usuarioId, p.nombre as pacienteNombre
            FROM dosis d
            JOIN paciente p ON d.paciente_id = p.id
            WHERE TIME(d.hora) <= TIME(NOW())
              AND NOT d.notificada
              AND NOT d.aceptada
        `);
        return dosis;
    }

    async markAsNotified(doseId: number) {
        await pool.query(`
            UPDATE dosis 
            SET notificada = 1, hora_notificacion = NOW() 
            WHERE id = ?
        `, [doseId]);
    }

    async resetUnaccepted() {
        const [noAceptadas]: any = await pool.query(`
            SELECT id FROM dosis
            WHERE notificada = 1 
              AND aceptada = 0 
              AND hora_notificacion IS NOT NULL 
              AND TIMESTAMPDIFF(MINUTE, hora_notificacion, NOW()) >= 5
        `);

        for (const d of noAceptadas) {
            await pool.query(`
                UPDATE dosis 
                SET notificada = 0, hora_notificacion = NULL 
                WHERE id = ?
            `, [d.id]);
        }
    }
}
