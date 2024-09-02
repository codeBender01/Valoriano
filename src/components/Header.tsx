import { FC } from "react";

import Menu from "../svgs/Menu";
import Cart from "../svgs/Cart";

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
  return (
    <header className="w-[100%]">
      <div className="w-[92%] mx-auto py-[42px] flex justify-between">
        <h1 className="text-md2 font-play text-black font-bold">Valoriano</h1>

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
        <div className="flex gap-[33px]">
          <Cart />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
