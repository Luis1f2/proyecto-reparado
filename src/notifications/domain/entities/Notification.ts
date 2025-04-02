export interface Notification {
    id?: number;
    mensaje: string;
    tipo: string;
    usuarioId: number;
    leido?: boolean;
    fecha?: string;
    dosisId?: number;
}
