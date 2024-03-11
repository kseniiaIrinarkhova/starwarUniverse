import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import Starships from './routes/starships.jsx'
import Starship from './routes/starship.jsx'
//routes related imports
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

//create Browser Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/starships',
        element: <Starships />,
        loader: Starships.loader,
        children:[
          {
            path: '/starships/:shipId',
            element: <Starship />,
            loader: Starship.loader,
          }
        ],

      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
