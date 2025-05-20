import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "../components/SplitText";

type SplashScreenProps = {
  duration?: number; // in milliseconds
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({
  duration = 3000,
  onFinish,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

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
      <SplitText text="  Voloriano  " />
    </div>
  );
};

export default SplashScreen;
