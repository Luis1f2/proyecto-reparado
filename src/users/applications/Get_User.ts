import { IUserRepository } from "../domain/User_repository";

export class GetUserById {
  constructor(private userRepository: IUserRepository) {}

  async execute(id_usuario: number) {
    return await this.userRepository.viewOne(id_usuario);
  }
}