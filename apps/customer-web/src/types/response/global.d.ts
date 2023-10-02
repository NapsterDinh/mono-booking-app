declare namespace NhapThuocResponse {
  declare namespace Global {
    interface FrontDoorReturnStruct<T = any> {
      status?: number;
      data: T;
    }
  }
}
