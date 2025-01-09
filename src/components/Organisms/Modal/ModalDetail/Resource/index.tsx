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
    </ModalBlank>
  );
};

export default ModalResourceDetail;
