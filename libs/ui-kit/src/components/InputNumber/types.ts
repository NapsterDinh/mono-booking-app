import type { InputNumberProps as BaseInputNumberProps } from 'antd';

export interface InputNumberProps extends BaseInputNumberProps {}

export interface FloatInputNumberProps extends InputNumberProps {
  label?: string;
}
