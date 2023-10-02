import { Box, Column, RowBetween } from '@tsu-org/ui-kit';
import { Skeleton } from 'antd';
import range from 'lodash/range';

const LoadingNotificationList = () => {
  return (
    <Box mt="0.75rem">
      <Column gap="3">
        {range(3).map((index) => (
          <Box
            backgroundColor="white"
            p="12px 16px"
            key={index}
          >
            <RowBetween>
              <Skeleton active />
            </RowBetween>
          </Box>
        ))}
      </Column>
    </Box>
  );
};

export default LoadingNotificationList;
