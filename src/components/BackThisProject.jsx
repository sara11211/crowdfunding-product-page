import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import LightBox from "./utilities/LightBox";
import ThanksForSupport from "./ThanksForSupport";
import { motion } from "framer-motion";

const BackThisProject = ({ onClose, id, onPledgeSubmit, data }) => {
  const [selectedPledge, setSelectedPledge] = useState(id);
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const pledgeRefs = useRef({});

  const handlePledgeSelect = (name) => {
    setSelectedPledge(name);
    setIsError(false);
    setErrorMessage("");
    setEnteredPrice("");
  };

  const handlePledgeSubmit = (price) => {
    const numericPrice = parseFloat(enteredPrice);

    if (isNaN(numericPrice)) {
      setIsError(true);
      setErrorMessage("Invalid price");
      return;
    }

    if (numericPrice < price) {
      setIsError(true);
      setErrorMessage(`Pledge price should be higher than $${price}`);
      return;
    }

    setIsError(false);
    setErrorMessage("");
    setEnteredPrice("");
    setShowThanks(true);

    onPledgeSubmit(selectedPledge, numericPrice)
  };

  useEffect(() => {
    if (selectedPledge && pledgeRefs.current[selectedPledge]) {
      pledgeRefs.current[selectedPledge].scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPledge]);

  return (
    <>
      {!showThanks && (
        <LightBox z="z-30" onClose={onClose}>
          <motion.div
            className="small-card w-[90%] max-h-[80vh] overflow-y-auto py-8 max-w-[700px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold">Back this project</h2>
              <svg
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer opacity-40 hover:opacity-100"
                onClick={onClose}
              >
                <path
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill="#000"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p className="base">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <ul className="flex flex-col gap-6">
              <li ref={(el) => (pledgeRefs.current["Pledge with no reward"] = el)}>
                <div
                  className={`small-card border-2 border-gray-100 ${
                    selectedPledge === "Pledge with no reward"
                      ? "border-2 border-light-cyan"
                      : ""
                  }`}
                  onClick={() => handlePledgeSelect("Pledge with no reward")}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <input
                        type="radio"
                        id="Pledge with no reward"
                        name="pledge"
                        className="absolute w-6 h-6 border border-gray-300 rounded-full appearance-none"
                        checked={selectedPledge === "Pledge with no reward"}
                        onChange={() =>
                          handlePledgeSelect("Pledge with no reward")
                        }
                      />
                      {selectedPledge === "Pledge with no reward" && (
                        <div className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-cyan top-1/2 left-1/2" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold">Pledge with no reward</h3>
                    </div>
                  </div>
                  <p className="base">
                    Choose to support us without a reward if you simply believe
                    in our project. As a backer, you will be signed up to
                    receive product updates via email
                  </p>
                  {selectedPledge === "Pledge with no reward" && (
                    <div className="flex items-center justify-center w-full gap-3">
                      <Button
                        text="Continue"
                        px="px-6"
                        size="text-sm"
                        py="py-3"
                        onClick={() => setShowThanks(true)}
                      />
                    </div>
                  )}
                </div>
              </li>
              {data.map((item) => (
                <li key={item.name} ref={(el) => (pledgeRefs.current[item.name] = el)}>
                  <div
                    className={`small-card border-2 border-gray-100 ${
                      item.numberLeft === 0 ? "opacity-50" : ""
                    } ${
                      selectedPledge === item.name && item.numberLeft !== 0
                        ? "border-2 border-light-cyan"
                        : ""
                    }`}
                    
                  >
                    <div className="flex items-center gap-4" onClick={() => handlePledgeSelect(item.name)}>
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <input
                          type="radio"
                          id={item.name}
                          name="pledge"
                          className="absolute w-6 h-6 border border-gray-300 rounded-full appearance-none"
                          checked={
                            selectedPledge === item.name &&
                            item.numberLeft !== 0
                          }
                          onChange={() => handlePledgeSelect(item.name)}
                        />
                        {selectedPledge === item.name &&
                          item.numberLeft !== 0 && (
                            <div className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-cyan top-1/2 left-1/2" />
                          )}
                      </div>
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="font-medium text-light-cyan">
                          Pledge ${item.price} or more
                        </p>
                      </div>
                    </div>
                    <p className="base">{item.description}</p>
                    <p className="flex items-center gap-3 text-dark-gray">
                      <span className="text-2xl font-bold text-black">
                        {item.numberLeft}
                      </span>{" "}
                      left
                    </p>

                    {selectedPledge === item.name && item.numberLeft !== 0 && (
                      <>
                        <div className="my-1 line"></div>
                        <div className="flex flex-col items-center justify-center w-full gap-4">
                          <p className="base">Enter your pledge</p>
                          <div className="flex items-center justify-center w-full gap-3">
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                $
                              </span>
                              <input
                                type="text"
                                className={`w-20 py-2 pr-4 border border-gray-200 rounded-full pl-7 focus:border-light-cyan focus:outline-none focus:ring-light-cyan ${
                                  isError ? "border-red-500" : ""
                                }`}
                                placeholder={item.price}
                                value={enteredPrice}
                                onChange={(e) =>
                                  setEnteredPrice(e.target.value)
                                }
                              />
                            </div>
                            <Button
                              text="Continue"
                              px="px-6"
                              size="text-sm"
                              py="py-3"
                              onClick={() => handlePledgeSubmit(item.price)}
                            />
                          </div>
                          {isError && (
                            <span className="text-[0.8rem] font-normal text-red-500 -mt-2">
                              {errorMessage}
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </LightBox>
      )}
      {showThanks && <ThanksForSupport />}
    </>
  );
};

export default BackThisProject;
