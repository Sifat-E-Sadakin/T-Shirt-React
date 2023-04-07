import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import { data } from './DataLoader/DataLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
      // {
      //   path: "/",
      //   element: <Header></Header>,
      // },
      {
        path: '/',
        element: <Home></Home>,
        loader: data
      },
      {
        path : '/orderReview',
        element: <Order></Order>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
