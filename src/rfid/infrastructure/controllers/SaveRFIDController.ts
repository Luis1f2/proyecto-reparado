import { Request, Response } from 'express';
import { CreateRFID } from '../../application/use-case/CreateRFID';
import { RFIDMySQLRepository } from '../persistence/RFIDMySQLRepository';

const repo = new RFIDMySQLRepository();
const createUseCase = new CreateRFID(repo);

export const saveRFID = async (req: Request, res: Response): Promise<void> => {
    const { tag } = req.body;

    if (!tag) {
        res.status(400).json({ error: 'Tag requerido' });
        return;
    }

    try {
        await createUseCase.execute(tag);
        res.status(200).json({ message: 'Epicardo funciono guardaste algo que posiblemente no usaras XD' });
    } catch (err: any) {
        if (err.message === 'DUPLICATE_RFID') {
            res.status(400).json({ error: 'Este RFID ya fue registrado, no es posible procesarlo.' });
        } else {
            res.status(500).json({ error: 'Este wey algo hisiste que no jalo', details: err });
        }
    }
};