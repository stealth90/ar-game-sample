import React, { useRef } from 'react';
import TutorialVideo from '../../assets/videos/tutorial.mp4';
import { useTutorial } from '../../hooks/useTutorial';
import ProjectLogo from '../../components/ProjectLogo';
import './tutorial.scss';

const Tutorial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { tutorialText, onEndVideo, onPause, onPlay } = useTutorial();

  return (
    <div className="tutorial">
      <ProjectLogo className="tutorial__logo" />
      <video
        ref={videoRef}
        playsInline
        onPlay={() => onPlay(videoRef.current)}
        autoPlay
        onPause={onPause}
        muted
        src={TutorialVideo}
        onEnded={onEndVideo}
        className="tutorial__video"
      />
      <p key={tutorialText} className="tutorial__text">
        {tutorialText}
      </p>
    </div>
  );
};

export default Tutorial;
