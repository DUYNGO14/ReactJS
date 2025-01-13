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
interface UserCreateResponse {
  id: number;
  name: string;
  job: string;
  createdAt: string;
}

interface UserUpdateResponse {
  name: string;
  job: string;
  updatedAt: string;
}
export type {
  UserResponse,
  UserRequest,
  UserCreateResponse,
  UserUpdateResponse,
};
