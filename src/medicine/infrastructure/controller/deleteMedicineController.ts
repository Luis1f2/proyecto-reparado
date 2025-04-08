import { Request, Response } from 'express';
import { DeleteMedicine } from "../../applications/deleteMedecine";

export class DeleteMedicineController {
  constructor(private readonly deleteMedicine: DeleteMedicine) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.idMedication);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID inválido' });
        return;
      }
      
      await this.deleteMedicine.execute(id);
      res.status(200).json({ message: 'Medicamento eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar medicamento:', error);
      res.status(500).json({ message: 'Error al eliminar medicamento' });
    }
  }
}
