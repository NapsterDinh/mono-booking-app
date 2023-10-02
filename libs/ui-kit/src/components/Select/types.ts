import type { SelectProps as BaseSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';

export const scales = {
  MD: 'md',
  LG: 'lg',
} as const;

export type Scale = (typeof scales)[keyof typeof scales];

export type SelectProps = BaseSelectProps<any, BaseOptionType | DefaultOptionType> & {
  scale?: Scale;
};
