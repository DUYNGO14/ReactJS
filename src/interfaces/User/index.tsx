interface UserResponse {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UserRequest {
    name: string;
    job: string;
}

export type { UserResponse, UserRequest };