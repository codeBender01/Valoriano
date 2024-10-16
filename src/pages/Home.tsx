import { FC } from "react";

import ring1 from "../assets/ring1.png";
import ring2 from "../assets/ring2.png";
import bracelet from "../assets/bracelet1.png";
import ring3 from "../assets/ring3.png";

const Home: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-[92%] max-w-[1440px] z-10 mx-auto gap-[10px] relative pt-[100px] lg:flex-row lg:items-start lg:gap-[50px]">
        <div className="h-[250px] w-[90%] lg:w-[55%] md:w-[70%] lg:h-[480px]">
          <img src={ring1} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="w-[100%] flex flex-col gap-6 mt-0 lg:mt-[90px] lg:w-[35%]">
          <h3 className="font-main font-medium text-lg leading-[48px]">
            Our Story
          </h3>
          <p className="text-sm text-grayP leading-8 font-medium">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie
            at amet praesent tortor. Maecenas non tempus at consequat ac est
            varius. Tortor aliquet nulla consequat risus.
          </p>
        </div>

        <div className="lg:bottom-[-5%]  lg:left-[45%] md:left-[75%] left-[64%] rounded-round flex items-center justify-center absolute translate-y-[-50%] bottom-[-45%] text-default text-center border-borderGray border-[1px] font-medium underline text-textGray w-[145px] h-[145px]">
          Explore <br /> Story
        </div>
      </div>
      <div className="w-[96%] bg-beige hidden pl-[80px] gap-[130px] items-center lg:flex">
        <div className="w-[55%] flex flex-col gap-[70px] mt-[-100px]">
          <h2 className="font-medium text-black text-[74px]">
            Create your own design
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-[40%]">
              <div className="font-semibold text-md2 text-black">Gold</div>
              <p className="font-normal text-black text-sm">
                Her prevision acuteness had two why intention
              </p>
            </div>
            <div className="flex flex-col gap-4 w-[40%]">
              <div className="font-semibold text-md2 text-black">Silver</div>
              <p className="font-normal text-black text-sm">
                Her prevision acuteness had two why intention
              </p>
            </div>
          </div>
        </div>
        <div className="h-[550px] mt-[-150px] w-[35%]">
          <img src={ring2} alt="" className="object-cover h-[100%]" />
        </div>
        <div className="font-medium text-default text-nowrap underline cursor-pointer text-textGray hover:opacity-85 duration-150">
          Create unique one
        </div>
      </div>

      <div className="flex mt-[120px] px-4 md:px-12 items-center lg:hidden">
        <div className="w-[60%]">
          <div className="h-[450px] w-[35%] min-w-[208px]">
            <img src={ring2} alt="" className="object-cover h-[100%]" />
          </div>
          <h2 className="font-medium text-black text-lg mt-[-80px]">
            Create your own design
          </h2>
        </div>
        <div className="font-medium text-default text-nowrap underline cursor-pointer text-textGray hover:opacity-85 duration-150">
          Create unique one
        </div>
      </div>

      <div className="flex flex-col items-end gap-[50px] mt-[42px] lg:hidden">
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="font-semibold text-md2 text-black">Gold</div>
          <p className="font-normal text-black text-sm">
            Her prevision acuteness had two why intention
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="font-semibold text-md2 text-black">Silver</div>
          <p className="font-normal text-black text-sm">
            Her prevision acuteness had two why intention
          </p>
        </div>
      </div>

      <div className="w-[92%] mx-auto mt-[200px] flex flex-col lg:flex-row items-center justify-between">
        <div className="rotate-180 w-[90%] h-[380px] lg:w-[55%] md:h-[500px]">
          <img
            src={bracelet}
            alt=""
            className="w-[100%] h-[100%] object-contain lg:object-cover"
          />
        </div>
        <div className="lg:w-[35%] w-[90%] flex flex-col items-center pb-8 lg:items-start lg:pb-0 gap-6">
          <h4 className="text-xl text-black font-medium text-center lg:text-left">
            Make engraving
          </h4>
          <p className="text-grayP text-sm font-medium leading-8 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie
            at amet praesent tortor. Maecenas non tempus at consequat ac est
            varius. Tortor aliquet nulla consequat risus.
          </p>
          <button className="w-fit bg-buttonGray text-white py-4 px-11 border-[1px] border-transparent hover:bg-beige hover:text-buttonGray duration-200">
            Open cart
          </button>
        </div>
      </div>
      <div className="w-[92%] mx-auto mt-[200px] hidden items-center justify-between lg:flex">
        <div className="w-[35%] flex flex-col gap-6">
          <h4 className="text-xl text-black font-medium">Additional Heading</h4>
          <p className="text-grayP text-sm font-medium leading-8">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie
            at amet praesent tortor. Maecenas non tempus at consequat ac est
            varius. Tortor aliquet nulla consequat risus.
          </p>
          <button className="w-fit bg-buttonGray text-white py-4 px-11 border-[1px] border-transparent hover:bg-beige hover:text-buttonGray duration-200">
            Add To Cart
          </button>
        </div>
        <div className="w-[55%] h-[550px]">
          <img src={ring3} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
    </>
  );
};

export default Home;
