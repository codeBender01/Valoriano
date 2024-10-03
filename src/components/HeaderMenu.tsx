import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

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

const HeaderMenu: FC<HeaderMenuProps> = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-brown px-[94px] py-[44px] absolute ${
        open
          ? "animate-fade-in opacity-100 visible"
          : "animate-fade-out opacity-0 collapse"
      }`}
    >
      <ul className="w-[400px] flex flex-col gap-[20px]">
        {pages.map((p) => {
          return (
            <li
              key={p.name}
              onClick={() => {
                setOpen(false);
                navigate(p.path);
              }}
              className="flex justify-between items-center uppercase text-white font-semibold font-play text-md2 cursor-pointer hover:mx-[4px] hover:opacity-80 duration-200 py-[12px]"
            >
              {p.name}
              <IoIosArrowForward />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
