import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@routes/Home';
import Header from '@components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@styles/index.scss';
import EventPage from '@components/Events/EventPage';
import Applications from '@routes/Applications';
import Volunteers from '@routes/Volunteers';
import Presence from '@routes/Presence';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'events/:eventId',
    element: <EventPage />,
  },
  {
    path: 'events/:eventId/applications',
    element: <Applications />,
  },
  {
    path: 'events/:eventId/volunteers',
    element: <Volunteers />,
  },
  {
    path: 'events/:eventId/presence',
    element: <Presence />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
