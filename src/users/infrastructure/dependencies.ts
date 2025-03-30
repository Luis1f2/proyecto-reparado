import { MySQLUserRepository } from "./MySQL_users";
import { RegisterUser } from "../applications/Register_User";
import { LoginUser } from "../applications/Login_User";
import { GetUserById } from "../applications/Get_User";
import { DeleteUser } from "../applications/Delete_User";

const userRepository = new MySQLUserRepository();

const registerUser = new RegisterUser(userRepository);
const loginUser = new LoginUser(userRepository);
const getUserById = new GetUserById(userRepository);
const deleteUser = new DeleteUser(userRepository);

export { userRepository, registerUser, loginUser, getUserById, deleteUser };