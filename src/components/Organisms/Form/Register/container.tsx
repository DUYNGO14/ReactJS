import { useState } from "react";
import { IAuth } from "@/interfaces";
import { AuthService } from "@/services";
import { ToastUtils } from "@/utils";
import { useNavigate } from "react-router";
import RegisterPresenter from "./presenter";

const DEFAULT_REGISTER_VALUE: IAuth.RegisterRequest = {
  email: "",
  password: "",
};

const RegisterContainer = () => {
  const [user, setUser] = useState<IAuth.RegisterRequest>(
    DEFAULT_REGISTER_VALUE
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(""); // Reset error when user changes the input
  };

  const handleRegister = async () => {
    if (!user.email || !user.password) {
      setErrorMessage("Email and password are required");
      return;
    }
    if (!validateEmail(user.email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (user.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const response = (await AuthService.register(
        user
      )) as unknown as IAuth.RegisterResponse;
      if (response && response.id) {
        ToastUtils.success("Register successfully");
        navigate("/login");
      } else {
        if (response.status === 400) {
          setErrorMessage("Email is already in use 🤔");
        }
      }
    } catch (error) {
      ToastUtils.error(`An error occurred during register: ${error} 😩`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterPresenter
      user={user}
      handleChange={handleChange}
      error={errorMessage}
      onSubmit={handleRegister}
      loading={loading}
    />
  );
};

export default RegisterContainer;
