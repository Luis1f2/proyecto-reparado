export interface Paciente {
    id_paciente: number;
    nombre: string;
    genero: 'M' | 'F' | 'Otro';
    fecha_nacimiento: string;
    direccion: string;
    telefono: string;
    grupo_sanguineo: string;
    peso: number;
    alergias?: string;
    enfermedades_pers?: string;
}
