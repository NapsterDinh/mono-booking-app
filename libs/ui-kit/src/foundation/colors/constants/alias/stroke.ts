import { TColorUsageRow } from '../../components';

export const STROKE_USAGE_ROWS: TColorUsageRow[] = [
  {
    token: 'Alias Color.Stroke.Default',
    roleDescription: 'Màu stroke của {layer-white} và {layer-gray}',
    value: {
      colorName: 'stroke-default',
      demoClassName: 'bg-stroke-default',
    },
  },
  {
    token: 'Alias Color.Stroke.Disable',
    roleDescription: 'Màu stroke của các trạng thái disable với nền màu gray',
    value: {
      colorName: 'stroke-disable',
      demoClassName: 'bg-stroke-disable',
    },
  },
  {
    token: 'Alias Color.Stroke.Focus',
    roleDescription: 'Màu stroke khi đặt trong các component có trạng thái focus (vd: tab bar, ...)',
    value: {
      colorName: 'stroke-focus',
      demoClassName: 'bg-stroke-focus',
    },
  },
];
