import { RFIDRepository } from '../../domain/repositories/RFIDRepository';
import { RFID } from '../../domain/entities/RFID';
import pool from '../../../database/db_Mysql';

export class RFIDMySQLRepository implements RFIDRepository {
    async save(rfid: RFID): Promise<void> {
        try {
            await pool.query('INSERT INTO RFID (codigo_rfid) VALUES (?)', [rfid.codigo_rfid]);
        } catch (err: any) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new Error('DUPLICATE_RFID');
            }
            throw err;
        }
    }


    async getLatest(): Promise<RFID | null> {
        const [rows]: any = await pool.query(`
            SELECT * FROM RFID ORDER BY fecha_escaneo DESC LIMIT 1
        `);

        if (rows.length === 0) return null;

        const row = rows[0];
        return new RFID(row.codigo_rfid, row.fecha_escaneo, row.estado);
    }
}
