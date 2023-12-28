import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = (): JSX.Element => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
