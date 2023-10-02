import { TColorUsageRow } from '../../components';

export const FIELD_USAGE_ROWS: TColorUsageRow[] = [
  {
    token: 'Alias Color.Field.Default-Gray',
    roleDescription: 'Dùng cho nền của text-field trạng thái default trên nền white',
    value: {
      colorName: 'field-default-gray',
      demoClassName: 'bg-field-default-gray',
    },
  },
  {
    token: 'Alias Color.Field.Default-White',
    roleDescription: 'Dùng cho nền của text-field trạng thái default trên nền gray, blue',
    value: {
      colorName: 'field-default-white',
      demoClassName: 'bg-field-default-white',
    },
  },
  {
    token: 'Alias Color.Field.Active',
    roleDescription: 'Dùng cho nền của text-field trạng thái active.',
    value: {
      colorName: 'field-default-active',
      demoClassName: 'bg-field-default-active',
    },
  },
  {
    token: 'Alias Color.Field.Disable',
    roleDescription: 'Dùng cho nền của text-field trạng thái disble.',
    value: {
      colorName: 'field-default-disable',
      demoClassName: 'bg-field-default-disable',
    },
  },
];
