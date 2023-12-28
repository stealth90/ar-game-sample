import { useCallback, useEffect, useRef, useState } from 'react';

export const useCountdown = (initialSeconds: number, autoPlay = true) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef<NodeJS.Timeout>();

  const startCountdown = useCallback(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
      if (seconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    timerRef.current = timer;
  }, []);

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
