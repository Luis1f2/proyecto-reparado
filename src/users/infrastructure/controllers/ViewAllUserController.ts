import { Request, Response } from "express";
import { userRepository } from "../dependencies";

export class ViewAllUserController {
  static async execute(req: Request, res: Response) {
    const users = await userRepository.viewAll();
    res.json(users);
  }
}
