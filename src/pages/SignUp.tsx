import { FC } from "react";

import { Input, Button, Form, message } from "antd";

import "../antd.css";
import { useNavigate } from "react-router-dom";
import { publicInstance } from "../config/axios";

const SignUp: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (value: React.ChangeEvent<HTMLInputElement>) => {
    publicInstance
      .post("client/auth/registration", value)
      .then(() => {
        message.success("Successfully!");
      })
      .catch((err) => {
        if (err.response.data.message) {
          return message.error(err.response.data.message);
        }
        message.error("Some error has accured. Please, try again!");
      });
  };

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[24px] md:text-[30px] h-[204px]">
        my voloriano <br /> account
      </div>

      <div className=" w-[85%] md:w-[50%] mx-auto mt-[60px] bg-beige">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="flex flex-col mt-[12px] gap-[12px]"
        >
          <Form.Item
            className="mb-0"
            name="firstName"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                First name
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"Atamurat"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="lastName"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Last name
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"Bayjikow"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="phoneNumber"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Phone number
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              type="tel"
              value={"+99361511331"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="email"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Email
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"maksat@gmail.com"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="password"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Password
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
            />
          </Form.Item>

          <Form.Item
            className="mb-0"
            name="region"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Country/Region
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"Turkmenistan"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            name="city"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                City
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"Ashgabat"}
            />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              style={{
                borderRadius: "0",
              }}
              id="account"
              className="bg-brown text-white h-[56px] w-[100%] font-main font-medium text-normal"
            >
              Save changes
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center my-[30px] bg-beige">
          Already have an accound?{" "}
          <span
            className="cursor-pointer hover:opacity-80 hover:underline duration-150"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </span>
        </div>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default SignUp;
