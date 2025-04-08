import { Request, Response } from 'express';
import { RegisterUser } from "../../applications/Register_User";
import { MySQLUserRepository } from '../MySQL_users';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const userRepository = new MySQLUserRepository();
    const registerUser = new RegisterUser(userRepository);

    try {
      await registerUser.execute(req.body);
      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ message: 'Error al registrar usuario' });
    }
  }
}
