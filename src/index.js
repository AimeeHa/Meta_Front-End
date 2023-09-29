import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Booking from './Booking';
import { Main } from './Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // home page
  },
  {
    path: '/booking',
    element: <Booking />,
  },
  {
    path: '/confirmed',
    element: <ConfirmedBooking />,
  },
]);

root.render(
  <React.StrictMode>
    <Main>
      <RouterProvider router={router} />
    </Main>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
