import { Request, Response } from "express";
import { MySQLDoseRepository } from "../mysql_dose";
import { deleteDose } from "../../../dose/applications/deleteDose";

const repo = new MySQLDoseRepository();

export const DeleteDoseController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteDose(repo)(id);
    res.json({ message: "Dosis eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar dosis" });
  }
};
