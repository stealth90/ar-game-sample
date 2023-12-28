import React from 'react';
import './game-board.scss';

interface GameBoardProps {
  time: [string, string];
  points: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ time, points }) => (
  <div className="game-board">
    <div className="game-board__score-board">
      <p className="game-board__score-board__title">Punteggio</p>
      <p className="game-board__score-board__value">{points}</p>
    </div>
    <div className="game-board__time-board">
      <p className="game-board__time-board__title">Time</p>
      <p className="game-board__time-board__value">
        {time?.[0]}:{time?.[1]}
      </p>
    </div>
  </div>
);

export default GameBoard;
