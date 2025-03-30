export interface Dose {
  id_dosis?: number;
  id_medicamento: number;
  cantidad: string;
  horario: string; //HH/MM/SS 
  frecuencia: string;
}
