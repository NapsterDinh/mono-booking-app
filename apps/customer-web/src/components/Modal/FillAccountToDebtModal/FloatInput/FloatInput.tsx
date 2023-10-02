import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Input, InputProps } from '@tsu-org/ui-kit';

const Styled = styled(Box)`
  .label {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #657384;

    position: absolute;
    pointer-events: none;

    left: 12px;
    top: 16px;
    transition: 0.2s ease all;
  }

  .label-float {
    top: 6px;
    font-size: 12px;
    line-height: 16px;
  }

  .ant-input {
    height: 56px;
  }

  input[type='text'] {
    display: block;
    width: 100%;
    padding-top: 1.15rem;
    color: #020b27;
  }

  .ant-input[disabled] {
    color: #657384;
  }
`;

interface FloatInputProps {
  label?: string;
  value?: any;
}

const FloatInput: FC<InputProps & FloatInputProps> = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, value } = props;

  const labelClass = focus || (value && value.length !== 0) ? 'label label-float' : 'label';

  return (
    <Styled
      position="relative"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input
        {...props}
        onChange={props.onChange}
        defaultValue={value}
      />
      <label className={labelClass}>{label}</label>
    </Styled>
  );
};

export default FloatInput;
