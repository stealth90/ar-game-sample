import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountdown } from './useCountdown';

export const useGame = (gameDuration: number) => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const { time, startCountdown } = useCountdown(gameDuration, false);

  useEffect(() => {
    if (gameStarted) {
      startCountdown();
    }
  }, [gameStarted, startCountdown]);

  const endGame = () => {
    window.sessionStorage.setItem('points', Math.floor(Math.random() * 10).toString());
    navigate('/thank-you');
  };

  if (time === gameDuration - 5) {
    endGame();
  }

  const onUpPoints = () => {
    setPoints((curr) => curr + 1);
  };

  const onDownPoints = () => {
    setPoints((curr) => curr - 1);
  };

  const getReturnValues = (): [string, string] => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return [
      minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds < 10 ? `0${seconds}` : `${seconds}`,
    ];
  };

  const startGame = useCallback(() => {
    setGameStarted(true);
  }, []);

  return {
    gameStarted,
    points,
    times: getReturnValues(),
    onUpPoints,
    onDownPoints,
    startGame,
  };
};
