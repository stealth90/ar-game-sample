import { useCallback, useEffect, useRef, useState } from 'react';

export const useCountdown = (initialSeconds: number, autoPlay = true) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef<NodeJS.Timeout>();

  const startCountdown = useCallback(() => {
    const timer = setInterval(() => {
      let currentSeconds = initialSeconds;
      setSeconds((prevSeconds) => {
        currentSeconds = prevSeconds;
        return prevSeconds - 1;
      });
      if (currentSeconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    timerRef.current = timer;
  }, [initialSeconds]);

  useEffect(() => {
    if (autoPlay) {
      startCountdown();
    }
    if (timerRef.current) {
      return () => clearInterval(timerRef.current);
    }
  }, [autoPlay, startCountdown]);

  return { time: seconds, startCountdown };
};
