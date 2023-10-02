import { BusinessType } from './business';

export enum ContractType {
  BUSINESS_LICENSE = 1,
  CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS = 2,
  CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL = 3,
  CERTIFICATE_OF_DISTRIBUTING_MEDICINE_INGREDIENTS = 4,
  OPERATION_LICENSE = 5,
  SUPPORTING_DOCUMENT = 6,
}

export const ContractTypeLabel = {
  [ContractType.BUSINESS_LICENSE]: 'Giấy phép đăng ký kinh doanh',
  [ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS]: 'Giấy chứng nhận đủ điều kiện kinh doanh dược',
  [ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL]: 'Giấy chứng nhận đạt thực hành tốt cơ sở bán lẻ thuốc',
  [ContractType.CERTIFICATE_OF_DISTRIBUTING_MEDICINE_INGREDIENTS]:
    'Giấy chứng nhận đạt thực hành tốt phân phối thuốc, nguyên liệu làm thuốc',
  [ContractType.OPERATION_LICENSE]: 'Giấy phép hoạt động (phạm vị hoạt động theo Quyết định của Bộ Y Tế, Sở Y Tế)',
  [ContractType.SUPPORTING_DOCUMENT]: 'Cung cấp các giấy tờ liên quan',
};

export const BusinessContractTypeValidationEntries: {
  [key: number]: {
    requiredArr: ContractType[];
  };
} = {
  [BusinessType.MEDICINE_STORE]: {
    requiredArr: [
      ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
    ],
  },
  [BusinessType.MEDICINE_COUNTER]: {
    requiredArr: [
      ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
    ],
  },
  [BusinessType.HEALTH_CLINIC]: {
    requiredArr: [
      ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
    ],
  },
  [BusinessType.TRADING_ORG]: {
    requiredArr: [
      ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      ContractType.CERTIFICATE_OF_DISTRIBUTING_MEDICINE_INGREDIENTS,
    ],
  },
  [BusinessType.HOSPITAL]: {
    requiredArr: [ContractType.OPERATION_LICENSE],
  },
  [BusinessType.OTHER_HEALTH_CLINIC]: {
    requiredArr: [ContractType.OPERATION_LICENSE],
  },
  [BusinessType.OTHER]: {
    requiredArr: [ContractType.SUPPORTING_DOCUMENT],
  },
  [BusinessType.OTHER_TRADING_ORG]: {
    requiredArr: [ContractType.BUSINESS_LICENSE],
  },
};

export const BUSINESS_TYPE_MAP_CONTRACTS = {
  [BusinessType.MEDICINE_STORE]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS],
    },
    {
      value: ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL],
    },
  ],
  [BusinessType.MEDICINE_COUNTER]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS],
    },
    {
      value: ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL],
    },
  ],
  [BusinessType.HEALTH_CLINIC]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS],
    },
    {
      value: ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_MEDICINE_PRACTICE_RETAIL],
    },
  ],
  [BusinessType.TRADING_ORG]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_PHARMACEUTICAL_BUSINESS],
    },
    {
      value: ContractType.CERTIFICATE_OF_DISTRIBUTING_MEDICINE_INGREDIENTS,
      label: ContractTypeLabel[ContractType.CERTIFICATE_OF_DISTRIBUTING_MEDICINE_INGREDIENTS],
    },
  ],
  [BusinessType.HOSPITAL]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.OPERATION_LICENSE,
      label: ContractTypeLabel[ContractType.OPERATION_LICENSE],
    },
  ],
  [BusinessType.OTHER_HEALTH_CLINIC]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.OPERATION_LICENSE,
      label: ContractTypeLabel[ContractType.OPERATION_LICENSE],
    },
  ],
  [BusinessType.OTHER]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
    {
      value: ContractType.SUPPORTING_DOCUMENT,
      label: ContractTypeLabel[ContractType.SUPPORTING_DOCUMENT],
    },
  ],
  [BusinessType.OTHER_TRADING_ORG]: [
    {
      value: ContractType.BUSINESS_LICENSE,
      label: ContractTypeLabel[ContractType.BUSINESS_LICENSE],
    },
  ],
};
