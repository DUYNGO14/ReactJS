import axios from "../customize-axios";
import { IAuth } from "../../interfaces";

const AuthService = {
    login: async (data: IAuth.LoginRequest) => {
        return await axios.post('/login', data);
    },
    register: async (data: IAuth.RegisterRequest) => {
        return await axios.post('/register', data);
    },
 };

 export default AuthService