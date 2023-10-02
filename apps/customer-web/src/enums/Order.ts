export enum EcomOrderStatusLabel {
  PROCESSING = 'Đang xử lý',
  CANCEL = 'Đơn huỷ',
  RETURN = 'Trả hàng',
  COMPLETE = 'Hoàn tất',
  FINISH_DEPOSIT = 'Hoàn tất cọc',
  UNKNOWN_LABEL = 'Không xác định',
}

export enum EnumStatusNewRSA {
  // Trạng thái đơn hàng hiển thị trên rsa
  Processing = 1,
  Delivering = 2,
  Completed = 3,
  Failed = -3,
}

export enum OrderPage {
  SUCCESS = 'success',
  FAILURE = 'failure',
  REFUND = 'refund',
  RETURN = 'return',
  PROFILE = 'profile',
  TRACKING = 'tracking',
}

export enum EcomPaymentRequestStatusEnum {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  CANCEL = 'CANCELED',
}

export enum OrderStatusCode {
  PROCESSING = 1,
  CANCELED = 2,
  FULL_RETURN = 3,
  COMPLETED = 4,
  PARTIAL_RETURN = 5,
  FINISH_DEPOSIT = 6,
}

export enum ORDER_STATUS_DISPLAY_ENUM {
  CANCEL = 'ORDER_STATUS_DISPLAY_CANCEL',
  RETURN = 'ORDER_STATUS_DISPLAY_RETURN',
  SHIPPED = 'ORDER_STATUS_DISPLAY_SHIPPED',
  SHIPPING = 'ORDER_STATUS_DISPLAY_SHIPPING',
  PROCESSING = 'ORDER_STATUS_DISPLAY_PROCESSING',
}

export enum OrderReturnStatusCode {
  PROCESSING = 1, // Đang xử lý
  PICKING = 2, // Đang lấy hàng
  RECEIVED = 3, // Đã nhận hàng
  COMPLETED = 4, // Hoàn thành
  CANCELLED = 13, // Đã huỷ
}

export enum OrderHistoriesTabCode {
  ALL = '0',
  CONFIRM = '1',
  CANCELLED = '2',
  RETURN = '3',
  DONE = '4',
}

export enum OrderSplitType {
  SO1 = 'so1', // Từ shop hub
  SO2 = 'so2', // Từ Kho tổng
  SO3 = 'so3', // Huỷ và hoàn tiền cho khách
}

export const enum TypeOfSplitingOrder {
  PARENT = 'parent',
  CHILDREN = 'children',
}
