import React from "react";
// images
import Logo from "../assets/logo-m.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8 lg:pt-2" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <img src={Logo} alt=""></img>
          </Link>

          {/* button */}
          <Link className="btn px-6 py-3 rounded-full" href="https://t.me/maryfryda">Work with me</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
