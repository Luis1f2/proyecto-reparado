import { IUserRepository } from "../domain/User_repository";
import { LoginUserDTO } from "./UserDto";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const SECRET_KEY = "mysecretkey";

export class LoginUser {
  constructor(private userRepository: IUserRepository) {}

  async execute({ identifier, contraseña }: LoginUserDTO) {
    const user = await this.userRepository.viewByEmailOrUsername(identifier);
    if (!user) {
      throw new Error("Invalid username/email or password");
    }

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) {
      throw new Error("Invalid username/email or password");
    }

    const token = jwt.sign(
      { id_usuario: user.id_usuario, email: user.email, nombre: user.nombre },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    return { token, message: "Login successful" };
  }
}
