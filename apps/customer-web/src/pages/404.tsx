import { Box, Button, Flex, Image, Link, Text } from '@tsu-org/ui-kit';

const Page404 = () => {
  return (
    <Box
      minHeight="calc(100svh - 125px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        backgroundColor="white"
        borderRadius="12px"
        padding={'16px 40px'}
      >
        <Image
          alt="mascot"
          src="/images/not-found-mascot.svg"
        />
        <Text
          fontSize="24px"
          fontWeight={500}
          mt="4"
          color="textSecondary"
        >
          Không tìm thấy trang
        </Text>
        <Text
          fontSize="36px"
          fontWeight={700}
          color="textLink"
          my="2"
        >
          Lỗi 404
        </Text>
        <Text
          textAlign="center"
          fontSize="18px"
          mb="4"
          maxWidth="75%"
        >
          Xin lỗi bạn, trang đã bị xóa hoặc địa chỉ url không đúng!
        </Text>
        <Link href="/">
          <Button
            type="primary"
            scale="lg"
          >
            Quay về trang chủ
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Page404;
