import { Request, Response } from "express";
import { deleteUser } from "../dependencies";
import { broadcast } from "../../../../main";

export class DeleteUserController {
  static async execute(req: Request, res: Response) {
    await deleteUser.execute(Number(req.params.id_usuario));
    broadcast(JSON.stringify({ event: "user:deleted", data: { id_usuario: req.params.id_usuario } }));
    res.json({ message: "User deleted successfully" });
  }
}