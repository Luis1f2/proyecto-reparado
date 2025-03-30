import { MySQLPacienteRepository } from "./Mysql_patient";
import { RegisterPatiens } from "../application/RegisterPatiens";
import { UpdatePatient } from "../application/UpdatePatient";
import { GetPatientById } from "../application/GetPatiensById";
import { DeletePatient  } from "../application/DeletePatient";
import{  GetAllPatiens } from "../application/GetAllPatiens"

const patientRepository = new MySQLPacienteRepository();

const registerPatiens = new RegisterPatiens(patientRepository);
const updatePatient = new UpdatePatient(patientRepository);
const getPacienteById = new GetPatientById(patientRepository);
const deletePatient = new DeletePatient(patientRepository);
const getAllPatiens = new  GetAllPatiens(patientRepository)

export { patientRepository, getAllPatiens, registerPatiens, updatePatient, getPacienteById, deletePatient };