declare namespace NhapThuocResponse {
  declare namespace Voucher {
    interface VoucherInfo {
      code: string;
      name: string;
      value: number;
      type: number;
      typeName: string;
      supplier: number;
      supplierName: string;
      isValidated: boolean;
      isValidatedMessage: string;
      expiredDay: string;
      detail: DetailVoucher;
    }

    interface DetailVoucher {
      seriesCode: string;
      status: number;
      statusName: string;
      fromDate: string;
      toDate: string;
      voucherType: number;
      voucherTypeName: string;
      voucherName: string;
      price: number;
      discountPercent: number;
      maxDiscountAmount: number;
      discountType: number;
      supplier: number;
    }
  }
}
