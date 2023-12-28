import React, { useCallback } from 'react';
import { RouteProps } from 'react-router-dom';
import ProjectLogo from '../../components/ProjectLogo';
import GameBoard from '../../components/GameBoard';
import CameraGame from '../../components/CameraGame';
import { useGame } from '../../hooks/useGame';
import { GAME_DURATION_IN_SEC } from '../../constants/game';
import './game.scss';

const Game: React.FC<RouteProps> = () => {
  const { gameStarted, points, times, startGame } = useGame(GAME_DURATION_IN_SEC);

  const handleOnVideoLoaded = useCallback(() => {
    startGame();
  }, []);

  return (
    <div className="game">
      {gameStarted && <GameBoard points={points} time={times} />}
      <CameraGame onVideoLoaded={handleOnVideoLoaded} gameDuration={5000} />
      <div className="game__logo-wrapper" />
      <ProjectLogo className="game__logo" />
    </div>
  );
};

export default Game;
