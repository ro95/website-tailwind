import WorkTogether from "./components/WorkWithUs/WorkWithUs";
import HeroesBase from "./components/heroes-interface/HeroesSection";
import Portfolio from "./components/Sections/SectionPortfolio";

function App() {
  return (
    <>
      <HeroesBase />
      <Portfolio
        backgroundColor="bg-black"
        width="w-96"
        height="h-64"
        marginBottom="mb-52"
      />
      <WorkTogether />
    </>
  );
}

export default App;
