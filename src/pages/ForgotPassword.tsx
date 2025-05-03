import { FC } from "react";

import { Input, Button, Form, message } from "antd";

import "../antd.css";
// import { useLocation } from "react-router-dom";
import { publicInstance } from "../config/axios";

const ForgotPassword: FC = () => {
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [verified, setVerified] = useState<null | boolean>(false);
  // const data = location.state || {};

  const onFinish = (value: React.ChangeEvent<HTMLInputElement>) => {
    publicInstance
      .post(`client/auth/forgot-password`, value)
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

  // const handleOk = () => {};

  return (
    <div className="min-h-[100vh] h-auto pt-[100px]">
      {/* <Modal
        title={"Write the code send"}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleAddCancel}
        cancelText={CancelText}
        open={addOpen}
        okText={newItem?.id ? SaveText : AddText}
        width={"600px"}
        okType={"primary"}
        style={{ top: "-50px" }}
        centered
      ></Modal> */}
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
          <Form.Item className="mb-0" name="phoneNumber">
            <Input
              className=" no-spinner h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              // value={"Atamurat"}
              type="number"
              placeholder="Phone number"
            />
          </Form.Item>

          <Form.Item className="mb-0" name="email">
            <Input
              className="h-[56px] text-sm text-inputTextGray"
              style={{
                borderRadius: "0",
              }}
              type="email"
              // value={"Atamurat"}
              placeholder="Email"
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

        <div className="w-[100%] h-[1px] bg-[#D2D2D7] mb-[250px]"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
