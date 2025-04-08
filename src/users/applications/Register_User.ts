import { IUserRepository } from "../domain/User_repository";
import { RegisterUserDTO } from "./UserDto";
import bcrypt from "bcrypt";

export class RegisterUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: RegisterUserDTO): Promise<void> {
    console.log("🟡 Registrando usuario:", userData.email);
    console.log("🔵 Contraseña original:", userData.contraseña);
    const hashedPassword = await bcrypt.hash(userData.contraseña, 10);
    console.log("🔵 Contraseña hasheada:", hashedPassword);
    await this.userRepository.save({ ...userData, contraseña: hashedPassword });
    console.log("🟢 Usuario registrado exitosamente");
  }
}
