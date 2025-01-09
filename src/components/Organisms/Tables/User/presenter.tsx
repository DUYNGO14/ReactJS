import { IUser } from "../../../../interfaces";
import { Box, Button } from "../../../Atoms";
import {
  ModalCreate,
  ModalDelete,
  ModalDetail,
  ModalUpdate,
} from "../../Modal";

interface UserPresenterProps {
  users: IUser.UserResponse[];
  isShow: boolean;
  toggle: (modalType?: string) => void;
  handleViewUser: (user: IUser.UserResponse) => void;
  typeModal: string;
  userDetail: IUser.UserResponse | null;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
  setUsers: React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>;
  isLoading: { loading: boolean; loadingModal: boolean };
}

const TableUserPresenter: React.FC<UserPresenterProps> = ({
  users,
  isShow,
  toggle,
  typeModal,
  userDetail,
  handleViewUser,
  setUsers,
  isLoading,
}) => {
  return (
    <>
      <Box className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
        <Box className="items-start justify-between md:flex">
          <Box className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              List User
            </h3>
          </Box>
          <Box className="mt-3 md:mt-0">
            <Button
              onClick={() => {
                toggle("create");
              }}
              className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
              Add user
            </Button>
          </Box>
        </Box>
        {users.length === 0 && !isLoading.loading && (
          <div className="flex justify-center items-center h-64">No data</div>
        )}
        {isLoading.loading ? (
          <div className="flex justify-center items-center h-64">
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
        ) : (
          <Box className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Avatar</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">First Name</th>
                  <th className="py-3 px-6">Last Name</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 Boxide-y">
                {users.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                      <img
                        src={item.avatar}
                        className="w-11 h-11 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.first_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.last_name}
                    </td>
                    <td className="text-center px-6 whitespace-nowrap">
                      <Button
                        onClick={() => {
                          toggle("view");
                          handleViewUser(item);
                        }}
                        className="py-2 leading-none px-3 font-medium text-lime-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        View
                      </Button>
                      <Button
                        onClick={() => {
                          toggle("update");
                          handleViewUser(item);
                        }}
                        className="py-2 leading-none px-3 font-medium text-blue-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          toggle("delete");
                          handleViewUser(item);
                        }}
                        className="py-2 leading-none px-3 font-medium text-black hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        )}
      </Box>

      {typeModal === "view" && isShow && (
        <ModalDetail.ModalUserDetail
          user={userDetail}
          isShow={isShow}
          toggle={toggle}
        />
      )}
      {typeModal == "create" && (
        <ModalCreate.ModalCreateUser
          isShow={isShow}
          toggle={toggle}
          setUsers={setUsers}
        />
      )}
      {typeModal == "update" && (
        <ModalUpdate.ModalUpadteUser
          userData={userDetail}
          isShow={isShow}
          toggle={toggle}
          setUsers={setUsers}
        />
      )}
      {typeModal == "delete" && (
        <ModalDelete.ModalDeleteUser
          user={userDetail}
          isShow={isShow}
          toggle={toggle}
          setUsers={setUsers}
        />
      )}
    </>
  );
};

export default TableUserPresenter;
