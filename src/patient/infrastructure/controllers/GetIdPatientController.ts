import { Request, Response } from 'express';
import { GetPatientById } from "../../application/GetPatiensById";

export class GetPacienteByIdController {
    constructor(private getPatientById: GetPatientById) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.idPatient;
            const patient = await this.getPatientById.execute(id);
            
            if (!patient) {
                res.status(404).json({ message: 'Paciente no encontrado' });
                return;
            }

            res.status(200).json(patient);
        } catch (error) {
            console.error('Error al obtener paciente:', error);
            res.status(500).json({ message: 'Error al obtener paciente' });
        }
    }
}
