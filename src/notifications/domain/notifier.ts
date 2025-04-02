import { Notification } from './entities/Notification';

export interface Notifier {
    send(notification: Notification): void;
}
