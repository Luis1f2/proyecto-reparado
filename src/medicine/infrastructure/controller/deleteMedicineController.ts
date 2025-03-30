import { Request, Response } from 'express';
import { DeleteMedicine } from "../../applications/deleteMedecine";

export class DeleteMedicineController {
  constructor(private readonly deleteMedicine: DeleteMedicine) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const numericId = parseInt(id);
    if (isNaN(numericId) || numericId <= 0) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    try {
      await this.deleteMedicine.execute(numericId);
      res.status(200).json({ message: 'Medicamento eliminado correctamente' });
    } catch (err: any) {
      res.status(500).json({ error: 'Error al eliminar el medicamento', details: err.message });
    }
  }
}
