// export const PaymentRequestStatusEnumText = {
//     1: 'Chưa thanh toán',
//     2: 'Hủy thanh toán',
//     4: 'Đã thanh toán',
//   };

export enum PaymentStatus {
  UNPAID = 1,
  CANCELLED = 2,
  PAID = 4,
}

export enum PaymentMethod {
  CASH = 6,
  TRANSFER = 5,
  TP_BANK_OVERDRAFT_LOAN = 13,
}
