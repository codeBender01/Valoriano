import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/bracelet1.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ImageAnimation: React.FC = () => {
  // Refs for images and container
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Ensure refs are available
    if (
      !containerRef.current ||
      !leftImageRef.current ||
      !rightImageRef.current
    )
      return;

    // Initial animation: Images move toward each other on viewport entry
    gsap.to(leftImageRef.current, {
      x: "10%", // Move slightly right
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start when container is 80% in view
        toggleActions: "play none none none",
      },
    });

    gsap.to(rightImageRef.current, {
      x: "-10%", // Move slightly left
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Scroll animation: Images move to opposite sides
    gsap.to(leftImageRef.current, {
      x: "-10vw", // Move further left
      ease: "power1.inOut", // Smoother easing
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Start when container's center hits viewport's center
        end: "+=1000", // Extend animation over 1000px of scrolling
        scrub: true, // Tie to scroll position
        markers: false, // Set to true for debugging
      },
    });

    gsap.to(rightImageRef.current, {
      x: "10vw", // Move further right
      ease: "power1.inOut", // Smoother easing
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Start when container's center hits viewport's center
        end: "+=1000", // Extend animation over 1000px of scrolling
        scrub: true,
        markers: false,
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="!h-[1000px]">
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
        <h2>sal</h2>
      </div>{" "}
      {/* Spacer for scrolling */}
      <div ref={containerRef} className="flex gap-[10px] items-center h-screen">
        <img
          ref={leftImageRef}
          src={image1}
          alt="Left Image"
          className="w-[300px] h-[300px] object-cover -translate-x-full"
        />
        <img
          ref={rightImageRef}
          src={image1}
          alt="Right Image"
          className="w-[300px] h-[300px] object-cover translate-x-full"
        />
      </div>
      <div className="h-[200vh]">
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
        <h2>sad</h2>
      </div>{" "}
      {/* Spacer for scrolling */}
    </div>
  );
};

export default ImageAnimation;
