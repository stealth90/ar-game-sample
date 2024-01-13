import React, { useCallback } from 'react';
import { RouteProps } from 'react-router-dom';
import ProjectLogo from '../../components/ProjectLogo';
import GameBoard from '../../components/GameBoard';
import CameraGame from '../../components/CameraGame';
/* import ThreeComponent from '../../components/ThreeComponent'; */
import { useGame } from '../../hooks/useGame';
import { GAME_DURATION_IN_SEC } from '../../constants/game';
import './game.scss';

const Game: React.FC<RouteProps> = () => {
  const { gameStarted, points, times, startGame } = useGame(GAME_DURATION_IN_SEC);

  const handleOnVideoLoaded = useCallback(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="game">
      {gameStarted && (
        <>
          <GameBoard points={points} time={times} />
          {/* <ThreeComponent /> */}
        </>
      )}
      <CameraGame onVideoLoaded={handleOnVideoLoaded} gameDuration={GAME_DURATION_IN_SEC} />
      <div className="game__logo-wrapper" />
      <ProjectLogo className="game__logo" />
    </div>
  );
};

export default Game;
