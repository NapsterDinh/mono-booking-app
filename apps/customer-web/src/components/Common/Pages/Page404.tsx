import { Box, BoxProps, Flex, Image, useMatchBreakpoints } from '@tsu-org/ui-kit';
import Head from 'next/head';

const zaloUrl = 'https://bit.ly/zalo-group-hot-deals-2';

const Page404 = () => {
  const { isDesktop } = useMatchBreakpoints();

  const handleClick = (event: Parameters<BoxProps['onClick']>[0]) => {
    const { width, height } = event.target as any as {
      width: number;
      height: number;
    };
    const percentX = (event.nativeEvent.offsetX / width) * 100;
    const percentY = (event.nativeEvent.offsetY / height) * 100;

    if (isDesktop) {
      // start x: 830, end x: 1010
      // start y: 210, end y: 305
      // width: 1216, height: 355
      // x: 68% - 83%
      // y: 59% - 86%

      if (percentX >= 68 && percentX <= 83 && percentY >= 59 && percentY <= 86) {
        window.open(zaloUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      // start x: 170, end x: 605
      // start y: 545, end y: 710
      // width: 820, height: 1201
      // x: 21% - 74%
      // y: 45% - 59%

      if (percentX >= 21 && percentX <= 74 && percentY >= 45 && percentY <= 59) {
        window.open(zaloUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <>
      <Head>
        <title key={'title'}>{'nhapthuoc.com'}</title>
      </Head>
      <Flex
        alignItems="center"
        minHeight="calc(100svh - 125px)"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          maxWidth={isDesktop ? '1216px' : undefined}
          maxHeight="100%"
          mx="auto"
          py="2rem"
          cursor="pointer"
          onClick={handleClick}
        >
          <Image
            alt=""
            src={isDesktop ? '/images/coming-soon/banner-desktop.jpg' : '/images/coming-soon/banner-mobile.jpg'}
            height="100%"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Page404;
