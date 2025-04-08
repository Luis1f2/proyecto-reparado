import { Request, Response } from "express";
import { GetUserById } from "../../applications/Get_User";
import { MySQLUserRepository } from "../MySQL_users";

export class ViewUsersController {
  async handle(req: Request, res: Response) {
    const userRepository = new MySQLUserRepository();
    const getUser = new GetUserById(userRepository);

    try {
      const id = parseInt(req.params.idUser);
      const user = await getUser.execute(id);
      res.status(200).json(user);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  }
}
