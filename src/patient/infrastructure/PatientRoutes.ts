import express from "express";
import { RegisterPatientController } from "./controllers/RegisterPatientController";
import { DeletePatientController } from "./controllers/DeletePatientController";
import { GetAllPatientController } from "./controllers/GetAllpatientController";
import { GetPacienteByIdController } from "./controllers/GetIdPatientController";
import { UpdatePatientController} from "./controllers/UpdatePatientController"
import { patientRepository, registerPatiens, deletePatient, getAllPatiens, getPacienteById,updatePatient } from "./dependencies";

const router = express.Router();


const registerPatientController = new RegisterPatientController(registerPatiens);
const deletePatientController = new DeletePatientController(deletePatient);
const getAllPatientController = new GetAllPatientController(getAllPatiens);
const getByIdPatientController = new GetPacienteByIdController(getPacienteById);
const updatePatientController = new UpdatePatientController(updatePatient);




router.post("/register", (req, res) => registerPatientController.handle(req, res));
router.get("/", (req, res) => getAllPatientController.handle(req, res));
router.get("/:idPatient", (req, res) => getByIdPatientController.handle(req, res));
router.put("/:idPatient",(req, res, next)=> updatePatientController.handle(req, res, next));
router.delete("/:idPatient", (req, res) => deletePatientController.handle(req, res));

export default router; 