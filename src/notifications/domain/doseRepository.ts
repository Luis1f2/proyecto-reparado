export interface DoseRepository {
    getPending(): Promise<{ id: number; usuarioId: number; pacienteNombre: string }[]>;
    markAsNotified(doseId: number): Promise<void>;
    resetUnaccepted(): Promise<void>;
}
