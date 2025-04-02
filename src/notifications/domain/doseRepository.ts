export interface DoseRepository {
    getPending(): Promise<{
      id_dosis: number;
      hora: string;
      pacienteNombre: string;
      medicamentoNombre: string;
    }[]>;
    markAsNotified(doseId: number): Promise<void>;
    resetUnaccepted(): Promise<void>;
  }
  