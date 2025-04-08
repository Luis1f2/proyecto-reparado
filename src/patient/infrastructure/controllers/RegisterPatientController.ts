import { Request, Response } from 'express';
import { RegisterPatiens } from "../../application/RegisterPatiens";

export class RegisterPatientController {
    constructor(private registerPatient: RegisterPatiens) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            await this.registerPatient.execute(req.body);
            res.status(201).json({ message: 'Paciente registrado correctamente' });
        } catch (error) {
            console.error('Error al crear paciente:', error);
            res.status(500).json({ message: 'Error al registrar paciente' });
        }
    }
}
