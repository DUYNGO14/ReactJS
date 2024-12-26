import { useEffect, useState } from "react"
import { IAuth, IContext } from "../../../../interfaces"
import LoginPresenter from "./presenter"
import { AuthService } from "../../../../services"
import { useAuth } from "../../../../hooks"
import { ToastUtils } from "../../../../utils"

const LoginContainer = () => {
    const [user, setUser] = useState<IAuth.LoginRequest>({ email: '', password: '' });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { handleLogin } = useAuth() as unknown as IContext.UseAuthReturnType;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmitLogin = async () => {
        if (!user.email || !user.password) {
            return;
        }
        if (regex.test(user.email) === false) {
            setError('Email is not valid');
            return;
        }
        if (user.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        setLoading(true);
        try {
            const response = await AuthService.login(user);
            console.log(response);
            if (response && response.token) {
                handleLogin(user, response.token);
                // ToastUtils.success('Welcome back✌!');
            } else {
                if (response && response.status === 400) {
                    setError("Password or email is incorrect 😒");
                }
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            ToastUtils.error('An error occurred during login 😩');
        }
        setLoading(false);
    }
    useEffect(() => {
        handleSubmitLogin();
    }, []);
    return (
        <LoginPresenter
            user={user}
            handleChange={handleChange}
            onSubmit={handleSubmitLogin}
            error={error}
            loading={loading}
        />
    );
}

export default LoginContainer