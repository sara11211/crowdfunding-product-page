import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Bookmark from "./components/sections/Bookmark";
import Stats from "./components/sections/Stats";
import data from "./data/data";

const App = () => {
  const [pledgeData, setPledgeData] = useState(data);

  const handlePledgeSubmit = (pledgeName) => {
    setPledgeData((prevData) =>
      prevData.map((item) =>
        item.name === pledgeName && item.numberLeft > 0
          ? { ...item, numberLeft: item.numberLeft - 1 }
          : item
      )
    );
  };
  

  return (
    <main>
      <Navbar />
      <div className="absolute top-[40%] flex flex-col gap-6">
        <Bookmark data={pledgeData} onPledgeSubmit={handlePledgeSubmit}/>
        <Stats />
        <About data={pledgeData} onPledgeSubmit={handlePledgeSubmit}/>
      </div>
    </main>
  );
};

export default App;
