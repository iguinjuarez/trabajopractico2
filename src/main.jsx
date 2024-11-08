import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Alumn from "./routes/alumn";
import Init from "./routes/init";
import NewAlumn from "./routes/newAlumn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "alumnos",
        element: <Alumn />,
      },
      {
        path: "/",
        element: <Init />,
      },
      {
        path: "alumnos/agregaralumno",
        element: <NewAlumn />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);