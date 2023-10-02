import { Flex, Image } from '@tsu-org/ui-kit';

import { NotificationType } from '@customer-web/enums/Notification';
import { TpBankStatus } from '@customer-web/enums/TpBankOverdraftLoan';
import {
  ReadableDefaultNotificationIcon,
  SuccessDefaultNotificationIcon,
  SuccessReadableNotifyAccountIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';
import { STATUS_NOTIFICATION_BG_COLOR } from '../type';

interface GenerateTypeNotificationProps {
  status: string;
  type: string;
  isReadable: boolean;
}

const GenerateTypeNotification: FC<GenerateTypeNotificationProps> = (props) => {
  const { status, type, isReadable } = props;

  switch (type) {
    case NotificationType.ACCOUNT: {
      switch (status) {
        case TpBankStatus.LOAN_DISBURSED:
          return (
            <Flex
              backgroundColor={isReadable ? 'backgroundGrey2' : STATUS_NOTIFICATION_BG_COLOR[status]}
              padding="2"
              borderRadius="circle"
              flexShrink={0}
            >
              {isReadable ? (
                <SuccessReadableNotifyAccountIcon />
              ) : (
                <Image
                  alt="successful"
                  src="/images/successful-account.png"
                />
              )}
            </Flex>
          );
        case TpBankStatus.APPROVAL_RULE:
          return (
            <Flex
              backgroundColor={isReadable ? 'backgroundGrey2' : STATUS_NOTIFICATION_BG_COLOR[status]}
              padding="2"
              borderRadius="circle"
              flexShrink={0}
            >
              {isReadable ? (
                <SuccessReadableNotifyAccountIcon />
              ) : (
                <Image
                  alt="successful"
                  src="/images/successful-account.png"
                />
              )}
            </Flex>
          );
        case TpBankStatus.LOAN_REJECTED:
          return (
            <Flex
              backgroundColor={isReadable ? 'backgroundGrey2' : STATUS_NOTIFICATION_BG_COLOR[status]}
              padding="2"
              borderRadius="circle"
              flexShrink={0}
            >
              {isReadable ? (
                <Image
                  src="/images/error-reject-readable-icon.png"
                  alt="reject tpbank"
                />
              ) : (
                <Image
                  src="/images/error-reject-icon.png"
                  alt="reject tpbank"
                />
              )}
            </Flex>
          );
      }
    }
  }

  return (
    <Flex
      backgroundColor={isReadable ? 'backgroundGrey2' : '#FEF0C7'}
      padding="2"
      fontSize="16px"
      borderRadius="circle"
      flexShrink={0}
    >
      {isReadable ? <ReadableDefaultNotificationIcon /> : <SuccessDefaultNotificationIcon />}
    </Flex>
  );
};
export default GenerateTypeNotification;
