import styled from '@emotion/styled';
import { Carousel } from 'antd';
import type { CarouselProps } from './types';
import { layout } from 'styled-system';

export const StyledCarousel = styled(Carousel)<CarouselProps>`
  &.slick-slider {
    height: 100%;

    .slick-list,
    .slick-track,
    .slick-slide {
      height: 100%;
    }

    .slick-slide {
      div {
        height: 100%;
      }
    }

    ${layout}
  }
`;
