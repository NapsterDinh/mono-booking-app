import { useEffect, useState } from 'react';

export type DisplayPromotionType = {
  key: number;
  image: string;
  label: string | any;
  disabled?: boolean;
};

const useDisplayPromotion = ({
  promotions,
  MAX_DISPLAY_PROMOTIONS,
}: {
  promotions: any[];
  MAX_DISPLAY_PROMOTIONS: number;
}) => {
  const [displayPromotions, setDisplayPromotions] = useState([]);
  const hasMore = promotions?.length > 0 && displayPromotions?.length < promotions?.length;
  const countMore = promotions?.length - displayPromotions?.length;

  const onViewMoreButtonClicked = () => {
    setDisplayPromotions(promotions);
  };

  const onViewLessButtonClicked = () => {
    let displayPromotions = [];

    if (promotions?.length) {
      displayPromotions = promotions.slice(0, MAX_DISPLAY_PROMOTIONS);
    }

    setDisplayPromotions(displayPromotions);
  };

  useEffect(() => {
    onViewLessButtonClicked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promotions]);

  console.log(displayPromotions);

  return { displayPromotions, hasMore, onViewMoreButtonClicked, countMore, onViewLessButtonClicked };
};

export default useDisplayPromotion;
