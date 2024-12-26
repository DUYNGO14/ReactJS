import { useEffect, useState } from "react"
import { IAuth } from "../../../../interfaces"
import { AuthService } from "../../../../services"
import { ToastUtils } from "../../../../utils"
import { useNavigate } from "react-router"
import RegisterPresenter from "./presenter"
const DEFAULT_REGISTER_VALUE: IAuth.RegisterRequest = {
    email: '',
    password: '',
  };
const RegisterContainer = () => {
    const [user, setUser] = useState<IAuth.RegisterRequest>(DEFAULT_REGISTER_VALUE);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const  navigate = useNavigate();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    useEffect(() => {
        handleRegister()
    },[])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleRegister = async () => {
        if (!user.email || !user.password) {
            return;
        }
        if (regex.test(user.email) === false) {
            setErrorMessage('Email is not valid');
            return;
        }
        if (user.password.length < 6) {
            setErrorMessage('Password must be at least 6 characters');
            return;
        }
        setLoading(true);
        try {
            const response = await AuthService.register(user);
            console.log(response);
            if (response && (response as unknown as IAuth.RegisterResponse).id) {
                // ToastUtils.success('Register successfully');
                navigate("/login");
            }else{
                if(response && response.status === 400) {
                    setErrorMessage("Email is already in use 🤔");
                }
            }
        }catch (error) {
            ToastUtils.error(`An error occurred during register ${error} 😩`);
        }finally {
            setLoading(false);
        }

    }
    return (
        <RegisterPresenter user={user} handleChange={handleChange} error={errorMessage} onSubmit={handleRegister} loading={loading} />
    )
}

export default RegisterContainer