declare namespace NhapThuocPayload {
  declare namespace Orders {
    interface OrderList {
      tabCode: number;
      size: number;
      page: number;
      toDate: string;
    }
    interface CancelOrder {
      orderID: string;
      orderCode: string;
      readonly modifiedBy?: string;
      readonly modifiedByName?: string;
      readonly reason?: number;
      systemDate: string | Date;
    }

    interface AdviceRequest {
      phone: string;
      receiverPhone: string;
      gender: number;
      receiverGender: number;
      address: string;
      customerName: string;
      customerReceiverName: string;
      source: 2;
      note: string;
      type: 0 | '0';
      drugData: DrugData[] | string;
      images: any;
      description: string;
      provinceCode: string;
      districtCode: string;
      wardCode: string;
      email?: string; // Optional
    }

    interface DrugData {
      sku: string;
      name: string;
    }

    interface MyOrders {
      tabCode?: number;
      skipCount?: number;
      maxResultCount?: number;
      fromDate?: string;
      toDate?: string;
    }
  }
}
