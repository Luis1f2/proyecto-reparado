import { IUserRepository } from "../domain/User_repository";
import { RegisterUserDTO } from "./UserDto";
import bcrypt from "bcrypt";

export class RegisterUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: RegisterUserDTO): Promise<void> {
    const hashedPassword = await bcrypt.hash(userData.contraseña, 10);
    await this.userRepository.save({ ...userData, contraseña: hashedPassword });
  }
}
