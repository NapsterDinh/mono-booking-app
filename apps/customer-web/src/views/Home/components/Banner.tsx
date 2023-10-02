import Image from '@customer-web/components/Image';
import { BannerSection } from '@customer-web/page-providers/HomeProviderService';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Link } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import { FC, useMemo } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface BannerProps extends AtomBoxProps {
  banner?: BannerSection;
}

const BannerDesktop: FC<BannerProps> = ({ banner }) => {
  const carouselItems = useMemo(() => {
    return banner?.mainSlider?.length > 3 ? [banner?.mainSlider?.[0]].concat(banner?.mainSlider?.slice(3)) : [];
  }, [banner?.mainSlider]);

  return (
    <AtomBox
      display={{
        lg: 'block',
        xs: 'none',
      }}
    >
      <Row gutter={20}>
        <Col
          lg={{ span: 16 }}
          span={24}
        >
          {carouselItems?.length > 1 ? (
            <Swiper
              autoplay={{
                delay: 4000,
              }}
              loop
              modules={[Autoplay]}
              style={{ height: '100%' }}
              pagination={{
                enabled: true,
                clickable: true,
              }}
            >
              {carouselItems?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    aspectRatio="805/248"
                    external
                    href={item?.redirectUrl}
                    width="100%"
                    height="100%"
                    aria-label="banner-1"
                  >
                    <Image
                      alt={item?.webImage?.alt}
                      src={item?.webImage?.url}
                      width={805}
                      height={248}
                      quality="70"
                      loading="eager"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Link
              aspectRatio="805/248"
              external
              href={banner?.mainSlider?.[0]?.redirectUrl}
              width="100%"
              height="100%"
              aria-label="banner-1"
            >
              <Image
                alt={banner?.mainSlider?.[0]?.webImage?.alt}
                src={banner?.mainSlider?.[0]?.webImage?.url}
                width={805}
                height={248}
                quality="70"
                loading="eager"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </Link>
          )}
        </Col>
        <Col
          lg={{ span: 8 }}
          span={24}
        >
          <Box display={['none', null, null, null, 'block']}>
            <Row
              gutter={[16, 16]}
              style={{ height: '100%' }}
            >
              <Col span={24}>
                <Link
                  external
                  href={banner?.mainSlider?.[1]?.redirectUrl}
                  aria-label="banner-2"
                >
                  <Image
                    alt={banner?.mainSlider?.[1]?.webImage?.alt}
                    src={banner?.mainSlider?.[1]?.webImage?.url}
                    width={391}
                    height={124}
                    quality="70"
                    loading="eager"
                  />
                </Link>
              </Col>
              <Col span={24}>
                <Link
                  external
                  href={banner?.mainSlider?.[2]?.redirectUrl}
                  aria-label="banner-3"
                >
                  <Image
                    alt={banner?.mainSlider?.[2]?.webImage?.alt}
                    src={banner?.mainSlider?.[2]?.webImage?.url}
                    width={391}
                    height={124}
                    quality="70"
                    loading="eager"
                  />
                </Link>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </AtomBox>
  );
};

const BannerMobile: FC<BannerProps> = ({ banner }) => {
  return (
    <AtomBox
      display={{
        lg: 'none',
        xs: 'block',
      }}
    >
      <Col span={24}>
        <Swiper
          autoplay={{
            delay: 4000,
          }}
          loop
          modules={[Autoplay]}
          pagination={{
            enabled: true,
            clickable: true,
          }}
        >
          {banner?.mainSlider?.map((slider, index) => (
            <SwiperSlide key={index}>
              <Box
                width="100%"
                aspectRatio="805/248"
              >
                <Link
                  aria-label={`banner-${index}`}
                  external
                  href={slider?.redirectUrl}
                  width="100%"
                >
                  <Image
                    alt={slider?.webImage?.alt}
                    quality="70"
                    src={slider?.webImage?.url}
                    fill
                    loading="eager"
                  />
                </Link>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </AtomBox>
  );
};

const Banner: FC<BannerProps> = ({ banner, ...rest }) => {
  if (!banner) {
    return;
  }

  return (
    <AtomBox {...rest}>
      <BannerDesktop banner={banner} />
      <BannerMobile banner={banner} />
    </AtomBox>
  );
};

export default Banner;
