import { Notifier } from "../domain/notifier";
import { Notification } from "../domain/entities/Notification";
import { broadcast } from "../../../main";

export class WebSocketNotifier implements Notifier {
    send(notification: Notification): void {
        broadcast(JSON.stringify({ type: 'notificacion', data: notification }));
    }
}
