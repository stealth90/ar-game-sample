import React from 'react';
import { RouteProps } from 'react-router-dom';
import ProjectLogo from '../../components/ProjectLogo';
import './no-mobile.scss';

const NoMobile: React.FC<RouteProps> = () => {
  return (
    <div className="no-mobile">
      <div className="no-mobile__wrapper">
        <p className="no-mobile__word title">Attenzione</p>
        <p className="no-mobile__word description">
          Per poter giocare devi aprire il link da un dispositivo mobile
        </p>
      </div>
      <ProjectLogo className='no-mobile__logo' />
    </div>
  );
};

export default NoMobile;
