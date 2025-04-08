import express from "express";
import { 
    saveMedicineController,
    deleteMedicineController,
    getMedicineByIdController,
    getAllMedicinesController
} from "./dependencia";

const router = express.Router();

router.post("/", (req, res) => saveMedicineController.handle(req, res));
router.get("/", (req, res) => getAllMedicinesController.handle(req, res));
router.get("/:idMedication", (req, res) => getMedicineByIdController.handle(req, res));
router.delete("/:idMedication", (req, res) => deleteMedicineController.handle(req, res));

export default router; 