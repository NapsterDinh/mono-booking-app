import { getPosts, getSearchDetail } from '@customer-web/services/request/providers/search';

export class SearchProviderService {
  constructor() { }

  public static async getSearchDetail(payload: NhapThuocPayload.SearchService.SearchDetail) {
    return await getSearchDetail(payload);
  }

  public static async getPosts(params: NhapThuocPayload.SearchService.Post) {
    return await getPosts(params);
  }
}
