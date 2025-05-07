import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import MainLayout from "../layouts/Main";

import Loading from "../components/Loading";

const SignIn = lazy(() => import("../pages/SignIn"));
const MyAccount = lazy(() => import("../pages/MyAccount"));
const MyOrders = lazy(() => import("../pages/MyOrders"));
const Configurator = lazy(() => import("../pages/Configurator"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const BraceletType = lazy(() => import("../pages/BraceletType"));
const Cart = lazy(() => import("../pages/Cart"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Memories = lazy(() => import("../pages/memories/Page"));
const VerifyAccount = lazy(() => import("../pages/Verify"));
const MemoriesStartPage = lazy(() => import("../pages/MemoriesStartPage"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const OrderedDetail = lazy(() => import("../pages/OrderedDetail"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<Loading />}>
          <MainLayout />
        </Suspense>
      ),
      // path: "/",
      children: [
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
          path: "/home",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <OrderedDetail />
            </Suspense>
          ),
          path: "/ordered-detail",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <ForgotPassword />
            </Suspense>
          ),
          path: "/forgotPassword",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          ),
          path: "/sign-in",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          ),
          path: "/sign-up",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <VerifyAccount />
            </Suspense>
          ),
          path: "/verify",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <MyAccount />
            </Suspense>
          ),
          path: "/my-account",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <MyOrders />
            </Suspense>
          ),
          path: "/my-orders",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          ),
          path: "/about-us",
        },
        {
          element: (
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          ),
          path: "/shop",
        },
      ],
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          <Configurator />
        </Suspense>
      ),
      path: "/configurator",
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          <BraceletType />
        </Suspense>
      ),
      path: "/bracelet-type",
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          <Cart />
        </Suspense>
      ),
      path: "/cart",
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          <Memories />
        </Suspense>
      ),
      path: "/memories",
    },
    {
      element: (
        <Suspense fallback={<Loading />}>
          <MemoriesStartPage />
        </Suspense>
      ),
      path: "/",
    },
  ]);

  return routes;
}
