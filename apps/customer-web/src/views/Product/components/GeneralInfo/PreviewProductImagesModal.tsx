import styled from '@emotion/styled';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Flex, Image, Modal, ModalProps, RowFixed, Text } from '@tsu-org/ui-kit';
import { LeftOutlinedIcon, RightOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

interface PreviewProductImagesModalProps extends ModalProps {
  activeIndex?: number;
  productName?: string;
  images?: any[];
  onCancel?: () => void;
  onSlideChange?: (swiper: SwiperType) => void;
  onSelectThumbnail?: (index: number) => void;
}

const ThumbnailItem = styled(Box)`
  &.active {
    border-color: #1250dc;
  }
`;

const PreviewProductImagesModal: FC<PreviewProductImagesModalProps> = ({
  activeIndex,
  productName,
  images,
  onCancel,
  onSlideChange,
  onSelectThumbnail,
  ...rest
}) => {
  const [swiper, setSwiper] = useState<SwiperType>();

  const handleCancel = () => {
    onCancel && onCancel();
  };

  const handleSelectThumbnail = (index: number) => {
    onSelectThumbnail(index);
  };

  useEffect(() => {
    swiper?.slideTo(activeIndex);
  }, [activeIndex, swiper]);

  return (
    <Modal
      width={800}
      centered
      onCancel={handleCancel}
      footer={null}
      {...rest}
    >
      <Text
        fontSize="20px"
        fontWeight="500"
        mb="1rem"
        textAlign="center"
      >
        {productName}
      </Text>
      <Box
        position="relative"
        mb="4"
      >
        {images?.length > 0 && (
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            onSlideChange={onSlideChange}
            centeredSlides={true}
          >
            {images.map((image) => (
              <SwiperSlide
                key={image}
                className={sprinkles({
                  textAlign: 'center',
                })}
              >
                <Box
                  maxWidth="400px"
                  mx="auto"
                >
                  <Image
                    alt=""
                    src={image}
                    aspectRatio="1/1"
                    dimension={1}
                    showLoading
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {images?.length > 1 && (
          <>
            {activeIndex !== 0 && (
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

            {activeIndex !== images?.length - 1 && (
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
                  onClick={() => swiper?.slideNext()}
                />
              </Flex>
            )}
          </>
        )}
      </Box>

      <RowFixed
        gap="0p75rem"
        mb="3"
      >
        {images?.map((image, index) => (
          <Box
            width="100px"
            height="100px"
            key={image}
          >
            <Button
              type="link"
              onClick={handleSelectThumbnail.bind(this, index)}
            >
              <ThumbnailItem
                className={clsx({
                  active: index === activeIndex,
                  'is-view-more': index === 3,
                })}
                backgroundColor="white"
                border="1px solid #E4E8ED"
                borderRadius="8px"
                p="0.75rem"
                position="relative"
              >
                <Image
                  alt=""
                  aspectRatio="1/1"
                  src={image}
                  showLoading
                  cdnWidth={70}
                  cdnHeight={70}
                  width="100%"
                />
              </ThumbnailItem>
            </Button>
          </Box>
        ))}
      </RowFixed>
    </Modal>
  );
};

export default PreviewProductImagesModal;
