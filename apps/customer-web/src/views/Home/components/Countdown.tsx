import { Box, Row, Text } from '@tsu-org/ui-kit';
import { useCountDown } from 'ahooks';
import { FC, useEffect, useState } from 'react';

const Countdown: FC<{ endDate?: string }> = ({ endDate }) => {
  const [targetDate, setTargetDate] = useState<number>(endDate ? new Date(endDate).getTime() : undefined);
  const [_, formattedRes] = useCountDown({
    targetDate,
  });

  useEffect(() => {
    setTargetDate(endDate ? new Date(endDate).getTime() : undefined);
  }, [endDate]);

  if (!targetDate) {
    return;
  }

  return (
    <Box
      display="flex"
      position="relative"
      top="3px"
      ml="1rem"
    >
      <Box
        background="linear-gradient(180deg, #1B4062 0%, #0A345B 100%)"
        borderRadius="6px"
        width="1.75rem"
        height="1.75rem"
      >
        <Row
          justifyContent="center"
          height="100%"
        >
          <Text
            color="white"
            small
            fontWeight="500"
          >
            {formattedRes.hours.toString().padStart(2, '0')}
          </Text>
        </Row>
      </Box>

      <Text
        color="#133A5F"
        mx="0.5rem"
        bold
      >
        :
      </Text>

      <Box
        background="linear-gradient(180deg, #1B4062 0%, #0A345B 100%)"
        borderRadius="6px"
        width="1.75rem"
        height="1.75rem"
      >
        <Row
          justifyContent="center"
          height="100%"
        >
          <Text
            color="white"
            small
            fontWeight="500"
          >
            {formattedRes.minutes.toString().padStart(2, '0')}
          </Text>
        </Row>
      </Box>

      <Text
        color="#133A5F"
        mx="0.5rem"
        bold
      >
        :
      </Text>

      <Box
        background="linear-gradient(180deg, #1B4062 0%, #0A345B 100%)"
        borderRadius="6px"
        width="1.75rem"
        height="1.75rem"
      >
        <Row
          justifyContent="center"
          height="100%"
        >
          <Text
            color="white"
            small
            fontWeight="500"
          >
            {formattedRes.seconds.toString().padStart(2, '0')}
          </Text>
        </Row>
      </Box>
    </Box>
  );
};

export default Countdown;
