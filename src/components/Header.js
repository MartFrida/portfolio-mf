import React from "react";
// images
import Logo from "../assets/logo-m.svg";

const Header = () => {
  return (
    <header className=" py-8 lg:pt-2" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a target="_blank" href="/">
            <img src={Logo} alt=""></img>
          </a>

          {/* button */}
          <a className="btn px-6 py-3 rounded-full" href="https://t.me/maryfryda">Work with me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
