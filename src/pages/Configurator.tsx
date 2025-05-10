import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "antd";

import bracelet from "../assets/bracelet1.png";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "../configurator.css";
import "../antd.css";

type Key = "stone" | "engraving" | "symbol" | "bandColor";

const colors = [
  "#E1AD00",
  "#0031E1",
  "#174735",
  "#00B8E1",
  "#747474",
  "#00DB89",
  "#B400E1",
  "#000000",
];

const Configurator: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [fadeInAdd, setFadeInAdd] = useState(state === "mobile" ? true : false);
  const [steps, setSteps] = useState({
    introduction: state === "mobile" ? false : true,
    stone: state === "mobile" ? true : false,
    engraving: false,
    symbol: false,
    bandColor: false,
  });
  const [mobileActiveText, setMobileActiveText] = useState<Key>("stone");
  const [progress, setProgress] = useState(1);
  const [info, setInfo] = useState({
    introduction: "",
    stone: "",
    engraving: "",
    symbol: "",
    bandColor: "",
  });
  const [engraveText, setEngraveText] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const options = {
    stone: "Choose stone",
    engraving: "Add engraving",
    symbol: "Select symbol",
    bandColor: "Choose band color",
  };

  if (steps.introduction && state === "mobile") {
    return null;
  }

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const data: any = localStorage.getItem("product-info");
    const jsonData = JSON.parse(data);
    jsonData !== null && setProducts(jsonData);
  }, []);

  useEffect(() => {
    const data: any = localStorage.getItem("user-token");
    const jsonData = JSON.parse(data);
    jsonData == null && setIsLogin(true);
  }, []);

  return (
    <div className="w-[100%] h-[100vh] max-h-[100vh] flex flex-col items-center justify-center mobile:justify-start mobile:pt-[88px] relative">
      <div
        className={`absolute left-[5%] top-[5%] flex items-center gap-[10px] text-normal cursor-pointer`}
        onClick={() => {
          if (steps.introduction || state) {
            navigate(-1);
          } else if (steps.stone) {
            setSteps({
              ...steps,
              stone: false,
              introduction: true,
            });
          } else if (steps.engraving) {
            setSteps({
              ...steps,
              stone: true,
              engraving: false,
            });
            setMobileActiveText("stone");
            setProgress(1);
          } else if (steps.symbol) {
            setSteps({
              ...steps,
              symbol: false,
              engraving: true,
            });
            setMobileActiveText("engraving");
            setProgress(2);
          } else if (steps.bandColor) {
            setSteps({
              ...steps,
              bandColor: false,
              symbol: true,
            });
            setMobileActiveText("symbol");
            setProgress(3);
          }
        }}
      >
        <SlArrowLeft />
        Back
      </div>
      <div className="absolute right-[5%] top-[5%] mobile:hidden">
        {progress}/4
      </div>
      <div
        className={`absolute right-[5%] bottom-[5%] items-center gap-[10px] text-normal popup cursor-pointer hidden mobile:flex ${
          fadeInAdd ? "show" : null
        }`}
        onClick={() => {
          if (steps.bandColor) {
            // products &&
            //   products.forEach((element) => {
            //     if (element.options == info) {
            //       element.count++;
            //     }
            //   });
            localStorage.setItem(
              "product-info",
              JSON.stringify([
                ...products,
                {
                  id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
                  name: "Love Brocelet №1",
                  price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
                  options: info,
                },
              ])
            );

            if (isLogin) {
              navigate("/cart");
            } else {
              navigate("/sign-in");
            }
          }
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
      <div className="font-medium text-black">Love bracelet №1</div>
      <div className="text-[30px] font-bold font-main text-black mobile:hidden">
        {options[mobileActiveText]}
      </div>
      <div className="w-[340px] h-[260px] mb-20 mobile:mb-0 mobile:w-auto mobile:h-auto">
        <img src={bracelet} alt="" className="object-cover" />
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
              setInfo({ ...info, introduction: "Single" });
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
              setInfo({ ...info, introduction: "Couple" });
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
        <div className="text-[30px] font-bold font-main text-black hidden mobile:block">
          Choose stone
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col items-center cursor-pointer">
            <div
              onClick={() => {
                setSteps({ ...steps, stone: false, engraving: true });
                setMobileActiveText("engraving");
                setProgress(2);
                setInfo({ ...info, stone: "Gold" });
              }}
              className="h-[24px] w-[24px] border-[4px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"
            ></div>
            <div className="font-normal text-sm text-black">Gold</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <div
              onClick={() => {
                setSteps({ ...steps, stone: false, engraving: true });
                setMobileActiveText("engraving");
                setProgress(2);
                setInfo({ ...info, stone: "Silver" });
              }}
              className="h-[24px] w-[24px] border-[4px] border-paleGray bg-silver rounded-round hover:h-[28px] hover:w-[28px] duration-200"
            ></div>
            <div className="font-normal text-sm text-black">Silver</div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.engraving ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black hidden mobile:block">
          Add engraving
        </div>
        <input
          type="text"
          className="border-b-[1px] border-[#828282] outline-none text-center font-mulish w-[320px] py-[6px]"
          placeholder="Engrave text"
          onChange={(e) => setEngraveText(e.target.value)}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              setSteps({
                ...steps,
                stone: false,
                engraving: false,
                symbol: true,
              });
              setMobileActiveText("symbol");
              setProgress(3);
              setInfo({ ...info, engraving: engraveText });
            }
          }}
        />
      </div>

      <div
        className={`flex flex-col items-center gap-[10px] popup ${
          steps.symbol ? "show" : "h-0"
        }`}
      >
        <div className="text-[30px] font-bold font-main text-black hidden mobile:block">
          Select symbol
        </div>
        <div className="hidden items-center flex-wrap gap-6 justify-center mobile:flex">
          {["Gold", "Silver", "Brown"].map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center cursor-pointer w-[15%]"
                onClick={() => {
                  setSteps({
                    ...steps,
                    bandColor: true,
                    symbol: false,
                  });
                  setMobileActiveText("bandColor");
                  setProgress(4);
                  setInfo({ ...info, symbol: el });
                }}
              >
                <div
                  className={`h-[24px] w-[24px] border-[4px] border-paleGray bg-${el.toLocaleLowerCase()} rounded-round hover:h-[28px] hover:w-[28px] duration-200`}
                ></div>
                <div className="font-normal text-sm text-black">{el}</div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center flex-wrap gap-6 justify-center mobile:hidden">
          {["Gold", "Silver", "Brown"].map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center cursor-pointer w-[15%]"
                onClick={() => {
                  setSteps({
                    ...steps,
                    bandColor: true,
                    symbol: false,
                  });
                  setMobileActiveText("bandColor");
                  setProgress(4);
                }}
              >
                <div
                  className={`h-[24px] w-[24px] border-[4px] border-paleGray bg-${el.toLocaleLowerCase()} rounded-round hover:h-[28px] hover:w-[28px] duration-200`}
                ></div>
                <div className="font-normal text-sm text-black">{el}</div>
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
        <div className="text-[30px] font-bold font-main text-black hidden mobile:block">
          Choose band color
        </div>
        <div className="flex items-center flex-wrap gap-6 justify-center">
          {colors.map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center cursor-pointer w-[15%]"
                onClick={() => {
                  setInfo({ ...info, bandColor: el });
                }}
              >
                <div
                  style={{
                    backgroundColor: el,
                  }}
                  className={`h-[24px] w-[24px] border-[4px] border-paleGray rounded-round hover:scale-125 duration-200 ${
                    info.bandColor == el && "scale-125"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        style={{
          borderRadius: "0",
        }}
        id="account"
        className="bg-brown text-white h-[56px] px-[105px] font-main font-medium text-normal mt-8 block mobile:hidden"
        onClick={() => {
          if (steps.stone) {
            setSteps({
              ...steps,
              stone: false,
              engraving: true,
            });
            setMobileActiveText("engraving");
            setProgress(2);
          }
          if (steps.engraving) {
            setSteps({
              ...steps,
              stone: false,
              engraving: false,
              symbol: true,
            });
            setMobileActiveText("symbol");
            setProgress(3);
          }
          if (steps.symbol) {
            setSteps({
              ...steps,
              bandColor: true,
              symbol: false,
            });
            setMobileActiveText("bandColor");
            setProgress(4);
          }
          if (steps.bandColor) {
            localStorage.setItem(
              "product-info",
              JSON.stringify([
                ...products,
                {
                  id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
                  name: "Love Brocelet №1",
                  price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
                  options: info,
                },
              ])
            );
            if (isLogin) {
              navigate("/cart");
            } else {
              navigate("/sign-in");
            }
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
      </Button>
    </div>
  );
};

export default Configurator;
