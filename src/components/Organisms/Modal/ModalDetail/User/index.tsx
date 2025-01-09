import { IUser } from "../../../../../interfaces";
import { Box, Button } from "../../../../Atoms";
import ModalBlank from "../../ModalBlank";
interface ModalUserDetailProps {
  user: IUser.UserResponse | unknown;
  isShow: boolean;
  toggle: (typeModal: string) => void;
}
const ModalUserDetail = ({ user, isShow, toggle }: ModalUserDetailProps) => {
  const userDB = user as IUser.UserResponse;
  return (
    <ModalBlank title="User Detail" isShow={isShow} toggle={toggle}>
      {userDB && userDB.id ? (
        <>
          <Box>
            <img
              src={userDB.avatar}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="text-center text-base text-gray-600">
              First Name: {userDB.first_name}{" "}
            </p>
            <p className="text-center text-base text-gray-600">
              Last Name: {userDB.last_name}{" "}
            </p>
            <p className="text-center text-base text-gray-600">
              Email: {userDB.email}{" "}
            </p>
          </Box>
          <Box className="flex justify-end">
            <Button
              type="button"
              onClick={() => toggle("")}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancle
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box className="text-center">User not found in database.</Box>
        </>
      )}
    </ModalBlank>
  );
};

export default ModalUserDetail;
