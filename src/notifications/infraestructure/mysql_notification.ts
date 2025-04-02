import { NotificationRepository } from "../domain/notificationRepository";
import { Notification } from "../domain/entities/Notification";
import pool from '../../database/db_Mysql';

export class MySQLNotificationRepository implements NotificationRepository {
    async save(notification: Notification): Promise<number> {
        const [result]: any = await pool.query(
            'INSERT INTO notificaciones (mensaje, tipo, usuario_id, dosis_id) VALUES (?, ?, ?, ?)',
            [notification.mensaje, notification.tipo, notification.usuarioId, notification.dosisId]
        );
        return result.insertId;
    }
}
