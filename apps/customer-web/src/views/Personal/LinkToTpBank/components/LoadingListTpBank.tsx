import { Skeleton } from 'antd';

import { Box, Row } from '@tsu-org/ui-kit';

export default function LoadingTpBankFileList() {
  return (
    <Box
      width="100%"
      margin={0}
    >
      <Skeleton paragraph={{ rows: 2 }} />
      <Row
        gap="3"
        backgroundColor="white"
        paddingX="3"
        paddingY="2"
        cursor="pointer"
        mt="4"
        width="100%"
      >
        <Skeleton.Avatar />
        <Skeleton paragraph={{ rows: 1 }} />
      </Row>
    </Box>
  );
}
