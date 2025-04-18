import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import MainLayout from "../layouts/Main";

import Home from "../pages/Home";

const SignIn = lazy(() => import("../pages/SignIn"));
const MyAccount = lazy(() => import("../pages/MyAccount"));
const MyOrders = lazy(() => import("../pages/MyOrders"));
const Configurator = lazy(() => import("../pages/Configurator"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Shop = lazy(() => import("../pages/Shop"));
const BraceletType = lazy(() => import("../pages/BraceletType"));
const Cart = lazy(() => import("../pages/Cart"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Memories = lazy(() => import("../pages/memories/Page"));
const MemoriesStartPage = lazy(() => import("../pages/MemoriesStartPage"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <MainLayout />
        </Suspense>
      ),
      // path: "/",
      children: [
        {
          element: <Home />,
          path: "/home",
        },
        {
          element: <SignIn />,
          path: "/sign-in",
        },
        {
          element: <SignUp />,
          path: "/sign-up",
        },
        {
          element: <MyAccount />,
          path: "/my-account",
        },
        {
          element: <MyOrders />,
          path: "/my-orders",
        },
        {
          element: <AboutUs />,
          path: "/about-us",
        },
        {
          element: <Shop />,
          path: "/shop",
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
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <BraceletType />
        </Suspense>
      ),
      path: "/bracelet-type",
    },
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <Cart />
        </Suspense>
      ),
      path: "/cart",
    },
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <Memories />
        </Suspense>
      ),
      path: "/memories",
    },
    {
      element: (
        <Suspense fallback={<div>loading</div>}>
          <MemoriesStartPage />
        </Suspense>
      ),
      path: "/",
    },
  ]);

  return routes;
}
