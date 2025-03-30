export interface RegisterUserDTO {
    nombre: string;
    email: string;
    contraseña: string;
    telefono?: string;
    fecha_nacimiento?: string;
  }
  
  export interface LoginUserDTO {
    identifier: string;
    contraseña: string;
  }