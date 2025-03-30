import { Request, Response } from 'express';
import { UpdateMedicine } from "../../applications/updateMedicine";

export class UpdateMedicineController {
  constructor(private readonly updateMedicine: UpdateMedicine) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updates = req.body;

    const numericId = parseInt(id);
    if (isNaN(numericId) || numericId <= 0) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    try {
      await this.updateMedicine.execute(numericId, updates);
      res.status(200).json({ message: 'Medicamento actualizado correctamente' });
    } catch (err: any) {
      res.status(500).json({ error: 'Error al actualizar el medicamento', details: err.message });
    }
  }
}
