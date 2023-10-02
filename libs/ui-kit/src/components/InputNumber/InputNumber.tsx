import { Col, Row } from 'antd';
import isNil from 'lodash/isNil';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { AddCircleIcon, SubtractCircleIcon } from '../Svg/Icons';
import { StyledInputNumber } from './styles';
import type { InputNumberProps } from './types';

const InputNumber: FC<InputNumberProps> = (props) => {
  const controlledInput = !isNil(props.value);
  const [value, setValue] = useState(controlledInput ? props.value : (props.defaultValue as number) ?? 0);

  const isDisableUp = Number(props.max) >= 0 ? Number(value) >= Number(props.max) : false;

  const isDisableDown = !value;

  const increase = () => {
    if (!isNil(props.max) && (value as number) >= Number(props.max)) {
      return;
    }

    const newValue = (value as number) + 1;

    props.onChange && props.onChange(newValue);

    if (!controlledInput) {
      setValue(newValue);
    }

    props.onChange && props.onChange(newValue);
  };

  const decrease = () => {
    if (!isNil(props.min) && (value as number) <= Number(props.min)) {
      return;
    }

    const newValue = (value as number) - 1;

    props.onChange && props.onChange(newValue);

    if (!controlledInput) {
      setValue(newValue);
    }

    props.onChange && props.onChange(newValue);
  };

  const handleChange = (value: any) => {
    let newValue = value;

    if (!isNil(props.max) && (value as number) >= Number(props.max)) {
      newValue = Number(props.max);

      props.onChange && props.onChange(newValue);

      if (!controlledInput) {
        setValue(newValue);
      }

      return;
    }

    if (!controlledInput) {
      setValue(value);
    }

    props.onChange && props.onChange(value);
  };

  useEffect(() => {
    if (controlledInput) {
      setValue(props.value);
    }
  }, [props.value, controlledInput]);

  useEffect(() => {
    if (!controlledInput && !isNil(props.defaultValue)) {
      setValue((props.defaultValue as number) ?? 0);
    }
  }, [controlledInput, props.defaultValue]);

  return (
    <Box
      border="1px solid #c1c8d1"
      borderRadius="34px"
    >
      <Row>
        <Col
          span={6}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button
            type="link"
            height="auto"
            onClick={decrease}
            disabled={isDisableDown}
            style={{ background: 'transparent' }}
          >
            <SubtractCircleIcon fill={isDisableDown ? '#A9B2BE' : 'currentColor'} />
          </Button>
        </Col>

        <Col span={12}>
          <StyledInputNumber
            controls={false}
            {...props}
            value={value}
            onChange={handleChange}
          />
        </Col>

        <Col
          span={6}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button
            type="link"
            height="auto"
            onClick={increase}
            disabled={isDisableUp}
            style={{ background: 'transparent' }}
          >
            <AddCircleIcon
              fill={isDisableUp ? '#A9B2BE' : 'currentColor'}
              fontSize={'10px'}
            />
          </Button>
        </Col>
      </Row>
    </Box>
  );
};

InputNumber.defaultProps = {
  controls: false,
};

export default InputNumber;
