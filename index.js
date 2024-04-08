import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import First from '../src/Pages/SignIn/SignIn';
import Singapore from './Pages/Singapore';
import India from './Pages/India';
import Europe from './Pages/Europe';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <Register/>,
  },
  {
    path: "/singapore",
    element: <Singapore/>,
},
  {
    path: "/india",
    element: <India/>,
},
  {
    path: "/europe",
    element: <Europe/>,
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();