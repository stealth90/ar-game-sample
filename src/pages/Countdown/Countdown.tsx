import React, { useEffect } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import ProjectLogo from '../../components/ProjectLogo';
import CountdownText from '../../components/CountdownText';
import Fireworks from '../../assets/images/fireworks.png';
import { useCountdown } from '../../hooks/useCountdown';
import './countdown.scss';

const Countdown: React.FC<RouteProps> = () => {
  const { time } = useCountdown(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      setTimeout(() => {
        navigate('/game');
      }, 900);
    }
  }, [time, navigate]);

  return (
    <div className="countdown">
      <ProjectLogo className="countdown__logo" />
      <img src={Fireworks} className="countdown__fireworks" alt="fireworks" />
      <CountdownText seconds={time} />
    </div>
  );
};

export default Countdown;
