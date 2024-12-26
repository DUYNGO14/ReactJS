import { useEffect } from "react";
import { IUser } from "../../../../../interfaces";
import { ToastUtils } from "../../../../../utils";
import ModalBlank from "../../ModalBlank";
import { Box, Button } from "../../../../Atoms";
import { UserService } from "../../../../../services";

interface ModalUserDetailProps {
  user : IUser.UserResponse | unknown
  isShow: boolean;
  toggle: (typeModal: string) => void
  setUsers : React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>
}
const ModalDeleteUser : React.FC<ModalUserDetailProps> = ({ user, isShow, toggle ,setUsers }) => {
    useEffect (() => {
        handleDelete(user.id);
    },[])
    const handleDelete = (id: number) => {
        if(!id) return
        
        UserService.delete(id).then(() => {
            ToastUtils.success('Delete user with id : ' + id + ' successfully');
            setUsers((prev) => prev.filter((item) => item.id !== id));
            toggle('');
        })
    }
    return (
        <ModalBlank title="Delete User!" isShow={isShow} toggle={toggle}>
            <Box>
                <img src={user.avatar} className="w-20 h-20 rounded-full mx-auto" />
                <p className="text-base text-center text-gray-600">Full Name: {user.first_name}  {user.last_name} </p>
                <p className="text-base text-center text-gray-600">Email: {user.email} </p>
            </Box>
            <Box className="flex justify-end mt-3   ">
                <Button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto mr-3"
                >
                    Delete
                </Button>
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

export default ModalDeleteUser;