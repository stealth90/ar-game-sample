import { createBrowserRouter } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import SplashScreen from '../pages/SplashScreen';
import GameRoutes from './GameRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameRoutes />,
    children: [
      {
        path: '',
        element: <SplashScreen />,
        index: true,
      },
      {
        path: '/tutorial',
        lazy: async () => {
          const Tutorial = (await import('../pages/Tutorial')).default;
          return {
            element: <Tutorial />,
          };
        },
      },
      {
        path: '/countdown',
        lazy: async () => {
          const Countdown = (await import('../pages/Countdown')).default;
          return {
            element: <Countdown />,
          };
        },
      },
      {
        path: '/game',
        lazy: async () => {
          const Game = (await import('../pages/Game')).default;
          return {
            element: <Game />,
          };
        },
      },
      {
        path: '/thank-you',
        lazy: async () => {
          const ThankYou = (await import('../pages/ThankYou')).default;
          return {
            element: <ThankYou />,
          };
        },
      },
    ],
  },
  {
    path: 'no-mobile',
    lazy: async () => {
      const NoMobile = (await import('../pages/NoMobile')).default;
      return {
        element: <NoMobile />,
      };
    },
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);

export default router;
