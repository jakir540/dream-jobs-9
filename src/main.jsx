import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'applied jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
    ]
  },  
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
