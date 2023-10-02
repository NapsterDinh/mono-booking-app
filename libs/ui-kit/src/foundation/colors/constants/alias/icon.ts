import { TColorUsageRow } from '../../components';

export const ICON_USAGE_ROWS: TColorUsageRow[] = [
  {
    token: 'Alias Color.Icon.Gradient',
    roleDescription:
      'Dùng cho các icon có cấp độ hiển thị cao nhất, icon cần được hightlight, icon active. Ưu tiên sử dụng {icon-gradient} hơn {icon-primary}',
    value: {
      colorName: 'icon-gradient',
      demoClassName: 'bg-icon-gradient',
    },
  },
  {
    token: 'Alias Color.Icon.Gradient 2',
    roleDescription:
      'Dùng cho các icon có cấp độ thấp hơn {icon-gradient}, ở trạng thái active, hoặc disable của {icon-gradient}',
    value: {
      colorName: 'icon-gradient-2',
      demoClassName: 'bg-icon-gradient-2',
    },
  },
  {
    token: 'Alias Color.Icon.Primary',
    roleDescription: 'Dùng cho các icon có cấp độ hiển thị cao nhất, icon cần được hightlight, icon active',
    value: {
      colorName: 'icon-primary',
      demoClassName: 'bg-icon-primary',
    },
  },
  {
    token: 'Alias Color.Icon.Black',
    roleDescription: 'Dùng cho các icon tương phản cao hơn {icon-secondary}',
    value: {
      colorName: 'icon-black',
      demoClassName: 'bg-icon-black',
    },
  },
  {
    token: 'Alias Color.Icon.Secondary',
    roleDescription: 'Dùng cho các icon tương phản cao hơn {icon-tertiary}',
    value: {
      colorName: 'icon-secondary',
      demoClassName: 'bg-icon-secondary',
    },
  },
  {
    token: 'Alias Color.Icon.Tertiary',
    roleDescription: 'Dùng cho các icon tương phản thấp hơn {icon-secondary}',
    value: {
      colorName: 'icon-tertiary',
      demoClassName: 'bg-icon-tertiary',
    },
  },
  {
    token: 'Alias Color.Icon.Tertiary 2',
    roleDescription: 'Dùng cho các icon tương phản thấp hơn {icon-tertiary}',
    value: {
      colorName: 'icon-tertiary-2',
      demoClassName: 'bg-icon-tertiary-2',
    },
  },
  {
    token: 'Alias Color.Icon.White',
    roleDescription: 'Dùng cho các icon đặt trên nền có màu',
    value: {
      colorName: 'icon-white',
      demoClassName: 'bg-icon-white',
    },
  },
];
