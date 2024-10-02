import { FC } from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const MainLayout: FC = () => {
  return (
    <div className="bg-beige flex flex-col w-[100%] min-h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
