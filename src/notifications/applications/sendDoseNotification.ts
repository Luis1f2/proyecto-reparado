import { DoseRepository } from "../domain/doseRepository";
import { Notifier } from "../domain/notifier";
import { Notification } from "../domain/entities/Notification";

export const sendDoseNotifications = async (
  doseRepo: DoseRepository,
  notifier: Notifier
) => {
  const pendientes = await doseRepo.getPending();

  for (const d of pendientes) {
    const notification: Notification = {
      tipo: "notificacion_dosis",
      paciente: d.pacienteNombre,
      medicamento: d.medicamentoNombre,
      hora: d.hora,
      dosisId: d.id_dosis,
    };

    notifier.notify(notification);
    await doseRepo.markAsNotified(d.id_dosis);
  }

  await doseRepo.resetUnaccepted();
};
