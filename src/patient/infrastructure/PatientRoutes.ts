import express from "express";
import { RegisterPatientController } from "./controllers/RegisterPatientController";
import { UpdatePatientController } from "./controllers/UpdatePatientController";
import { GetPacienteByIdController } from "./controllers/GetIdPatientController";
import { DeletePatientController } from "./controllers/DeletePatientController";
import { GetAllPatientController } from "./controllers/GetAllpatientController";

import {
  registerPatiens,
  updatePatient,
  getPacienteById,
  deletePatient,
  getAllPatiens,
} from "./dependencies"; 

const router = express.Router();

const registerController = new RegisterPatientController(registerPatiens);
const updateController = new UpdatePatientController(updatePatient);
const getByIdController = new GetPacienteByIdController(getPacienteById);
const deleteController = new DeletePatientController(deletePatient);
const getAllController = new GetAllPatientController(getAllPatiens);

router.post("/registrer", registerController.handle.bind(registerController));
router.get("/", getAllController.handle.bind(getAllController));
router.get("/:id", getByIdController.handle.bind(getByIdController));
router.put("/:id", updateController.handle.bind(updateController));
router.delete("/:id", deleteController.handle.bind(deleteController));

export default router;
