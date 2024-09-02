import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";

export default function Router() {
  const routes = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
  ]);

  return routes;
}
