import { useState } from "react";
import { mastercraftLogo } from "../assets/images";
import Button from "../components/Button";
import BackThisProject from "../components/BackThisProject";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const Bookmark = ({data, onPledgeSubmit}) => {
  const [outerColor, setOuterColor] = useState("#2F2F2F");
  const [innerColor, setInnerColor] = useState("#B1B1B1");
  const [fontColor, setFontColor] = useState("hsl(0, 0%, 48%)");
  const [buttonText, setButtonText] = useState('Bookmark')
  const [showPledgeChoice, setShowPledgeChoice] = useState(false);

  const toggleColor = () => {
    setOuterColor((current) =>
      current === "#2F2F2F" ? "hsl(176, 50%, 47%)" : "#2F2F2F"
    );

    setInnerColor((current) =>
      current === "#B1B1B1" ? "hsl(100,100%,100%)" : "#B1B1B1"
    );

    setFontColor((current) =>
      current === "hsl(0, 0%, 48%)" ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 48%)"
    );

    setButtonText((current) =>
      current === "Bookmark" ? "Bookmarked" : "Bookmark"
    );
  };

  const onClick = () => {
    setShowPledgeChoice((prev) => !prev);
  };

  const handleClose = () => {
    setShowPledgeChoice(false);
  };

  return (
    <>
      <div className="gap-5 card max-w-[750px] w-full">
        <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2">
          <img src={mastercraftLogo} alt="mastercraft logo" />
        </div>
        <h1 className="px-2 mt-5 text-xl font-bold leading-6 capitalize lg:text-3xl">
          mastercraft bamboo monitor riser
        </h1>
        <p className="base">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex items-center justify-between w-full my-1.5">
          <Button text="Back this project" onClick={onClick} />
          <motion.button
            className="cursor-pointer lg:flex lg:items-center lg:relative"
            onClick={() => toggleColor()}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="lg:absolute">
              <g fill="none" fillRule="evenodd">
                <circle fill={outerColor} cx="28" cy="28" r="28" />
                <path fill={innerColor} d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <div 
            className="px-6 py-4 pl-16 font-semibold bg-gray-100 rounded-full max-lg:hidden base" 
            style={{
              color: fontColor
            }}
            >{buttonText}</div>
          </motion.button>
        </div>
      </div>
      {showPledgeChoice && (
        <BackThisProject
          onClose={handleClose}
          data={data}
          onPledgeSubmit={onPledgeSubmit}
          id={data.find(item => item.numberLeft > 0)?.name || ""}
        />
      )}
    </>
  );
};

export default Bookmark;
