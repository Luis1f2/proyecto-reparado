import { Request, Response } from "express";
import { LoginUser } from "../../applications/Login_User";
import { MySQLUserRepository } from "../MySQL_users";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const userRepository = new MySQLUserRepository();
    const loginUser = new LoginUser(userRepository);

    try {
      const { identifier, contraseña } = req.body;

      if (typeof identifier !== "string" || typeof contraseña !== "string") {
        return res
          .status(400)
          .json({ message: "Nombre de usuario/correo y contraseña son requeridos" });
      }

      const user = await loginUser.execute({ identifier, contraseña });

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      if (error instanceof Error && error.message.includes("Invalid")) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
        
      }

      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}
