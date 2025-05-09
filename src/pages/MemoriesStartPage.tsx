import { FC, useEffect, useRef } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const MemoriesStartPage: FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "bounce.out" },
        "-=1"
      );

    // Hover animation for button
    buttonRef.current?.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, { scale: 1.05, duration: 0.3 });
    });

    buttonRef.current?.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-[100vh] w-[100%]"
    >
      <div className="w-[70%] max-w-[300px] sm:max-w-[350px] flex flex-col items-center gap-4">
        <h1
          className="font-main font-bold text-[30px] tablet:text-[35px] text-black"
          ref={titleRef}
        >
          Voloriano
        </h1>
        <Button
          style={{ borderRadius: "0" }}
          id="account"
          ref={buttonRef}
          className="bg-brown text-white h-[42px] tablet:h-[50px] w-[100%] font-main font-medium text-[12px] tablet:text-[15px]"
          onClick={() => {
            navigate("/memories");
          }}
        >
          Start your memories
        </Button>
      </div>
    </div>
  );
};

export default MemoriesStartPage;
