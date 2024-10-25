import { FC } from "react";

import { Button } from "antd";

import { useNavigate } from "react-router-dom";

import { SlArrowLeft } from "react-icons/sl";

const MemoriesStartPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-[100vh] w-[100%]">
      <div
        onClick={() => navigate(-1)}
        className={`absolute left-[5%] top-[5%] flex items-center gap-[10px] text-normal cursor-pointer`}
      >
        <SlArrowLeft />
        Back
      </div>
      <div className="w-[70%] flex flex-col items-center gap-4">
        <h1 className="font-main font-bold text-[30px] text-black">
          Voloriano
        </h1>
        <Button
          style={{
            borderRadius: "0",
          }}
          id="account"
          className="bg-brown text-white h-[42px] w-[100%] font-main font-medium text-[12px]"
          onClick={() => {
            navigate("/memories");
          }}
        >
          Start your memories
        </Button>
      </div>
    </div>
  );
};

export default MemoriesStartPage;
