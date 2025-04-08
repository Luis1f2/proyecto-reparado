import { RequestHandler } from "express";
import { UpdatePatient } from "../../application/UpdatePatient";

export class UpdatePatientController {
  constructor(private actualizarPaciente: UpdatePatient) {}

  handle: RequestHandler = async (req, res) => {
    try {
      const id = parseInt(req.params.id as string, 10);

      if (isNaN(id)) {
        res.status(400).json({ message: "ID de paciente inválido" });
        return;
      }

      const pacienteActualizado = await this.actualizarPaciente.execute(id.toString(), req.body);

      if (pacienteActualizado) {
        res.json(pacienteActualizado);
      } else {
        res.status(404).json({ message: "Paciente no encontrado" });
      }
    } catch (error) {
      console.error("Error al actualizar paciente", error);
      res.status(500).json({ message: "Error actualizando paciente" });
    }
  };
}
