import { Request, Response } from 'express';
import { GetLatestRFID } from '../../application/use-case/GetLatestRFID';
import { RFIDMySQLRepository } from '../persistence/RFIDMySQLRepository';

const repo = new RFIDMySQLRepository();
const getLatestUseCase = new GetLatestRFID(repo);

export const getLatestRFID = async (_req: Request, res: Response): Promise<void> => {
    try {
        const latest = await getLatestUseCase.execute();
        res.json(latest);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener', details: err });
    }
};
