import { Request, Response } from 'express';
import { GetAllMedicines } from "../../applications/getAlllMedicine";

export class GetAllMedicinesController {
  constructor(private readonly getAllMedicines: GetAllMedicines) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const medicines = await this.getAllMedicines.execute();
      res.status(200).json(medicines);
    } catch (err: any) {
      res.status(500).json({
        error: 'Error al obtener los medicamentos',
        details: err.message,
      });
    }
  }
}
