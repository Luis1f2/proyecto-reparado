import { Request, Response } from 'express';
import { GetMedicineById } from "../../applications/getMedicineId";

export class GetMedicineByIdController {
  constructor(private readonly getMedicineById: GetMedicineById) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.idMedication);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID inválido' });
        return;
      }
      
      const medicine = await this.getMedicineById.execute(id);
      
      if (!medicine) {
        res.status(404).json({ message: 'Medicamento no encontrado' });
        return;
      }

      res.status(200).json(medicine);
    } catch (error) {
      console.error('Error al obtener medicamento:', error);
      res.status(500).json({ message: 'Error al obtener medicamento' });
    }
  }
}
