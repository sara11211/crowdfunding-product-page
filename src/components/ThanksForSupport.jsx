import Button from "./Button";
import Lightbox from "../components/utilities/LightBox";
import { checkIcon } from "../assets/images";

const ThanksForSupport = () => {
  return (
    <Lightbox z="z-30">
      <div className="z-20 flex flex-col items-center justify-center gap-6 px-4 py-10 mx-6 text-center bg-white rounded-md max-w-[450px]">
        <img src={checkIcon} alt="check icon" />
        <h2 className="text-lg font-bold text-black">
          Thanks for your support!
        </h2>
        <p className="text-sm leading-6 text-dark-gray">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwise. You will get an email once our campaign is
          completed.
        </p>
        <Button text="Got it!" px="px-8" py="py-3" />
      </div>
    </Lightbox>
  );
};

export default ThanksForSupport;
