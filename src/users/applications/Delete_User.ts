import { IUserRepository } from "../domain/User_repository";

export class DeleteUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(id_usuario: number): Promise<void> {
    await this.userRepository.delete(id_usuario);
  }
}
