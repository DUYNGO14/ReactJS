import { IAuth } from "@/interfaces";

interface UseAuthReturnType {
    user: IAuth.LoginRequest | null;
    handleLogin: (user: IAuth.LoginRequest,token: string) => void;
    handleLogout: () => void;
}

export type { UseAuthReturnType };
