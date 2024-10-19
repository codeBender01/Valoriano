import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Form } from "antd";

import "../antd.css";

const MyOrders: FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[24px] md:text-[30px] h-[204px]">
        CHECK YOUR <br />
        ORDER
      </div>

      <div className="w-[90%] md:w-[50%] mx-auto mt-[60px] bg-beige">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col mt-[12px] gap-[12px]"
        >
          <Form.Item
            className="mb-0"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Order name
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              placeholder="Enter order number"
            />
          </Form.Item>
          <div className="text-center text-[30px] uppercase font-semibold">
            or
          </div>

          <Form.Item className="mb-0">
            <Button
              // type="submit"
              style={{
                borderRadius: "0",
              }}
              onClick={() => navigate("/sign-in")}
              id="account"
              className="bg-brown text-white h-[56px] w-[100%] font-main font-medium text-normal"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px] mt-6"></div>
      </div>
    </div>
  );
};

export default MyOrders;
