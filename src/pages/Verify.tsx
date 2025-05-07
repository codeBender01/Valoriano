import { FC, useEffect, useState } from "react";

import { Input, Button, Form, message } from "antd";

import "../antd.css";
import { useLocation } from "react-router-dom";
import { publicInstance } from "../config/axios";

const VerifyAccount: FC = () => {
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  const location = useLocation();
  const [verified, setVerified] = useState<null | boolean>(false);
  const data = location.state || {};
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

  const onFinish = (value: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    publicInstance
      .patch(`client/auth/${data?.clientId}/verify-phone`, {
        verificationPhoneNumberCode: "123456",
      })
      .then(() => {
        message.success("Successfully!");
        window.location.href = "/sign-in";
      })
      .catch((err) => {
        if (err.response.data.message) {
          return message.error(err.response.data.message);
        }
        message.error("Some error has accured. Please, try again!");
      });
  };

  const handleVerifyLink = () => {
    publicInstance
      .post("client/auth/resend-link", { email: userInfo?.email })
      .then((res) => {
        if (res.status == 200) {
          setVerified(true);
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          message.error(err.response.data.message);
        }
        message.error("Some error has accured. Please, try again!");
      });
  };

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[24px] md:text-[30px] h-[204px]">
        verify your <br /> account
      </div>

      <div className=" w-[85%] md:w-[50%] mx-auto mt-[60px] bg-beige">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="flex flex-col mt-[12px] gap-[12px]"
        >
          <Form.Item className="mb-0" name="verificationPhoneNumberCode">
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              // value={"Atamurat"}
              placeholder="Verification code"
            />
          </Form.Item>

          <div
            className={`text-[16px] hover:underline cursor-pointer w-fit uppercase ${
              verified && "!text-lightGreen"
            }`}
            onClick={() => handleVerifyLink()}
          >
            {verified ? "Email verified!" : "Email verification url"}
          </div>

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

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default VerifyAccount;
