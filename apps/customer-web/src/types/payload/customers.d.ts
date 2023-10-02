declare namespace NhapThuocPayload {
  declare namespace Customers {
    interface CreateCustomer {
      gender: number;
      name: string;
      phone: string;
      email?: string;
      password: string;
      businessType: number;
      referralCode?: number;
      fromSystem: string;
      fullName: string;
      provinceCode: string;
      districtCode: string;
      wardCode: string;
      customerAddress: string;
    }

    interface Login {
      userName: string;
      password: string;
    }

    interface Update {
      contract: [
        {
          id: string;
          contractNumber: string;
          issueBy: string;
          issueDate: string;
          contractDocType: number;
          contractFiles: {
            id: string;
            fileName: string;
          }[];
        },
      ];
      profile: {
        fullName: string;
        email: string;
        gender: number;
        businessType: number;
        customerAddress: string;
        wardCode: string;
        districtCode: string;
        provinceCode: string;
        taxNumber: string;
      };
      invoice: {
        id?: string;
        email: string;
        phoneNumber: string;
        taxNumber: string;
        buyerName: string;
        invoiceName: string;
        customerAddress: string;
        wardCode: string;
        districtCode: string;
        provinceCode: string;
      };
    }

    interface CreateAddress {
      mobilePhone: string;
      address: string;
      name: string;
      addressType: string;
      wardCode: string;
      districtCode: string;
      provinceCode: string;
      isPrimary: boolean;
      note: string;
      isValid: boolean;
      customerId: string;
    }

    interface UpdateAddress {
      mobilePhone: string;
      address: string;
      name: string;
      addressType: string;
      wardCode: string;
      districtCode: string;
      provinceCode: string;
      isPrimary: boolean;
      note: string;
      isValid: boolean;
      addressId: string;
      customerId: string;
    }

    interface UpdateInformation {
      customerId: string;
      profile: {
        fullName: string;
        gender: number;
        birthDate: string;
      };
      address: NhapThuocResponse.Customers.Address[];
    }

    interface DeleteAddress {
      addressId: string;
      customerId: string;
    }

    interface GetCustomerInfo {
      token: string;
      phone: string;
    }

    interface RewardConfirm {
      phoneNumber: string;
      name: string;
      transactionId: string;
      token: string;
    }

    interface Pagination {
      skipCount?: number;
      maxResultCount?: number;
    }
    interface GetOrders extends Pagination {
      tabCode: string;
      fromDate?: string;
      toDate?: string;
    }

    interface UpdateInvoice {
      id: string;
      email?: string;
      taxNumber: string;
      invoiceName: string;
      customerAddress: string;
      provinceCode: string;
      districtCode: string;
      wardCode: string;
      isPrimary: boolean;
    }

    interface DeleteInvoice {
      invoiceId: string;
      customerId: string;
    }
  }
}
