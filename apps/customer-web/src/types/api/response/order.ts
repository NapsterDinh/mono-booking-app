import { OrderHistoriesTabCode } from '@customer-web/enums/Order';
import { Order } from '../../models/order';

export interface MyOrdersResponse {
  orders?: Order[];
  tabCode?: OrderHistoriesTabCode;
  tabName?: string;
  totalCount?: number;
}

export interface TabCountsResponse {
  statusCode: number;
  statusName: string;
  totalCount: number;
}

export interface OrderByPaymentCodeResponse {
  orderID?: string;
  orderCode?: string;
  total?: number;
  totalBill?: number;
}
