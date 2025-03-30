import { Router } from "express";
import { saveDoseController } from "./controller/saveDoseController";
import { getAllDosesController } from "./controller/getAllDoseController";
import { getDoseByIdController } from "./controller/getDoseByidController";
import { UpdateDoseController } from "./controller/updateDoseController";
import { DeleteDoseController } from "./controller/deleteDoseController";

const router = Router();

router.get("/", getAllDosesController);
router.get("/:id", getDoseByIdController);
router.post("/", saveDoseController);
router.put("/:id", UpdateDoseController);
router.delete("/:id", DeleteDoseController);

export default router;
