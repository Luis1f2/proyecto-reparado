import { Request, Response } from "express";
import { getUserById } from "../dependencies";

export class ViewUserController {
  static async execute(req: Request, res: Response) {
    const user = await getUserById.execute(Number(req.params.id_usuario));
    res.json(user || { message: "User not found" });
  }
}