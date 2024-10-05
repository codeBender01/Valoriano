import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import MainLayout from "../layouts/Main";

import Home from "../pages/Home";

const SignIn = lazy(() => import("../pages/SignIn"));
const MyAccount = lazy(() => import("../pages/MyAccount"));
const MyOrders = lazy(() => import("../pages/MyOrders"));
const Configurator = lazy(() => import("../pages/Configurator"));

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
          element: <SignIn />,
          path: "/sign-in",
        },
        {
          element: <MyAccount />,
          path: "/my-account",
        },
        {
          element: <MyOrders />,
          path: "/my-orders",
        },
      ],
    },
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <Configurator />
        </Suspense>
      ),
      path: "/configurator",
    },
  ]);

  return routes;
}
