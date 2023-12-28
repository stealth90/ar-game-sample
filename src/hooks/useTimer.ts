import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timer>();

  useEffect(() => {
    return () => {
      if (intervalTimer) {
        stopTimer();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = (videoDuration?: number) => {
    const timer = setInterval(() => {
      setCurrentTime((prevSeconds) => prevSeconds + 1);
      if (currentTime === videoDuration) {
        stopTimer();
      }
    }, 1000);
    setIntervalTimer(timer);
  };

  const stopTimer = () => {
    clearInterval(intervalTimer);
  };

  return { currentTime, startTimer, stopTimer };
};
