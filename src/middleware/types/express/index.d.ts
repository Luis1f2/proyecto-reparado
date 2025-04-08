import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & {
        id_usuario: number;
        email: string;
        nombre: string;
      };
    }
  }
}
