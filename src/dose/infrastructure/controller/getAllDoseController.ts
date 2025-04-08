import { Request, Response } from "express";
import { MySQLDoseRepository } from "../mysql_dose";
import { getAllDose } from "../../../dose/applications/getAllDose";

const repo = new MySQLDoseRepository();

export const getAllDoseController = async (_req: Request, res: Response) => {
  try {
    const doses = await getAllDose(repo)();
    res.json(doses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las dosis" });
  }
};
