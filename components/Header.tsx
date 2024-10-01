"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import { RiMenu3Fill } from "react-icons/ri";

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

  const [position, setPosition] = useState("bottom");

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
          "flex top-0 left-0 w-full h-20 z-50 flex-1 justify-between items-center ",
          visible && "sticky",
          bg && " backdrop-blur-xl   shadow-xl"
        )}
      >
        <div className="section  flex-1 justify-between py-2 items-center sm:px-4">
          <Link href={"/"} className="flex items-center">
            <Image src="/logo.svg" alt="reviewer" width={50} height={50} />
            <h1 className="font-bold ml-2 sm:ml-4 text-xl">CodeCraftHub</h1>
          </Link>
          <div className="flex gap-4 max-lg:hidden">
            <div className="flex gap-4 items-center">
              <Link
                className="hover:font-bold tracking-widest  hover:underline"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="hover:font-bold tracking-widest  hover:underline"
                href={"/work"}
              >
                Portfolio
              </Link>
              <Link
                className="hover:font-bold tracking-widest  hover:underline"
                href={"/blog"}
              >
                Blog
              </Link>
              <Link
                className="hover:font-bold tracking-widest  hover:underline"
                href={"/service"}
              >
                Services
              </Link>
              <Link
                className="hover:font-bold tracking-widest  hover:underline"
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="max-sm:hidden">
              <ThemeChanger />
            </div>
            <div className="max-sm:hidden">
              <ButtonComponent text="Book a call" call={true} />
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-0  focus-visible:ring-offset-0" >
                    <RiMenu3Fill className="h-8 w-8 " />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen bg-transparent border-none px-2 py-4 sm:p-4">
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                    className="w-full p-4 bg-background border-[1px] shadow-xl rounded-2xl"
                  >
                    <Link
                      className="hover:font-bold tracking-widest  hover:underline"
                      href={"/"}
                    >
                      <DropdownMenuRadioItem value="home">
                        Home
                      </DropdownMenuRadioItem>
                    </Link>

                    <Link
                      className="hover:font-bold tracking-widest  hover:underline"
                      href={"/work"}
                    >
                      <DropdownMenuRadioItem value="top">
                        Portfolio
                      </DropdownMenuRadioItem>
                    </Link>
                    <Link
                      className="hover:font-bold tracking-widest  hover:underline"
                      href={"/blog"}
                    >
                      <DropdownMenuRadioItem value="bottom">
                        Blog
                      </DropdownMenuRadioItem>
                    </Link>
                    <Link
                      className="hover:font-bold tracking-widest  hover:underline"
                      href={"/service"}
                    >
                      <DropdownMenuRadioItem value="services">
                        Services
                      </DropdownMenuRadioItem>
                    </Link>
                    <Link
                      className="hover:font-bold tracking-widest  hover:underline"
                      href={"/contact"}
                    >
                      <DropdownMenuRadioItem value="contact">
                        Contact
                      </DropdownMenuRadioItem>
                    </Link>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
