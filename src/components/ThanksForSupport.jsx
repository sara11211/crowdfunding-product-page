import Button from "./Button";
import { checkIcon } from "../assets/images";

const ThanksForSupport = () => {
  return (
    <>
      <div className="fixed inset-0 z-10 grid bg-black bg-opacity-50 place-content-center">
        <div className="z-20 flex flex-col items-center justify-center gap-6 px-4 py-10 mx-6 text-center bg-white rounded-md">
          <img src={checkIcon} alt="check icon" />
          <h2 className="text-lg font-bold text-black">
            Thanks for your support!
          </h2>
          <p className="text-sm leading-6 text-dark-gray">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwise. You will get an email once our campaign is
            completed.
          </p>
          <Button text="Got it!" />
        </div>
      </div>
    </>
  );
};

export default ThanksForSupport;
