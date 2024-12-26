import { IUser } from "../../../../interfaces"
import UserFormContainer from "./container"
interface UserFormContainerProps{
    userData? : IUser.UserResponse
       toggle: () => void
       setUsers : React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>
       method ?: string

}
const UserForm = ({toggle, setUsers, method, userData}: UserFormContainerProps) => {
    return (
        <UserFormContainer toggle={toggle} setUsers={setUsers} method={method} userData={userData} />
    )
}

export default UserForm