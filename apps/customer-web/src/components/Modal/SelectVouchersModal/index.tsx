import styled from '@emotion/styled';
import { useShipmentPrice } from '@customer-web/state/cart/hooks';
import { AtomBox } from '@tsu-org/ui';
import {
  Box,
  Button,
  ButtonProps,
  Column,
  ColumnCenter,
  Flex,
  Input,
  InputProps,
  Modal,
  Row,
  RowBetween,
  RowFixed,
  Text,
  useMatchBreakpoints,
} from '@tsu-org/ui-kit';
import { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { EmptyBoxIcon, UudaiIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox } from 'antd';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import useSelectVouchers from './hooks/useSelectVouchers';

interface SelectVouchersModalProps extends ModalProps {
  onOk?: () => void;
}

const StyledInput = styled(Input)`
  &.ant-input-affix-wrapper {
    border-radius: 35px;
    border: 1px solid #e8b356;
    color: #de683f;
    font-size: 1rem;
    padding: 0.375rem 0.375rem 0.375rem 1rem;

    .ant-input-clear-icon {
      display: flex;
    }

    &:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: ${({ theme }) => theme.colors.textFocus};
      box-shadow: none;
    }

    input {
      &::placeholder {
        color: #657384;
        font-size: 1rem;
      }
    }
  }
`;

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;

      .ant-modal-header {
        margin-bottom: 0;
      }
      .ant-modal-title {
        border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
        padding: 1rem;
      }
      .ant-modal-body {
        background-color: ${({ theme }) => theme.colors.backgroundLightOrange};
        border-radius: 0px 0px 8px 8px;
      }
    }
  }
`;

const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 8px 8px;
  box-shadow:
    0px 0px 16px -4px rgba(0, 39, 102, 0.08),
    0px 0px 6px -2px rgba(0, 39, 102, 0.03);
  padding: 10px 20px 12px;
`;

const SelectVouchersModal: FC<SelectVouchersModalProps> = ({ onCancel, onOk, ...rest }) => {
  const { isDesktop } = useMatchBreakpoints();
  const [value, setValue] = useState<string>();
  const {
    vouchers,
    checking,
    submitting,
    selectedSeriesVouchers,
    toggleSelectVoucher,
    apply: handleApply,
    submit: submitSelectVouchers,
  } = useSelectVouchers();
  const shipmentPrice = useShipmentPrice();

  const handleCancel = (e: Parameters<ModalProps['onCancel']>[0]) => {
    if (checking || submitting) {
      return;
    }

    setValue('');

    onCancel && onCancel(e);
  };

  const handlePressEnter = () => {
    handleApply(value, () => setValue(''));
  };

  const handleApplyButtonClicked = (event: Parameters<ButtonProps['onClick']>[0]) => {
    event.preventDefault();
    handleApply(value, () => setValue(''));
  };

  const handleChange = (event: Parameters<InputProps['onChange']>[0]) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    submitSelectVouchers(shipmentPrice, () => {
      onOk && onOk();
    });
  };

  return (
    <StyledModal
      title={
        <Text
          bold
          fontSize="24px"
          textAlign="center"
        >
          Sử dụng voucher hoặc đổi điểm
        </Text>
      }
      footer={null}
      centered
      onCancel={handleCancel}
      {...rest}
    >
      <AtomBox
        px="1p25rem"
        py="1rem"
      >
        <StyledInput
          allowClear
          placeholder="Nhập mã voucher"
          css={{
            paddingRight: isDesktop ? '0.375rem' : '0px!important',
          }}
          scale={isDesktop ? 'lg' : 'sm'}
          suffix={
            <Button
              loading={checking || submitting}
              onClick={handleApplyButtonClicked}
              border="0"
            >
              Áp dụng (Enter)
            </Button>
          }
          value={value}
          onPressEnter={handlePressEnter}
          onChange={handleChange}
        />

        {vouchers?.length > 0 ? (
          <Box
            mt="1rem"
            height="368px"
            overflow="auto"
          >
            <Text
              my="1rem"
              fontWeight="500"
            >
              Mã giảm giá đang có
            </Text>
            <Column gap="0p75rem">
              {vouchers.map((voucher) => (
                <AtomBox
                  key={voucher?.seriesCode}
                  borderRadius="12px"
                  gap="0p75rem"
                  bgc="white"
                  p="3"
                >
                  <RowBetween
                    alignItems="flex-start"
                    gap="2"
                    flexWrap="nowrap"
                  >
                    <RowFixed
                      alignItems="flex-start"
                      gap="6"
                      flexGrow={1}
                      flexWrap="nowrap"
                    >
                      <Flex
                        width="48px"
                        height="48px"
                        background="gradientOrangeLight"
                        borderRadius="8px"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink="0"
                      >
                        <UudaiIcon
                          width="32"
                          height="32"
                        />
                      </Flex>

                      <Column flexGrow={1}>
                        <Row
                          gap="1"
                          mb="2"
                        >
                          <Text
                            small
                            fontWeight="500"
                          >
                            {voucher?.voucherName}
                          </Text>
                          <Text
                            small
                            color="divider"
                          >
                            &bull;
                          </Text>
                          <Text
                            small
                            color="textSecondary"
                          >
                            {voucher?.seriesCode}
                          </Text>
                        </Row>

                        {!!voucher?.toDate && <Text fontSize="13px">HSD: {dayjs(voucher.toDate).format('L')}</Text>}
                      </Column>
                    </RowFixed>

                    <Checkbox
                      checked={selectedSeriesVouchers?.includes(voucher?.seriesCode)}
                      onChange={toggleSelectVoucher.bind(this, voucher?.seriesCode)}
                    />
                  </RowBetween>
                </AtomBox>
              ))}
            </Column>
          </Box>
        ) : (
          <Box py="110px">
            <ColumnCenter>
              <EmptyBoxIcon />

              <Text
                color="textSecondary"
                mt="2rem"
              >
                Hiện bạn chưa có mã giảm giá nào.
              </Text>
            </ColumnCenter>
          </Box>
        )}
      </AtomBox>

      <Footer>
        <Text
          mt="6px"
          mb="12px"
          fontWeight="500"
        >
          {selectedSeriesVouchers && selectedSeriesVouchers?.length > 0
            ? `Đã chọn ${selectedSeriesVouchers?.length} ưu đãi`
            : 'Vui lòng lựa chọn ưu đãi'}
        </Text>
        <Button
          width="100%"
          scale="xl"
          htmlType="submit"
          loading={checking || submitting}
          onClick={handleSubmit}
        >
          Sử dụng
        </Button>
      </Footer>
    </StyledModal>
  );
};

export default SelectVouchersModal;
