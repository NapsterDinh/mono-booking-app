declare namespace NhapThuocResponse {
  interface Data {
    status: number;
    data: any;
    datas: any;
    items: any;
  }

  interface Error {
    status: number;
    error: {
      code: string | null | undefined;
      message: string | null | undefined;
      details: any;
      data: any;
      validationErrors: any;
    };
  }
}
