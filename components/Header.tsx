"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 5 ? setBg(true) : setBg(false);
    });
  });

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex top-0 left-0 w-full h-20 z-50 flex-1 justify-between py-2 items-center px-4",
          visible && "sticky",
          bg && " backdrop-blur-xl   shadow-xl"
        )}
      >
        <div className="section  flex-1 justify-between py-2 items-center px-4">
          <Link href={"/"} className="flex items-center justify-center">
            <Image src="/logo.svg" alt="reviewer" width={30} height={30} />
            <h1 className="font-bold ml-1">CodeCraftHub</h1>
          </Link>
          <div className="flex gap-4">
            <div className="flex gap-4 items-center">
              <Link href={"/"}>Home</Link>
              <Link href={"/work"}>Portfolio</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/service"}>Services</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <div className="">
              <ThemeChanger />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
