import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Image, Text } from '@tsu-org/ui-kit';
import Link from 'next/link';

export default function EmptyList() {
  return (
    <Box
      width="100%"
      margin={{
        _: 2,
        lg: 0,
      }}
    >
      <Text bold>Đăng ký vay thấu chi online qua TPBank </Text>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="4"
      >
        <Image
          src="/images/personal-file-empty.png"
          alt="icon-checked"
        />
        <Text
          color="textSecondary"
          bold
          mt="24px"
          mb={1}
        >
          Bạn chưa có hồ sơ đăng ký vay thấu chi nào
        </Text>
        <Text
          fontSize={14}
          fontWeight={400}
          mb="24px"
          textAlign="center"
        >
          Đăng ký vay thấu chi để có trải nghiệm mua hàng tốt nhất ở nhapthuoc.com nhé
        </Text>

        <Link
          className={sprinkles({
            display: 'inline-block',
          })}
          style={{
            width: '30%',
          }}
          href="/ca-nhan/dang-ky-vay-thau-chi"
        >
          <Button
            type="secondary"
            scale="lg"
            width="100%"
          >
            Gửi hồ sơ
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
