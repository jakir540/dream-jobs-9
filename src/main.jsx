import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { categorydata } from "./loaders/loaders";
import Footer from "./components/Footer/Footer";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [

//       {
//         path: "/",
//         element: <Home></Home>,
//         loader:categorydata,
//       },
//       {
//         path: "/",
//         element: <Feature></Feature>,
//         loader:()=> fetch('Featured.json')
//       },

//       {
//         path: "statistics",
//         element: <Statistics></Statistics>,
//       },
//       {
//         path: "applied jobs",
//         element: <AppliedJobs></AppliedJobs>,
//       },
//       {
//         path: "blogs",
//         element: <Blogs></Blogs>,
//       },
//     ],
//   },
// ]);

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
