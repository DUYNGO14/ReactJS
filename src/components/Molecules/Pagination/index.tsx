import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { Box, Button } from "../../Atoms";
interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Pagination> = ({
  page,
  per_page,
  total,
  total_pages,
  setPage,
}) => {
  return (
    <Box className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <Box className="hidden justify-between text-sm md:flex">
        <Box>
          SHOWING {(page - 1) * per_page + 1} -{" "}
          {page * per_page > total ? total : page * per_page} OF {total}
        </Box>
        <Box className="flex items-center gap-12" aria-label="Pagination">
          <Button
            onClick={() => page > 1 && setPage(page - 1)}
            className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
          >
            <TiChevronLeft />
          </Button>
          <ul className="flex items-center gap-1">
            {[...Array(total_pages).keys()].map((item, idx) => (
              <li key={idx}>
                <Button
                  onClick={() => setPage(item + 1)}
                  aria-current={page == item ? "page" : false}
                  className={`px-3 py-2 rounded-lg duration-150 hover:text-white border border-indigo-600  hover:bg-indigo-600 ${
                    page - 1 == item
                      ? "bg-indigo-600 text-white font-medium"
                      : ""
                  }`}
                >
                  {item + 1}
                </Button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => page < total_pages && setPage(page + 1)}
            className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
          >
            <TiChevronRight />
          </Button>
        </Box>
      </Box>
      {/* On mobile version */}
      <Box className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <Button
          onClick={() => page > 1 && setPage(page - 1)}
          className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
        >
          <TiChevronLeft />
        </Button>
        <Box className="font-medium">
          {(page - 1) * per_page + 1} - {page * per_page} OF {total}
        </Box>
        <Button
          onClick={() => page < total_pages && setPage(page + 1)}
          className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
        >
          <TiChevronRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
