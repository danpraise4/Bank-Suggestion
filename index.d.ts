export interface PaginationModel<T> {
  totalData: number | undefined;
  limit: number | undefined;
  totalPages: number | undefined;
  page: number | undefined;
  data: T[];
}

export interface Bank {
  id: number;
  code: string;
  name: string;
}
