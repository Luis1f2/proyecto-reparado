import { RFIDRepository } from '../../domain/repositories/RFIDRepository';
import { RFID } from '../../domain/entities/RFID';

export class CreateRFID {
    constructor(private repository: RFIDRepository) {}

    async execute(tag: string): Promise<void> {
        const rfid = new RFID(tag); 
        await this.repository.save(rfid);
    }
}
