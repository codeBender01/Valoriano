import { FC } from "react";

import { Input, Button, Form } from "antd";

import "../antd.css";

const MyAccount: FC = () => {
  const [form] = Form.useForm();

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      <div className="w-[100%] bg-brown flex items-center justify-center text-center text-white uppercase font-semibold text-[30px] h-[204px]">
        Welcome back <br />
        Atamurat
      </div>

      <div className="w-[50%] mx-auto mt-[60px] bg-beige">
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
              value={"Atamurat"}
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
              value={"Bayjikow"}
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
              value={"Ashgabat"}
            />
          </Form.Item>
          <Form.Item
            className="mb-0"
            label={
              <div className="font-mulish font-medium text-default text-secondaryBlack">
                Date of birth
              </div>
            }
          >
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              value={"27.12.03"}
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
        <div className="text-center my-[30px] bg-beige cursor-pointer hover:opacity-80 hover:underline duration-150">
          Deactivate Account
        </div>

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default MyAccount;
