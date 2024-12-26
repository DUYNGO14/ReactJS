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
export type { LoginRequest, RegisterRequest, BaseAuthResponse };