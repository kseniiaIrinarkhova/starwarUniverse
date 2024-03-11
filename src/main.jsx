import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import Starships from './routes/starships.jsx'
import Starship from './routes/starship.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Index from './routes/index.jsx'

//create Browser Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element:<Index/>},
      {
        path: '/starships',
        element: <Starships />,
        loader: Starships.loader, //loader function with useEffect under the hood
        children:[
          { index: true, element: <Index /> },
          {
            path: '/starships/:shipId',
            element: <Starship />,
            loader: Starship.loader, //loader function with useEffect under the hood
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
