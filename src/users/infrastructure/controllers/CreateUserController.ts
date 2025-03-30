import { Request, Response } from "express";
import { registerUser } from "../dependencies";
import { broadcast } from "../../../../main";

export class CreateUserController {
  static async execute(req: Request, res: Response) {
    try {
      await registerUser.execute(req.body);
      broadcast(JSON.stringify({ event: "user:registered", data: req.body }));
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }
}