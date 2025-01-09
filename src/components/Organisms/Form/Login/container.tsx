import { useState } from "react";
import { IAuth, IContext } from "@/interfaces";
import LoginPresenter from "./presenter";
import { AuthService } from "@/services";
import { useAuth } from "@/hooks";
import { ToastUtils } from "@/utils";

const LoginContainer = () => {
  const [user, setUser] = useState<IAuth.LoginRequest>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { handleLogin } = useAuth() as IContext.UseAuthReturnType;

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setError(""); // Reset error khi người dùng nhập lại
  };

  const handleSubmitLogin = async () => {
    if (!user.email || !user.password) {
      setError("Email and password are required");
      return;
    }
    if (!validateEmail(user.email)) {
      setError("Invalid email format");
      return;
    }
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const response = (await AuthService.login(
        user
      )) as unknown as IAuth.BaseAuthResponse;
      if (response && response.token) {
        handleLogin(user, response.token);
      } else {
        setError("Incorrect email or password");
      }
    } catch {
      ToastUtils.error("An error occurred during login 😩");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginPresenter
      user={user}
      handleChange={handleChange}
      onSubmit={handleSubmitLogin}
      error={error}
      loading={loading}
    />
  );
};

export default LoginContainer;
