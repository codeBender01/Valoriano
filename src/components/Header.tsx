import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../svgs/Menu";
import Cart from "../svgs/Cart";
import { GoPerson } from "react-icons/go";

import HeaderMenu from "./HeaderMenu";

const nav = [
  {
    id: 1,
    name: "Configurator",
    path: "/configurator",
  },
  {
    id: 2,
    name: "About",
    path: "/about-us",
  },
  {
    id: 3,
    name: "Contact",
    path: "/",
  },
];

const Header: FC = () => {
  const navigate = useNavigate();

  const [colors, setColors] = useState({
    bgColor: "transparent",
    textColor: "black",
    iconColor: "#292D32",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setColors({
          bgColor: "#271E23",
          textColor: "white",
          iconColor: "white",
        });
        return;
      }

      setColors({
        bgColor: "transparent",
        textColor: "black",
        iconColor: "#292D32",
      });
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      className={`w-[100%] fixed z-30 duration-200`}
      style={{
        backgroundColor: colors.bgColor,
      }}
    >
      <div className="w-[92%] mx-auto py-[42px] flex justify-between">
        <div className="flex items-center gap-[30px]">
          <div className="relative">
            <Menu
              onClick={() => setMenuOpen(!menuOpen)}
              stroke={colors.iconColor}
            />
            <HeaderMenu open={menuOpen} setOpen={setMenuOpen} />
          </div>
          <h1
            className="text-md2 font-play font-bold cursor-pointer hidden md:block"
            style={{
              color: colors.textColor,
            }}
            onClick={() => navigate("/")}
          >
            Voloriano
          </h1>
        </div>

        <h1
          className="text-md2 font-play font-bold cursor-pointer block md:hidden"
          style={{
            color: colors.textColor,
          }}
          onClick={() => navigate("/")}
        >
          Voloriano
        </h1>

        <nav className="gap-11 items-center hidden md:flex">
          {nav.map((n) => {
            return (
              <div
                className="font-normal text-default cursor-pointer hover:opacity-65 duration-150"
                key={n.id}
                style={{
                  color: colors.textColor,
                }}
                onClick={() => navigate(n.path)}
              >
                {n.name}
              </div>
            );
          })}
        </nav>
        <div className="flex gap-[30px] items-center">
          <div
            onClick={() => navigate("/my-account")}
            className="font-mulish text-sm items-center gap-2 cursor-pointer hover:opacity-85 duration-100 flex"
            style={{
              color: colors.textColor,
            }}
          >
            <GoPerson size={24} />
            <span className="font-mulish text-sm hidden md:inline">
              My Account
            </span>
          </div>
          <div onClick={() => navigate("/cart")}>
            <Cart stroke={colors.iconColor} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
