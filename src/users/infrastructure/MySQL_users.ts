import { IUserRepository } from "../domain/User_repository";
import { User } from "../domain/entities/User";
import pool from "../../database/db_Mysql";

export class MySQLUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    // Ya viene hasheada desde el caso de uso RegisterUser
    await pool.execute(
      "INSERT INTO Usuario (nombre, email, contraseña, telefono, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)",
      [user.nombre, user.email, user.contraseña, user.telefono, user.fecha_nacimiento]
    );
  }

  async viewAll(): Promise<User[]> {
    const [rows] = await pool.execute(
      "SELECT id_usuario, nombre, email, telefono, fecha_nacimiento FROM Usuario"
    );
    return rows as User[];
  }

  async viewOne(id_usuario: number): Promise<User | null> {
    const [rows]: any = await pool.execute(
      "SELECT id_usuario, nombre, email, telefono, fecha_nacimiento, contraseña FROM Usuario WHERE id_usuario = ?",
      [id_usuario]
    );
    return rows.length ? rows[0] : null;
  }

  async viewByEmailOrUsername(identifier: string): Promise<User | null> {
    if (!identifier) {
      throw new Error("Falta email o nombre de usuario");
    }

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
