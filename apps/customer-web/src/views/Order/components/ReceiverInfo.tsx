import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { Column, Divider, Row, Text } from '@tsu-org/ui-kit';
import { LocationOnBrandIcon, PersonBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useResponsive } from 'ahooks';
import { FC } from 'react';

interface ReceiverInfoProps extends AtomBoxProps {
  order?: Components.OrderDetail.Data;
}

const ReceiverInfo: FC<ReceiverInfoProps> = ({ order, ...rest }) => {
  const responsive = useResponsive();

  return (
    <AtomBox
      bgc="white"
      p="3"
      borderBottomRadius="12px"
      {...rest}
    >
      <Row
        alignItems="flex-start"
        mb="0p75rem"
        flexDirection={{
          lg: 'row',
          xs: 'column',
        }}
      >
        <Column
          width={{
            lg: '50%',
          }}
        >
          <Row
            gap="3"
            mb="0p75rem"
          >
            <PersonBrandIcon />
            <Text
              color="textSecondary"
              bold
              small
            >
              Thông tin người nhận
            </Text>
          </Row>

          <Text
            fontWeight="500"
            mb="0.25rem"
          >
            {order?.orderDelivery?.customerReceiverName}
          </Text>

          <Text
            color="textSecondary"
            small
          >
            {order?.orderDelivery?.customerReceiverPhone}
          </Text>
        </Column>

        <Divider
          mx={responsive?.lg ? '0.75rem' : undefined}
          height={responsive?.lg ? '80px' : '1px'}
          type={responsive?.lg ? 'vertical' : 'horizontal'}
        />

        <Column
          width={{
            lg: '50%',
          }}
        >
          <Row
            gap="3"
            mb="0p75rem"
          >
            <LocationOnBrandIcon />
            <Text
              color="textSecondary"
              bold
              small
            >
              Nhận hàng tại
            </Text>
          </Row>

          <Text
            fontWeight="500"
            mb="0.25rem"
          >
            {order?.orderReceivePayment?.receiverAddress}
          </Text>

          <Text
            color="textSecondary"
            small
          >
            {order?.orderReceivePayment?.receiverFullAddress}
          </Text>
        </Column>
      </Row>

      {!!order?.orderReceivePayment?.note && (
        <AtomBox
          bgc="functionYellow2"
          p="2"
          borderRadius="small"
        >
          <Text
            color="textSecondary"
            small
          >
            <Text
              as="span"
              small
              fontWeight="500"
            >
              Ghi chú
            </Text>
            : {order?.orderReceivePayment?.note}
          </Text>
        </AtomBox>
      )}
    </AtomBox>
  );
};

export default ReceiverInfo;
