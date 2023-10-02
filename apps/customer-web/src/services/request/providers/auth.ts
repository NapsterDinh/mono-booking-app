import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { FromSysName } from '@customer-web/enums/SSO';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

/** List API login SSO  **/

// Create Password
export function createPasswordUser(payload: NhapThuocPayload.SSO.CreatePasswordUser, tokenTemp: string) {
  return APIClient<boolean>(`${RouteMapper.getHost('SSO')}/create-password`, HTTP_METHOD.POST, payload, {
    headers: {
      Authorization: `Bearer ${tokenTemp}`,
    },
  });
}

// Forget password
export function forgetPasswordUser(payload: NhapThuocPayload.SSO.ForgetPasswordUser) {
  return APIClient<boolean>(`${RouteMapper.getHost('SSO')}/forget-password`, HTTP_METHOD.POST, payload);
}

// Login by password
export function loginAccountByPassword(payload: NhapThuocPayload.SSO.LoginAccountByPassword) {
  return APIClient<NhapThuocResponse.SSO.SSOToken>(
    `${RouteMapper.getHost('SSO')}/loginAccount`,
    HTTP_METHOD.POST,
    payload,
  );
}

// Check user type
export function checkUserType(phone: string) {
  return APIClient<NhapThuocResponse.SSO.CheckUserType>(
    `${RouteMapper.getHost('SSO')}/check-user-type/${phone}`,
    HTTP_METHOD.POST,
  );
}

// Send otp
export function sendOtp(phoneNumber: string) {
  return APIClient<NhapThuocResponse.SSO.SendOTP>(
    `${RouteMapper.getHost('SSO')}/new-send-verification`,
    HTTP_METHOD.POST,
    {
      phoneNumber: phoneNumber,
      fromSys: FromSysName.WEBKHLC,
    },
  );
}

//Get token by OTP
export function getTokenByOTP(phone: string, otpCode: string) {
  return APIClient<NhapThuocResponse.SSO.SSOToken>(
    `${RouteMapper.getHost('SSO')}/login?phoneNumber=${phone}&otpCode=${otpCode}`,
    HTTP_METHOD.POST,
  );
}

// Check valid otp
export function checkValidOtp(data: NhapThuocPayload.SSO.CheckValidOtp) {
  return APIClient<boolean>(`${RouteMapper.getHost('SSO')}/check-valid-otp`, HTTP_METHOD.POST, {
    userName: data.userName,
    otp: data.otp,
  });
}
