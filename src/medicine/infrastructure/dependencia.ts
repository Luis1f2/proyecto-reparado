import { MySQLMedicineRepository } from "../infrastructure/mysql_medicine";
import { SaveMedicine } from "../applications/saveMedicine";
import { GetMedicineById } from "../applications/getMedicineId";
import { GetAllMedicines } from "../applications/getAlllMedicine";
import { UpdateMedicine } from "../applications/updateMedicine";
import { DeleteMedicine } from "../applications/deleteMedecine";

import { SaveMedicineController } from "./controller/saveMedicineController";
import { GetMedicineByIdController } from "./controller/getMedicineController";
import { GetAllMedicinesController } from "./controller/getAllMedicineController";
import { UpdateMedicineController } from "./controller/updateMedicineController";
import { DeleteMedicineController } from "./controller/deleteMedicineController";

const medicineRepository = new MySQLMedicineRepository();


const saveMedicineUseCase = new SaveMedicine(medicineRepository);
const getMedicineByIdUseCase = new GetMedicineById(medicineRepository);
const getAllMedicinesUseCase = new GetAllMedicines(medicineRepository);
const updateMedicineUseCase = new UpdateMedicine(medicineRepository);
const deleteMedicineUseCase = new DeleteMedicine(medicineRepository);


export const saveMedicineController = new SaveMedicineController(saveMedicineUseCase);
export const getMedicineByIdController = new GetMedicineByIdController(getMedicineByIdUseCase);
export const getAllMedicinesController = new GetAllMedicinesController(getAllMedicinesUseCase);
export const updateMedicineController = new UpdateMedicineController(updateMedicineUseCase);
export const deleteMedicineController = new DeleteMedicineController(deleteMedicineUseCase);
