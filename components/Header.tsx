import React from "react";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between py-2 items-center px-4">
      <div className="">Logo</div>
      <div className="flex gap-4">
        <div className="flex gap-4 items-center">
          <Link href={"/contact"}>
            Contact
          </Link>
          <Link href={"/service"}>
            Services
          </Link>
        </div>
        <div className="">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Header;
