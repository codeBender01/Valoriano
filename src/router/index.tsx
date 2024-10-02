import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import MainLayout from "../layouts/Main";

import Home from "../pages/Home";

const MyAccount = lazy(() => import("../pages/MyAccount"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <MainLayout />
        </Suspense>
      ),
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <MyAccount />,
          path: "/my-account",
        },
      ],
    },
  ]);

  return routes;
}
