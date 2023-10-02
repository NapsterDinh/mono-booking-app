declare namespace NhapThuocResponse {
  declare namespace SSO {
    interface SSOToken {
      access_token: string;
      expires_in: number;
      refresh_token: string;
      refresh_token_expires_in: number;
      scope: string;
      token_type: string;
    }

    type CheckUserType = {
      type: number;
      userName: string;
    };

    type SendOTP = {
      nextSendOtpTime: Date;
      expiredOtpTime: Date;
      waitingTimeSecond: number;
      expiredOtpTimeSecond: number;
    };

    type ModelResponseErrorSSO = {
      code: string;
      message: string;
      timeCount: {
        nextSendOtpTime: Date;
        expiredOtpTime: Date;
        waitingTimeSecond: number;
        expiredOtpTimeSecond: number;
      } | null;
      timeCountPassword: {
        nextInputPasswordTime: Date | string;
        waitingTimeSecond: number;
        isContinueSend: boolean;
        failedPasswordQuantity: number;
      } | null;
      isContinueSend: boolean;
    };
  }
}
