import express from 'express';
import {
  saveMedicineController,
  getMedicineByIdController,
  getAllMedicinesController,
  updateMedicineController,
  deleteMedicineController,
} from "./dependencia";

const router = express.Router();

router.post('/registrer', (req, res) => saveMedicineController.run(req, res));
router.get('/:id', (req, res) => getMedicineByIdController.run(req, res));
router.get('/', (req, res) => getAllMedicinesController.run(req, res));
router.put('/:id', (req, res) => updateMedicineController.run(req, res));
router.delete('/:id', (req, res) => deleteMedicineController.run(req, res));

export default router;
