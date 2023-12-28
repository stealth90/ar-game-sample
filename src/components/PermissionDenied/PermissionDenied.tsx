import React from 'react';
import { RouteProps } from 'react-router-dom';
import './permission-denied.scss';

const PermissionDenied: React.FC<RouteProps> = () => (
  <div className="permission-denied">
    <p className="permission-denied__word blue">Attenzione</p>
    <p className="permission-denied__word">
      Per poter giocare devi attivare la camera e ricaricare la pagina
    </p>
  </div>
);

export default PermissionDenied;
