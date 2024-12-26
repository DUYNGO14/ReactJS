import { useEffect, useState } from "react"
import TableUserPresenter from "./presenter"
import { UserService } from "../../../../services"
import { Pagination } from "../../../Molecules"
import { ToastUtils } from "../../../../utils"
import { IUser, IPage } from "../../../../interfaces"


const TableUserContainer = () => {
    const [users, setUsers] = useState<IUser.UserResponse[]>([])
    const [page, setPage] = useState<number>(1)
    const [per_page, setPerPage] = useState<number>(0)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [isShow , setIsShowing] = useState(false)
    const [user,setUser] = useState<IUser.UserResponse|unknown>({})
    const [typeModal, setTypeModal] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const handleToggle = (modalType?: string) => {
      setTypeModal(modalType||'')
      setIsShowing(!isShow)
      setUser({})
    }
    useEffect (() => {
       getAllUsers()
    },[page])

    useEffect (() => {
      handleViewUser(user);
    },[])
    const handleViewUser = async (user: IUser.UserResponse) => {
      await UserService.getById(+user.id).then((res) => {
        if(res && res.data) {
          setUser(res.data)
        }else {
          setIsShowing(false)
          ToastUtils.error('User not found');
        }
      })
    }

    const getAllUsers = async () => {
      setLoading(true)
      const res = await UserService.getAll(page) as unknown as IPage.PageResult<IUser.UserResponse>
      if(res && res.data) {
        setUsers(res.data)
        setPage(+res.page)
        setPerPage(+res.per_page)
        setTotal(+res.total)
        setTotalPage(+res.total_pages)
      }else{
        ToastUtils.error('Error')
      }
      setLoading(false)
    }
    return (
        <>
            <TableUserPresenter 
            users={users}
            isShow={isShow}
            toggle={handleToggle}
            handleViewUser={handleViewUser}
            typeModal={typeModal}
            userDetail = {user} 
            setTypeModal={setTypeModal}
            setUsers={setUsers}
            isLoading={loading}
          />
            <Pagination page={page} per_page={per_page} total={total} total_pages={totalPage} setPage={setPage}/>
        </>
    )
}

export default TableUserContainer
