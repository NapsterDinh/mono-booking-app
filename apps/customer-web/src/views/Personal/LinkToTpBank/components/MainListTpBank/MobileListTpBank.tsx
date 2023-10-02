import { Box, Column, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import React from 'react';
import { ListTpBankItemProps } from './DesktopListTpBank';
import { AtomBox } from '@tsu-org/ui';
import dayjs from 'dayjs';
import StatusTag from '../StatusTag';
import { DocumentCopyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useCopyToClipboard } from '@customer-web/hooks';

const MobileListTpBank = ({ item }: ListTpBankItemProps) => {
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
        <Column>
          <Text
            fontSize={'14px'}
            fontWeight={400}
          >
            Họ tên khách hàng vay vốn:
          </Text>
          <Text bold>{item.metaData.customerName}</Text>
        </Column>
        <Column mt="1">
          <Text
            fontSize="14px"
            fontWeight={400}
          >
            Mã hồ sơ:
          </Text>
          <Row>
            <Text bold>#{item.contractId}</Text>
            <DocumentCopyIcon
              color="link"
              ml={1}
              cursor="pointer"
              onClick={copy.bind(this, item.contractId)}
            />
          </Row>
        </Column>
      </AtomBox>
    </Box>
  );
};

export default MobileListTpBank;
