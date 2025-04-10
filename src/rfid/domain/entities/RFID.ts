export class RFID {
    constructor(
        public codigo_rfid: string,
        public fecha_escaneo?: Date,
        public estado?: 'pendiente' | 'validado' | 'rechazado'
    ) {}
}
