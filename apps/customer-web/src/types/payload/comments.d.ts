declare namespace NhapThuocPayload {
  declare namespace Comments {
    interface GetList {
      pageType: string;
      commentType: string;
      page: number;
      size: number;
      sort?: string;
    }

    interface Comment {
      name: string;
      phone: string;
      email: string;
      gender: number;
      content: string;
      pageType: string;
      commentType: string;
      rating?: number;
      link: string;
      parentId?: number;
    }
  }
}
