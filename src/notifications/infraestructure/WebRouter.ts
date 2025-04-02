import { Notifier } from "../domain/notifier";
import { Notification } from "../domain/entities/Notification";
import { broadcast } from "../../../main";

export class WebSocketNotifier implements Notifier {
    notify(notification: Notification): void {
        const message = JSON.stringify(notification);
        broadcast(message);
    }
}