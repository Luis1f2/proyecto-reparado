import { RFID } from '../entities/RFID';

export interface RFIDRepository {
    save(rfid: RFID): Promise<void>;
    getLatest(): Promise<RFID | null>;
}
