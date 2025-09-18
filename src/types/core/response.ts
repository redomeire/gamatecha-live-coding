export type ResponseType<T> = {
  data: T;
};

export type ListResponseType<T> = ResponseType<T[]> & {
  meta: {
    page: number;
    totalPage: number;
    totalData: number;
  };
};
