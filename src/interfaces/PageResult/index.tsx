interface ResultPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
interface PageResult<T> extends ResultPage {
  data: T[];
}

export type { ResultPage, PageResult };
