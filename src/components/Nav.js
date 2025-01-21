import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 left-[45vw] lg:bottom-8 w-full overflow-hidden z-50 max-w-[150px] ">
      {/* nav inner */}
      <div className="w-full bg-black/20 backdrop-blur-2xl rounded-full mx-auto px-5 py-2 flex justify-between items-center text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
        >
          <BiHomeAlt />
        </Link>

        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-50}
          className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
        >
          <BsClipboardData />
        </Link>
      </div>

    </nav>
  );
};

export default Nav;

