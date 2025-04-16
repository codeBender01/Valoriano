import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "antd";

import img1 from "../assets/person1.jpg";
import img2 from "../assets/person2.jpg";
import memories from "../assets/memories.png";
import memories2 from "../assets/memories2.png";
import memories3 from "../assets/memories3.png";
import memories4 from "../assets/memories4.png";
import memories5 from "../assets/memories5.png";
import memories6 from "../assets/memories6.png";

import { FaArrowDown } from "react-icons/fa6";

import "./memories.css";
import "../antd.css";

gsap.registerPlugin(ScrollTrigger);

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
        end: "bottom bottom", // End when container bottom hits viewport bottom
        scrub: 1, // Smoothly tie animation to scroll
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
        x: -150, // Move back left (past original position)
        duration: 1, // Second half of scroll
        ease: "none",
        scrub: 5,
      })
      .to(
        image2Ref.current,
        {
          x: 150, // Move back right (past original position)
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

  return (
    <>
      <div className="demo-wrapper  flex flex-col gap-[20vh] mobile:gap-[40vh]">
        <header className="df aic jcc">
          <div>
            <h1 className="text-[30px] mobile:text-[80px]">Memories</h1>
            <div className="flex flex-col items-center gap-[30px]">
              <div>Scroll down</div>
              <div className="avatar">
                <FaArrowDown size={18} />
              </div>
            </div>
          </div>
        </header>
        {/* <section className="demo-gallery">
        <ul className="wrapper">
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img1} className="w-[100%] h-[100%] object-cover" />
          </li>
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" />
          </li>
        </ul>
      </section>
      <section className="demo-gallery">
        <ul className="wrapper">
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img1} className="w-[100%] h-[100%] object-cover" />
          </li>
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" />
          </li>
        </ul>
      </section>
      <section className="demo-gallery">
        <ul className="wrapper">
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img1} className="w-[100%] h-[100%] object-cover" />
          </li>
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" />
          </li>
        </ul>
      </section>
      <section className="demo-gallery">
        <ul className="wrapper">
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img1} className="w-[100%] h-[100%] object-cover" />
          </li>
          <li className="h-[160px] w-[160px] mobile:w-[540px] mobile:h-[400px]">
            <img src={img2} className="w-[100%] h-[100%] object-cover" />
          </li>
        </ul>
      </section> */}
        <div>
          {/* First section start */}
          <div className="grid grid-cols-12 gap-[35px]">
            <div className="col-start-2 col-span-5 sticky top-[10px] h-fit">
              <img className="w-full" src={memories} alt="" />
            </div>
            <div className="col-start-7 col-span-5 pr-[30px]">
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
            <img className="w-[50%]" ref={imageRef} src={memories2} alt="" />
          </div>
          {/* Second section end */}

          {/* Third section start */}
          <div className="relative z-3">
            <img
              className="h-[500px] w-fit bg-white absolute top-0 left-0 z-[-1]"
              src={memories6}
              alt=""
            />
            <div className="flex justify-center z-2" ref={containerRef}>
              <img
                className="h-[450px] w-fit bg-inherit bg-[transparent]"
                src={memories4}
                ref={image1Ref}
                alt=""
              />
              <img
                className="h-[450px] w-fit relative bg-[transparent]"
                src={memories3}
                ref={image2Ref}
                alt=""
              />
            </div>
            <img
              className="h-[500px] w-fit bg-white absolute top-0 right-0 z-[-1]"
              src={memories5}
              alt=""
            />
          </div>
          {/* Third section end */}

          {/* Fouth section start */}
          <div className="flex flex-col gap-[10px] lg:w-[300px] mx-auto my-[100px]">
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
              onClick={() => navigate("/")}
            >
              Go to homepage
            </Button>
          </div>
          {/* Fouth section end */}
        </div>
      </div>
    </>
  );
};

export default Memories;
