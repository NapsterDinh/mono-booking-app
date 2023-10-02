import Image from '@customer-web/components/Image';
import { ModalType } from '@customer-web/enums/index';
import { useModal } from '@customer-web/state/global/hooks';
import { Box, BoxProps, Button, Flex, RowFixed, Text, useMatchBreakpoints } from '@tsu-org/ui-kit';
import { FC } from 'react';

const LoginSuggest: FC<BoxProps> = (props) => {
  const { openModal } = useModal();
  const { isDesktop } = useMatchBreakpoints();

  return (
    <Box
      mb="40px"
      position="relative"
      {...props}
    >
      <Image
        alt=""
        src="/images/login-overlay-background.png"
        fill
        quality={isDesktop ? '100' : '70'}
        style={{ objectFit: 'cover' }}
        loading="eager"
      />
      <Box
        backgroundColor="black"
        opacity="0.6"
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
        zIndex="1"
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py="48px"
        position="relative"
        left="0"
        right="0"
        top="0"
        bottom="0"
        zIndex="2"
      >
        <Text
          color="white"
          mb="3"
          fontSize="24px"
          bold
          textAlign="center"
        >
          Đăng nhập để hưởng những đặc quyền
          <br />
          dành riêng cho thành viên.
        </Text>

        <RowFixed gap="0p75rem">
          <Button
            width="116px"
            type="secondary"
            onClick={openModal.bind(this, ModalType.LOGIN, undefined)}
          >
            Đăng nhập
          </Button>
          <Button
            width="116px"
            onClick={openModal.bind(this, ModalType.REGISTER, undefined)}
          >
            Đăng ký
          </Button>
        </RowFixed>
      </Flex>
    </Box>
  );
};

export default LoginSuggest;
