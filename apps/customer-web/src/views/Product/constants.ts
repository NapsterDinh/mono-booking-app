export const LOWEST_INVENTORY = 30;

type ConditionType = 'NORMAL' | 'OUT_OF_STOCK' | 'DRUG_NEED_ADVICE' | 'NEED_ADVICE' | 'STOP_BUSINESS_NEED_ADVICE';

export interface Condition {
  type: ConditionType;
  keyMessage: 'NORMAL' | 'OUT_OF_STOCK' | 'NEED_ADVICE';
}

export const DEFAULT_MAXIMUM_QUANTITY = 10000;
