import { Request, Response } from "express";
import { MySQLDoseRepository } from "../mysql_dose";
import { saveDose } from "../../../dose/applications/saveDose";

const repo = new MySQLDoseRepository();

export const saveDoseController = async (req: Request, res: Response) => {
  try {
    const dose = req.body;
    await saveDose(repo)(dose);
    res.status(201).json({ message: "Dosis creada con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear dosis" });
  }
};
