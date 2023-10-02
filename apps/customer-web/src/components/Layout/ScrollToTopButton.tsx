import { Box, Button } from '@tsu-org/ui-kit';
import { ArrowTopCircleGradientOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useScroll } from 'ahooks';

const ScrollToTopButton = () => {
  const scroll = useScroll(document);

  if (!scroll || scroll.top <= 500) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      position="fixed"
      right="1.5rem"
      bottom="2rem"
    >
      <Button
        type="link"
        onClick={scrollToTop}
      >
        <ArrowTopCircleGradientOrangeIcon />
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
