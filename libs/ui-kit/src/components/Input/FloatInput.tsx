import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { Box } from '../Box';
import { Input } from '../Input';
import { Text } from '../Text';
import { FloatInputProps } from './types';
import { isNil } from 'lodash';

const Container = styled(Box)`
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

  .ant-input {
    height: 56px;

    &[aria-required='true'] {
      & + .label {
        .asterisk {
          color: ${({ theme }) => theme.colors.colorError};
          display: inline-block;
        }
      }
    }
  }

  .ant-input-status-error {
    & + .label {
      color: ${({ theme }) => theme.colors.colorError};

      .asterisk {
        color: ${({ theme }) => theme.colors.colorError};
      }
    }
  }

  input[type='text'] {
    display: block;
    width: 100%;
    padding-top: 1.15rem;
  }

  .ant-input[disabled] {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const FloatInput: FC<FloatInputProps> = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, value } = props;

  return (
    <Container
      position="relative"
      onBlur={setFocus.bind(this, false)}
      onFocus={setFocus.bind(this, true)}
    >
      <Input {...props} />
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

export default FloatInput;
