import styled from '@emotion/styled';
import { InputNumber } from 'antd';
import clsx from 'clsx';
import { isNil } from 'lodash';
import { FC, useState } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { FloatInputNumberProps } from './types';

const Container = styled(Box)`
  &.required {
    .label {
      .asterisk {
        color: ${({ theme }) => theme.colors.colorError};
        display: inline-block;
      }
    }
  }

  .label {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textTertiary};

    position: absolute;
    pointer-events: none;

    left: 12px;
    top: 16px;
    transition: 0.2s ease all;

    .asterisk {
      display: none;
    }
  }

  .label-float {
    top: 6px;
    font-size: 12px;
    line-height: 16px;

    .asterisk {
      font-size: 12px;
    }
  }

  .ant-input-number {
    height: 56px;
    padding-top: 1.15rem;
  }

  .ant-input-number-status-error {
    & + .label {
      color: ${({ theme }) => theme.colors.colorError};

      .asterisk {
        color: ${({ theme }) => theme.colors.colorError};
      }
    }
  }

  .ant-input-number[disabled] {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const FloatInputNumber: FC<FloatInputNumberProps> = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, value } = props;
  const isRequired = props['aria-required'] === 'true';

  return (
    <Container
      className={clsx({
        required: isRequired,
      })}
      position="relative"
      onBlur={setFocus.bind(this, false)}
      onFocus={setFocus.bind(this, true)}
    >
      <InputNumber {...props} />
      <label
        className={clsx('label', {
          'label-float': focus || (!isNil(value) && value !== ''),
        })}
      >
        {label} <Text className="asterisk">*</Text>
      </label>
    </Container>
  );
};

export default FloatInputNumber;
