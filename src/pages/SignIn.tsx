import { FC, useState } from "react";

import SignInButton from "../components/SignInButton";
import { Input, Button, Form, message } from "antd";

import Google from "../svgs/Google";
import Apple from "../svgs/Apple";

import "../antd.css";
import { publicInstance } from "../config/axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const bigTextClassname =
  "font-play text-[30px] text-brown font-semibold uppercase text-center";

const SignIn: FC = () => {
  const [form] = Form.useForm();
  const [notVerified, setNotVerified] = useState<null | boolean>(null);
  const navigate = useNavigate();

  const onFinish = (value: React.ChangeEvent<HTMLInputElement>) => {
    publicInstance
      .post("client/auth/login", value)
      .then((res) => {
        const decoded: any = jwtDecode(res.data.accessToken);
        localStorage.setItem("user-decoded", JSON.stringify(decoded));
        localStorage.setItem("user-token", JSON.stringify(res.data));
        message.success("Successfully!");
        window.location.href = "/my-account";
      })
      .catch((err) => {
        if (err.response.data.message) {
          if (err.response.data.message == "Client is not verified!") {
            setNotVerified(true);
          }
          return message.error(err.response.data.message);
        }
        message.error("Some error has accured. Please, try again!");
      });
  };

  const onVerifyClick = () => {
    navigate("/forgotPassword");
  };

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[30px] h-[204px]">
        my voloriano <br /> account
      </div>
      <div className="flex flex-col items-center gap-[18px] mt-[60px]">
        <SignInButton icon={<Google />} text="Sign in via Google" />
        <SignInButton icon={<Apple />} text="Sign in via Apple" />
      </div>
      <div className={`${bigTextClassname} my-[30px] `}>or</div>
      <div className={`${bigTextClassname} `}>
        continue with your email address
      </div>
      <div className="w-[50%] mx-auto mt-[30px] bg-beige">
        <p className="text-default font-mulish font-medium text-secondaryBlack">
          Sign in with your email and password or create a profile, if you are
          new
        </p>

        <Form
          form={form}
          layout="vertical"
          className="flex flex-col mt-[12px] gap-[30px]"
          onFinish={onFinish}
        >
          <Form.Item className="mb-0" name="phoneNumber">
            <Input
              className="h-[56px] text-sm"
              style={{
                borderRadius: "0",
              }}
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item className="mb-0" name="email">
            <Input
              className="h-[56px] text-sm"
              style={{
                borderRadius: "0",
              }}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item className="mb-0" name="password">
            <Input.Password
              className="h-[56px] text-sm"
              style={{
                borderRadius: "0",
              }}
              placeholder="Password"
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
              Continue
            </Button>
          </Form.Item>
        </Form>
        {notVerified && (
          <div
            className="text-center mt-[15px] mb-[-10px] bg-beige cursor-pointer hover:opacity-80 hover:underline duration-150 text-luxuryRed"
            onClick={() => navigate("/verify")}
          >
            Verify your account
          </div>
        )}
        <div
          className="text-center my-[30px] bg-beige cursor-pointer hover:opacity-80 hover:underline duration-150"
          onClick={onVerifyClick}
        >
          forgot your password?
        </div>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default SignIn;
