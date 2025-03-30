import { IUserRepository } from "../domain/User_repository";
import { User } from "../domain/entities/User";
import  pool  from "../../database/db_Mysql";
import bcrypt from 'bcrypt';

export class MySQLUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.contraseña, 10);
    await pool.execute(
      "INSERT INTO Usuario (nombre, email, contraseña, telefono, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)",
      [user.nombre, user.email, hashedPassword, user.telefono, user.fecha_nacimiento]
    );
  }

  async viewAll(): Promise<User[]> {
    const [rows] = await pool.execute("SELECT id_usuario, nombre, email, telefono, fecha_nacimiento FROM Usuario");
    return rows as User[];
  }

  async viewOne(id_usuario: number): Promise<User | null> {
    const [rows]: any = await pool.execute("SELECT id_usuario, nombre, email, telefono, fecha_nacimiento, contraseña FROM Usuario WHERE id_usuario = ?", [id_usuario]);
    return rows.length ? rows[0] : null;
  }

  async viewByEmailOrUsername(identifier: string): Promise<User | null> {
    const [rows]: [any[], any] = await pool.execute(
      "SELECT id_usuario, nombre, email, telefono, fecha_nacimiento, contraseña FROM Usuario WHERE email = ? OR nombre = ?",
      [identifier, identifier]
    );
    return rows.length ? (rows[0] as User) : null;
  }

  async delete(id_usuario: number): Promise<void> {
    await pool.execute("DELETE FROM Usuario WHERE id_usuario = ?", [id_usuario]);
  }
}
