import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTea from './Components/AddTea.jsx';
import UpdateTea from './Components/UpdateTea.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/tea'),
  },
  {
    path: '/addTea',
    element: <AddTea></AddTea>,

  },
  {
    path: '/updateTea/:id',
    element: <UpdateTea></UpdateTea>,
    loader:({params})=>fetch(`http://localhost:5000/tea/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><App></App></RouterProvider>
  </React.StrictMode>,
)
