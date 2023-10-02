declare namespace NhapThuocResponse {
  declare namespace Customers {
    interface Auth {
      profileData: Customer;
      ssoData: {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
      };
    }

    interface Customer {
      customerId: string;
      profile: {
        businessType: number;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        fullName: string;
        gender: number;
        genderName: string;
        cardId: string | null;
        dateIdentifier: string | null;
        birthDate: string | null;
        customerType: 1 | 2;
        customerTypeName: string;
        taxNumber: string;
        mobilePhone: string;
        email: string;
        image: string | null;
        isActive: boolean;
        representer?: string;
        provinceCode?: string;
        districtCode?: string;
        wardCode?: string;
        customerAddress?: string;
        taxNumber?: string;
        status?: 'Open' | 'Pending' | 'Approved' | 'Rejected';
        isAgreeProtectionTerms?: boolean;
      };
      address: Address[];
      includeAttributes?: {
        flc?: Avatar;
        contracts?: Contract[];
        invoices?: Invoice[];
      };
    }

    interface Avatar {
      id: number;
      avatar: string;
      isDebit: any;
      isSubscribe: any;
    }

    interface Address {
      id: string;
      name: string;
      mobilePhone: string;
      addressType: string | null;
      address: string;
      wardCode: string;
      wardName: string;
      districtCode: string;
      districtName: string;
      provinceCode: string;
      provinceName: string;
      isPrimary: boolean;
      note: null;
      customerAddressId: string;
      isValid: boolean;
      fullAddress: string;
    }

    interface CreateAddress {
      customerId: string;
      profile: Pick<Customer, 'profile'>;
      work: Work;
      address: Omit<Address[], 'id'>;
      includeAttributes?: {
        flc?: Avatar | null;
      };
    }

    interface Work {
      jobTitle: string;
      position: string;
      workCompany: string;
      workPhone: string;
      workAddress: string;
    }

    interface UpdateAddress extends CreateAddress {}

    interface UpdateInformation {
      customerId: string;
      profile: Customer['profile'];
    }

    interface Activity {
      [x: string]: string | number;
    }

    interface VoucherEventQuota {
      isValid: boolean;
      returnCode?: any;
      returnMessage: string;
      quantityReward: number;
      quantityRemains: number;
      quantityRemainsDate: number;
    }

    interface VoucherEventReward {
      isValid: boolean;
      returnCode?: any;
      returnMessage: string;
      quantityRemains: number;
      transactionId: string;
      voucherName: string;
      voucherPrice: number;
    }

    interface VoucherEventRewardConfirm {
      isValid: boolean;
      returnCode?: any;
      returnMessage: string;
      phoneNumber: string;
    }

    interface Invoice {
      id?: string;
      customerId?: string;
      email?: string;
      phoneNumber?: string;
      taxNumber?: string;
      isPrimary?: true;
      buyerName?: string;
      invoiceName?: string;
      comCode?: string;
      customerAddress?: string;
      wardCode?: string;
      wardName?: string;
      districtCode?: string;
      districtName?: string;
      provinceCode?: string;
      provinceName?: string;
      creationTime?: string;
      lastModificationTime?: string;
    }

    interface Contract {
      id: string;
      customerId: string;
      contractNumber: string;
      issueDate: string;
      issueBy: string;
      contractDocType: number;
      status?: string;
      rejectReason?: string;
      contractDocTypeName?: string;
      businessType?: number;
      businessTypeName?: string;
      creationTime?: string;
      lastModificationTime?: string;
      updatedBy?: string;
      updatedByName?: string;
      contractFiles: {
        id?: string;
        fileName: string;
        creationTime?: string;
        lastModificationTime?: string;
      }[];
    }
    interface Document {
      preSignedUrl: string;
      key: string;
    }
  }
}
