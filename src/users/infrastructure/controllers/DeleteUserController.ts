import { Request, Response } from "express";
import { DeleteUser } from "../../applications/Delete_User";
import { MySQLUserRepository } from "../MySQL_users";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const userRepository = new MySQLUserRepository();
    const deleteUser = new DeleteUser(userRepository);

    try {
      const id = parseInt(req.params.idUser);
      await deleteUser.execute(id);
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ message: "Error al eliminar usuario" });
    }
  }
}
