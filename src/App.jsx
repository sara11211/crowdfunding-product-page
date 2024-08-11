import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ThanksForSupport from "./components/ThanksForSupport";
import About from "./components/sections/About";
import Bookmark from "./components/sections/Bookmark";
import Stats from "./components/sections/Stats";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="absolute top-[40%] flex flex-col gap-6">
        <Bookmark />
        <Stats />
        <About />
      </div>
      {/* <ThanksForSupport /> */}
    </main>
  );
};

export default App;
