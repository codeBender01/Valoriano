import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplitTextProps {
  text: string;
  duration?: number;
  delay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  duration = 0.8,
  delay = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: 0.05,
        ease: "power3.out",
        delay,
      }
    );
  }, [text, duration, delay]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "inline-block",
        overflow: "hidden",
        // fontSize: "2rem",
        // fontWeight: "bold",
        // color: "#333",
      }}
      className="text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px]"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            whiteSpace: "pre", // preserve spaces
          }}
          className=""
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
