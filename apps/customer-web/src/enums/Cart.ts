export enum ItemType {
  PRODUCT = 1,
  PROMOTION = 2,
  VOUCHER = 3,
}

export enum CART_PROMOTION_STATUS_CODE {
  USED = 'USED',
  NOT_USED = 'NOT_USED',
  NOT_AFFORD = 'NOT_AFFORD',
}

export enum CART_PROMOTION_TYPE_CODE {
  DIGITAL_WALLET = 'DigitalWallet',
}

export enum CART_STEP {
  SELECTOR = 'Selector',
  PRE_ORDER = 'PreOrder',
}

export enum ITEM_POLICY {
  ALLOW_PURCHASE,
  NEED_PHARMACIST_ADVICE = 1,
  RESTRICTED_OR_OUT_OF_STOCK = 2,
}

export enum CART_POLICY {
  ALLOW_PURCHASE = 0,
  FRIEND_SELL_VOUCHER_CONFLICTED = 1,
  NEED_PHARMACIST_ADVICE = 2,
}

export enum CART_MESSAGES {
  UN_SELECTED_PRODUCT_MESSAGE = 'Hệ thống đã bỏ chọn các sản phẩm cần tư vấn, bạn có thể tiếp tục mua hàng.',
}

export enum CART_VALIDATION_MESSAGE {
  ERROR_SELECT_REGION = 'Vui lòng chọn địa chỉ nhận hàng',
}
