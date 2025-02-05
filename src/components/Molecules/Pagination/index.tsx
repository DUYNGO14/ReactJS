import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { Box, Button } from "../../Atoms";

interface PaginationProps {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  per_page,
  total,
  total_pages,
  setPage,
}) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < total_pages) {
      setPage(page + 1);
    }
  };

  // Generate page numbers with a maximum of 5 page numbers around the current page
  const getPageNumbers = () => {
    const start = Math.max(1, page - 2);
    const end = Math.min(total_pages, page + 2);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Box className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <Box className="hidden justify-between text-sm md:flex">
        <Box>
          SHOWING {(page - 1) * per_page + 1} -{" "}
          {page * per_page > total ? total : page * per_page} OF {total}
        </Box>
        <Box className="flex items-center gap-12" aria-label="Pagination">
          <Button
            onClick={handlePrev}
            className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
            aria-label="Previous page"
            disabled={page === 1}
          >
            <TiChevronLeft />
          </Button>

          <ul className="flex items-center gap-1">
            {getPageNumbers().map((item) => (
              <li key={item}>
                <Button
                  onClick={() => setPage(item)}
                  aria-current={page === item ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg duration-150 hover:text-white border border-indigo-600 hover:bg-indigo-600 ${
                    page === item ? "bg-indigo-600 text-white font-medium" : ""
                  }`}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleNext}
            className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
            aria-label="Next page"
            disabled={page === total_pages}
          >
            <TiChevronRight />
          </Button>
        </Box>
      </Box>

      {/* On mobile version */}
      <Box className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <Button
          onClick={handlePrev}
          className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
          aria-label="Previous page"
          disabled={page === 1}
        >
          <TiChevronLeft />
        </Button>

        <Box className="font-medium">
          {(page - 1) * per_page + 1} - {page * per_page} OF {total}
        </Box>

        <Button
          onClick={handleNext}
          className="hover:text-indigo-600 text-lg border border-indigo-600 rounded-lg"
          aria-label="Next page"
          disabled={page === total_pages}
        >
          <TiChevronRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
