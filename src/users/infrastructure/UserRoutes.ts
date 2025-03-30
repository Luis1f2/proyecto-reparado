import express from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ViewUserController } from "./controllers/ViewUsersController";
import { ViewAllUserController } from "./controllers/ViewAllUserController";
import { LoginUserController } from "./controllers/LoginUserController";

const router = express.Router();

router.post("/register", CreateUserController.execute);
router.post("/login", LoginUserController.execute);
router.get("/users", ViewAllUserController.execute);
router.get("/:idUser", ViewUserController.execute);
router.delete("/:idUser", DeleteUserController.execute);

export default router;
