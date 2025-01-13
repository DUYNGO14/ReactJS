import { IResource } from "../../../../../interfaces";
import { Box, Button } from "../../../../Atoms";
import ModalBlank from "../../ModalBlank";
interface ModalUserDetailProps {
  resource: IResource.ResourceResponse | unknown;
  isShow: boolean;
  toggle: (typeModal: string) => void;
}
const ModalResourceDetail: React.FC<ModalUserDetailProps> = ({
  resource,
  isShow,
  toggle,
}) => {
  const resourceDB = resource as IResource.ResourceResponse;
  return (
    <ModalBlank title="Resource Detail" isShow={isShow} toggle={toggle}>
      {resourceDB && resourceDB.id ? (
        <>
          <Box>
            <p className="text-center text-base text-gray-600">
              Name: {resourceDB.name}{" "}
            </p>
            <p className="text-center text-base text-gray-600">
              Year: {resourceDB.year}{" "}
            </p>
            <p className="text-center text-base text-gray-600">
              Color:{" "}
              <input
                disabled
                type="color"
                value={resourceDB.color}
                className="w-20"
              />{" "}
            </p>
            <p className="text-center text-base text-gray-600">
              Pantone Value: {resourceDB.pantone_value}{" "}
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
        </>
      )}
    </ModalBlank>
  );
};

export default ModalResourceDetail;
