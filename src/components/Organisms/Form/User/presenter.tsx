import { Box, Button, Input, Label } from "@/components/Atoms";
import { IUser } from "@/interfaces";

interface UserFormProps {
  user: IUser.UserRequest;
  toggle: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUser.UserRequest>>;
  handleSubmit: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isLoading: boolean;
}

const UserFormPresenter: React.FC<UserFormProps> = ({
  user,
  toggle,
  handleChange,
  handleSubmit,
  isLoading
}) => {
  console.log("isLoading", isLoading);
  return (
    <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-">
      <Box className="grid gap-4 mb-4 sm:grid-cols-1">
        <Box className="col-span-full">
          <Label htmlFor="fullName" text="Name" required />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </Box>
        <Box className="col-span-full">
          <Label htmlFor="email" text="Job" required />
          <Input
            type="text"
            name="job"
            placeholder="Job"
            value={user.job}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </Box>
      </Box>
      <Box className="flex justify-end">
       
        <Button
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto mr-3"
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button
          type="button"
          onClick={toggle}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancle
        </Button>
      </Box>
    </form>
  );
};

export default UserFormPresenter;
