import React from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';
import TrophyImage from '../../assets/images/trophy.png';
import Button from '../../components/Button';
import './thank-you.scss';

const ThankYou: React.FC<RouteProps> = () => {
  const navigate = useNavigate();
  const points = window.sessionStorage.getItem('points');
  return (
    <div className="thank-you">
      <div className="thank-you__text">
        <p className="thank-you__congrats">
          <span>Congratulazioni!</span>Hai totalizzato la bellezza di
        </p>
        <p className="thank-you__points">{points ?? 0} punti</p>
      </div>
      <img className="thank-you__image" alt="trophy" src={TrophyImage} />
      <div className="thank-you__ellipse" />
      <div className="thank-you__buttons">
        <Button className="thank-you__button blue"> Entra in Be Together</Button>
        <Button
          display="hollow"
          className="thank-you__button play"
          onClick={() => navigate('/game')}
        >
          Gioca ancora
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
