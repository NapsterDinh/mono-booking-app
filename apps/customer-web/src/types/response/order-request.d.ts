declare namespace NhapThuocResponse {
  declare namespace OrderRequests {
    interface DetailData {
      id: number;
      phone: string;
      receiverPhone: string;
      address: string;
      customerName: string;
      customerReceiverName: string;
      gender: number;
      receiverGender: number;
      source: number;
      note: string;
      type: number;
      drugData: string[];
      images: any[];
      ocrId: any[];
      status: number;
      description: string;
      provinceCode: number;
      districtCode: number;
      wardCode: number;
      insideId?: any;
      createdAt: string;
      updatedAt: string;
      modifiedAt?: any;
      createdBy?: any;
      modifiedBy?: any;
      employeeInCharge?: any;
      fullAddress: string;
      isRequestOrder: number;
    }

    interface Submit {
      phone: string;
      receiverPhone: string;
      address: string;
      customerName: string;
      customerReceiverName: string;
      gender: number;
      receiverGender: number;
      source: number;
      note: string;
      type: number;
      status: number;
      drugData: any[];
      images: any[];
      description: string;
      provinceCode: number;
      districtCode: number;
      wardCode: number;
      ocrId: any[];
      modifiedBy: string;
      createdBy: string;
      created_at: Date;
      updated_at: Date;
      id: number;
    }

    interface SearchDrugs {
      total: number;
      items: SearchDrugItem[];
    }

    interface SearchDrugItem {
      code: string;
      name: string;
      image: string;
    }
  }
}
