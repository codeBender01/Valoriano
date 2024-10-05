import { FC, useState } from "react";

import bracelet from "../assets/bracelet1.png";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "../configurator.css";

const Configurator: FC = () => {
  const [fadeInAdd, setFadeInAdd] = useState(false);
  const [steps, setSteps] = useState({
    introduction: true,
    stone: false,
    engraving: false,
    symbol: false,
    bandColor: false,
  });

  return (
    <div className="w-[100%] h-[100vh] max-h-[100vh] flex flex-col items-center pt-[88px] relative">
      <div
        className={`absolute left-[5%] top-[5%] flex items-center gap-[10px] text-normal popup cursor-pointer ${
          fadeInAdd ? "show" : null
        }`}
      >
        <SlArrowLeft />
        Back
      </div>
      <div
        className={`absolute right-[5%] bottom-[5%] flex items-center gap-[10px] text-normal popup cursor-pointer ${
          fadeInAdd ? "show" : null
        }`}
        onClick={() => {
          if (steps.stone) {
            setSteps({
              ...steps,
              stone: false,
              engraving: true,
            });
          }
          if (steps.engraving) {
            setSteps({
              ...steps,
              stone: false,
              engraving: false,
              symbol: true,
            });
          }
          if (steps.symbol) {
            setSteps({
              ...steps,
              bandColor: true,
              symbol: false,
            });
          }
        }}
      >
        {steps.stone
          ? "Continue"
          : steps.engraving
          ? "Continue without engrave"
          : steps.symbol
          ? "Continue without symbol"
          : steps.bandColor
          ? "Finish"
          : null}
        <SlArrowRight />
      </div>

      <div>
        <img src={bracelet} alt="" />
      </div>
      <div
        className={`flex flex-col items-center gap-[6px] popup ${
          steps.introduction ? "show" : "hidden"
        }`}
      >
        <div className="text-md2 font-main font-medium text-black">
          Configure your
        </div>
        <div className="text-[30px] font-bold font-main text-black">
          Voloriano bracelet
        </div>
        <div className="flex items-center gap-[40px]">
          <div
            onClick={() => {
              setFadeInAdd(true);
              setSteps({
                ...steps,
                stone: true,
                introduction: false,
              });
            }}
            className="font-normal text-black text-md2 cursor-pointer hover:opacity-60 duration-200"
          >
            Single
          </div>
          <div
            onClick={() => {
              setFadeInAdd(true);
              setSteps({
                ...steps,
                stone: true,
                introduction: false,
              });
            }}
            className="font-normal text-black text-md2 cursor-pointer hover:opacity-60 duration-200"
          >
            For couples
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.stone ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black">
          Choose stone
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col items-center cursor-pointer">
            <div className="h-[24px] w-[24px] border-[4px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            <div className="font-normal text-sm text-black">Gold</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div className="h-[24px] w-[24px] border-[4px] border-paleGray bg-silver rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            <div className="font-normal text-sm text-black">Silver</div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.engraving ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black">
          Add engraving
        </div>
        <input
          type="text"
          className="border-b-[1px] border-[#828282] outline-none text-center font-mulish w-[320px] py-[6px]"
          placeholder="Engrave text"
        />
      </div>

      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.symbol ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black">
          Select symbol
        </div>
        <div className="flex items-center flex-wrap gap-6 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center cursor-pointer w-[15%]"
              >
                <div className="h-[24px] w-[24px] border-[4px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
                <div className="font-normal text-sm text-black">Gold</div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.bandColor ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black">
          Choose band color
        </div>
        <div className="flex items-center flex-wrap gap-6 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center cursor-pointer w-[15%]"
              >
                <div className="h-[24px] w-[24px] border-[4px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
                <div className="font-normal text-sm text-black">Gold</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
