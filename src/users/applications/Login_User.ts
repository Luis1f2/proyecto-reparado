import { IUserRepository } from "../domain/User_repository";
import { LoginUserDTO } from "./UserDto";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const JWT_SECRET= "mysecretkey";

export class LoginUser {
  constructor(private userRepository: IUserRepository) {}

  async execute({ identifier, contraseña }: LoginUserDTO) {
    console.log("🟡 Iniciando login con:", identifier);

    const user = await this.userRepository.viewByEmailOrUsername(identifier);

    if (!user) {
      console.warn("🔴 Usuario no encontrado:", identifier);
      throw new Error("Invalid username/email or password");
    }

    console.log("🔵 Usuario encontrado:", user.email);
    console.log("🔵 Comparando contraseñas...");
    console.log("🔵 Contraseña recibida:", contraseña);
    console.log("🔵 Hash almacenado:", user.contraseña);
    
   
    if (!user.contraseña.startsWith('$2b$')) {
      console.error("🔴 Error: El hash almacenado no tiene el formato correcto");
      throw new Error("Invalid password format");
    }
    
    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    console.log("🔵 Resultado de la comparación:", isPasswordValid);

    if (!isPasswordValid) {
      console.warn("🔴 Contraseña incorrecta para usuario:", user.email);
      throw new Error("Invalid username/email or password");
    }

    const token = jwt.sign(
      { id_usuario: user.id_usuario, email: user.email, nombre: user.nombre },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("🟢 Login exitoso:", user.email);

    return { token, message: "Login successful" };
  }
}
