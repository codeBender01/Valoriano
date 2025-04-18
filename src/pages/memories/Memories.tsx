import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "antd";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import memories from "../../assets/memories.png";
import memories2 from "../../assets/memories2.png";
import memories3 from "../../assets/memories3.png";
import memories4 from "../../assets/memories4.png";
import memories5 from "../../assets/memories5.png";
import memories6 from "../../assets/memories6.png";
import bracelet from "../../assets/bracelet1.png";

import { FaAngleLeft, FaAngleRight, FaArrowDown } from "react-icons/fa6";

import "./memories.css";
import "../../antd.css";
import { BiArrowFromLeft } from "react-icons/bi";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "#271e23",
        color: "white",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "#271e23",
        color: "white",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}

const Memories: FC = () => {
  const navigate = useNavigate();

  const imageRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      imageRef.current,
      {
        xPercent: -40, // Start 30% left of center
      },
      {
        xPercent: 50, // End 30% right of center
        duration: 1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start when top of image hits 80% of viewport
          end: "bottom 20%", // End when bottom of image hits 20% of viewport
          scrub: 5, // Smooth animation tied to scroll
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // start: "top top", // Start when container top hits viewport top
        end: "top 10%", // End when container bottom hits viewport bottom
        scrub: 3, // Smoothly tie animation to scroll
        markers: false, // Set to true for debugging
      },
    });

    // Phase 1: Move images toward center
    tl.to(image1Ref.current, {
      x: 0, // Move to center (from -100px)
      duration: 1, // Relative duration (half the scroll)
      ease: "none",
      scrub: 5,
    })
      .to(
        image2Ref.current,
        {
          x: 0, // Move to center (from 100px)
          duration: 1,
          ease: "none",
          scrub: 5,
        },
        "<" // Sync with image1
      )
      // Phase 2: Move images back (or further apart)
      .to(image1Ref.current, {
        x: -100, // Move back left (past original position)
        duration: 1, // Second half of scroll
        ease: "none",
        scrub: 5,
      })
      .to(
        image2Ref.current,
        {
          x: 100, // Move back right (past original position)
          duration: 1,
          ease: "none",
          scrub: 5,
        },
        "<" // Sync with image1
      );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  gsap.registerPlugin(ScrollToPlugin);

  const handleScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: window.scrollY + window.innerHeight },
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="demo-wrapper  flex flex-col gap-[20vh]">
        <header className="df aic jcc h-[100vh]">
          <div>
            <h1 className="text-[30px] mobile:text-[80px]">Memories</h1>
            <div className="flex flex-col items-center gap-[30px]">
              <div>Scroll down</div>
              <div
                className="avatar cursor-pointer p-[15px]"
                onClick={handleScroll}
              >
                <FaArrowDown size={18} />
              </div>
            </div>
          </div>
        </header>
        <div>
          {/* First section start */}
          <div className="grid grid-cols-12 gap-[35px]" id="firstSection">
            <div className="!col-start-2 col-span-10 md:col-span-5 sticky top-[10px] h-fit">
              <img className="w-full" src={memories} alt="" />
            </div>
            <div className="col-start-2 md:col-start-7 col-span-10 md:col-span-5 pr-[30px]">
              <h2 className="font-main font-[500] text-[48px] leading-[100%]">
                Emma & Leo – A Bracelet Through Time
              </h2>
              <p className="font-main text-[16px] text-[#6A6A6A] mt-[5px] mb-[15px]">
                When Leo first gave Emma the delicate silver bracelet, they were
                just two teenagers in love. It was a simple piece—handcrafted
                and imperfect—but to Emma, it was everything. Now, decades
                later, with silver hair and wrinkled hands, Emma still wears
                that same bracelet, its shine softened but its meaning stronger
                than ever.
              </p>
              <Button
                // type="submit"
                style={{
                  borderRadius: "0",
                }}
                id="account"
                className="bg-brown text-white h-[56px] w-[100%] font-main font-medium text-normal"
              >
                Type here
              </Button>
            </div>
          </div>
          {/* First section end */}

          {/* Second section start */}
          <div className="flex justify-center items-center mx-auto py-[200px]">
            <img
              className="w-[350px] md:w-[50%]"
              ref={imageRef}
              src={memories2}
              alt=""
            />
          </div>
          {/* Second section end */}

          {/* Third section start */}
          <div className="relative z-3">
            <img
              className="h-[350px] lg:h-[500px] w-fit bg-white absolute top-0 left-0 z-[-1]"
              src={memories6}
              alt=""
            />
            <div className="flex justify-center z-2 " ref={containerRef}>
              <img
                className="h-[300px] lg:h-[450px] w-fit bg-inherit bg-[transparent]"
                src={memories4}
                ref={image1Ref}
                alt=""
              />
              <img
                className="h-[300px] lg:h-[450px] w-fit relative bg-[transparent]"
                src={memories3}
                ref={image2Ref}
                alt=""
              />
            </div>
            <img
              className="h-[350px] lg:h-[500px] w-fit bg-white absolute top-0 right-0 z-[-1]"
              src={memories5}
              alt=""
            />
          </div>
          {/* Third section end */}

          {/* Fourth section start */}
          <div className="mobile:w-[400px] md:w-[600px] mx-auto mt-[50px] md:mt-[70px] lg:mt-[100px]">
            <Slider {...settings}>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
              <div>
                <img className="bg-[transparent]" src={bracelet} alt="" />
              </div>
            </Slider>
          </div>
          {/* Fourth section end */}

          {/* Fifth section start */}
          <div className="flex flex-col gap-[10px] lg:w-[300px] md:w-[300px] sm:w-[250px] px-[50px] mx-auto my-[100px]">
            <Button
              // type="submit"
              style={{
                borderRadius: "0",
              }}
              id="account"
              className="bg-brown text-white h-[56px] w-[100%] font-main font-medium text-normal"
            >
              Create your own
            </Button>
            <Button
              // type="submit"
              style={{
                borderRadius: "0",
              }}
              id="whiteButton"
              className="bg-white text-brown !h-[56px] w-[100%] font-main font-medium text-normal border-brown"
              onClick={() => navigate("/home")}
            >
              Go to homepage
            </Button>
          </div>
          {/* Fifth section end */}
        </div>
      </div>
    </>
  );
};

export default Memories;
