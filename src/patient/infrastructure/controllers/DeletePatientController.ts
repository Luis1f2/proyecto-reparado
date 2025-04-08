import { Request, Response } from 'express';
import { DeletePatient } from "../../application/DeletePatient";

export class DeletePatientController {
  constructor(private deletePatient: DeletePatient) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.idPatient;
      await this.deletePatient.execute(id);
      res.status(200).json({ message: 'Paciente eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar paciente:', error);
      res.status(500).json({ message: 'Error al eliminar paciente' });
    }
  }
}
