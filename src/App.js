import NavbarComp from "./components/NavbarComp.js";
import FaqComp from "./components/FaqComp.js";
import FooterComp from "./components/FooterComp.js";
import Gallery from "./components/GalleryComp.js";
import HeroComp from "./components/HeroComp.js";
import Services from "./components/ServicesComp.js";

function App() {
  return (
    <div>
      <HeroComp />

      <NavbarComp />
      <Gallery />
      <Services />
      <FaqComp />
      <FooterComp />
    </div>
  );
}

export default App;
