import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Bookmark from "./components/sections/Bookmark";
import Stats from "./components/sections/Stats";
import data from "./data/data";

const App = () => {
  const [pledgeData, setPledgeData] = useState(() => {
    const storedData = localStorage.getItem("pledgeData");
    return storedData ? JSON.parse(storedData) : data;
  });

  const [totalBacked, setTotalBacked] = useState(() => {
    const storedTotal = localStorage.getItem("totalBacked");
    return storedTotal ? parseFloat(storedTotal) : 89914;
  });

  const statsRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("pledgeData", JSON.stringify(pledgeData));
    localStorage.setItem("totalBacked", totalBacked);
  }, [pledgeData, totalBacked]);

  const handlePledgeSubmit = (pledgeName, amount) => {
    setPledgeData((prevData) =>
      prevData.map((item) =>
        item.name === pledgeName && item.numberLeft > 0
          ? { ...item, numberLeft: item.numberLeft - 1 }
          : item
      )
    );
    setTotalBacked((prevTotal) => (prevTotal + amount) < 100000 ? prevTotal + amount : 100000);

    if (statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Navbar />
      <div className="absolute top-[40%] flex flex-col gap-6 items-center w-full px-6">
        <Bookmark data={pledgeData} onPledgeSubmit={handlePledgeSubmit} />
        <Stats ref={statsRef} totalBacked={totalBacked} />
        <About data={pledgeData} onPledgeSubmit={handlePledgeSubmit} />
      </div>
    </main>
  );
};

export default App;
