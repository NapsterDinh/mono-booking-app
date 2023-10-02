import BankAccountStatusText from '@customer-web/components/Modal/FillAccountToDebtModal/BankAccountStatusText';
import { isEmptyString } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, Image, Row, Text } from '@tsu-org/ui-kit';
import { ManageAccountProps } from './ManageAccount';

const Mobile = ({ onNewRegister, onSeeDetail, details }: ManageAccountProps) => {
  return (
    <Box
      background="url(/images/money-background.png)"
      backgroundPosition="top right"
      backgroundRepeat="no-repeat"
      backgroundColor="#FFF3E1"
      mt="2"
    >
      <Column
        padding="2"
        justifyContent="center"
        alignItems="center"
      >
        <Row>
          <Box flexShrink={0}>
            <Image
              src="/images/bank-house.svg"
              alt="bank-house"
              width="48px"
              height="48px"
            />
          </Box>
          <AtomBox mx="3">
            <Text
              fontSize="16px"
              fontWeight={500}
              mb="1"
            >
              Thông tin tài khoản vay thấu chi
            </Text>
            {isEmptyString(details?.returnBankAccount) ? (
              <Text
                fontSize="16px"
                fontWeight={500}
              >
                Vui lòng xác nhận thông tin tài khoản vay thấu chi để liên kết mua hàng và nhận tiền hoàn trả khi thay
                đổi giao dịch
              </Text>
            ) : (
              <>
                {/* After submit information of account */}
                <Row
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'center',
                  }}
                  flexDirection={{
                    xs: 'column',
                    sm: 'row',
                  }}
                >
                  <Text>{details?.returnBankAccount}</Text>
                  <Text
                    mx="2"
                    color="#C1C8D1"
                    display={{
                      _: 'none',
                      sm: 'block',
                    }}
                  >
                    |
                  </Text>
                  <Text>{details?.returnCustomerName}</Text>
                </Row>
                <BankAccountStatusText
                  status={details?.returnStatus}
                  justifyContent="flex-start"
                  mt="1"
                  mb="1"
                />
                {/* After submit information of account */}
              </>
            )}
            {isEmptyString(details?.returnBankAccount) ? (
              <Button
                type="primary"
                scale="sm"
                width="142px"
                flexShrink={0}
                mt="2"
                onClick={onNewRegister}
              >
                Quản lý tài khoản
              </Button>
            ) : (
              <Button
                type="primary"
                scale="md"
                width="110px"
                flexShrink={0}
                mt="2"
                onClick={onSeeDetail}
              >
                Xem chi tiết
              </Button>
            )}
          </AtomBox>
        </Row>
      </Column>
    </Box>
  );
};

export default Mobile;
