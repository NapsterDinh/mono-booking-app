// TODO: move all payload interface from payload to api/payload

export interface PaginatablePayload {
  skipCount?: number;
  maxResultCount?: number;
}

export interface DateRangePayload {
  fromDate?: string;
  toDate?: string;
}
