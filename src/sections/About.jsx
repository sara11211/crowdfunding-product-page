import { useState } from "react";
import BackThisProject from "../components/BackThisProject";
import Button from "../components/Button";

const About = ({ data, onPledgeSubmit }) => {
  const [showBackThisProject, setShowBackThisProject] = useState(false);
  const [clicked, setClicked] = useState(null)

  const onSelectReward = (id) => {
    setShowBackThisProject(!showBackThisProject);
    setClicked(id)
  };

  return (
    <>
      <div className="flex flex-col items-start gap-6 text-left card max-w-[750px] w-full lg:gap-8">
        <h2 className="text-lg font-bold lg:text-xl">About this project</h2>
        <p className="base">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="base">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <ul className="flex flex-col gap-6">
          {data.map((item) => (
            <li
              key={item.name}
              className={`small-card p-8 ${item.numberLeft === 0 ? "opacity-50" : ""}`}
            >
              <div className="w-full lg:flex lg:justify-between lg:items-center">
                <h3 className="font-bold lg:text-lg">{item.name}</h3>
                <p className="font-medium text-light-cyan">{`Pledge $${item.price} or more`}</p>
              </div>
              <p className="base">{item.description}</p>
              <div className="flex flex-col gap-4 lg:w-full lg:flex-row lg:justify-between">
              <p className="flex items-center gap-3 text-dark-gray">
                <span className="text-3xl font-bold text-black">
                  {item.numberLeft}
                </span>
                left
              </p>
              <Button
                text="Select Reward"
                px="px-8 max-sm:px-6"
                py="py-3.5"
                size="text-sm"
                bg={
                  item.numberLeft === 0
                    ? "bg-dark-gray"
                    : "bg-light-cyan hover:bg-dark-cyan"
                }
                onClick={() => onSelectReward(item.name)}
                disabled={item.numberLeft === 0}
              />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showBackThisProject && (
          <BackThisProject
          onClose={() => setShowBackThisProject(false)}
          data={data}
          onPledgeSubmit={onPledgeSubmit}
          id={clicked}
        />
      )}
    </>
  );
};

export default About;
