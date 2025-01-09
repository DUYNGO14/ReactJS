import { IUser } from "../../../../../interfaces";
import { Box } from "../../../../Atoms";
import { UserForm } from "../../../Form";
import ModalBlank from "../../ModalBlank";

interface ModalCreateProps {
  isShow: boolean;
  toggle: (typeModal?: string) => void;
  userData?: IUser.UserResponse | null;
  setUsers: React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>;
}
const ModalUpadteUser = ({
  isShow,
  toggle,
  userData,
  setUsers,
}: ModalCreateProps) => {
  return (
    <ModalBlank title="Update User" isShow={isShow} toggle={toggle}>
      {userData && (userData as IUser.UserResponse).id ? (
        <UserForm
          toggle={toggle}
          userData={userData}
          method="update"
          setUsers={setUsers}
        />
      ) : (
        <Box className="text-center text-base text-gray-600">
          User not found!
        </Box>
      )}
    </ModalBlank>
  );
};

export default ModalUpadteUser;
