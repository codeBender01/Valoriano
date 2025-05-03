import { FC } from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import ScrollToTop from "../utils/scrollToTop";

const MainLayout: FC = () => {
  return (
    <div className="bg-beige flex flex-col w-[100%] min-h-[100vh]">
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
