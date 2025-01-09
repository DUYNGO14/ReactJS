import { IUser } from "@/interfaces";
import { UserForm } from "@/components/Organisms/Form";
import ModalBlank from "../../ModalBlank";

interface ModalCreateProps {
  isShow: boolean;
  toggle: (typeModal?: string) => void;
  setUsers: React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>;
}
const ModalCreateUser = ({ isShow, toggle, setUsers }: ModalCreateProps) => {
  const newUser: IUser.UserResponse = {
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  };
  return (
    <ModalBlank title="Create User" isShow={isShow} toggle={toggle}>
      <UserForm
        toggle={toggle}
        userData={newUser}
        setUsers={setUsers}
        method="create"
      />
    </ModalBlank>
  );
};

export default ModalCreateUser;