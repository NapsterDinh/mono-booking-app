import { OrderHistoriesTabCode } from '@customer-web/enums/Order';
import { DateRangePayload, PaginatablePayload } from '.';

export interface MyOrdersPayload extends PaginatablePayload, DateRangePayload {
  tabCode?: OrderHistoriesTabCode;
}
