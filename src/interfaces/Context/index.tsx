import { IAuth } from "../../interfaces";

interface UseAuthReturnType {
    user: IAuth.LoginRequest | null;
    handleLogin: (user: IAuth.LoginRequest) => void;
    handleLogout: () => void;
}

export type { UseAuthReturnType };
