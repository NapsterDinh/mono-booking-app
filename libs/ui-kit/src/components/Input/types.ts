import type { InputProps as BaseInputProps } from 'antd';
import type { PasswordProps as BasePasswordProps } from 'antd/es/input';
import type { TextAreaProps as BaseTextAreaProps } from 'antd/es/input';

export const scales = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type Scale = (typeof scales)[keyof typeof scales];

export interface InputProps extends BaseInputProps {
  scale?: Scale;
}

export interface PasswordProps extends BasePasswordProps {
  scale?: Scale;
}

export interface TextAreaProps extends BaseTextAreaProps {}

export interface FloatInputProps extends InputProps {
  label?: string;
}
