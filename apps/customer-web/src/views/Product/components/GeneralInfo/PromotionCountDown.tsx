import usePromotionCountdown, { PromotionCountdownEnum } from '@customer-web/hooks/usePromotionCountdown';
import { Box, Flex, Image, Text } from '@tsu-org/ui-kit';
import { ClockIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';

type PromotionCountDownProps = {
  timeLeft: number;
};

const PromotionCountdown: FC<PromotionCountDownProps> = (props) => {
  const { daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay } = usePromotionCountdown({
    timeLeft: props?.timeLeft,
    type: PromotionCountdownEnum.PRODUCT_GENERAL_INFO,
  });
  return (
    <Flex>
      <Box
        pt="2px"
        zIndex="1"
      >
        <ClockIcon />
      </Box>

      <Flex
        p="0px"
        backgroundColor="#ed6400"
        borderRadius="0px 24px 24px 0px"
        height="fit-content"
        width="100%"
        marginLeft="-28px"
        flexDirection={{
          _: 'column',
          sm: 'row',
        }}
        pr="20px"
        justifyContent="space-between"
        alignItems={{ _: 'start', sm: 'center' }}
        marginTop={{ _: '7px', sm: '10px' }}
      >
        <Text
          minWidth="fit-content"
          color="white"
          pt="5px"
          pb={{ _: '0', sm: '5px' }}
          lineHeight={{ _: '1.5', sm: '25.2px' }}
          fontWeight="700"
          textTransform="uppercase"
          ml="34px"
          fontSize={{
            _: '12px',
            sm: '18px',
          }}
        >
          Ưu đãi hấp dẫn
        </Text>
        <Flex
          m="0"
          pb="3px"
          ml="34px"
          gap="4px"
          display="inline-block"
          alignItems="center"
          justifyContent="end"
          flexWrap="wrap"
        >
          <Flex
            alignItems="center"
            css={{ transform: 'translateY(1px)' }}
          >
            <Text
              fontSize="14px"
              color="white"
              mr="4px"
            >
              Kết thúc sau
            </Text>
            {daysDisplay !== '' && (
              <Text
                as="span"
                color="white"
                bold
              >
                {daysDisplay}
              </Text>
            )}
          </Flex>

          <Flex gap="7px">
            {[hoursDisplay, minutesDisplay, secondsDisplay].map((item, index, arr) => (
              <>
                <Flex
                  fontSize="14px"
                  color="textWarning2"
                  width="24px"
                  height="24px"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="600"
                  boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.00) inset"
                  borderRadius="6px"
                  backgroundColor="white"
                >
                  {item}
                </Flex>
                {/* is not seconds */}
                {index !== arr.length - 1 && (
                  <Box
                    color="white"
                    fontWeight="600"
                  >
                    :
                  </Box>
                )}
              </>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PromotionCountdown;
