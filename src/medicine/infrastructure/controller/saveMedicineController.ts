import { Request, Response } from 'express';
import { SaveMedicine } from "../../applications/saveMedicine";

export class SaveMedicineController {
  constructor(private readonly saveMedicine: SaveMedicine) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      await this.saveMedicine.execute(req.body);
      res.status(201).json({ message: 'Medicamento registrado correctamente' });
    } catch (error) {
      console.error('Error al crear medicamento:', error);
      res.status(500).json({ message: 'Error al registrar medicamento' });
    }
  }
}
