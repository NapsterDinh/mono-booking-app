import Container from '@customer-web/components/Container';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Link, Row, Text } from '@tsu-org/ui-kit';
import { PhoneFilledIcon, TextBulletListSquareSearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import NextLink from 'next/link';

const TopHeader = () => {
  const authenticated = useAuthenticated();

  return (
    <AtomBox
      display={{
        xs: 'none',
        lg: 'block',
      }}
      py="2"
      bg="gradientOrange"
    >
      <Container
        display="flex"
        justifyContent="flex-end"
        gap="3"
      >
        {authenticated && (
          <NextLink href="/ca-nhan/don-hang-cua-toi">
            <Row
              gap="1"
              width="fit"
            >
              <TextBulletListSquareSearchIcon />
              <Text
                color="white"
                fontWeight="500"
                small
              >
                Tra cứu lịch sử đơn hàng
              </Text>
            </Row>
          </NextLink>
        )}

        <Row
          gap="1"
          width="fit"
        >
          <PhoneFilledIcon color="white" />
          <Link
            color="white"
            fontWeight="500"
            small
            href="tel:18006001"
          >
            Tư vấn ngay: 1800 6001
          </Link>
        </Row>
      </Container>
    </AtomBox>
  );
};

export default TopHeader;
