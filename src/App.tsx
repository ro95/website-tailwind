import WorkTogether from "./components/WorkWithUs/WorkWithUs";
import HeroesBase from "./components/heroes-interface/HeroesSection";
import cardWhite from "./components/Sections/CardSection";

function App() {
  return (
    <>
      <HeroesBase />
      <cardWhite
backgroundColor="backdrop-grayscale-0 bg-white/30 ";
width = "w-2/5";
height = "h-64";
marginBottom = "mb-52";
text = "Portfolio";
margin = "m-8"; />
      
      <WorkTogether />    </>
  );
}

export default App;
