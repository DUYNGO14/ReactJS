import { IUser } from "../../../../../interfaces";
import { Box, Button } from "../../../../Atoms";
import ModalBlank from "../../ModalBlank";
interface ModalUserDetailProps {
  user : IUser.UserResponse | unknown
  isShow: boolean;
  toggle: (typeModal: string) => void
}
const ModalUserDetail = ({ user, isShow, toggle }: ModalUserDetailProps) => {
    return (
        <ModalBlank title="User Detail" isShow={isShow} toggle={toggle}>
          <Box>
            <img src={user.avatar} className="w-20 h-20 rounded-full mx-auto" />
            <p className="text-center text-base text-gray-600">First Name: {user.first_name}  </p>
            <p className="text-center text-base text-gray-600">Last Name: {user.last_name} </p>
            <p className="text-center text-base text-gray-600">Email: {user.email} </p>
          </Box>
          <Box className="flex justify-end">
              <Button
                  type="button"
                  onClick={() => toggle('')}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                  Cancle
              </Button>
            </Box>
        </ModalBlank>
      );
}

export default ModalUserDetail