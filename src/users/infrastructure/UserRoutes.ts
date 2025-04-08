import express from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ViewUsersController } from "./controllers/ViewUsersController";
import { ViewAllUserController } from "./controllers/ViewAllUserController";
import { LoginUserController} from "./controllers/LoginUserController";
import { authenticateToken } from "../../middleware/authmiddleware";

const router = express.Router();


const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const viewUserController = new ViewUsersController();
const viewAllUserController = new ViewAllUserController();
const loginUserController = new LoginUserController();


router.post("/register", (req, res) => createUserController.handle(req, res));
router.post("/login", async (req, res, next) => {
	try {
		await loginUserController.handle(req, res);
	} catch (error) {
		next(error);
	}
});
router.use(authenticateToken);

router.get("/users", (req, res) => viewAllUserController.handle(req, res));
router.get("/:idUser", (req, res) => viewUserController.handle(req, res));
router.delete("/:idUser", (req, res) => deleteUserController.handle(req, res));

export default router;
