import type { AutoCompleteProps as BaseAutoCompleteProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';

export interface AutoCompleteProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends BaseAutoCompleteProps<ValueType, OptionType> {}
