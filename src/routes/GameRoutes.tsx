import React from 'react';
import { Navigate, Outlet, RouteProps, } from 'react-router-dom';
import useDeviceInfo from '../hooks/useDeviceInfo';

const GameRoutes: React.FC<RouteProps> = () => {
  const device = useDeviceInfo();
  

  if (device === 'Mobile') {
    return <Outlet />;
  }

  return <Navigate to="/no-mobile" replace={true} />;
};

export default GameRoutes;
