import React from "react";
import { ThemeChanger } from "./ThemeChanger";

const Header = () => {
  return (
    <nav className="w-full flex justify-between">
      <div className="">Logo</div>
      <div className="flex gap-4">
        <div className="">menus</div>
        <div className="">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Header;
