import { RequestHandler } from "express";
import { UpdatePatient } from "../../application/UpdatePatient";

export class UpdatePatientController {
  constructor(private actualizarPaciente: UpdatePatient) {}

  handle: RequestHandler = async (req, res) => {
    try {
      const pacienteActualizado = await this.actualizarPaciente.execute(req.params.id, req.body);
      if (pacienteActualizado) {
        res.json(pacienteActualizado);
      } else {
        res.status(404).json({ message: "Paciente no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error actualizando paciente" });
    }
  };
}
