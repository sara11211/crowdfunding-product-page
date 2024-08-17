import { useState } from "react";
import Button from "../components/Button";
import ThanksForSupport from "../components/ThanksForSupport";

const PledgeChoice = ({
  name,
  price,
  description,
  numberLeft,
  isSelected,
  onPledgeSelect,
  onThankYou,
}) => {
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePledgeSubmit = () => {
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
    setShowThankYou(true);

    if (onThankYou) onThankYou();
  };

  return (
    <>
      <div
        className={`small-card border-2 border-gray-100 ${
          numberLeft === 0 ? "opacity-50" : ""
        } ${isSelected ? "border-2 border-light-cyan" : ""}`}
        onClick={() => onPledgeSelect(name)}
      >
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center w-6 h-6">
            <input
              type="radio"
              id={name}
              name="pledge"
              className="absolute w-6 h-6 border border-gray-300 rounded-full appearance-none"
              checked={isSelected}
              onChange={() => onPledgeSelect(name)}
            />
            {isSelected && (
              <div className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-cyan top-1/2 left-1/2" />
            )}
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="font-medium text-light-cyan">Pledge ${price} or more</p>
          </div>
        </div>
        <p className="base">{description}</p>
        <p className="flex items-center gap-3 text-dark-gray">
          <span className="text-2xl font-bold text-black">{numberLeft}</span> left
        </p>

        {isSelected && (
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
                      isError && "border-red-500"
                    }`}
                    placeholder={price}
                    value={enteredPrice}
                    onChange={(e) => setEnteredPrice(e.target.value)}
                  />
                </div>
                <Button
                  text="Continue"
                  px="px-6"
                  size="text-sm"
                  py="py-3"
                  onClick={handlePledgeSubmit}
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
      {showThankYou && <ThanksForSupport />}
    </>
  );
};

export default PledgeChoice;
