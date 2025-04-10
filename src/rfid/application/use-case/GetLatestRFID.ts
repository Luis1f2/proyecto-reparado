import { RFIDRepository } from '../../domain/repositories/RFIDRepository';
import { RFID } from '../../domain/entities/RFID';

export class GetLatestRFID {
    constructor(private repository: RFIDRepository) {}

    async execute(): Promise<RFID | null> {
        return await this.repository.getLatest();
    }
}
