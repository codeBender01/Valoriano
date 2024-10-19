import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import "../antd.css";

const Shop: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] pt-[100px] pb-[80px]">
      <div className="flex flex-col-reverse tablet:flex-row w-[100%] gap-[50px] items-center mb-[144px]">
        <div className="flex flex-col items-center w-[90%] tablet:w-[50%] tablet:min-w-[500px] gap-[25px]">
          <div className="bg-graySquare h-[300px] w-[100%] rounded-md tablet:h-[700px] tablet:rounded-[0px] tablet:w-[100%]"></div>
          <div className="flex items-center gap-6">
            <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-brown rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-luxuryRed rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-white rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
          </div>
          <Button
            style={{
              borderRadius: "0",
            }}
            id="account"
            className="bg-brown text-white h-[56px] px-[105px] font-main font-medium text-normal"
            onClick={() => {
              navigate("/bracelet-type");
            }}
          >
            Go to customization
          </Button>
        </div>
        <div className=" w-[90%] tablet:w-[30%] gap-[30px] flex flex-col">
          <h3 className="font-main font-medium text-lg md:text-xl leading-[48px] ">
            Love bracelet
          </h3>
          <p className="text-sm text-grayP leading-8 font-medium ">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie
            at amet praesent tortor. Maecenas non tempus at consequat ac est
            varius. Tortor aliquet nulla consequat risus. Lorem ipsum dolor sit
            amet consectetur. Sollicitudin morbi molestie at amet praesent
            tortor. Maecenas non tempus at consequat ac est varius. Tortor
            aliquet nulla consequat risus. Lorem ipsum dolor sit amet
            consectetur. Sollicitudin morbi molestie at amet praesent tortor.
            Maecenas non tempus at consequat ac est varius. Tortor aliquet nulla
            consequat risus.
          </p>
        </div>
      </div>

      <div className="flex flex-col tablet:px-[100px] gap-[80px]">
        <div className="flex items-center gap-[10px] tablet:gap-0 tablet:justify-between">
          <div className="w-[50%] h-[400px] bg-graySquare"></div>
          <div className=" w-[40%] tablet:w-[35%] gap-[30px] flex flex-col">
            <h3 className="font-main font-medium text-lg text-right tablet:text-left md:text-xl leading-[48px] ">
              Voloriano for couples
            </h3>
            <p className="text-sm text-grayP leading-8 font-medium text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
              molestie at amet praesent tortor. Maecenas non tempus at consequat
              ac est varius. Tortor aliquet nulla consequat risus.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between px-[26px] tablet:px-0 tablet:flex-row">
          <div className="w-[100%] tablet:w-[35%] gap-[30px] flex flex-col tablet:items-center">
            <h3 className="font-main font-medium text-lg md:text-xl leading-[48px] text-left tablet:text-center">
              Make it individual
            </h3>
            <p className="text-sm text-grayP leading-8 font-medium text-left tablet:text-center">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
              molestie at amet praesent tortor. Maecenas non tempus at consequat
              ac est varius. Tortor aliquet nulla consequat risus.
            </p>
            <div className="hidden items-center gap-6 tablet:flex">
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-brown rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-luxuryRed rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-white rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            </div>
            <Button
              style={{
                borderRadius: "0",
              }}
              id="account"
              className="bg-brown text-white h-[56px] px-[105px] font-main font-medium text-normal hidden tablet:block"
            >
              Go to customization
            </Button>
          </div>
          <div className="flex flex-col w-[100%] items-center gap-[20px] tablet:gap-0 tablet:block tablet:w-[50%]">
            <div className=" w-[100%] h-[340px] mt-[28px] rounded-md tablet:mt-0 tablet:rounded-[0] tablet:h-[560px] bg-graySquare"></div>
            <div className="flex items-center gap-6 tablet:hidden">
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-gold rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-brown rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-luxuryRed rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
              <div className="h-[24px] w-[24px] border-[2px] border-paleGray bg-white rounded-round hover:h-[28px] hover:w-[28px] duration-200"></div>
            </div>
            <Button
              style={{
                borderRadius: "0",
              }}
              id="account"
              className="bg-brown text-white h-[56px] px-[105px] font-main font-medium text-normal block tablet:hidden"
            >
              Go to customization
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between px-[26px] gap-[40px] tablet:gap-0 tablet:flex-row">
          <div className="w-[100%] h-[340px] rounded-md tablet:w-[50%] tablet:h-[400px] bg-graySquare"></div>
          <div className="w-[100%] tablet:w-[35%] gap-[30px] flex flex-col tablet:items-center">
            <h3 className="font-main font-medium text-lg md:text-xl leading-[48px] ">
              Type your name
            </h3>
            <p className="text-sm text-grayP leading-8 font-medium text-left">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi
              molestie at amet praesent tortor. Maecenas non tempus at consequat
              ac est varius. Tortor aliquet nulla consequat risus.
            </p>
            <Button
              style={{
                borderRadius: "0",
              }}
              id="account"
              className="bg-brown text-white h-[56px] w-fit px-[60px] tablet:px-[146px] font-main font-medium text-normal"
            >
              Type here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
