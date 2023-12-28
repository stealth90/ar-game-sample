import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from './useTimer';
import { TUTORIAL_CONTENT_TEXT_BY_FRAME } from '../constants/tutorial';

export const useTutorial = () => {
  const navigate = useNavigate();
  const [tutorialContent, setTutorialContent] = useState<string>();
  const { currentTime, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (TUTORIAL_CONTENT_TEXT_BY_FRAME[currentTime]) {
      setTutorialContent(TUTORIAL_CONTENT_TEXT_BY_FRAME[currentTime].text);
    }
  }, [currentTime]);

  const handleOnPlay = (videoElement: HTMLVideoElement | null) => {
    startTimer(videoElement?.duration);
  };

  const handleOnStop = () => {
    stopTimer();
  };

  const handleOnFinishVideo = () => {
    handleOnStop();
    navigate('/countdown');
  };

  return {
    tutorialText: tutorialContent,
    onPlay: handleOnPlay,
    onPause: handleOnStop,
    onEndVideo: handleOnFinishVideo,
  };
};
