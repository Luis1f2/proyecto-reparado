import { Request, Response } from "express";
import { MySQLDoseRepository } from "../mysql_dose";
import { getDoseById } from "../../applications/getDoseById";

const repo = new MySQLDoseRepository();

export const getDoseByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const dose = await getDoseById(repo)(id);
    if (!dose) 
      res.status(404).json({ message: "Dosis no encontrada" });
    res.json(dose);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener dosis" });
  }
};