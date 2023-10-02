export enum ModalType {
  AGREE_TO_TERMS_AND_CONDITION = 'agree_to_terms_and_condition',
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot_password',
  SUCCESS_SEND_RESET_PASSWORD_REQUEST = 'success_send_request_password_request',
  ACCOUNT_LOCKED = 'account_locked',
  SUCCESS_RESET_PASSWORD = 'success_reset_password',
  FAILED_RESET_PASSWORD = 'failed_reset_password',
  PRE_RESET_FORM_MODAL = 'pre_reset_form_modal',
  RESET_FORM = 'reset_form',
  CHANGE_PASSWORD = 'change_password',
  CONFIRM_REMOVE_ITEM_FROM_CART = 'confirm_remove_item_from_cart',
  REBUY_PRODUCTS = 'rebuy_products',
  AGREE_PROTECTION_TERMS = 'agree_protection_terms',
  REQUEST_OTP = 'request_otp',
  FAIL_TO_REQUEST_OTP = 'fail_to_request_otp',
  REMIND_BEFORE_LEAVE = 'remind_before_leave',
  DECREE_13 = 'decree_13',
  BANK_ACCOUNT_INFO = 'bank_account_info',
  DETAIL_BANK_INFO = 'detail_bank_info',
  CONFIRM_TP_BANK_OVERDRAFT_LOAN_PAYMENT_METHOD = 'confirm_tp_bank_overdraft_loan_payment_method',
}

// https://www.indovinabank.com.vn/sites/default/files/0%20MARKETING_p1/EBANKING%20forms/Ds%20t%E1%BB%95ng%20NH%20tham%20gia%20napas%20(VN)%2026.10.2020%20m%E1%BB%9Bi%20nh%E1%BA%A5t.pdf
export enum BankBIN {
  VIETIN_BANK = '970415',
}
