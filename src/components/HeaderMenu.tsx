import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";

import Cart from "../svgs/Cart";

interface HeaderMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const pages = [
  {
    name: "my account",
    path: "/my-account",
  },

  {
    name: "my orders",
    path: "/my-orders",
  },
  {
    name: "wallet",
    path: "/wallet",
  },
  {
    name: "sign out",
    path: "/",
  },
];

const responsivePages = [
  {
    name: "Shop",
    path: "/shop",
    isArrow: true,
  },
  {
    name: "Memories",
    path: "/",
    isArrow: true,
  },
  {
    name: "Make your’s",
    path: "/bracelet-type",
    isArrow: true,
  },
  {
    name: "about us",
    path: "/about-us",
  },
  {
    name: "Delivery",
    path: "/",
  },
  {
    name: "Language",
    path: "/",
    isArrow: true,
  },
];

const HeaderMenu: FC<HeaderMenuProps> = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-brown px-[22px] py-8 md:pl-[80px] md:pr-[20px] md:py-[44px] fixed top-0 left-0 w-[100%] h-[100vh] md:absolute md:w-auto md:top-auto md:h-auto ${
        open
          ? "animate-fade-in opacity-100 visible"
          : "animate-fade-out opacity-0 invisible"
      }`}
    >
      <div className="md:hidden flex items-center justify-between cursor-pointer">
        <div className="text-md3 text-white" onClick={() => setOpen(false)}>
          <IoMdClose />
        </div>
        <h1
          className="text-md2 text-white font-play font-bold cursor-pointer block md:hidden"
          onClick={() => navigate("/")}
        >
          Voloriano
        </h1>
        <div className="text-white text-md3 flex items-center gap-3">
          <div>
            <GoPerson />
          </div>
          <div>
            <Cart stroke="#fff" />
          </div>
        </div>
      </div>
      <ul className="w-[400px] hidden md:flex flex-col gap-[20px]">
        {pages.map((p) => {
          return (
            <li
              key={p.name}
              onClick={() => {
                setOpen(false);
                navigate(p.path);
              }}
              className="flex justify-between items-center uppercase text-white font-semibold font-play text-md2 cursor-pointer hover:mx-[4px] hover:opacity-80 duration-200 py-[12px] w-[100%]"
            >
              {p.name}
              <IoIosArrowForward />
            </li>
          );
        })}
      </ul>

      <ul className="w-[100%] mt-[84px] flex md:hidden flex-col gap-[20px]">
        {responsivePages.map((p) => {
          return (
            <li
              key={p.name}
              onClick={() => {
                setOpen(false);
                navigate(p.path);
              }}
              className="flex justify-between items-center uppercase text-white font-semibold font-play text-md cursor-pointer hover:mx-[4px] hover:opacity-80 duration-200 py-[12px]"
            >
              {p.name}
              {p.isArrow && <IoIosArrowForward />}
            </li>
          );
        })}
      </ul>

      <div className="h-[1px] w-[100%] bg-white mt-[30px] md:hidden"></div>

      <div className="px-[33px] mt-[20px] flex justify-between md:hidden">
        <ul className="flex flex-col gap-2">
          <li className="font-red text-sm text-grayHeaderMenu font-normal cursor-pointer hover:opacity-80 duration-150">
            Contact us
          </li>
          <li className="font-red text-sm text-grayHeaderMenu font-normal cursor-pointer hover:opacity-80 duration-150">
            Where is my order
          </li>
          <li className="font-red text-sm text-grayHeaderMenu font-normal cursor-pointer hover:opacity-80 duration-150">
            YouTube
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-red text-sm text-grayHeaderMenu font-normal cursor-pointer hover:opacity-80 duration-150">
            My account
          </li>
          <li className="font-red text-sm text-grayHeaderMenu font-normal cursor-pointer hover:opacity-80 duration-150">
            Instagram
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
