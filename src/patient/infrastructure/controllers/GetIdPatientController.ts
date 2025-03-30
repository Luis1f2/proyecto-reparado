import { RequestHandler } from "express";
import { GetPatientById } from "../../application/GetPatiensById";

export class GetPacienteByIdController {
  constructor(private getPacienteById: GetPatientById) {}

  handle: RequestHandler = async (req, res) => {
    try {
      const paciente = await this.getPacienteById.execute(req.params.id);
      if (paciente) {
        res.json(paciente);
      } else {
         res.status(404).json({ message: "Paciente no encontrado" });
      }
    } catch (error) {
       res.status(500).json({ message: "Error obteniendo paciente" });
    }
  };
}
