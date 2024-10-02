import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../svgs/Menu";
import Cart from "../svgs/Cart";
import { GoPerson } from "react-icons/go";

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

  return (
    <header className="w-[100%]">
      <div className="w-[92%] mx-auto py-[42px] flex justify-between">
        <div className="flex items-center gap-[30px]">
          <Menu />
          <h1 className="text-md2 font-play text-black font-bold">Valoriano</h1>
        </div>

        <nav className="flex gap-11 items-center">
          {nav.map((n) => {
            return (
              <div
                className="font-normal text-default text-black cursor-pointer hover:opacity-65 duration-150"
                key={n.id}
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
          >
            <GoPerson size={24} />
            My Account
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
