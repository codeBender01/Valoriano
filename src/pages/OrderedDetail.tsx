import { useLocation, useNavigate } from "react-router-dom";
import bracelet1 from "../assets/bracelet1.png";
import { SlArrowLeft } from "react-icons/sl";

const OrderedDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  return (
    <div className="relative  min-h-[100vh] w-[100%] px-[120px] py-[120px]">
      <div
        onClick={() => navigate(-1)}
        className={`absolute left-[5%] top-[115px] flex items-center gap-[10px] text-normal cursor-pointer`}
      >
        <SlArrowLeft />
        Back
      </div>
      <div className="grid grid-cols-2 gap-[15px]">
        <div>
          <img className="w-[80%]" src={bracelet1} alt="" />
          <h2 className="text-[25px] font-[500] w-[80%] text-center">
            {data?.name}
          </h2>
        </div>
        <div className="flex items-center gap-[50px] text-[18px]">
          <div className="flex flex-col gap-[10px] font-[600]">
            <div>Name</div>
            <div>Price</div>
            {data?.options.bandColor && <div>Band color</div>}
            {data?.options.introduction && <div>Bracelet type</div>}
            {data?.options.stone && <div>Stone type</div>}
            {data?.options.engraving && <div>Engraving</div>}
            {data?.options.symbol && <div>Symbol</div>}
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2>{data?.name}</h2>
            <h2>{data?.price}$</h2>
            {data?.options.bandColor && (
              <div
                style={{ backgroundColor: data?.options.bandColor }}
                className={`h-[30px] w-[30px] rounded-[100%] border-grayHeaderMenu border-[3px]`}
              ></div>
            )}
            {data?.options.introduction && (
              <h2>{data?.options.introduction}</h2>
            )}
            {data?.options.stone && <h2>{data?.options.stone}</h2>}
            {data?.options.engraving && <h2>{data?.options.engraving}</h2>}
            {data?.options.symbol && <h2>{data?.options.symbol}</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedDetail;
