import { memoize } from 'lodash';

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string; image?: string } };
  defaultTitlePrefix: string;
}

export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
  openGraph?: any;
};

const getPathList = (): PathList => {
  return {
    paths: {
      '/': { title: '' },
      '/ca-nhan/don-hang-cua-toi': {
        title: 'Đơn hàng của tôi',
      },
      '/ca-nhan/ho-so-kinh-doanh': {
        title: 'Hồ sơ kinh doanh',
      },
      '/ca-nhan/so-dia-chi-nhan-hang': {
        title: 'Sổ địa chỉ nhận hàng',
      },
      '/ca-nhan/thong-tin-ca-nhan': {
        title: 'Thông tin cá nhân',
      },
      '/ca-nhan/thong-bao': {
        title: 'Thông báo',
      },
      '/ca-nhan/vay-thau-chi-tp-bank': {
        title: 'Vay thấu chi TPBank',
      },
      '/ca-nhan/dang-ky-vay-thau-chi': {
        title: 'Đăng ký vay thấu chi',
      },
      '/hoan-tien': {
        title: 'Hoàn tiền',
      },
      'thanh-toan-chuyen-khoan': {
        title: 'Thanh toán chuyển khoản',
      },
      '/tim-kiem': {
        title: 'Kết quả tìm kiếm',
      },
      '/ttdh': {
        title: 'Thông tin đơn hàng',
      },
      '/ve-chung-toi/chinh-sach-bao-mat': {
        title: 'Chính sách bảo mật',
      },
      '/ve-chung-toi/chinh-sach-doi-tra': {
        title: 'Chính sách đổi trả hàng',
      },
      '/ve-chung-toi/chinh-sach-giao-hang': {
        title: 'Chính sách giao hàng',
      },
      '/ve-chung-toi/chinh-sach-thanh-toan': {
        title: 'Chính sách hoá đơn và thanh toán',
      },
      '/ve-chung-toi/thong-tin-doanh-nghiep': {
        title: 'Thông tin doanh nghiệp',
      },
      '/ve-chung-toi/gioi-thieu': {
        title: 'Giới thiệu',
      },
      '/ve-chung-toi/tos': {
        title: 'Quy chế hoạt động của Website',
      },
      '/dieu-khoan-su-dung': {
        title: 'Điều khoản sử dụng',
      },
      '/gio-hang': {
        title: 'Giỏ hàng',
      },
      '/restore-password': {
        title: 'Khôi phục mật khẩu',
      },
    },
    defaultTitlePrefix: 'nhapthuoc.com',
  };
};

export const getCustomMeta = memoize(
  (path: string): PageMeta => {
    const pathList = getPathList();
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]];

    if (pathMetadata) {
      return {
        title: `${pathList.defaultTitlePrefix}${pathMetadata.title ? ` - ${pathMetadata.title}` : ''}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
        image: pathMetadata.image,
      };
    }

    return null;
  },
  (path) => path,
);
