import gsap from "gsap";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
    </div>
  );
};

export default App;
