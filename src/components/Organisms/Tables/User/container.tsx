import { useEffect, useState } from "react";
import TableUserPresenter from "./presenter";
import { UserService } from "@/services";
import { Pagination } from "@/components/Molecules";
import { ToastUtils } from "@/utils";
import { IUser, IPage } from "@/interfaces";
import { usePagination } from "@/hooks";


const TableUserContainer = () => {
  const [users, setUsers] = useState<IUser.UserResponse[]>([]);
  const { page, setPage, per_page, setPerPage, total, setTotal, totalPage, setTotalPage } = usePagination();
  const [isShow, setIsShowing] = useState(false);
  const [user, setUser] = useState<IUser.UserResponse | null>(null);
  const [typeModal, setTypeModal] = useState<string>("");
  
  const [loadingState, setLoadingState] = useState({
    loading: false,
    loadingModal: false,
  });
  console.log(loadingState);

  const handleToggle = (modalType?: string) => {
    setTypeModal(modalType || "");
    setIsShowing(!isShow);
    if (modalType !== "view") setUser(null);
  };
  
  useEffect(() => {
    const fetchUsers = setTimeout(() => {
      getAllUsers();
    }, 300); // Đợi 300ms trước khi gọi API

    return () => clearTimeout(fetchUsers); // Hủy debounce khi `page` thay đổi nhanh
  }, [page]);
  
  const handleViewUser = async (user: IUser.UserResponse) => {
    if (!user || !user.id) {
      return;
    }
    try {
      setLoadingState((prev) => ({ ...prev, loadingModal: true }));
      const res = await UserService.getById(+user.id);
      if (res && res.data && res.data.id) {
        setUser(res.data);
      } else if (res.status === 404) {
        return ToastUtils.error("User not found! Please reload page!");
      } else {
        ToastUtils.error("Error");
      }
    } catch {
      ToastUtils.error("An error occurred while fetching user.");
    } finally {
      setLoadingState((prev) => ({ ...prev, loadingModal: false }));
    }
  };

  const getAllUsers = async () => {
    setLoadingState((prev) => ({ ...prev, loading: true }));
    try {
      const res = (await UserService.getAll(
        page
      )) as unknown as IPage.PageResult<IUser.UserResponse>;

      if (res && res.data) {
        setUsers(res.data);
        setPage(+res.page);
        setPerPage(+res.per_page);
        setTotal(+res.total);
        setTotalPage(+res.total_pages);
      } else {
        ToastUtils.error("Error");
      }
    } catch {
      ToastUtils.error("An error occurred while fetching users.");
    } finally {
      setLoadingState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <>
      <TableUserPresenter
        users={users}
        isShow={isShow}
        toggle={handleToggle}
        handleViewUser={handleViewUser}
        typeModal={typeModal}
        userDetail={user}
        setTypeModal={setTypeModal}
        setUsers={setUsers}
        isLoading={loadingState}
      />
      <Pagination
        page={page}
        per_page={per_page}
        total={total}
        total_pages={totalPage}
        setPage={setPage}
      />
    </>
  );
};

export default TableUserContainer;
