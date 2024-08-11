import { useState } from "react";
import { bookmark, mastercraftLogo } from "../../assets/images";
import Button from "../Button";

const Bookmark = () => {
  const [outerColor, setOuterColor] = useState("#2F2F2F");
  const [innerColor, setInnerColor] = useState("#B1B1B1");

  const toggleColor = () => {
    setOuterColor((current) => 
      current === "#2F2F2F" ? "hsl(176, 50%, 47%)" : "#2F2F2F"
    );

    setInnerColor((current) => 
      current === "#B1B1B1" ? "hsl(100,100%,100%)" : "#B1B1B1"
    );
  };

  return (
    <div className="gap-5 card">
      <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full left-1/2">
        <img src={mastercraftLogo} alt="mastercraft logo" />
      </div>
      <h1 className="px-2 mt-5 text-xl font-bold leading-6 capitalize">
        mastercraft bamboo monitor riser
      </h1>
      <p className="text-sm leading-6 text-dark-gray">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex items-center justify-between w-full my-1.5">
        <Button text="Back this project" />
        <button className="cursor-pointer" onClick={() => toggleColor()}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill={outerColor} cx="28" cy="28" r="28" />
              <path fill={innerColor} d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Bookmark;
