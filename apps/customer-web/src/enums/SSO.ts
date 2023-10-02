export enum codeError {
  ERROR_CIAM_SERVER = 'CIAMAPI:00500', //Có lỗi xảy ra trong quá trình xử lí
  ERROR_CIAM_NOT_FOUND = 'CIAMAPI:00404', //Không tìm thấy thông tin
  ERROR_CIAM_FORBIDDEN = 'CIAMAPI:00403', //Bạn không có quyền thực hiện thao tác
  ERROR_CIAM_USERNAME_PASSWORD_INCORRECT = 'CIAMAPI:00211', //Tài khoản hoặc mật khẩu không chính xác
  ERROR_CIAM_EXEC_SQL_FAIL = 'CIAMAPI:00214', //Thực thi SQL thất bại
  ERROR_CIAM_SENDOTP_EXCEEDED_LIMIT = 'CIAMAPI:00410', //Thực thi SQL thất bại
  ERROR_CIAM_SENDOTP_WAITING = 'CIAMAPI:00411', //Thực thi SQL thất bại
  ERROR_CIAM_OTP_INVALID = 'CIAMAPI:00412', //Thực thi SQL thất bại
  ERROR_CIAM_OTP_INPUT = 'CIAMAPI:00413', //Thực thi SQL thất bại
  ERROR_CIAM_CUSTOMER = 'CIAMAPI:00414', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_EXCEEDED_LIMIT = 'CIAMAPI:00415', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_INCORRECT = 'CIAMAPI:00416', //Thực thi SQL thất bại
  ERROR_CIAM_LOGIN_INVALID = 'CIAMAPI:00417', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_NOT_MATCH = 'CIAMAPI:00418', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_NOT_DUPLICATE = 'CIAMAPI:00419', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD = 'CIAMAPI:00420', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_MINIMUM = 'CIAMAPI:00421', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_MAXIMUM = 'CIAMAPI:00422', //Thực thi SQL thất bại
  ERROR_CIAM_NUMBERPHONE_INVALID = 'CIAMAPI:00423', //Thực thi SQL thất bại
  ERROR_CIAM_NUMBERPHONE_INPUT = 'CIAMAPI:00224', //Thực thi SQL thất bại
  ERROR_CIAM_CREATED_PASSWORD = 'CIAMAPI:00225', //Thực thi SQL thất bại
  ERROR_CIAM_OLD_PASSWORD_NOT_MATCH = 'CIAMAPI:00226', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_CONFIRM = 'CIAMAPI:00424', //Thực thi SQL thất bại
  ERROR_CIAM_PASSWORD_VALIDATOR = 'CIAMAPI:00400', //Thực thi SQL thất bại
  ERROR_NOTI_MAX_OTP = 'NOTI:000429', //Thực thi SQL thất bại
  ERROR_CIAM_BLOCK_LOGIN = 'CIAMAPI:00228',
  ERROR_CIAM_EXPIRED_OTP = 'CIAMAPI:00425',
}

export enum AccountValidate {
  oldAccountWithPass = 1, // -> Tài khoản có mk
  newAccount = 2, // -> Tài khoản mới
  oldAccountWithOutPass = 3, // -> Tài khoản cũ chưa có mk
}

export enum FromSysName {
  APPKHLC = 'APPKHLC',
  WEBKHLC = 'WEBKHLC',
}
