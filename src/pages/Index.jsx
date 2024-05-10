import Menu from "./section/Menu";
import Hero from "./section/Hero";
import About from "./section/About";
import HowToBuy from "./section/HowToBuy";
import Gallary from "./section/Gallary";
import Tokenomics from "./section/Tokenomics";
import Roadmap from "./section/Roadmap";
import Footer from "./section/Footer";

const Index = () => {
  return (
    <div className=" top-0 left-0  font-inter">
      <Menu />
      <Hero />
      <About />
      <HowToBuy />
      <Gallary />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};
export default Index;
