import { Notification } from './entities/Notification';

export interface NotificationRepository {
    save(notification: Notification): Promise<number>;
}
