import { IUser } from "../../../../../interfaces";
import { UserForm } from "../../../Form";
import ModalBlank from "../../ModalBlank";

interface ModalCreateProps {
  isShow: boolean;
  toggle: (typeModal?: string) => void
  userData? : IUser.UserResponse
  setUsers : React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>
}
const ModalUpadteUser = ({ isShow, toggle, userData,setUsers }: ModalCreateProps) => {
    return (
        <ModalBlank title="Update User" isShow={isShow} toggle={toggle}>
          <UserForm toggle={toggle}  userData={userData} method="update" setUsers={setUsers}/>
        </ModalBlank>
      );
}

export default ModalUpadteUser