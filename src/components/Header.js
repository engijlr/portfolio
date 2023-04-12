import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl text-white ">ENGIDEV</h1>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            className="btn btn-sm flex items-center justify-center cursor-pointer"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
