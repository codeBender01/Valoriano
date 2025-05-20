import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "antd";

import img1 from "../../assets/person1.jpg";
import img2 from "../../assets/person2.jpg";

import { FaArrowDown } from "react-icons/fa6";

import "./memories.css";
import "../../antd.css";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const MemoriesMobile: FC = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const sections = gsap.utils.toArray("section") as HTMLElement[];

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement?.scrollTo(0, 0);

      sections.forEach((section, index) => {
        const wrapper = section.querySelector(".wrapper") as HTMLElement | null;

        if (wrapper) {
          const xStart = index % 2 ? "100%" : `${-wrapper.scrollWidth}px`;
          const xEnd =
            index % 2
              ? `${(wrapper.scrollWidth - section.offsetWidth) * -1}px`
              : "0";

          gsap.fromTo(
            wrapper,
            { x: xStart },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5,
              },
            }
          );
        }
      });
    };

    showDemo();

    // Clean up on unmount

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  const handleScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: window.scrollY + window.innerHeight },
      ease: "power2.out",
    });
  };

  return (
    <div className="demo-wrapper  flex flex-col gap-[20vh] mobile:gap-[40vh]">
      <header className="df aic jcc h-[100vh]">
        <div>
          <h1 className="text-[30px] mobile:text-[80px] text-center">
            Start Your Memories
          </h1>
          <div className="flex flex-col items-center gap-[30px]">
            <div>Scroll down</div>
            <div className="avatar p-[15px]" onClick={handleScroll}>
              <FaArrowDown size={18} />
            </div>
          </div>
        </div>
      </header>

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

      <footer className="df aic jcc flex flex-col gap-[15px]">
        <Button
          style={{
            borderRadius: "0",
          }}
          id="account"
          className="bg-brown text-white h-[42px]  font-main font-medium text-[12px] w-[60%]"
          onClick={() => {
            navigate("/configurator");
          }}
        >
          Go to Customization
        </Button>
        <p
          className="underline hover:cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Go to Homepage
        </p>
      </footer>
    </div>
  );
};

export default MemoriesMobile;
