import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || "dev_secret";

export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ message: 'Token no proporcionado' });
      return;
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: 'Token inválido' });
        return;
      }
  
      if (typeof decoded === 'object' && decoded !== null && 'id_usuario' in decoded) {
        req.user = decoded as JwtPayload & {
          id_usuario: number;
          email: string;
          nombre: string;
        };
        next();
        return;
      }
  
      res.status(403).json({ message: 'Token inválido o mal formado' });
      return;
    });
  };
  