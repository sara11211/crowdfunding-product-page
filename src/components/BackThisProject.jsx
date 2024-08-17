import { useState } from "react";
import data from "../data/data";
import PledgeChoice from "./PledgeChoice";
import Button from "./Button";

const BackThisProject = ({ onClose }) => {
  const [selectedPledge, setSelectedPledge] = useState(null);

  const handlePledgeSelect = (name) => {
    setSelectedPledge(name);
  };

  return (
        <div className="small-card w-[90%] max-h-[80vh] overflow-y-auto py-8">
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
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <ul className="flex flex-col gap-6">
            <li>
              <div
                className={`small-card border-2 border-gray-100 ${
                  selectedPledge === "Pledge with no reward" ? "border-2 border-light-cyan" : ""
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
                      onChange={() => handlePledgeSelect("Pledge with no reward")}
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
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email
                </p>
                {selectedPledge == "Pledge with no reward" && (
                  <div className="flex items-center justify-center w-full gap-3">
                    <Button
                      text="Continue"
                      px="px-6"
                      size="text-sm"
                      py="py-3"
                      onClick={handlePledgeSelect}
                    />
                  </div>
                )}
              </div>
            </li>
            {data.map((item) => (
              <li key={item.name}>
                <PledgeChoice
                  {...item}
                  isSelected={selectedPledge == item.name && item.numberLeft != 0}
                  onPledgeSelect={handlePledgeSelect}
                />
              </li>
            ))}
          </ul>
        </div>
  );
};

export default BackThisProject;
