import { Notification } from './entities/Notification';

export interface Notifier {
    notify(notification: Notification): void;
}