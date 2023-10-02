import { codeError } from '../enums/SSO';
import { secondsToMinsAndSeconds } from './DateTime';

export const generateErrorMessageSSO = (error: any): NhapThuocResponse.SSO.ModelResponseErrorSSO => {
  let messageError = 'Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau';
  const errorResObject: NhapThuocResponse.SSO.ModelResponseErrorSSO = {
    code: '',
    message: '',
    timeCount: null,
    timeCountPassword: null,
    isContinueSend: true,
  };
  if (error) {
    const code = error?.error?.code || '',
      message = error?.error?.message || '';
    if (Object.values(codeError).includes(code)) {
      messageError = message;
    } else {
      messageError = messageError + `${code ? `(${code})` : ''}`;
    }

    if (code === codeError.ERROR_CIAM_PASSWORD_VALIDATOR) {
      messageError = error.error.validationErrors[0]?.message;
    }
    if ([codeError.ERROR_CIAM_SENDOTP_WAITING, codeError.ERROR_NOTI_MAX_OTP].includes(code)) {
      errorResObject.timeCount = error.error?.data?.OTP || null;
    }
    if (code === codeError.ERROR_CIAM_SENDOTP_EXCEEDED_LIMIT) {
      errorResObject.isContinueSend = false;
    }

    if ([codeError.ERROR_CIAM_PASSWORD_EXCEEDED_LIMIT, codeError.ERROR_CIAM_BLOCK_LOGIN].includes(code)) {
      let isContinueSend = true;
      const wrongPasswordObject = error?.error.data?.password;
      const waitingTimeSecond = wrongPasswordObject?.waitingTimeSecond || 0;
      const failedPasswordQuantity: number = wrongPasswordObject?.failedPasswordQuantity || 1;
      if (failedPasswordQuantity >= 5 && failedPasswordQuantity < 9) {
        messageError = `Mật khẩu không đúng, nhập lại sau ${secondsToMinsAndSeconds(waitingTimeSecond)}`;
        isContinueSend = false;
        errorResObject.isContinueSend = false;
      } else if (failedPasswordQuantity >= 9) {
        isContinueSend = false;
        errorResObject.isContinueSend = false;
      }
      errorResObject.timeCountPassword = {
        nextInputPasswordTime: wrongPasswordObject?.nextInputPasswordTime || '',
        waitingTimeSecond: waitingTimeSecond,
        isContinueSend: isContinueSend,
        failedPasswordQuantity: failedPasswordQuantity,
      };
    }

    errorResObject.code = code;
    errorResObject.message = messageError;
  }
  return errorResObject;
};
