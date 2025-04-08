import { Request, Response } from "express";
import { GetAllUsers } from "../../applications/GetAll_User";
import { MySQLUserRepository } from "../MySQL_users";

export class ViewAllUserController {
  async handle(req: Request, res: Response) {
    const userRepository = new MySQLUserRepository();
    const getAllUser = new GetAllUsers(userRepository);

    try {
      const users = await getAllUser.execute();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error al obtener todos los usuarios:", error);
      res.status(500).json({ message: "Error al obtener usuarios" });
    }
  }
}
