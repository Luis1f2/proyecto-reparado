import { RequestHandler } from "express";
import { DeletePatient } from "../../application/DeletePatient";

export class DeletePatientController {
  constructor(private deletePatient: DeletePatient) {}

  handle: RequestHandler = async (req, res) => {
    try {
      const eliminado = await this.deletePatient.execute(req.params.id);
      if (eliminado) {
        res.status(204).send();
      } else {
         res.status(404).json({ message: "Paciente no encontrado" });
      }
    } catch (error) {
       res.status(500).json({ message: "Error eliminando paciente" });
    }
  };
}
