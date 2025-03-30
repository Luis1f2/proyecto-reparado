import { Request, Response } from 'express';
import { SaveMedicine } from "../../applications/saveMedicine";

export class SaveMedicineController {
  constructor(private readonly saveMedicine: SaveMedicine) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id_paciente, nombre, rfid, fecha_inicio, fecha_final, notas } = req.body;

    if (!id_paciente || !nombre) {
      res.status(400).json({ error: 'id_paciente y nombre son obligatorios' });
      return;
    }

    if (typeof nombre !== 'string' || nombre.trim() === '') {
      res.status(400).json({ error: 'El nombre no puede estar vacío' });
      return;
    }

    try {
      await this.saveMedicine.execute({
        id_medicamento: 0,
        id_paciente,
        nombre: nombre.trim(),
        rfid: rfid?.trim() ?? null,
        fecha_inicio,
        fecha_final,
        notas: notas?.trim() ?? 'Sin notas',
      });

      res.status(201).json({ message: 'Medicamento guardado exitosamente' });
    } catch (err: any) {
      res.status(500).json({
        error: 'Error al guardar el medicamento',
        details: err.message,
      });
    }
  }
}
