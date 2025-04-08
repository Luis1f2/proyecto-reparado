import { Router } from 'express';
import { saveDoseController } from './controller/saveDoseController';
import { getAllDoseController } from './controller/getAllDoseController';
import { getDoseByIdController } from './controller/getDoseByidController';
import { updateDoseController } from './controller/updateDoseController';
import { deleteDoseController } from './controller/deleteDoseController';

const router = Router();

router.post('/', saveDoseController);
router.get('/', getAllDoseController);
router.get('/:id', getDoseByIdController);
router.put('/:id', updateDoseController);
router.delete('/:id', deleteDoseController);

export default router;
