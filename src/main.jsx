import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import OurMenu from "./Pages/Home/OurMenu/OurMenu.jsx";
import OurShop from "./Pages/Home/OurShop/OurShop.jsx";
import Contact from "./Pages/Home/ContactUs/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/OurMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/OurShop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/ContactUs",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
