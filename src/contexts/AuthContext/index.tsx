import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IAuth } from "../../interfaces"
import { ToastUtils } from "../../utils";

interface AuthContextType{
    user : IAuth.LoginRequest | null
    token : string | null
    handleLogin: (user: IAuth.LoginRequest, token: string) => void
    handleLogout: () => void
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

const AuthProvider : React.FC<{children: React.ReactNode}> = ({ children } ) => {

    const [user, setUser] = useState<IAuth.LoginRequest|null>(null)
    const [token, setToken] = useState<string|null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const tokenLocal = localStorage.getItem('token');
        const userLocal = localStorage.getItem('user');

        if (tokenLocal && userLocal) {
            setUser(JSON.parse(userLocal));
            setToken(tokenLocal);
        }
    }, [])

    const handleLogin = async (user:IAuth.LoginRequest, token: string) => {
        setUser(user)
        setToken(token)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        ToastUtils.success('Welcome back✌!');
        navigate("/");
    }   

    const handleLogout = () => {
        setUser(null)   
        setToken(null)
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate("/login");
    }

    return (
        <AuthContext.Provider value = {{user,token, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
