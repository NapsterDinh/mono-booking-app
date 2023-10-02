declare namespace NhapThuocResponse {
  declare namespace Payments {
    interface Bank {
      code: string;
      name: string;
      image: string;
      url: string;
    }

    interface Method {
      avatar: string;
      detail: any[];
      id: number;
      name: string;
      status: boolean;
    }
  }
}
