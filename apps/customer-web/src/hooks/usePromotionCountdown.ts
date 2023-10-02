import useTimeCountDown from '@customer-web/hooks/useTimeCountDown';

export enum PromotionCountdownEnum {
  PRODUCT_CARD,
  PRODUCT_GENERAL_INFO,
}

export const PromotionCountdownEntries: ReadonlyMap<
  PromotionCountdownEnum,
  { getCountdownText: (timeLeft: number, days: number, hours: number, minutes: number, seconds: number) => any }
> = new Map([
  [
    PromotionCountdownEnum.PRODUCT_CARD,
    {
      getCountdownText(timeLeft, days, hours, minutes, seconds) {
        let textDisplay = 'Hết giờ';

        if (timeLeft > 0) {
          const daysDisplay = days > 0 ? days + ' ngày, ' : '';
          const hoursDisplay = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '00:';
          const minutesDisplay = minutes > 0 ? `${minutes.toString().padStart(2, '0')}:` : '00:';
          const secondsDisplay = seconds.toString().padStart(2, '0');
          textDisplay = `Còn ${daysDisplay} ${hoursDisplay}${minutesDisplay}${secondsDisplay}`;
        }

        return {
          textDisplay,
        };
      },
    },
  ],
  [
    PromotionCountdownEnum.PRODUCT_GENERAL_INFO,
    {
      getCountdownText: (timeLeft, days, hours, minutes, seconds) => {
        const daysDisplay = days > 0 ? `${days} ngày, ` : ' ';
        const hoursDisplay = hours > 0 ? `${hours.toString().padStart(2, '0')}` : '00';
        const minutesDisplay = minutes > 0 ? `${minutes.toString().padStart(2, '0')}` : '00';
        const secondsDisplay = seconds.toString().padStart(2, '0');

        return { daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay };
      },
    },
  ],
]);

type PromotionCountDownProps = {
  timeLeft: number;
  type: PromotionCountdownEnum;
};

const usePromotionCountdown = (props: PromotionCountDownProps) => {
  const { timeLeft: duration, type } = props;
  const { delay: timeLeft } = useTimeCountDown(duration);

  const seconds = Math.floor(timeLeft % 60);
  const minutes = Math.floor(Math.floor(timeLeft / 60) % 60);
  const hours = Math.floor(Math.floor(timeLeft / (60 * 60)) % 24);
  const days = Math.floor(timeLeft / (60 * 60 * 24));

  const component =
    PromotionCountdownEntries.get(type)?.getCountdownText(timeLeft, days, hours, minutes, seconds) ?? null;

  return component;
};

export default usePromotionCountdown;
