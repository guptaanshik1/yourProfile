import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import HomePage from "../module/Layout/HomePage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/detail-1",
      },
      {
        path: "detail-2",
      },
      {
        path: "detail-pic",
      },
    ],
  },
]);
