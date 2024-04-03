import * as React from 'react'
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import FileOne from './pages/FileOne.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
      path:'/',
      element: <FileOne/>,
    },
    
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
 
)


