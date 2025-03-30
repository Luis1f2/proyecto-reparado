import { RequestHandler } from "express";
import { GetAllPatiens } from "../../application/GetAllPatiens";

export class GetAllPatientController {
  constructor(private getAllPatiens: GetAllPatiens) {}

  handle: RequestHandler = async (_req, res) => {
    try {
      const pacientes = await this.getAllPatiens.execute();
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({ message: "Error obteniendo pacientes" });
    }
  };
}
