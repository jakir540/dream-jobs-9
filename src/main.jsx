import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";


import Footer from "./components/Footer/Footer";
import JobDetails from "./JobDetails/JobDetails";
import jobDetailsData from "./loaders/loaders";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=> fetch('Featured.json')
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader:({params}) => jobDetailsData(params.jobId),
        
        
      },

      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
