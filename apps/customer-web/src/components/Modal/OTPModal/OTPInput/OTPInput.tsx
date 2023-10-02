import { Box, Row } from '@tsu-org/ui-kit';
import { FC, useCallback, useEffect, useState } from 'react';
import SingleOTPInput from './SingleOTPInput';

interface OTPInputProps {
  value?: string;
  length: number;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (otp: string) => void;
}

const OTPInput: FC<OTPInputProps> = (props) => {
  const { value, length, autoFocus, disabled, onChange, ...rest } = props;
  const [activeInput, setActiveInput] = useState(0);
  const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''));
  const hasError = !!props['aria-invalid'];

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('');
      onChange(otpValue);
    },
    [onChange],
  );

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback((str: string) => {
    const changedValue = str;

    if (!changedValue) {
      return changedValue;
    }

    return Number(changedValue) >= 0 ? changedValue : '';
  }, []);

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || '';
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues],
  );

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length],
  );

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput],
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue],
  );

  // Handle onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus('');
          } else {
            focusPrevInput();
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }

          break;
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues],
  );

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('');
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        onChange(updatedOTPValues.join(''));
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, onChange, otpValues],
  );

  useEffect(() => {
    if (!value) {
      return setOTPValues(Array(length).fill(''));
    }
  }, [length, value]);

  return (
    <Box>
      <Row
        gap="2"
        {...rest}
        flexShrink={0}
      >
        {Array(length)
          .fill('')
          ?.map((_, index) => (
            <SingleOTPInput
              key={`SingleInput-${index}`}
              autoFocus
              focus={activeInput === index}
              onFocus={handleOnFocus(index)}
              onChange={handleOnChange}
              onKeyDown={handleOnKeyDown}
              onBlur={onBlur}
              onPaste={handleOnPaste}
              disabled={disabled}
              hasError={hasError}
              value={otpValues?.[index] ?? ''}
            />
          ))}
      </Row>
    </Box>
  );
};
export default OTPInput;
