import { Request, Response } from "express";
import { loginUser } from "../dependencies";

export class LoginUserController {
  static async execute(req: Request, res: Response) {
    try {
      const result = await loginUser.execute(req.body);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: (error as Error).message });
    }
  }
}