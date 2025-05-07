import { FC, useEffect, useState } from "react";

import { Input, Button, Form } from "antd";

import "../antd.css";

const MyAccount: FC = () => {
  const [form] = Form.useForm();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) {
      try {
        const jsonData = JSON.parse(data);
        setUserInfo(jsonData);
      } catch (error) {
        console.error("Failed to parse user-info:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[24px] md:text-[30px] h-[204px]">
        Welcome back <br />
        {userInfo?.firstName}
      </div>

      <div className=" w-[85%] md:w-[50%] mx-auto mt-[60px] bg-beige">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col mt-[12px] gap-[12px]"
        >
          <Form.Item
            className="mb-0"
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
              value={userInfo?.firstName}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
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
              value={userInfo?.lastName}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Phone Number
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={userInfo?.phoneNumber}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
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
              value={userInfo?.email}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
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
              value={userInfo?.country}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
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
              value={userInfo?.city}
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
              Save changes
            </Button>
          </Form.Item>
        </Form>
        <div
          className="text-center my-[30px] bg-beige cursor-pointer hover:opacity-80 hover:underline duration-150"
          onClick={() => {
            localStorage.removeItem("user-token");
            window.location.href = "/sign-in";
          }}
        >
          Deactivate Account
        </div>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default MyAccount;
