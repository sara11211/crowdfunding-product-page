import { useState } from "react";
import { logo, hamburgerIcon, closeMenuIcon } from "../assets/images";
import LightBox from "./utilities/LightBox";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-6 py-8 md:px-16 xl:px-40 xl:py-12">
      <nav className="flex items-center justify-between">
        <a className="z-20 cursor-pointer">
          <img src={logo} alt="crowdfund logo" />
        </a>

        <ul className="flex items-center gap-6 text-base text-white max-md:hidden">
          <li className="hover:text-black hover:font-medium">
            <a href="#">About</a>
          </li>
          <li className="hover:text-black hover:font-medium">
            <a href="#">Discover</a>
          </li>
          <li className="hover:text-black hover:font-medium">
            <a href="#">Get Started</a>
          </li>
        </ul>

        {!isOpen && (
          <button
            className="cursor-pointer md:hidden"
            onClick={() => toggleMenu()}
          >
            <img src={hamburgerIcon} alt="hamburger icon" />
          </button>
        )}
        {isOpen && (
          <button
            className="fixed z-20 cursor-pointer top-8 right-6 md:hidden"
            onClick={() => toggleMenu()}
          >
            <img src={closeMenuIcon} alt="close menu icon" />
          </button>
        )}
      </nav>
      {isOpen && (
        <LightBox onClose={toggleMenu}>
          <motion.div
            className="absolute top-[15%] w-[85%] max-w-[500px] bg-white rounded-md border mx-auto"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.ul
              className="flex flex-col items-start p-6 font-medium"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <motion.li className="hover:text-dark-gray" variants={itemVariants}> 
                <a href="#">About</a>
              </motion.li>
              <div  className="line" />
              <motion.li className="hover:text-dark-gray" variants={itemVariants}>
                <a href="#">Discover</a>
              </motion.li>
              <div className="line" />
              <motion.li className="hover:text-dark-gray" variants={itemVariants}>
                <a href="#">Get Started</a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </LightBox>
      )}
    </header>
  );
};

export default Navbar;
