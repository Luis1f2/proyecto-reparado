import { IUserRepository } from "../domain/User_repository";

export class GetAllUsers {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.viewAll();
  }
}
