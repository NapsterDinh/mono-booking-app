import ProductCard from '@customer-web/views/Home/components/ProductCard';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, Button, Flex, Text } from '@tsu-org/ui-kit';
import { LeftOutlinedIcon, RightOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import type { SwiperOptions, Swiper as SwiperType } from 'swiper/types';
import useRelatedProducts from '../hooks/useRelatedProducts';

interface RecentlyWatchedProductsProps {
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  slidesPerView?: SwiperProps['slidesPerView'];
  spaceBetween?: SwiperProps['spaceBetween'];
}

const RelatedProducts: FC<RecentlyWatchedProductsProps> = (props) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const { products } = useRelatedProducts();

  if (!products?.length) {
    return null;
  }

  return (
    <AtomBox
      {...props}
      px={'3'}
    >
      <Text
        fontSize="18px"
        mb="1rem"
        bold
      >
        Sản phẩm liên quan
      </Text>

      <Box position="relative">
        <Swiper
          css={{ paddingLeft: '10px' }}
          onSwiper={setSwiper}
          slidesPerView={props.slidesPerView}
          spaceBetween={props.spaceBetween}
          breakpoints={
            props.breakpoints || {
              [breakpoints.sm]: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              [breakpoints.lg]: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              [breakpoints.xl]: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }
          }
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
            icon={
              <LeftOutlinedIcon
                color="#0355A1"
                width="9"
                height="16"
              />
            }
            onClick={() => swiper?.slidePrev()}
          />
        </Flex>
        <Flex
          position="absolute"
          zIndex="1"
          top="calc(50% - 1rem)"
          right="-1rem"
        >
          <Button
            type="white"
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
    </AtomBox>
  );
};

export default RelatedProducts;
