import { Box, Text } from '@tsu-org/ui-kit';
import Image from 'next/image';

const LoadingFRT = ({ message = 'Đang tải...' }: { message?: string }) => {
  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      left="0"
      bottom="0"
      zIndex="999999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <Box
        backgroundColor="white"
        borderRadius="12px"
        boxShadow="0 1px 1px rgb(0 0 0 / 15%)"
        py="1rem"
      >
        <Image
          alt=""
          src="/images/mascot-1.svg"
          width={200}
          height={150}
        />
        <Text
          small
          textAlign="center"
        >
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default LoadingFRT;
