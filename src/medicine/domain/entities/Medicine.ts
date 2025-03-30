export interface Medicine{
    id_medicamento: number;
    id_paciente: number;
    rfid?: string;
    nombre: string;
    fecha_inicio?: string; 
    fecha_final?: string;
    notas?: string;
}