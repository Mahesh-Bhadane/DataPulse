import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./lazy-loading";
import MainLayout from "../layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>500 Something went wrong!</h1>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  { path: "*", element: <h1>404 REQUESTED PAGE NOT FOUND!</h1> },
]);

export default routes;
