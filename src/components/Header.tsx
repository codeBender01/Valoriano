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
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
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
            className="text-md2 font-pla font-bold"
            style={{
              color: colors.textColor,
            }}
          >
            Valoriano
          </h1>
        </div>

        <nav className="flex gap-11 items-center">
          {nav.map((n) => {
            return (
              <div
                className="font-normal text-default cursor-pointer hover:opacity-65 duration-150"
                key={n.id}
                style={{
                  color: colors.textColor,
                }}
              >
                {n.name}
              </div>
            );
          })}
        </nav>
        <div className="flex gap-[30px] items-center">
          <div
            onClick={() => navigate("/my-account")}
            className="font-mulish text-sm flex items-center gap-2 cursor-pointer hover:opacity-85 duration-100"
            style={{
              color: colors.textColor,
            }}
          >
            <GoPerson size={24} />
            My Account
          </div>
          <Cart stroke={colors.iconColor} />
        </div>
      </div>
    </header>
  );
};

export default Header;
