import BankAccountStatusText from '@customer-web/components/Modal/FillAccountToDebtModal/BankAccountStatusText';
import { isEmptyString } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Image, Row, Text } from '@tsu-org/ui-kit';
import { ManageAccountProps } from './ManageAccount';

const Desktop = ({ onNewRegister, onSeeDetail, details }: ManageAccountProps) => {
  return (
    <Box
      background="url(/images/money-background.png)"
      backgroundPosition="top right"
      backgroundRepeat="no-repeat"
      backgroundColor="#FFF3E1"
      mt="2"
    >
      <Row
        padding="2"
        justifyContent="center"
        alignItems="center"
      >
        <Row>
          <Image
            src="/images/bank-house.svg"
            alt="bank-house"
            width="48px"
            height="48px"
          />
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
                fontSize="14px"
                fontWeight={400}
              >
                Vui lòng xác nhận thông tin tài khoản vay thấu chi để liên kết mua hàng và nhận tiền hoàn trả khi thay
                đổi giao dịch
              </Text>
            ) : (
              <>
                {/* After submit information of account */}
                <Row>
                  <Text
                    fontSize="14px"
                    fontWeight={400}
                  >
                    {details?.returnBankAccount}
                  </Text>
                  <Text
                    mx="2"
                    color="#C1C8D1"
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
          </AtomBox>
        </Row>
        {isEmptyString(details?.returnBankAccount) ? (
          <Button
            type="primary"
            scale="md"
            width="142px"
            flexShrink={0}
            onClick={onNewRegister}
          >
            Quản lý tài khoản
          </Button>
        ) : (
          <Button
            type="primary"
            scale="md"
            width="142px"
            flexShrink={0}
            onClick={onSeeDetail}
          >
            Xem chi tiết
          </Button>
        )}
      </Row>
    </Box>
  );
};

export default Desktop;
