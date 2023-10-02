import { useEffect, useState } from 'react';

const useTimeCountDown = (delayTime: number) => {
  // #region timer
  const [delay, setDelay] = useState(delayTime);

  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  // #endregion

  return {
    minutes,
    seconds,
    delay,
  };
};
export default useTimeCountDown;
