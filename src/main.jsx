import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import router from './RouteFile/Route.jsx'
import AuthProvider from './Firebase/AuthProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>,
)
