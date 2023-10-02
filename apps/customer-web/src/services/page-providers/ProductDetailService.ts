import { DISPLAY_CODE } from '@customer-web/enums/Product';
import { Condition, LOWEST_INVENTORY } from '@customer-web/views/Product/constants';

export function getConditionCTAView(displayCode: number, prescription: boolean, inventory: number): Condition {
  if (displayCode === DISPLAY_CODE.VIEW) {
    if (inventory >= LOWEST_INVENTORY) {
      return {
        type: 'NORMAL',
        keyMessage: 'NORMAL',
      };
    }
    return {
      type: 'OUT_OF_STOCK',
      keyMessage: 'OUT_OF_STOCK',
    };
  }
  if (displayCode === DISPLAY_CODE.HIDE_PRICE) {
    if (inventory >= LOWEST_INVENTORY && prescription) {
      return {
        type: 'DRUG_NEED_ADVICE',
        keyMessage: 'NEED_ADVICE',
      };
    }
    if (inventory >= LOWEST_INVENTORY && !prescription) {
      return {
        type: 'NEED_ADVICE',
        keyMessage: 'NEED_ADVICE',
      };
    }
    return {
      type: 'NEED_ADVICE',
      keyMessage: 'NEED_ADVICE',
    };
  }
  return {
    type: 'STOP_BUSINESS_NEED_ADVICE',
    keyMessage: 'NEED_ADVICE',
  };
}
