import { Request, Response } from 'express';
import { GetMedicineById } from "../../applications/getMedicineId";

export class GetMedicineByIdController {
  constructor(private readonly getMedicineById: GetMedicineById) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const numericId = parseInt(id);
    if (isNaN(numericId) || numericId <= 0) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    try {
      const medicine = await this.getMedicineById.execute(numericId);

      if (!medicine) {
        res.status(404).json({ error: 'Medicamento no encontrado' });
        return;
      }

      res.status(200).json(medicine);
    } catch (err: any) {
      res.status(500).json({
        error: 'Error al obtener el medicamento',
        details: err.message,
      });
    }
  }
}
