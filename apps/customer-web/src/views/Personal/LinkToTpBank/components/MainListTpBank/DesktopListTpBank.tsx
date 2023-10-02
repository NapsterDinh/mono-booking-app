import { TpBankCreditFileInformation } from 'apps/nhapthuoc-estore/src/types/api/response/customer';
import { Box, RowFixed, Text } from '@tsu-org/ui-kit';
import { useCopyToClipboard } from '@customer-web/hooks';
import { AtomBox } from '@tsu-org/ui';
import { DocumentCopyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import dayjs from 'dayjs';
import StatusTag from '../StatusTag';

export interface ListTpBankItemProps {
  item: TpBankCreditFileInformation;
}

const DesktopListTpBank = ({ item }: ListTpBankItemProps) => {
  const [_, copy] = useCopyToClipboard();

  return (
    <Box
      key={item.id}
      mt={3}
      mb={2}
    >
      <AtomBox
        paddingX="3"
        paddingY="0p75rem"
        backgroundColor={'backgroundGreySecondary'}
        borderBottom="1"
        borderBottomColor={'cardBorder'}
        display="flex"
        alignItems="center"
      >
        <Text
          bold
          mr="2"
        >
          Hồ sơ tạo ngày {dayjs(item.creationTime).format('DD/MM/YYYY HH:ss')}{' '}
        </Text>
        <StatusTag status={item?.status} />
      </AtomBox>
      <AtomBox
        paddingX="3"
        paddingY="2"
        backgroundColor="white"
      >
        <RowFixed>
          <Text
            fontSize={'14px'}
            fontWeight={400}
          >
            Họ tên khách hàng vay vốn:
          </Text>
          <Text
            bold
            ml={1}
          >
            {item.metaData.customerName}
          </Text>
        </RowFixed>
        <RowFixed mt="1">
          <Text
            fontSize="14px"
            fontWeight={400}
          >
            Mã hồ sơ:
          </Text>
          <Text
            bold
            ml={1}
          >
            #{item.contractId}
          </Text>
          <DocumentCopyIcon
            color="link"
            ml={1}
            cursor="pointer"
            onClick={copy.bind(this, item.contractId)}
          />
        </RowFixed>
      </AtomBox>
    </Box>
  );
};

export default DesktopListTpBank;
