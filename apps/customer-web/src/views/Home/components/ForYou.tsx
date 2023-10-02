import { useRecentlyWatched } from '@customer-web/state/product/hooks';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, Button, Flex, Row, Text } from '@tsu-org/ui-kit';
import { LeftOutlinedIcon, LikeGradientOrangeIcon, RightOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Row as AntdRow, Col } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import ProductCard from './ProductCard';

interface ForYouProps extends AtomBoxProps {}

const ForYou: FC<ForYouProps> = ({ ...rest }) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const products = useRecentlyWatched();

  if (!products?.length) {
    return null;
  }

  return (
    <Box
      background={[
        'linear-gradient(180deg, #FAEBD0 0%, #FEECC8 88.02%, #FFE6BC 100%)',
        null,
        null,
        null,
        'transparent',
      ]}
    >
      <AtomBox
        py={{
          xl: '0',
          xs: '3',
        }}
        px={{
          xs: '1',
          sm: '0',
        }}
        {...rest}
      >
        <Row mb="3">
          <LikeGradientOrangeIcon mr="0.5rem" />
          <Text
            fontSize="18px"
            bold
          >
            Sản phẩm đã xem
          </Text>
        </Row>

        <Box
          backgroundImage={['none', null, null, null, 'url(/images/for-you-background.svg)']}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          pl={['0', null, null, null, '230px']}
          pr={['0', null, null, null, '0.75rem']}
          py={['0', null, null, null, '1rem']}
        >
          <Box
            display={['none', null, null, null, 'block']}
            position="relative"
          >
            <Swiper
              css={{ paddingLeft: '10px' }}
              onSwiper={setSwiper}
              breakpoints={{
                [breakpoints.sm]: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                [breakpoints.lg]: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                [breakpoints.xl]: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
              }}
            >
              {products?.map((product) => (
                <SwiperSlide
                  key={product.sku}
                  style={{ height: 'unset' }}
                >
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Flex
              position="absolute"
              zIndex="1"
              top="calc(50% - 1rem)"
              left="-1rem"
            >
              <Button
                type="white"
                shape="circle"
                icon={
                  <LeftOutlinedIcon
                    color="#0355A1"
                    width="9"
                    height="16"
                  />
                }
                onClick={() => swiper?.slidePrev()}
              ></Button>
            </Flex>
            <Flex
              position="absolute"
              zIndex="1"
              top="calc(50% - 1rem)"
              right="-1rem"
            >
              <Button
                type="white"
                shape="circle"
                icon={
                  <RightOutlinedIcon
                    color="#0355A1"
                    width="9"
                    height="16"
                  />
                }
                onClick={() => swiper?.slideNext()}
              />
            </Flex>
          </Box>

          <Box
            display={['block', null, null, null, 'none']}
            position="relative"
          >
            <AntdRow gutter={[16, 16]}>
              {products?.map((product) => (
                <Col
                  key={product.sku}
                  lg={{ span: 4 }}
                  span={12}
                >
                  <ProductCard product={product} />
                </Col>
              ))}
            </AntdRow>
          </Box>
        </Box>
      </AtomBox>
    </Box>
  );
};

export default ForYou;
