import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { SlArrowLeft } from "react-icons/sl";

const BraceletType: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] w-[100%] gap-[28px] px-8 py-[120px]">
      <div
        onClick={() => navigate(-1)}
        className={`absolute left-[5%] top-[5%] flex items-center gap-[10px] text-normal cursor-pointer`}
      >
        <SlArrowLeft />
        Back
      </div>
      <div className="text-md2 text-brown font-main ">
        Please select Bracelet type
      </div>
      <div
        onClick={() => navigate("/configurator", { state: "mobile" })}
        className="cursor-pointer rounded-md bg-graySquare w-[100%] min-h-[260px] hover:opacity-80 duration-100 flex items-center justify-center text-md2 text-brown font-main"
      >
        Couple bracelets image
      </div>
      <div
        onClick={() => navigate("/configurator", { state: "mobile" })}
        className="cursor-pointer rounded-md bg-graySquare w-[100%] min-h-[260px] hover:opacity-80 duration-100 flex items-center justify-center text-md2 text-brown font-main"
      >
        Single bracelets image
      </div>
      <div
        onClick={() => navigate("/configurator", { state: "mobile" })}
        className="cursor-pointer rounded-md bg-graySquare w-[100%] min-h-[260px] hover:opacity-80 duration-100  flex items-center justify-center text-md2 text-brown font-main"
      >
        Family edition
      </div>
    </div>
  );
};

export default BraceletType;
