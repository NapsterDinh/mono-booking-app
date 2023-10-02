import { getGlobalPage } from '@customer-web/request-providers/cms';
import { getListProduct, getListProductByCategorySlug } from '@customer-web/services/request/providers/search';

export class GlobalPageService {
  public isAutoCate(a: NhapThuocResponse.CMSGlobal.Menu): a is NhapThuocResponse.CMSGlobal.AutoCate {
    return a.__component === 'menu.menu-auto-cate';
  }
  public isManualCate(a: NhapThuocResponse.CMSGlobal.Menu): a is NhapThuocResponse.CMSGlobal.ManualCate {
    return a.__component === 'menu.menu-manual-cate';
  }
  public isLink(a: NhapThuocResponse.CMSGlobal.Menu): a is NhapThuocResponse.CMSGlobal.Link {
    return a.__component === 'menu.menu-link';
  }
  private getImage(image?: NhapThuocResponse.Landings.Attributes | null): Image {
    if (image) {
      return {
        url: image.url || '',
        alt: image.alternativeText || '',
        name: image.name || '',
      };
    }
    return null;
  }

  public getHeader(data?: NhapThuocResponse.CMSGlobal.Header | null): Header | null {
    if (!data) {
      return null;
    }
    return {
      logo: this.getImage(data?.logo?.data?.attributes),
      topSearch: {
        icon: this.getImage(data?.topSearch?.icon?.data?.attributes),
        keywords: data?.topSearch?.keywords || [],
        background: {
          web: this.getImage(data?.webBackground?.data?.attributes),
          mobile: this.getImage(data?.mobileBackground?.data?.attributes),
        },
      },
    };
  }

  public async getMenu(data?: NhapThuocResponse.CMSGlobal.Menu[]): Promise<Array<Menu | undefined>> {
    if (!data) {
      return [];
    }

    const promise = data?.map?.(async (i) => {
      if (this.isAutoCate(i)) {
        return {
          component: i.__component,
          fullPathSlug: `/${i.targetCategory.fullPathSlug || ''}`,
          name: i.targetCategory.name,
          image: this.getImage(i.targetCategory.desktopImage),
          children: await Promise.all(
            i.targetCategory?.children?.map?.(async (e: any) => ({
              fullPathSlug: `/${e.fullPathSlug || ''}`,
              name: e.name,
              image: this.getImage(e.desktopImage),
              children:
                e.children?.map?.((child: any) => ({
                  fullPathSlug: `/${child.fullPathSlug || ''}`,
                  name: child.name || '',
                  image: this.getImage(child.desktopImage),
                  children: [],
                })) || [],
              products: await getListProductByCategorySlug({
                skipCount: 0,
                maxResultCount: 5,
                sortType: 4,
                category: [e.fullPathSlug],
              })
                .then((res) => res.products)
                .catch(() => []),
            })),
          ),
        } as MenuAutoCate;
      }
      if (this.isManualCate(i)) {
        return {
          component: i.__component,
          fullPathSlug: `/${i.targetCategory.fullPathSlug || ''}`,
          name: i.targetCategory.name || '',
          image: this.getImage(i.targetCategory.desktopImage),
          children:
            (await Promise.all(
              i.tabs?.map(async (e) => ({
                name: e.tabTitle,
                fullPathSlug: e.redirectUrl,
                image: this.getImage(e.tabIcon.data?.attributes),
                children: [
                  {
                    name: '',
                    children:
                      e.categories?.map?.((category) => ({
                        fullPathSlug: `/${category.fullPathSlug || ''}`,
                        name: category.name,
                        image: this.getImage(category.desktopImage),
                      })) || [],
                  },
                  {
                    name: e.productTitle || '',
                    children: e.products?.length > 0 ? await getListProduct(e.products.map((p) => p.sku)) : [],
                  },
                  {
                    name: e.ingredientTitle,
                    children:
                      e.ingredients?.data?.map((ingredient) => ({
                        fullPathSlug: `/${ingredient.attributes?.slug || ''}`,
                        name: ingredient.attributes?.compoundName || '',
                        image: null,
                      })) || [],
                  },
                ],
              })),
            )) || [],
        } as MenuManualCate;
      }
      if (this.isLink(i)) {
        return {
          fullPathSlug: i.redirectUrl,
          name: i.title,
        } as MenuLink;
      }
    });
    return await Promise.all(promise);
  }

  public getFooter(data: any): Footer | null {
    if (!data) {
      return null;
    }
    return {
      background: {
        web: this.getImage(data.webBackground?.data?.attributes),
        mobile: this.getImage(data.mobileBackground?.data?.attributes),
      },
      copyRight: data.copyRight || '',
      items: [
        {
          title: data.aboutSectionTitle,
          items: data.aboutSectionLinks?.map?.((i: any) => ({
            text: i.text,
            redirectUrl: i.redirectUrl,
          })),
        },
        {
          title: data.categorySectionTitle,
          items: data.categorySectionLinks?.map?.((i: any) => ({
            text: i.text,
            redirectUrl: i.redirectUrl,
          })),
        },
        {
          title: data.productSectionTitle,
          items: data.productSectionLinks?.map?.((i: any) => ({
            text: i.text,
            redirectUrl: i.redirectUrl,
          })),
        },
      ],
      callCenter: {
        title: data.callCenterSectionTitle,
        items: data.callCenterSectionLinks?.map?.((i: any) => ({
          title: i.title,
          phone: i.phone,
          note: i.note,
          redirectUrl: i.redirectUrl,
        })),
      },
      certificated: {
        title: data.certificatedSectionTitle,
        items:
          data.certificatedSectionLinks?.map?.((i: any) => ({
            title: i.title,
            redirectUrl: i.redirectUrl,
            icon: this.getImage(i.icon?.data?.attributes),
          })) || [],
      },
      connect: {
        title: data.connectSectionTitle,
        items:
          data.connectSectionLinks?.map?.((i: any) => ({
            title: i.title,
            redirectUrl: i.redirectUrl,
            icon: this.getImage(i.icon?.data?.attributes),
          })) || [],
      },
      app: {
        title: data.getAppSectionTitle || '',
        qr: this.getImage(data.getAppQR?.data?.attributes),
        items:
          data.getAppLinks?.map?.((i: any) => ({
            redirectUrl: i.redirectUrl,
            icon: this.getImage(i.image?.data?.attributes),
          })) || [],
      },
    };
  }

  public async getMasterLayout() {
    const dataRaw = await getGlobalPage();

    return {
      menu: await this.getMenu(dataRaw.data?.attributes?.menu),
      header: this.getHeader(dataRaw?.data?.attributes?.header || null),
      footer: this.getFooter(dataRaw?.data?.attributes?.footer),
    };
  }
}
