import { StyledCarousel } from './styles';
import type { CarouselProps } from './types';

const Carousel = (props: CarouselProps) => {
  return <StyledCarousel {...props} />;
};

export default Carousel;
