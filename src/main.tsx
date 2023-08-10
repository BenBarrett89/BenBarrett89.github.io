import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.tsx'
import EuclideanRhythms from './apps/euclidean/EuclideanRhythms.tsx'
import ErrorPage from './ErrorPage.tsx'

import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "euclidean",
    element: <EuclideanRhythms />,
    errorElement: <ErrorPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
