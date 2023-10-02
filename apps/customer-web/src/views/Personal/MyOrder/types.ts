import { OrderHistoriesTabCode } from '@customer-web/enums/Order';

export interface Filters {
  page?: number;
  type?: OrderHistoriesTabCode;
}
