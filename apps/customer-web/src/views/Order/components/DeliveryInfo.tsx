import { AtomBox } from '@tsu-org/ui';
import { Box, Column, Row, RowBetween, RowFixed, Steps, Text } from '@tsu-org/ui-kit';
import { AlarmBrandIcon, DeliveryManBrandIcon, TruckBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, useMemo } from 'react';

const DeliveryInfo: FC<{ order?: Components.OrderDetail.Data }> = ({ order }) => {
  const timeline = useMemo(() => {
    return order?.orderShipment?.timeline.filter((item) => item.display) || [];
  }, [order]);
  const currentStep = useMemo(() => {
    let index = timeline.findIndex((item) => item.isProcessing);

    if (index === -1) {
      index = timeline.length;
    }

    return index;
  }, [timeline]);

  return (
    <>
      <Box
        backgroundColor="white"
        p="3"
        mb="3px"
      >
        <Column gap="4">
          <Column>
            <Row
              alignItems="flex-start"
              gap="3"
              mb="0p75rem"
            >
              <Box>
                <AlarmBrandIcon />
              </Box>
              <Column flexGrow={1}>
                <Text
                  color="textSecondary"
                  small
                  bold
                >
                  Dự kiến nhận hàng
                </Text>
                <Column mb="1p5rem">
                  <Text
                    bold
                    fontSize="18px"
                    mb="0.5rem"
                  >
                    {order?.orderReceivePayment?.intendTime}
                  </Text>
                  <Text small>nhapthuoc.com sẽ liên hệ bạn trong thời gian sớm nhất.</Text>
                </Column>

                <Steps
                  labelPlacement="vertical"
                  items={timeline.map((item) => ({
                    title: (
                      <>
                        <Text
                          color="textSecondary"
                          small
                          fontWeight="500"
                        >
                          {item.enumStatusText}
                        </Text>
                        <Text
                          color="textSecondary"
                          small
                        >
                          {item.creationTime}
                        </Text>
                      </>
                    ),
                    status: item.enumStatus === -1 ? 'error' : undefined,
                  }))}
                  size="small"
                  current={currentStep}
                />
              </Column>
            </Row>
          </Column>
        </Column>
      </Box>

      {!!order?.driverInfo && (
        <Box
          backgroundColor="white"
          p="3"
          mb="3px"
        >
          <Row
            alignItems="center"
            gap="3"
          >
            <TruckBrandIcon
              width="20"
              height="20"
            />
            <AtomBox flexGrow={1}>
              <RowBetween>
                <Text
                  color="textSecondary"
                  small
                  bold
                  fontWeight="500"
                >
                  Tài xế giao hàng
                </Text>

                <RowFixed gap="2">
                  {/* <Image
                    alt=""
                    borderRadius="50%"
                    width="36px"
                    height="36px"
                    src={order?.driverInfo?.image}
                  /> */}

                  <Text ml="4px">{order?.driverInfo?.name}</Text>

                  <Text color="divider">&bull;</Text>

                  <Text
                    color="textTertiary"
                    small
                  >
                    {order?.driverInfo?.phone}
                  </Text>
                </RowFixed>
              </RowBetween>
            </AtomBox>
          </Row>
        </Box>
      )}

      {!!order?.orderDelivery && (
        <Box
          backgroundColor="white"
          p="3"
          mb="3px"
        >
          <Row
            alignItems="flex-start"
            gap="3"
            mb="0p75rem"
          >
            <Box>
              <DeliveryManBrandIcon />
            </Box>
            <AtomBox flexGrow={1}>
              <Text
                color="textSecondary"
                small
                bold
                mb="0p875rem"
              >
                Hình thức vận chuyển
              </Text>

              <Text
                mb="0p75rem"
                small
              >
                {order?.orderDelivery?.deliveryMethodLabel}
              </Text>

              <AtomBox
                p="3"
                bgc="backgroundGreySecondary"
                borderRadius="8px"
              >
                <Text color="textSecondary">{order?.orderDelivery?.deliveryMethodDescription}</Text>
              </AtomBox>
            </AtomBox>
          </Row>
        </Box>
      )}
    </>
  );
};

export default DeliveryInfo;
