import React, { useEffect, useState } from "react";
import { IUser } from "@/interfaces";
import { UserService } from "@/services";
import { ToastUtils } from "@/utils";
import UserFormPresenter from "./presenter";

interface UserFormProps {
  userData: IUser.UserResponse | null;
  toggle: () => void;
  setUsers: React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>;
  method: "create" | "update";
}
const DEFAULT_USER_VALUE: IUser.UserRequest = {
  name: "",
  job: "",
};

const UserFormContainer: React.FC<UserFormProps> = ({
  toggle,
  userData,
  setUsers,
  method,
}) => {
  const [user, setUser] = useState<IUser.UserRequest>(DEFAULT_USER_VALUE);
  const [id, setId] = useState<number>(0);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (userData) {
      setUser({
        name: userData.first_name,
        job: "",
      });
      setId(userData.id);
    }
  }, [userData]);
  const handleSubmit = async () => {
    if (!user.name || !user.job) {
      ToastUtils.error("Please enter name and job");
      return;
    }
    if (method === "update") {
      const res = (await UserService.update(
        id,
        user
      )) as unknown as IUser.UserUpdateResponse;
      if (res && res.updatedAt) {
        setUsers((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, first_name: user.name } : item
          )
        );
        toggle();
        ToastUtils.success(`Update user with id:  ${id} successfully`);
      } else {
        ToastUtils.error("Update user failed");
      }
    } else if (method === "create") {
      const res = (await UserService.create(
        user
      )) as unknown as IUser.UserCreateResponse;
      if (res && res.id) {
        const newUser = {
          id: res.id,
          email: `${res.name}_${res.job}@gmail.com`,
          first_name: res.name,
          last_name: res.name,
          avatar:
            "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
        };
        setUsers((prev) => [newUser, ...prev]);
        toggle();
        ToastUtils.success(`Create user with id:  ${res.id} successfully`);
      } else {
        ToastUtils.error("Create user failed");
      }
    }
  };

  return (
    <UserFormPresenter
      user={user}
      setUser={setUser}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      toggle={toggle}
    />
  );
};

export default UserFormContainer;
