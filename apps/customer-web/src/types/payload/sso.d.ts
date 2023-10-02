declare namespace NhapThuocPayload {
  declare namespace SSO {
    type Password = {
      phoneNumber: string;
      otp: string;
      newPassword: string;
      confirmNewPassword: string;
      oldPassword: string;
      userName: string;
      password: string;
    };

    type CreatePasswordUser = Pick<Password, 'newPassword' | 'confirmNewPassword'>;

    type ForgetPasswordUser = Omit<Password, 'oldPassword' | 'userName' | 'password'>;

    type LoginAccountByPassword = Pick<Password, 'userName' | 'password'>;

    type CheckValidOtp = Pick<Password, 'userName' | 'otp'>;
  }
}
