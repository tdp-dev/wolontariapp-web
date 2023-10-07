import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@routes/Home';
import Settings from '@routes/Settings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'settings/',
    element: <Settings />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
