import React from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import LeaderBoardImage from '../../assets/images/leaderboard.png';
import CookiesTerm from '../../components/CookiesTerm';
import Button from '../../components/Button';
import ProjectLogo from '../../components/ProjectLogo';
import './splash-screen.scss';

const SplashScreen: React.FC<RouteProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="splash-screen">
      <div className="splash-screen__content">
        <ProjectLogo />
        <img className="splash-screen__hero-image" alt="leader board" src={LeaderBoardImage} />
        <h1 className="splash-screen__title">Divertiti con Be Together</h1>
        <p className="splash-screen__description">
          Gioca con noi recuperando i Power Coin e le Energy Star di Be Together per fare il pieno
          di energia. Fai attenzione a evitare i malus per ottenere il massimo dei punti.
        </p>
        <Button
          className="splash-screen__button"
          color="secondary"
          onClick={() => {
            navigate('/tutorial');
          }}
        >
          Gioca ora
        </Button>
      </div>
      <CookiesTerm />
    </div>
  );
};

export default SplashScreen;
