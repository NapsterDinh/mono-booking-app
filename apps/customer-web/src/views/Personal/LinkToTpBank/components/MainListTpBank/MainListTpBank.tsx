import styled from '@emotion/styled';
import FailureSendOtpModal from '@customer-web/components/Modal/FailureSendOtpModal';
import DebtDetailModal from '@customer-web/components/Modal/FillAccountToDebtModal/DebtDetailModal';
import FillAccountToDebtModal from '@customer-web/components/Modal/FillAccountToDebtModal/FillAccountToDebtModal';
import OTPModal from '@customer-web/components/Modal/OTPModal/OTPModal';
import { ModalType } from '@customer-web/enums/index';
import { useCreditFileListQuery } from '@customer-web/hooks/queries';
import useBankAccountInfoQuery from '@customer-web/hooks/queries/useBankAccountInfoQuery';
import { useAppDispatch } from '@customer-web/state';
import { useModal } from '@customer-web/state/global/hooks';
import { submitBankAccountInfoUser } from '@customer-web/state/user/actions';
import { useUserId } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Row, Text, useMatchBreakpoints } from '@tsu-org/ui-kit';
import { AddIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import EmptyList from '../EmptyList';
import LoadingTpBankFileList from '../LoadingListTpBank';
import ManageAccount from '../ManageAccount/ManageAccount';
import DesktopListTpBank from './DesktopListTpBank';
import MobileListTpBank from './MobileListTpBank';

const StyledBox = styled(Box)`
  padding-right: 0px;
  padding-left: 0px;
`;

const MainListTpBank = () => {
  const { openModal, type, isOpenModal, closeModal } = useModal();
  const userId = useUserId();
  const { isDesktop } = useMatchBreakpoints();

  const { data: credits, isLoading } = useCreditFileListQuery(userId);
  const { data: bankInfo, isLoading: bankInfoLoading, refetch } = useBankAccountInfoQuery(userId);

  const [form] = Form.useForm();
  const router = useRouter();

  const queryParams = router.query;

  const dispatch = useAppDispatch();

  const { items, totalCount, canCreateContract } = credits || {};

  const handleOpenManageAccount = () => {
    openModal(ModalType.BANK_ACCOUNT_INFO);
  };

  const handleOpenBankAccount = () => {
    openModal(ModalType.DETAIL_BANK_INFO);
  };

  const handleNavigateToFormLoan = () => {
    router.push('/ca-nhan/dang-ky-vay-thau-chi');
  };

  const handleCancelFillAccountModal = () => {
    closeModal();
    form.resetFields();
  };

  const handleOnSubmitFormBankAccountInfo = async (values: any) => {
    values = {
      ...values,
      ...form.getFieldsValue(),
    };

    const payload = {
      param: {
        customerId: userId,
      },
      body: {
        returnBankName: values?.bankName,
        returnCustomerName: values?.fullName,
        returnBankAccount: values?.accountNumber,
        otp: values?.otp,
      },
    };

    await dispatch(submitBankAccountInfoUser(payload))?.unwrap();
    closeModal();
    refetch();
  };

  useEffect(() => {
    if (queryParams['update-refund'] !== 'true' || !credits?.canCreateReturnTpBankCredit) {
      return;
    }

    openModal(ModalType.BANK_ACCOUNT_INFO);
  }, [credits?.canCreateReturnTpBankCredit, openModal, queryParams]);

  if (isLoading || bankInfoLoading) {
    return <LoadingTpBankFileList />;
  }

  if (totalCount <= 0) {
    return <EmptyList />;
  }

  return (
    <StyledBox>
      {isDesktop && (
        <Box>
          <Text bold>Quản lý thông tin tài khoản vay thấu chi online qua TPBank </Text>

          <Text
            mt={2}
            fontSize="14px"
            fontWeight={400}
            color="textSecondary"
          >
            Tài khoản vay thấu chi của Quý khách sẽ được thẩm định, duyệt và quản lý hạn mức bởi TPBank
          </Text>
        </Box>
      )}

      {!!bankInfo?.id && (
        <ManageAccount
          onNewRegister={handleOpenManageAccount}
          onSeeDetail={handleOpenBankAccount}
          details={bankInfo}
        />
      )}

      <AtomBox>
        {items?.map((item) => {
          return isDesktop ? (
            <DesktopListTpBank
              key={item.id}
              item={item}
            />
          ) : (
            <MobileListTpBank
              key={item.id}
              item={item}
            />
          );
        })}
      </AtomBox>
      {/* @TODO: Request to re-loan  */}
      {canCreateContract && (
        <Row
          display="flex"
          alignItems="center"
          gap="3"
          backgroundColor="white"
          paddingX="3"
          paddingY="2"
          cursor={canCreateContract ? 'pointer' : 'not-allowed'}
          onClick={canCreateContract ? handleNavigateToFormLoan : undefined}
        >
          <Button
            cursor={canCreateContract ? 'pointer' : 'not-allowed'}
            type="text"
            scale="md"
            shape="circle"
            style={canCreateContract ? { backgroundColor: '#0355A1' } : { backgroundColor: '#EDF0F3' }}
            aspectRatio="1/1"
          >
            <AddIcon color={canCreateContract ? 'white' : 'textTertiary'} />
          </Button>

          <Text
            color="textPrimary"
            fontSize="14px"
            fontWeight={400}
          >
            Yêu cầu vay thấu chi và nâng hạn mức
          </Text>
        </Row>
      )}

      <FillAccountToDebtModal
        open={isOpenModal && type === ModalType.BANK_ACCOUNT_INFO}
        onCancel={handleCancelFillAccountModal}
        form={form}
      />

      <DebtDetailModal
        open={isOpenModal && type === ModalType.DETAIL_BANK_INFO}
        onCancel={closeModal}
        bankAccountInfo={bankInfo}
        loading={bankInfoLoading}
      />

      <OTPModal
        open={isOpenModal && type === ModalType.REQUEST_OTP}
        length={6}
        autoFocus
        onCancel={closeModal}
        mobilePhone={bankInfo?.metaData?.phoneNumber}
        onSubmit={handleOnSubmitFormBankAccountInfo}
      />

      <FailureSendOtpModal
        open={isOpenModal && type === ModalType.FAIL_TO_REQUEST_OTP}
        closable={false}
      />
    </StyledBox>
  );
};

export default MainListTpBank;
