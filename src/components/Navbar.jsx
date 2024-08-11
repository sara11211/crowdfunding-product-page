import { useState } from "react";
import { logo, hamburgerIcon, closeMenuIcon } from "../assets/images";
import Menu from "./Menu";
import LightBox from "./utilities/LightBox";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-6 py-8">
      <nav className="flex items-center justify-between">
        <div className="z-20">
          <img src={logo} alt="crowdfund logo" />
        </div>

        <ul className="flex items-center gap-6 text-base text-white max-md:hidden">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>

        {!isOpen && (
          <div
            className="cursor-pointer md:hidden"
            onClick={() => toggleMenu()}
          >
            <img src={hamburgerIcon} alt="hamburger icon" />
          </div>
        )}
        {isOpen && (
          <div
            className="fixed z-20 cursor-pointer top-8 right-6 md:hidden"
            onClick={() => toggleMenu()}
          >
            <img src={closeMenuIcon} alt="close menu icon" />
          </div>
        )}
      </nav>
      {isOpen && (
        <LightBox>
          <Menu />
        </LightBox>
      )}
    </header>
  );
};

export default Navbar;