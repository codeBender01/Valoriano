import { FC, ReactElement } from "react";

interface SignInButton {
  icon?: ReactElement;
  text: string;
}

const SignInButton: FC<SignInButton> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center text-md2 text-brown gap-6 cursor-pointer hover:text-white hover:bg-brown duration-150 border-[2.3px] border-borderBlack w-[350px] py-[12px]">
      {icon}
      {text}
    </div>
  );
};

export default SignInButton;
