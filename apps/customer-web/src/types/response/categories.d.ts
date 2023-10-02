declare namespace NhapThuocResponse {
  declare namespace Categories {
    interface TypeItems {
      items?: Items[];
    }
    interface Children extends Items {
      parentId: number;
    }

    interface Items {
      id: number;
      countProduct: number;
      countProductLabel: string;
      name: string;
      slug: string;
      level: number;
      url: string;
      metaKeywords: string;
      metaTitle: string;
      metaDescription: string;
      primaryImage: string;
      isShownUI: boolean;
      categoryChildren: Children[];
    }

    interface CategoryChildItem {
      code: number;
      data?: categoryChildren;
      message: string;
    }

    type CategoryChildren = {
      id: number;
      name: string;
      fullPathSlug: string;
      level: number;
      metaTitle: string;
      metaDescription: string;
      parent?: {
        id: number;
        fullPathSlug: string;
        name: string;
        level: number;
      };
      root?: {
        id: number;
        fullPathSlug: string;
        name: string;
        level: number;
      };
      desktopImage: {
        id: number;
        alternativeText: unknown;
        caption: unknown;
        ext: string;
        mime: string;
        url: string;
        name: string;
        hash: string;
        width: number;
        height: number;
      };
      mobileImage: unknown;
      metaImage: unknown;
      children: [
        {
          score: number;
          id: number;
          name: string;
          fullPathSlug: string;
          level: number;
          desktopImage: {
            id: number;
            alternativeText: unknown;
            caption: unknown;
            ext: string;
            mime: string;
            url: string;
            name: string;
            hash: string;
            width: number;
            height: number;
          };
          mobileImage?: string;
          children: [
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: 104;
                height: 104;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
          ];
        },
        {
          score: number;
          id: number;
          name: string;
          fullPathSlug: string;
          level: number;
          desktopImage: {
            id: number;
            alternativeText: unknown;
            caption: unknown;
            ext: string;
            mime: string;
            url: string;
            name: string;
            hash: string;
            width: number;
            height: number;
          };
          mobileImage: unknown;
          children: [
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
          ];
        },
        {
          score: number;
          id: number;
          name: string;
          fullPathSlug: string;
          level: number;
          desktopImage: {
            id: number;
            alternativeText: unknown;
            caption: unknown;
            ext: string;
            mime: string;
            url: string;
            name: string;
            hash: string;
            width: number;
            height: number;
          };
          mobileImage: unknown;
          children: [
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: unknown;
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
          ];
        },
        {
          score: number;
          id: number;
          name: string;
          fullPathSlug: string;
          level: number;
          desktopImage: {
            id: number;
            alternativeText: unknown;
            caption: unknown;
            ext: string;
            mime: string;
            url: string;
            name: string;
            hash: string;
            width: number;
            height: number;
          };
          mobileImage: unknown;
          children: [
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
            {
              score: number;
              id: number;
              name: string;
              fullPathSlug: string;
              level: number;
              desktopImage: {
                id: number;
                alternativeText: unknown;
                caption: unknown;
                ext: string;
                mime: string;
                url: string;
                name: string;
                hash: string;
                width: number;
                height: number;
              };
              mobileImage: unknown;
              metaImage: unknown;
            },
          ];
        },
      ];
    };
  }
}
