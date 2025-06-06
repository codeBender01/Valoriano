import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import { SlArrowLeft } from "react-icons/sl";
import { GrTrash } from "react-icons/gr";

import bracelet1 from "../assets/bracelet1.png";

import "../antd.css";

const Cart: FC = () => {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let a = 0;
    productInfo.forEach((item) => (a = a + item.price));
    setSum(a);
  }, [productInfo]);

  useEffect(() => {
    const data: any = localStorage.getItem("user-token");
    const jsonData = JSON.parse(data);
    jsonData == null && navigate("/sign-up");
  }, []);

  useEffect(() => {
    const data: any = localStorage.getItem("product-info");
    const jsonData = JSON.parse(data);
    jsonData !== null && setProductInfo(jsonData);
  }, []);

  const handleDelete = (id: any) => {
    const data = productInfo.filter((item) => item.id !== id);
    setProductInfo(data);
    localStorage.setItem("product-info", JSON.stringify(data));
  };

  return (
    <div className="relative  min-h-[100vh] w-[100%] px-10 py-[120px]">
      <div
        onClick={() => navigate(-1)}
        className={`absolute left-[5%] top-[5%] flex items-center gap-[10px] text-normal cursor-pointer`}
      >
        <SlArrowLeft />
        Back
      </div>

      <div className="font-bold font-main text-lg mb-[28px]">Cart</div>

      <div className="flex flex-col gap-[28px] md:flex-row md:flex-wra">
        <div className="w-[100%] flex flex-col gap-6 md:w-[50%]">
          {productInfo.map((item) => (
            <div className="flex items-center w-[100%] gap-4">
              <div className="bg-graySquare h-[90px] w-[90px]">
                <img src={bracelet1} alt="" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-normal font-bold font-main text-black">
                    {item.name}
                  </div>
                  <div className="text-normal font-bold font-main text-black">
                    {item.price}$
                  </div>
                  <div
                    className="p-[7px] cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <GrTrash />
                  </div>
                </div>
                <Button
                  style={{
                    borderRadius: "0",
                  }}
                  id="account"
                  className="bg-brown text-white h-[31px] w-[100%] font-main font-medium text-[12px] mt-[26px]"
                  onClick={() => {
                    navigate("/ordered-detail", { state: item });
                  }}
                >
                  View order details
                </Button>
              </div>
            </div>
          ))}
          <div className="hidden items-center justify-between md:flex">
            <span className="uppercase text-normal font-main font-normal">
              Total
            </span>
            <span className="text-normal font-bold font-main text-black">
              {sum}$
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[120px] md:hidden">
          <span className="uppercase text-normal font-main font-normal">
            Total
          </span>
          <span className="text-normal font-bold font-main text-black">
            {sum}$
          </span>
        </div>
        <div className="flex flex-col md:w-[45%] md:self-end">
          <Button
            style={{
              borderRadius: "0",
            }}
            id="account"
            className="bg-brown text-white h-[42px] w-[100%] font-main font-medium text-[12px]"
            onClick={() => {
              navigate("/home");
            }}
          >
            Purchase now
          </Button>
          <div className="text-center flex items-center justify-center cursor-pointer h-[42px] font-main font-medium text-[13px] hover:opacity-80 hover:underline duration-150">
            Continue shopping
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
