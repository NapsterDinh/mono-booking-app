declare namespace NhapThuocResponse {
  declare namespace MasterData {
    interface MasterDataItem {
      sourceId: string;
      sourceName: string;
      parentId?: string;
      parentSourceTypeId?: string;
    }

    interface Data {
      totalCount: number;
      items: MasterDataItem[];
    }
  }
}
