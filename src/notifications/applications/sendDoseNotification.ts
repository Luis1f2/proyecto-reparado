import { NotificationRepository } from "../domain/notificationRepository";
import { Notifier } from "../domain/notifier";
import { DoseRepository } from "../domain/doseRepository";

export class SendDoseNotification {
    constructor(
        private notificationRepo: NotificationRepository,
        private notifier: Notifier,
        private doseRepo: DoseRepository
    ) {}

    async execute() {
        const dosis = await this.doseRepo.getPending();

        for (const d of dosis) {
            const mensaje = `⏰ ${d.pacienteNombre} debe tomar su medicamento ahora.`;

            const id = await this.notificationRepo.save({
                mensaje,
                tipo: 'dosis',
                usuarioId: d.usuarioId,
                dosisId: d.id
            });

            this.notifier.send({
                id,
                mensaje,
                tipo: 'dosis',
                usuarioId: d.usuarioId,
                dosisId: d.id
            });

            await this.doseRepo.markAsNotified(d.id);
        }

        await this.doseRepo.resetUnaccepted();
    }
}
