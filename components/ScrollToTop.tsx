"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="hover:cursor-pointer flex items-center justify-center fixed p-2 bottom-[40px] right-4 rounded-full bg-[#013941]"
          onClick={scrollToTop}
        >
         <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
