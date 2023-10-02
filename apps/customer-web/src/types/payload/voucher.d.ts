declare namespace NhapThuocPayload {
  declare namespace Voucher {
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

    interface BaseVoucher {
      sessionId: string;
      customerId?: string;
      phoneNumber?: string;
      voucherDetails: DetailVoucher[];
    }

    interface AddVoucher extends BaseVoucher {}
    interface UpdateVoucher extends BaseVoucher {}

    interface Voucher {
      seriesCode: string;
      shopCode?: string;
      phone: string;
      itemCode: string[];
    }
    interface CheckVoucher {
      vouchers: Voucher[];
      groupVouchers?: Voucher[];
    }
  }
}
