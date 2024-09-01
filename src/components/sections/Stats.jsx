import { forwardRef } from "react";
import { motion } from "framer-motion";
import ProgressBar from "../ProgressBar" 

const Stats = forwardRef(({ totalBacked }, ref) => {
  return (
    <div ref={ref} className="gap-8 card max-w-[750px] w-full">
      <ul className="flex flex-col lg:flex-row lg:items-center base">
        <li className="lg:flex lg:flex-col lg:items-start">
          <span className="block mb-2 text-3xl font-bold text-black">
            ${totalBacked}
          </span>
          of $100,000 backed
        </li>
        <hr className="w-24 h-px mx-auto my-6 bg-dark-gray lg:w-px lg:h-16 lg:mx-12 lg:bg-gray-200" />        
        <li className="lg:flex lg:flex-col lg:items-start">
          <span className="block mb-2 text-3xl font-bold text-black">
            5,007
          </span>
          total backers
        </li>
        <hr className="w-24 mx-auto my-6 bg-dark-gray lg:w-px lg:h-16 lg:mx-12 lg:bg-gray-200" />  
        <li className="lg:flex lg:flex-col lg:items-start">
          <span className="block mb-2 text-3xl font-bold text-black">56</span>
          days left
        </li>
      </ul>
        <ProgressBar currentValue={totalBacked}/>
    </div>
  );
});

export default Stats;
