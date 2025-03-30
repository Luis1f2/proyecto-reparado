import { RequestHandler } from "express";
import { RegisterPatiens } from "../../application/RegisterPatiens";

export class RegisterPatientController {
  constructor(private registerPatient: RegisterPatiens) {}

  handle: RequestHandler = async (req, res) => {
    try {
      await this.registerPatient.execute(req.body);
      res.status(201).json({ message: "Paciente creado" }); 
    } catch (error) {
      res.status(500).json({ message: "Error registrando paciente" });
    }
  };
  
}
