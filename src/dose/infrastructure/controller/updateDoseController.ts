import { Request, Response } from "express";
import { MySQLDoseRepository } from "../mysql_dose";
import { updateDose } from "../../../dose/applications/updateDose";

const repo = new MySQLDoseRepository();

export const updateDoseController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const dose = req.body;
    await updateDose(repo)(id, dose);
    res.json({ message: "Dosis actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar dosis" });
  }
};
