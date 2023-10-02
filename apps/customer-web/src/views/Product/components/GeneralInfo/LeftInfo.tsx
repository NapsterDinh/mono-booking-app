import styled from '@emotion/styled';
import { DEFAULT_PRODUCT_IMAGE } from '../../../../constants/index';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Flex, Image } from '@tsu-org/ui-kit';
import { LeftOutlinedIcon, RightOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import PreviewProductImagesModal from './PreviewProductImagesModal';
import Thumbnails from './Thumbnails';

const StyledSwiperSlide = styled(SwiperSlide)`
  .ant-image-error {
    width: 100%;
  }
`;

const LeftInfo: FC<{
  product?: NhapThuocResponse.SearchService.ProductSearchDetail;
}> = ({ product }) => {
  const { isOpen, openModal, closeModal } = useOpenCloseModal();
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  const images = useMemo(() => {
    let images = [];

    if (product?.primaryImage) {
      images.unshift(product.primaryImage);
    }

    if (product?.secondaryImages) {
      images = images.concat(product.secondaryImages);
    }

    if (!product.primaryImage || !product.secondaryImages) {
      return [DEFAULT_PRODUCT_IMAGE];
    }

    return images;
  }, [product.primaryImage, product.secondaryImages]);

  const handleChangeSlide = (swiper: SwiperType) => {
    setActiveThumbnailIndex(swiper.activeIndex);
  };

  const handleSelectThumbnail = (index: number) => {
    if (index === 3 && images.length > 4) {
      openModal();

      setActiveThumbnailIndex(3);
      swiper?.slideTo(3);
    } else {
      setActiveThumbnailIndex(index);
      swiper?.slideTo(index);
    }
  };

  const handleNextSlide = () => {
    if (swiper.activeIndex === 2 && images.length > 3) {
      openModal();
    } else {
      swiper?.slideNext();
    }
  };

  const handleClickImage = (index: number) => {
    openModal();
    setActiveThumbnailIndex(index);
    swiper?.slideTo(index);
  };

  return (
    <>
      <Box position="relative">
        {images?.length > 0 && (
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            onSlideChange={handleChangeSlide}
            centeredSlides={true}
          >
            {images.map((image, index) => (
              <StyledSwiperSlide
                key={image}
                className={sprinkles({
                  textAlign: 'center',
                })}
              >
                <Button
                  aspectRatio="1/1"
                  type="link"
                  width="100%"
                  onClick={handleClickImage.bind(this, index)}
                >
                  <Image
                    aspectRatio="1/1"
                    alt=""
                    src={image}
                    dimension={1}
                    cdnWidth={373}
                    showLoading
                    width="100%"
                  />
                </Button>
              </StyledSwiperSlide>
            ))}
          </Swiper>
        )}

        {images?.length > 1 && (
          <>
            {activeThumbnailIndex !== 0 && (
              <Flex
                position="absolute"
                zIndex="1"
                top="calc(50% - 1rem)"
                left="0"
              >
                <Button
                  type="overlay"
                  shape="circle"
                  icon={
                    <LeftOutlinedIcon
                      color="white"
                      width="9"
                      height="16"
                    />
                  }
                  onClick={() => swiper?.slidePrev()}
                />
              </Flex>
            )}

            {activeThumbnailIndex !== images?.length - 1 && (
              <Flex
                position="absolute"
                zIndex="1"
                top="calc(50% - 1rem)"
                right="0"
              >
                <Button
                  type="overlay"
                  shape="circle"
                  icon={
                    <RightOutlinedIcon
                      color="white"
                      width="9"
                      height="16"
                    />
                  }
                  onClick={handleNextSlide}
                />
              </Flex>
            )}
          </>
        )}
      </Box>
      <AtomBox mt="3">
        <Thumbnails
          activeIndex={activeThumbnailIndex}
          thumbnails={images}
          onSelectThumbnail={handleSelectThumbnail}
        />
      </AtomBox>
      <PreviewProductImagesModal
        activeIndex={activeThumbnailIndex}
        productName={product?.webName || product?.name}
        open={isOpen}
        images={images}
        onSlideChange={handleChangeSlide}
        onCancel={closeModal}
        onSelectThumbnail={handleSelectThumbnail}
      />
    </>
  );
};

export default LeftInfo;
