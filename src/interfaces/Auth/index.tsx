interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    password: string;
}

interface BaseAuthResponse {
    token: string
}

interface RegisterResponse extends BaseAuthResponse {
    status: number;
    id: number
}
export type { LoginRequest, RegisterRequest, BaseAuthResponse,RegisterResponse };