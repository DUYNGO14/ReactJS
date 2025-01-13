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
        <Box className="text-center">
          <div className="flex justify-center items-center h-20">
            <svg
              className="animate-spin h-10 w-10 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        </Box>
      )}
    </ModalBlank>
  );
};

export default ModalUpadteUser;
