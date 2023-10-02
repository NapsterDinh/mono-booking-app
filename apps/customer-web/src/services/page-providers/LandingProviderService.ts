import { getLandingBySlug, getLandingPreviewBySlug } from '@customer-web/services/request/providers/landing';

export class LandingProviderService {
  constructor() { }

  public static async getLandingBySlug(slug: string) {
    return await getLandingBySlug(slug);
  }

  public static async previewLandingBySlug(slug: string) {
    return await getLandingPreviewBySlug(slug);
  }
}
