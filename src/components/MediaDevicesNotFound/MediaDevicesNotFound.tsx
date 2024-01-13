import React from 'react';
import { Link, RouteProps } from 'react-router-dom';
import './media-devices-not-found.scss';

const MediaDevicesNotFound: React.FC<RouteProps> = () => (
  <div className="media-devices-not-found">
    <p className="media-devices-not-found__word blue">Attenzione</p>
    <p className="media-devices-not-found__word">Camera non presente, probabilmente stai navigando da un'indirizzo non sicuro</p>
    <Link className="media-devices-not-found__link" to="/thank-you">
      Vai alla pagine finale
    </Link>
  </div>
);

export default MediaDevicesNotFound;
