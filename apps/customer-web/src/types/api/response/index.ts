// TODO: move all response interface from response to api/response

export interface PaginatedResponse<T> {
  totalCount: number;
  items: T[];
}
