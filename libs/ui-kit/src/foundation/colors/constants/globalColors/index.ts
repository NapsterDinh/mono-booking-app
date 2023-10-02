export type TColor = {
  colorName: string;
  colorClassName: string;
  demoClassName: string;
};

type TColorsSection = {
  title: string;
  description: string;
  usageGuide?: string;
  colors: TColor[];
};

type Data = Record<string, TColorsSection>;

export const COLOR_SET: Data = {
  BRAND_COLOR: {
    title: 'Brand Color',
    description: 'Brand Color là màu sắc nhận diện thương hiệu của Long Châu',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: 'brand-color-1',
        colorClassName: 'brand-color-1',
        demoClassName: 'bg-brand-color-1',
      },
      {
        colorName: 'brand-color-2',
        colorClassName: 'brand-color-2',
        demoClassName: 'bg-brand-color-2',
      },
      {
        colorName: 'brand-color-3',
        colorClassName: 'brand-color-3',
        demoClassName: 'bg-brand-color-3',
      },
      {
        colorName: 'brand-color-gradient',
        colorClassName: 'brand-color-gradient',
        demoClassName: 'bg-brand-color-gradient',
      },
    ],
  },
  PRIMARY: {
    title: 'Primary',
    description:
      'Primary Color là màu thương hiệu của Long Châu. Màu hành động chính trên tất cả các sản phẩm và trải nghiệm của ứng dụng. Màu sắc bổ sung được sử dụng cho các yếu tố tương tác như: Button, Link, Tag, Tooltip,... và những điểm cần người dùng chú ý',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'primary-0,5',
        demoClassName: 'bg-primary-0,5',
      },
      {
        colorName: '',
        colorClassName: 'primary-1',
        demoClassName: 'bg-primary-1',
      },
      {
        colorName: '',
        colorClassName: 'primary-1,5',
        demoClassName: 'bg-primary-1,5',
      },
      {
        colorName: '',
        colorClassName: 'primary-2',
        demoClassName: 'bg-primary-2',
      },
      {
        colorName: '',
        colorClassName: 'primary-3',
        demoClassName: 'bg-primary-3',
      },
      {
        colorName: '',
        colorClassName: 'primary-4',
        demoClassName: 'bg-primary-4',
      },
      {
        colorName: '',
        colorClassName: 'primary-5',
        demoClassName: 'bg-primary-5',
      },
      {
        colorName: '',
        colorClassName: 'primary-6',
        demoClassName: 'bg-primary-6',
      },
      {
        colorName: '',
        colorClassName: 'primary-7',
        demoClassName: 'bg-primary-7',
      },
      {
        colorName: '',
        colorClassName: 'primary-8',
        demoClassName: 'bg-primary-8',
      },
      {
        colorName: '',
        colorClassName: 'primary-9',
        demoClassName: 'bg-primary-9',
      },
      {
        colorName: '',
        colorClassName: 'primary-10',
        demoClassName: 'bg-primary-10',
      },
    ],
  },
  NEUTRALS: {
    title: 'Neutrals',
    description:
      'Màu xám là màu trung tính và là nền tảng của hệ thống màu sắc. Sử dụng màu cho chữ, border, divider, biểu mẫu, nền, trạng thái trống,...',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'white',
        demoClassName: 'bg-white',
      },
      {
        colorName: '',
        colorClassName: 'white-2',
        demoClassName: 'bg-white-2',
      },
      {
        colorName: '',
        colorClassName: 'gray-1',
        demoClassName: 'bg-gray-1',
      },
      {
        colorName: '',
        colorClassName: 'gray-1,5',
        demoClassName: 'bg-gray-1,5',
      },
      {
        colorName: '',
        colorClassName: 'gray-2',
        demoClassName: 'bg-gray-2',
      },
      {
        colorName: '',
        colorClassName: 'gray-3',
        demoClassName: 'bg-gray-3',
      },
      {
        colorName: '',
        colorClassName: 'gray-4',
        demoClassName: 'bg-gray-4',
      },
      {
        colorName: '',
        colorClassName: 'gray-5',
        demoClassName: 'bg-gray-5',
      },
      {
        colorName: '',
        colorClassName: 'gray-6',
        demoClassName: 'bg-gray-6',
      },
      {
        colorName: '',
        colorClassName: 'gray-7',
        demoClassName: 'bg-gray-7',
      },
      {
        colorName: '',
        colorClassName: 'gray-8',
        demoClassName: 'bg-gray-8',
      },
      {
        colorName: '',
        colorClassName: 'gray-8-80',
        demoClassName: 'bg-gray-8-80',
      },
      {
        colorName: '',
        colorClassName: 'gray-9',
        demoClassName: 'bg-gray-9',
      },
      {
        colorName: '',
        colorClassName: 'gray-10',
        demoClassName: 'bg-gray-10',
      },
    ],
  },
  ERROR: {
    title: 'Error',
    description: 'Cảm xúc [Căng thẳng]: hiển thị nội dung nguy hiểm.',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'error-1',
        demoClassName: 'bg-error-1',
      },
      {
        colorName: '',
        colorClassName: 'error-2',
        demoClassName: 'bg-error-2',
      },
      {
        colorName: '',
        colorClassName: 'error-3',
        demoClassName: 'bg-error-3',
      },
      {
        colorName: '',
        colorClassName: 'error-4',
        demoClassName: 'bg-error-4',
      },
      {
        colorName: '',
        colorClassName: 'error-5',
        demoClassName: 'bg-error-5',
      },
      {
        colorName: '',
        colorClassName: 'error-6',
        demoClassName: 'bg-error-6',
      },
      {
        colorName: '',
        colorClassName: 'error-7',
        demoClassName: 'bg-error-7',
      },
      {
        colorName: '',
        colorClassName: 'error-8',
        demoClassName: 'bg-error-8',
      },
      {
        colorName: '',
        colorClassName: 'error-9',
        demoClassName: 'bg-error-9',
      },
      {
        colorName: '',
        colorClassName: 'error-10',
        demoClassName: 'bg-error-10',
      },
    ],
  },
  WARNING: {
    title: 'Warning',
    description: 'Cảm xúc [Cẩn thận]: hiển thị nội dung cảnh báo.',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'warning-1',
        demoClassName: 'bg-warning-1',
      },
      {
        colorName: '',
        colorClassName: 'warning-2',
        demoClassName: 'bg-warning-2',
      },
      {
        colorName: '',
        colorClassName: 'warning-3',
        demoClassName: 'bg-warning-3',
      },
      {
        colorName: '',
        colorClassName: 'warning-4',
        demoClassName: 'bg-warning-4',
      },
      {
        colorName: '',
        colorClassName: 'warning-5',
        demoClassName: 'bg-warning-5',
      },
      {
        colorName: '',
        colorClassName: 'warning-6',
        demoClassName: 'bg-warning-6',
      },
      {
        colorName: '',
        colorClassName: 'warning-7',
        demoClassName: 'bg-warning-7',
      },
      {
        colorName: '',
        colorClassName: 'warning-8',
        demoClassName: 'bg-warning-8',
      },
      {
        colorName: '',
        colorClassName: 'warning-9',
        demoClassName: 'bg-warning-9',
      },
      {
        colorName: '',
        colorClassName: 'warning-10',
        demoClassName: 'bg-warning-10',
      },
    ],
  },
  SUCCESS: {
    title: 'Success',
    description: 'Cảm xúc [Tích cực]: hiển thị nội dung thành công.',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'success-1',
        demoClassName: 'bg-success-1',
      },
      {
        colorName: '',
        colorClassName: 'success-2',
        demoClassName: 'bg-success-2',
      },
      {
        colorName: '',
        colorClassName: 'success-3',
        demoClassName: 'bg-success-3',
      },
      {
        colorName: '',
        colorClassName: 'success-4',
        demoClassName: 'bg-success-4',
      },
      {
        colorName: '',
        colorClassName: 'success-5',
        demoClassName: 'bg-success-5',
      },
      {
        colorName: '',
        colorClassName: 'success-6',
        demoClassName: 'bg-success-6',
      },
      {
        colorName: '',
        colorClassName: 'success-7',
        demoClassName: 'bg-success-7',
      },
      {
        colorName: '',
        colorClassName: 'success-8',
        demoClassName: 'bg-success-8',
      },
      {
        colorName: '',
        colorClassName: 'success-9',
        demoClassName: 'bg-success-9',
      },
      {
        colorName: '',
        colorClassName: 'success-10',
        demoClassName: 'bg-success-10',
      },
    ],
  },
  GRADIENT: {
    title: 'Gradient',
    description: '...',
    usageGuide: 'Example className=bg-<color_name>',
    colors: [
      {
        colorName: '',
        colorClassName: 'gradient-blue-1',
        demoClassName: 'bg-gradient-blue-1',
      },
      {
        colorName: '',
        colorClassName: 'gradient-blue-2',
        demoClassName: 'bg-gradient-blue-2',
      },
      {
        colorName: '',
        colorClassName: 'gradient-blue-3',
        demoClassName: 'bg-gradient-blue-3',
      },
      {
        colorName: '',
        colorClassName: 'gradient-blue-4',
        demoClassName: 'bg-gradient-blue-4',
      },
      {
        colorName: '',
        colorClassName: 'gradient-green-1',
        demoClassName: 'bg-gradient-green-1',
      },
      {
        colorName: '',
        colorClassName: 'gradient-green-2',
        demoClassName: 'bg-gradient-green-2',
      },
      {
        colorName: '',
        colorClassName: 'gradient-yellow-1',
        demoClassName: 'bg-gradient-yellow-1',
      },
      {
        colorName: '',
        colorClassName: 'gradient-yellow-2',
        demoClassName: 'bg-gradient-yellow-2',
      },
      {
        colorName: '',
        colorClassName: 'gradient-red-1',
        demoClassName: 'bg-gradient-red-1',
      },
      {
        colorName: '',
        colorClassName: 'gradient-red-2',
        demoClassName: 'bg-gradient-red-2',
      },
    ],
  },
};
