import axios from "../customize-axios";
import { PAGINATION_CONSTANTS } from "../../constants";

const ResourceService = {
  getAll: async (page: number) => {
    const response = await axios.get(
      `/unknown?page=${page}&per_page=${PAGINATION_CONSTANTS.DEFAULT_PAGE_SIZE}`
    );
    return response;
  },
  getById: async (id: number) => {
    const response = await axios.get(`/unknown/${id}`);
    return response;
  },
};

export default ResourceService;
