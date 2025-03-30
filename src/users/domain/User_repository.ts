import {User} from "./entities/User"

export interface IUserRepository{
    save(user: User): Promise<void>;
    viewOne(id_usuario: number): Promise<User | null>;
    viewByEmailOrUsername(identifier: string): Promise<User | null>;
    viewAll(): Promise<User[]>;
    delete(id_usuario: number): Promise<void>;
}