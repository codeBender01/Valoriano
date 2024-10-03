import { FC } from "react";

import SignInButton from "../components/SignInButton";
import { Input, Button, Form } from "antd";

import Google from "../svgs/Google";
import Apple from "../svgs/Apple";

import "../antd.css";

const bigTextClassname =
  "font-play text-[30px] text-brown font-semibold uppercase text-center";

const SignIn: FC = () => {
  const [form] = Form.useForm();

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
        >
          <Form.Item className="mb-0">
            <Input
              className="h-[56px] text-sm"
              style={{
                borderRadius: "0",
              }}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item className="mb-0">
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
              // type="submit"
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
        <div className="text-center my-[30px] bg-beige cursor-pointer hover:opacity-80 hover:underline duration-150">
          forgot your password?
        </div>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default SignIn;
