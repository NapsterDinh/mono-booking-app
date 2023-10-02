import { TColorUsageRow } from '../../components';

export const TEXT_USAGE_ROWS: TColorUsageRow[] = [
  {
    token: 'Alias Color.Text.Primary',
    roleDescription: 'Primary text, Body text, Empty State text, Page Headers',
    value: {
      colorName: 'text-primary',
      demoClassName: 'bg-text-primary',
    },
  },
  {
    token: 'Alias Color.Text.Secondary',
    roleDescription: 'Body copy đi kèm với {text-primary} để phân cấp thị giác',
    value: {
      colorName: 'text-secondary',
      demoClassName: 'bg-text-secondary',
    },
  },
  {
    token: 'Alias Color.Text.Tertiary',
    roleDescription: 'Body copy đi kèm với {text-primary} để phân cấp thị giác, text empty state',
    value: {
      colorName: 'text-tertiary',
      demoClassName: 'bg-text-tertiary',
    },
  },
  {
    token: 'Alias Color.Text.White',
    roleDescription: 'Dùng khi đặt chữ trên nền màu ',
    value: {
      colorName: 'text-white',
      demoClassName: 'bg-text-white',
    },
  },
  {
    token: 'Alias Color.Text.Placeholder',
    roleDescription: 'Màu của placeholder đặt trong text field',
    value: {
      colorName: 'text-placeholder',
      demoClassName: 'bg-text-placeholder',
    },
  },
  {
    token: 'Alias Color.Text.Disable',
    roleDescription: 'Màu văn bản trong field trong trạng thái disable',
    value: {
      colorName: 'text-disable',
      demoClassName: 'bg-text-disable',
    },
  },
  {
    token: 'Alias Color.Text.Hint Text - Grey',
    roleDescription: 'Màu văn bản trong field trong trạng thái hint đặt trên layer gray',
    value: {
      colorName: 'text-hint_text_grey',
      demoClassName: 'bg-text-hint_text_grey',
    },
  },
  {
    token: 'Alias Color.Text.Hint Text - White',
    roleDescription: 'Màu văn bản trong field trong trạng thái hint đặt trên layer white',
    value: {
      colorName: 'text-hint_text_white',
      demoClassName: 'bg-text-hint_text_white',
    },
  },
  {
    token: 'Alias Color.Text.Focus',
    roleDescription:
      'Màu văn bản khi đặt trong các component có trạng thái focus nhưng không phải là link (vd: tab bar, time picker, secondary button,...)',
    value: {
      colorName: 'text-focus',
      demoClassName: 'bg-text-focus',
    },
  },
  {
    token: 'Alias Color.Text.Link',
    roleDescription: 'Màu văn bản của các link, đứng động lập',
    value: {
      colorName: 'text-link',
      demoClassName: 'bg-text-link',
    },
  },
];
