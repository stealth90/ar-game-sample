import React, { useRef } from 'react';
import { useCamera } from '../../hooks/useCamera';
import PermissionDenied from '../PermissionDenied';
import Loader from '../Loader';
import './camera-game.scss';

interface CameraGameProps {
  onVideoLoaded: () => void;
  gameDuration: number;
}

const CameraGame: React.FC<CameraGameProps> = ({ onVideoLoaded, gameDuration }) => {
  const { isChecking, stream, status } = useCamera(gameDuration);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (isChecking) {
    return (
      <div className="camera-game__loading">
        <Loader className="camera-game__loader" />
      </div>
    );
  }

  if (status !== 'agree') {
    return <PermissionDenied />;
  }

  if (stream && videoRef.current) {
    onVideoLoaded();
    videoRef.current.srcObject = stream;
  }

  return <video ref={videoRef} autoPlay muted className="camera-game" />;
};

export default React.memo(CameraGame);
