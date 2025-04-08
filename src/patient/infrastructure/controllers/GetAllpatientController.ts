import { Request, Response } from 'express';
import { GetAllPatiens } from "../../application/GetAllPatiens";

export class GetAllPatientController {
    constructor(private getAllPatients: GetAllPatiens) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const patients = await this.getAllPatients.execute();
            res.status(200).json(patients);
        } catch (error) {
            console.error('Error al obtener pacientes:', error);
            res.status(500).json({ message: 'Error al obtener pacientes' });
        }
    }
}
