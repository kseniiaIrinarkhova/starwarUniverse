import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {loader as rootLoader} from './routes/root.jsx'
import Starships from './routes/starships.jsx'
//routes related imports
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import { loader } from './routes/root.jsx'

//create Browser Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children:[
      {
        path: '/starships',
        element: <Starships />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
