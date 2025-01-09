import { useState } from "react";

const usePagination = () => {
    const [page, setPage] = useState<number>(1);
    const [per_page, setPerPage] = useState<number>(0);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
  return {
    page,
    setPage,
    per_page,
    setPerPage,
    totalPage,
    setTotalPage,
    total,
    setTotal,
  };
};

export default usePagination;
