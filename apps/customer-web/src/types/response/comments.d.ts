declare namespace NhapThuocResponse {
  declare namespace Comments {
    interface List {
      totalItems: number;
      totalPage: number;
      data: Data[];
    }
    interface Data {
      id: number;
      parentId: number;
      isHidden: boolean;
      createdTime: string;
      createdAt: string;
      customer: Customer;
      content: string;
      totalLike: number;
      rating: number;
      replies: Reply[];
    }

    interface Reply extends Data {}

    interface Customer {
      name: string;
      isAdministrator: boolean;
    }
  }
}
