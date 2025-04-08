import { Request, Response } from 'express';
import { GetAllMedicines } from "../../applications/getAlllMedicine";

export class GetAllMedicinesController {
  constructor(private getAllMedicines: GetAllMedicines) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const medicines = await this.getAllMedicines.execute();
      res.status(200).json(medicines);
    } catch (error) {
      console.error('Error al obtener medicamentos:', error);
      res.status(500).json({ message: 'Error al obtener medicamentos' });
    }
  }
}
